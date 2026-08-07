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


    // --------------------------------------
    // قراءة العمليات من LocalStorage
    // --------------------------------------

    let transactions = [];

    try {

        transactions =
            JSON.parse(
                localStorage.getItem("VALORA_TRANSACTIONS")
            ) || [];

    } catch (error) {

        console.warn(
            "VALORA: Unable to read transactions.",
            error
        );

        transactions = [];

    }


    // --------------------------------------
    // لا توجد عمليات
    // --------------------------------------

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


        applyTransactionsLanguage();

        return;

    }


    // --------------------------------------
    // تنظيف القائمة
    // --------------------------------------

    box.innerHTML = "";


    // --------------------------------------
    // نسخ المصفوفة ثم عكسها
    // حتى لا نغيّر البيانات الأصلية
    // --------------------------------------

    const sortedTransactions =
        [...transactions].reverse();


    // --------------------------------------
    // عرض العمليات
    // --------------------------------------

    sortedTransactions.forEach(function (item) {


        if (!item) {
            return;
        }


        let typeClass = "profit";

        let typeKey = "profit_transaction";


        // ----------------------------------
        // إيداع
        // ----------------------------------

        if (item.type === "deposit") {

            typeClass = "deposit";

            typeKey = "deposit_transaction";

        }


        // ----------------------------------
        // سحب
        // ----------------------------------

        else if (item.type === "withdraw") {

            typeClass = "withdraw";

            typeKey = "withdraw_transaction";

        }


        // ----------------------------------
        // أرباح
        // ----------------------------------

        else {

            typeClass = "profit";

            typeKey = "profit_transaction";

        }


        // ----------------------------------
        // المبلغ
        // ----------------------------------

        let amount =
            item.amount ?? 0;


        // ----------------------------------
        // التاريخ
        // ----------------------------------

        let date =
            item.date || "اليوم";


        // ----------------------------------
        // إنشاء العملية
        // ----------------------------------

        box.innerHTML += `

            <div class="transaction-item">


                <div class="transaction-info">


                    <div
                        class="transaction-title"
                        data-lang="${typeKey}"
                    >

                        ${getTransactionText(typeKey)}

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


    // --------------------------------------
    // تطبيق اللغة
    // --------------------------------------

    applyTransactionsLanguage();

}



// ==========================================
// GET TRANSLATION
// ==========================================

function getTransactionText(key) {


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
    // Fallback عربي
    // --------------------------------------

    const fallback = {

        deposit_transaction:
            "إيداع",

        withdraw_transaction:
            "سحب",

        profit_transaction:
            "أرباح",

        no_transactions:
            "لا توجد عمليات حالياً"

    };


    return fallback[key] || key;

}



// ==========================================
// APPLY LANGUAGE
// ==========================================

function applyTransactionsLanguage() {


    if (
        typeof window.applyLanguage === "function"
    ) {

        window.applyLanguage();

    }

}



// ==========================================
// PROTECT TEXT
// ==========================================

function escapeTransactionText(value) {


    if (value === null || value === undefined) {

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
// PAGE LOAD
// ==========================================

document.addEventListener(

    "DOMContentLoaded",

    function () {

        loadTransactions();

    }

);
