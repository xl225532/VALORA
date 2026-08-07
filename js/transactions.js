// ==========================================
// VALORA Transactions System
// ==========================================


// ==========================================
// LOAD TRANSACTIONS
// ==========================================

function loadTransactions() {

    const box =
        document.getElementById("transactionsList");


    if (!box) {
        return;
    }


    // ======================================
    // قراءة سجل العمليات
    // ======================================

    let transactions = [];

    try {

        transactions =
            JSON.parse(
                localStorage.getItem("VALORA_TRANSACTIONS")
            ) || [];

    } catch (error) {

        console.warn(
            "VALORA: Error reading transactions.",
            error
        );

        transactions = [];

    }


    // ======================================
    // لا توجد عمليات
    // ======================================

    if (
        !Array.isArray(transactions) ||
        transactions.length === 0
    ) {

        box.innerHTML = `
        
            <div class="empty-history">

                <span data-lang="no_transactions">
                    لا توجد عمليات حالياً
                </span>

            </div>

        `;


        // إعادة تطبيق نظام اللغة
        if (typeof applyLanguage === "function") {

            applyLanguage();

        }


        return;

    }


    // ======================================
    // تنظيف القائمة
    // ======================================

    box.innerHTML = "";


    // ======================================
    // ترتيب العمليات
    // الأحدث أولاً
    // ======================================

    const sortedTransactions =
        [...transactions].reverse();


    // ======================================
    // عرض العمليات
    // ======================================

    sortedTransactions.forEach(function (item) {


        if (!item) {
            return;
        }


        // ----------------------------------
        // نوع العملية
        // ----------------------------------

        let typeClass = "profit";

        let typeKey = "profit_transaction";


        if (item.type === "deposit") {

            typeClass = "deposit";

            typeKey = "deposit_transaction";

        }


        else if (item.type === "withdraw") {

            typeClass = "withdraw";

            typeKey = "withdraw_transaction";

        }


        // ----------------------------------
        // ترجمة اسم العملية
        // ----------------------------------

        let typeName =
            getTransactionTranslation(typeKey);


        // ----------------------------------
        // المبلغ
        // ----------------------------------

        let amount =
            item.amount !== undefined &&
            item.amount !== null
                ? item.amount
                : "0.00";


        // ----------------------------------
        // التاريخ
        // ----------------------------------

        let date =
            item.date
                ? item.date
                : getTransactionTranslation("today");


        // ----------------------------------
        // إضافة العملية
        // ----------------------------------

        box.innerHTML += `

            <div class="transaction-item">


                <div class="transaction-info">


                    <div
                        class="transaction-title"
                        data-lang="${typeKey}"
                    >
                        ${escapeTransactionText(typeName)}
                    </div>


                    <div class="transaction-date">

                        ${escapeTransactionText(date)}

                    </div>


                </div>


                <div
                    class="transaction-value ${typeClass}"
                >

                    ${escapeTransactionText(amount)}
                    USDT

                </div>


            </div>

        `;

    });


    // ======================================
    // تطبيق اللغة بعد بناء العناصر
    // ======================================

    if (typeof applyLanguage === "function") {

        applyLanguage();

    }

}



// ==========================================
// GET TRANSACTION TRANSLATION
// ==========================================

function getTransactionTranslation(key) {


    // --------------------------------------
    // محاولة استخدام نظام VALORA
    // --------------------------------------

    try {

        if (
            window.VALORA_LANG &&
            typeof window.VALORA_LANG.getLanguage === "function"
        ) {

            const lang =
                window.VALORA_LANG.getLanguage();


            const translations =
                window.VALORA_LANG.translations;


            if (
                translations &&
                translations[lang] &&
                translations[lang][key]
            ) {

                return translations[lang][key];

            }

        }

    } catch (error) {

        console.warn(
            "VALORA: Translation error.",
            error
        );

    }


    // --------------------------------------
    // Fallback
    // --------------------------------------

    const fallback = {

        deposit_transaction:
            "إيداع",

        withdraw_transaction:
            "سحب",

        profit_transaction:
            "أرباح",

        no_transactions:
            "لا توجد عمليات حالياً",

        today:
            "اليوم"

    };


    return fallback[key] || key;

}



// ==========================================
// ESCAPE TEXT
// ==========================================

function escapeTransactionText(value) {


    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}



// ==========================================
// مراقبة تغيير اللغة
// ==========================================

window.addEventListener(
    "storage",
    function (event) {

        if (
            event.key === "VALORA_LANG"
        ) {

            loadTransactions();

        }

    }
);



// ==========================================
// تشغيل الصفحة
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTransactions();

    }
);
