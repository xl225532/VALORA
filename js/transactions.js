// ==========================================
// VALORA Transactions System
// GLOBAL LANGUAGE SUPPORT
// ==========================================

"use strict";


// ==========================================
// TRANSLATIONS
// ==========================================

const transactionTranslations = {

    ar: {

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

    },


    en: {

        deposit_transaction:
            "Deposit",

        withdraw_transaction:
            "Withdraw",

        profit_transaction:
            "Profit",

        no_transactions:
            "No transactions currently",

        today:
            "Today"

    }

};


// ==========================================
// GET CURRENT LANGUAGE
// ==========================================

function getTransactionLanguage() {

    try {

        if (
            window.VALORA_LANG &&
            typeof window.VALORA_LANG.getLanguage === "function"
        ) {

            const lang =
                window.VALORA_LANG.getLanguage();

            if (
                lang === "en" ||
                lang === "ar"
            ) {

                return lang;

            }

        }

    } catch (error) {

        console.warn(
            "VALORA: Language error.",
            error
        );

    }


    try {

        const savedLanguage =
            localStorage.getItem("VALORA_LANG");

        if (
            savedLanguage === "en" ||
            savedLanguage === "ar"
        ) {

            return savedLanguage;

        }

    } catch (error) {

        console.warn(
            "VALORA: Language storage error.",
            error
        );

    }


    return "ar";

}


// ==========================================
// GET TRANSLATION
// ==========================================

function getTransactionTranslation(key) {

    const lang =
        getTransactionLanguage();


    // --------------------------------------
    // أولاً: استخدام اللغة العالمية
    // --------------------------------------

    try {

        if (
            window.VALORA_LANG &&
            window.VALORA_LANG.translations &&
            window.VALORA_LANG.translations[lang] &&
            Object.prototype.hasOwnProperty.call(
                window.VALORA_LANG.translations[lang],
                key
            )
        ) {

            return
                window.VALORA_LANG.translations[lang][key];

        }

    } catch (error) {

        console.warn(
            "VALORA: Global translation error.",
            error
        );

    }


    // --------------------------------------
    // ثانياً: ترجمة صفحة العمليات
    // --------------------------------------

    if (
        transactionTranslations[lang] &&
        Object.prototype.hasOwnProperty.call(
            transactionTranslations[lang],
            key
        )
    ) {

        return transactionTranslations[lang][key];

    }


    // --------------------------------------
    // آخر حل
    // --------------------------------------

    return key;

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
// LOAD TRANSACTIONS
// ==========================================

function loadTransactions() {

    const box =
        document.getElementById(
            "transactionsList"
        );


    if (!box) {

        return;

    }


    // ======================================
    // READ TRANSACTIONS
    // ======================================

    let transactions = [];


    try {

        transactions =
            JSON.parse(
                localStorage.getItem(
                    "VALORA_TRANSACTIONS"
                )
            ) || [];

    } catch (error) {

        console.warn(
            "VALORA: Error reading transactions.",
            error
        );

        transactions = [];

    }


    // ======================================
    // EMPTY TRANSACTIONS
    // ======================================

    if (
        !Array.isArray(transactions) ||
        transactions.length === 0
    ) {

        const emptyText =
            getTransactionTranslation(
                "no_transactions"
            );


        box.innerHTML = `

            <div class="empty-history">

                <span
                    data-lang="no_transactions"
                >
                    ${escapeTransactionText(emptyText)}
                </span>

            </div>

        `;


        if (
            typeof applyLanguage === "function"
        ) {

            applyLanguage();

        }


        return;

    }


    // ======================================
    // CLEAR LIST
    // ======================================

    box.innerHTML = "";


    // ======================================
    // SORT
    // NEWEST FIRST
    // ======================================

    const sortedTransactions =
        [...transactions].reverse();


    // ======================================
    // DISPLAY TRANSACTIONS
    // ======================================

    sortedTransactions.forEach(
        function (item) {


            if (!item) {

                return;

            }


            // ----------------------------------
            // TRANSACTION TYPE
            // ----------------------------------

            let typeClass =
                "profit";

            let typeKey =
                "profit_transaction";


            if (
                item.type === "deposit"
            ) {

                typeClass =
                    "deposit";

                typeKey =
                    "deposit_transaction";

            }


            else if (
                item.type === "withdraw"
            ) {

                typeClass =
                    "withdraw";

                typeKey =
                    "withdraw_transaction";

            }


            // ----------------------------------
            // TRANSLATED TYPE
            // ----------------------------------

            const typeName =
                getTransactionTranslation(
                    typeKey
                );


            // ----------------------------------
            // AMOUNT
            // ----------------------------------

            const amount =
                item.amount !== undefined &&
                item.amount !== null

                    ? item.amount

                    : "0.00";


            // ----------------------------------
            // DATE
            // ----------------------------------

            const date =
                item.date

                    ? item.date

                    : getTransactionTranslation(
                        "today"
                    );


            // ----------------------------------
            // CREATE TRANSACTION
            // ----------------------------------

            const transactionHTML = `

                <div class="transaction-item">


                    <div class="transaction-info">


                        <div
                            class="transaction-title"
                            data-lang="${typeKey}"
                        >

                            ${escapeTransactionText(
                                typeName
                            )}

                        </div>


                        <div class="transaction-date">

                            ${escapeTransactionText(
                                date
                            )}

                        </div>


                    </div>


                    <div
                        class="transaction-value ${typeClass}"
                    >

                        ${escapeTransactionText(
                            amount
                        )}

                        USDT

                    </div>


                </div>

            `;


            box.insertAdjacentHTML(
                "beforeend",
                transactionHTML
            );

        }
    );


    // ======================================
    // APPLY GLOBAL LANGUAGE
    // ======================================

    if (
        typeof applyLanguage === "function"
    ) {

        applyLanguage();

    }

}


// ==========================================
// LANGUAGE CHANGE
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
// INITIALIZE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTransactions();

    }
);


// ==========================================
// GLOBAL
// ==========================================

window.loadTransactions =
    loadTransactions;

window.getTransactionTranslation =
    getTransactionTranslation;
