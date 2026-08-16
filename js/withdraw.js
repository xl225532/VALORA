// ==========================================
// VALORA WITHDRAW SYSTEM
// ==========================================

"use strict";


// ==========================================
// VARIABLES
// ==========================================

let withdrawCoin = "USDT";

let withdrawNetwork = "TRC20";

let withdrawSource = "main";



// ==========================================
// COIN NETWORKS
// ==========================================

const withdrawNetworks = {

    USDT: [
        "TRC20",
        "ERC20"
    ],

    BTC: [
        "Bitcoin"
    ],

    ETH: [
        "ERC20"
    ],

    TRX: [
        "TRC20"
    ]

};



// ==========================================
// TRANSLATIONS
// ==========================================

const withdrawTranslations = {

    ar: {

        withdraw_title:
            "سحب العملات",

        withdraw_subtitle:
            "اسحب أصولك بأمان",

        main_balance:
            "الرصيد الأساسي",

        profit_balance:
            "رصيد الأرباح",

        available_balance:
            "الرصيد المتاح",

        profit_details:
            "تفاصيل الأرباح",

        trading_profit:
            "أرباح التداول",

        bonus_profit:
            "أرباح المكافآت",

        referral_profit:
            "أرباح الدعوة",

        team_profit:
            "أرباح الفريق",

        withdraw_source:
            "مصدر السحب",

        withdraw_network:
            "شبكة السحب",

        withdraw_address:
            "عنوان السحب",

        withdraw_amount:
            "مبلغ السحب",

        security_code:
            "رمز أمان السحب",

        withdraw_fee:
            "رسوم السحب",

        receive_amount:
            "المبلغ المستلم",

        withdraw_before_doubling:
            "السحب قبل التضعيف: 20%",

        withdraw_after_doubling:
            "السحب بعد التضعيف: 5%",

        confirm_withdraw:
            "تأكيد السحب",

        tether:
            "Tether",

        bitcoin:
            "Bitcoin",

        ethereum:
            "Ethereum",

        tron:
            "TRON",

        withdraw_address_placeholder:
            "أدخل عنوان المحفظة",

        withdraw_amount_placeholder:
            "أدخل مبلغ السحب",

        security_code_placeholder:
            "أدخل رمز أمان السحب",

        withdraw_security_error:
            "رمز أمان السحب غير صحيح.",

        withdraw_amount_error:
            "أكمل جميع البيانات المطلوبة.",

        withdraw_balance_error:
            "الرصيد المتاح غير كافٍ.",

        withdraw_amount_limit:
            "مبلغ السحب أكبر من الرصيد المتاح.",

        withdraw_address_error:
            "يرجى إدخال عنوان السحب.",

        withdraw_success:
            "تم إرسال طلب السحب بنجاح.",

        withdraw_invalid_amount:
            "يرجى إدخال مبلغ سحب صحيح.",

        withdraw_source_error:
            "يرجى اختيار مصدر السحب."

    },


    en: {

        withdraw_title:
            "Withdraw",

        withdraw_subtitle:
            "Withdraw your assets securely",

        main_balance:
            "Main Balance",

        profit_balance:
            "Profit Balance",

        available_balance:
            "Available Balance",

        profit_details:
            "Profit Details",

        trading_profit:
            "Trading Profit",

        bonus_profit:
            "Bonus Profit",

        referral_profit:
            "Referral Profit",

        team_profit:
            "Team Profit",

        withdraw_source:
            "Withdrawal Source",

        withdraw_network:
            "Withdrawal Network",

        withdraw_address:
            "Withdrawal Address",

        withdraw_amount:
            "Withdrawal Amount",

        security_code:
            "Withdrawal Security Code",

        withdraw_fee:
            "Withdrawal Fee",

        receive_amount:
            "Amount to Receive",

        withdraw_before_doubling:
            "Withdrawal before doubling: 20%",

        withdraw_after_doubling:
            "Withdrawal after doubling: 5%",

        confirm_withdraw:
            "Confirm Withdrawal",

        tether:
            "Tether",

        bitcoin:
            "Bitcoin",

        ethereum:
            "Ethereum",

        tron:
            "TRON",

        withdraw_address_placeholder:
            "Enter wallet address",

        withdraw_amount_placeholder:
            "Enter withdrawal amount",

        security_code_placeholder:
            "Enter withdrawal security code",

        withdraw_security_error:
            "Invalid withdrawal security code.",

        withdraw_amount_error:
            "Please complete all required fields.",

        withdraw_balance_error:
            "Insufficient available balance.",

        withdraw_amount_limit:
            "The withdrawal amount exceeds the available balance.",

        withdraw_address_error:
            "Please enter a withdrawal address.",

        withdraw_success:
            "Withdrawal request submitted successfully.",

        withdraw_invalid_amount:
            "Please enter a valid withdrawal amount.",

        withdraw_source_error:
            "Please select a withdrawal source."

    }

};



// ==========================================
// GET CURRENT LANGUAGE
// ==========================================

function getWithdrawLanguage() {

    const lang =
        localStorage.getItem(
            "VALORA_LANG"
        );

    return lang === "en"
        ? "en"
        : "ar";

}



// ==========================================
// TRANSLATE
// ==========================================

function withdrawTranslate(key) {

    const lang =
        getWithdrawLanguage();

    const translations =
        withdrawTranslations[lang];

    if (
        translations &&
        Object.prototype.hasOwnProperty.call(
            translations,
            key
        )
    ) {

        return translations[key];

    }

    return key;

}



// ==========================================
// APPLY WITHDRAW LANGUAGE
// ==========================================

function applyWithdrawLanguage() {

    const lang =
        getWithdrawLanguage();


    const html =
        document.documentElement;


    if (lang === "en") {

        html.lang = "en";

        html.dir = "ltr";

        document.title =
            "VALORA | Withdraw";

    }

    else {

        html.lang = "ar";

        html.dir = "rtl";

        document.title =
            "VALORA | سحب العملات";

    }



    // ======================================
    // TEXT ELEMENTS
    // ======================================

    document
        .querySelectorAll("[data-lang]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-lang"
                );


            const text =
                withdrawTranslate(key);


            if (text) {

                element.textContent =
                    text;

            }

        });



    // ======================================
    // PLACEHOLDERS
    // ======================================

    document
        .querySelectorAll(
            "[data-lang-placeholder]"
        )
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-lang-placeholder"
                );


            const text =
                withdrawTranslate(key);


            if (text) {

                element.placeholder =
                    text;

            }

        });



    updateWithdrawButtonLanguage();

}



// ==========================================
// UPDATE BUTTON LANGUAGE
// ==========================================

function updateWithdrawButtonLanguage() {

    const button =
        document.getElementById(
            "withdrawButton"
        );


    if (!button) {

        return;

    }


    if (button.disabled) {

        return;

    }


    const span =
        button.querySelector(
            "[data-lang]"
        );


    if (span) {

        span.textContent =
            withdrawTranslate(
                "confirm_withdraw"
            );

    }

}



// ==========================================
// FORMAT AMOUNT
// ==========================================

function formatWithdrawAmount(value) {

    const number =
        Number(value) || 0;


    return number.toLocaleString(
        "en-US",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }
    );

}



// ==========================================
// GET MAIN BALANCE
// ==========================================

function getMainBalance() {

    return Number(

        localStorage.getItem(
            "VALORA_MAIN_BALANCE"
        )

    ) || 0;

}



// ==========================================
// GET TRADING PROFIT
// ==========================================

function getTradingProfit() {

    return Number(

        localStorage.getItem(
            "VALORA_TRADING_PROFIT"
        )

    ) || 0;

}



// ==========================================
// GET BONUS PROFIT
// ==========================================

function getBonusProfit() {

    return Number(

        localStorage.getItem(
            "VALORA_BONUS_PROFIT"
        )

    ) || 0;

}



// ==========================================
// GET REFERRAL PROFIT
// ==========================================

function getReferralProfit() {

    return Number(

        localStorage.getItem(
            "VALORA_REFERRAL_PROFIT"
        )

    ) || 0;

}



// ==========================================
// GET TEAM PROFIT
// ==========================================

function getTeamProfit() {

    return Number(

        localStorage.getItem(
            "VALORA_TEAM_PROFIT"
        )

    ) || 0;

}



// ==========================================
// GET TOTAL PROFIT
// ==========================================

function getProfitBalance() {

    return (

        getTradingProfit() +

        getBonusProfit() +

        getReferralProfit() +

        getTeamProfit()

    );

}



// ==========================================
// GET SELECTED BALANCE
// ==========================================

function getSelectedWithdrawBalance() {

    if (
        withdrawSource === "profit"
    ) {

        return getProfitBalance();

    }


    return getMainBalance();

}



// ==========================================
// UPDATE BALANCE DISPLAY
// ==========================================

function updateBalanceDisplay() {

    const mainBalanceBox =
        document.getElementById(
            "mainBalance"
        );


    const profitBalanceBox =
        document.getElementById(
            "profitBalance"
        );


    const tradingProfitBox =
        document.getElementById(
            "tradingProfit"
        );


    const bonusProfitBox =
        document.getElementById(
            "bonusProfit"
        );


    const referralProfitBox =
        document.getElementById(
            "referralProfit"
        );


    const teamProfitBox =
        document.getElementById(
            "teamProfit"
        );


    const availableBalanceBox =
        document.getElementById(
            "availableBalance"
        );



    const mainBalance =
        getMainBalance();


    const tradingProfit =
        getTradingProfit();


    const bonusProfit =
        getBonusProfit();


    const referralProfit =
        getReferralProfit();


    const teamProfit =
        getTeamProfit();


    const profitBalance =
        getProfitBalance();


    const availableBalance =
        getSelectedWithdrawBalance();



    if (mainBalanceBox) {

        mainBalanceBox.textContent =
            formatWithdrawAmount(
                mainBalance
            )
            + " "
            + withdrawCoin;

    }


    if (profitBalanceBox) {

        profitBalanceBox.textContent =
            formatWithdrawAmount(
                profitBalance
            )
            + " "
            + withdrawCoin;

    }


    if (tradingProfitBox) {

        tradingProfitBox.textContent =
            formatWithdrawAmount(
                tradingProfit
            )
            + " "
            + withdrawCoin;

    }


    if (bonusProfitBox) {

        bonusProfitBox.textContent =
            formatWithdrawAmount(
                bonusProfit
            )
            + " "
            + withdrawCoin;

    }


    if (referralProfitBox) {

        referralProfitBox.textContent =
            formatWithdrawAmount(
                referralProfit
            )
            + " "
            + withdrawCoin;

    }


    if (teamProfitBox) {

        teamProfitBox.textContent =
            formatWithdrawAmount(
                teamProfit
            )
            + " "
            + withdrawCoin;

    }


    if (availableBalanceBox) {

        availableBalanceBox.textContent =
            formatWithdrawAmount(
                availableBalance
            )
            + " "
            + withdrawCoin;

    }


    calculateWithdraw();

}



// ==========================================
// SELECT WITHDRAW SOURCE
// ==========================================

function selectWithdrawSource(
    source,
    button
) {

    if (
        source !== "main" &&
        source !== "profit"
    ) {

        return;

    }


    withdrawSource =
        source;



    document
        .querySelectorAll(
            ".withdraw-source-btn"
        )
        .forEach(function (btn) {

            btn.classList.remove(
                "active"
            );

        });



    if (button) {

        button.classList.add(
            "active"
        );

    }



    updateBalanceDisplay();



    // تنظيف الرسالة القديمة

    const message =
        document.getElementById(
            "withdrawMessage"
        );


    if (message) {

        message.style.display =
            "none";

        message.textContent =
            "";

    }

}



// ==========================================
// SELECT COIN
// ==========================================

function selectWithdrawCoin(
    coin,
    button
) {

    if (
        !withdrawNetworks[coin]
    ) {

        return;

    }


    withdrawCoin =
        coin;



    document
        .querySelectorAll(
            ".withdraw-coin"
        )
        .forEach(function (btn) {

            btn.classList.remove(
                "active"
            );

        });



    if (button) {

        button.classList.add(
            "active"
        );

    }



    loadWithdrawNetworks();

    updateBalanceDisplay();

}



// ==========================================
// LOAD NETWORKS
// ==========================================

function loadWithdrawNetworks() {

    const box =
        document.getElementById(
            "withdrawNetwork"
        );


    if (!box) {

        return;

    }


    box.innerHTML = "";



    const networks =
        withdrawNetworks[
            withdrawCoin
        ] || [];



    networks.forEach(
        function (
            network,
            index
        ) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "network";


            button.textContent =
                network;



            if (index === 0) {

                button.classList.add(
                    "active"
                );


                withdrawNetwork =
                    network;

            }



            button.addEventListener(
                "click",
                function () {

                    selectWithdrawNetwork(
                        button,
                        network
                    );

                }
            );



            box.appendChild(
                button
            );

        }
    );

}



// ==========================================
// SELECT NETWORK
// ==========================================

function selectWithdrawNetwork(
    button,
    network
) {

    withdrawNetwork =
        network;



    document
        .querySelectorAll(
            "#withdrawNetwork .network"
        )
        .forEach(function (btn) {

            btn.classList.remove(
                "active"
            );

        });



    if (button) {

        button.classList.add(
            "active"
        );

    }

}



// ==========================================
// WITHDRAW FEE
// ==========================================

function getWithdrawFee() {

    /*
    ==========================================
    FEE STATUS

    قبل التضعيف = 20%

    بعد التضعيف = 5%

    النظام الحالي يعمل على
    مرحلة ما بعد التضعيف.
    ==========================================
    */

    const doubled =
        true;


    if (doubled) {

        return 5;

    }


    return 20;

}



// ==========================================
// CALCULATE WITHDRAW
// ==========================================

function calculateWithdraw() {

    const amountInput =
        document.getElementById(
            "withdrawAmount"
        );


    const amount =
        Number(
            amountInput?.value
        ) || 0;


    const feePercent =
        getWithdrawFee();


    const fee =
        amount *
        (feePercent / 100);


    const receive =
        Math.max(
            0,
            amount - fee
        );



    const feeBox =
        document.getElementById(
            "withdrawFee"
        );


    const receiveBox =
        document.getElementById(
            "receiveAmount"
        );



    if (feeBox) {

        feeBox.textContent =
            formatWithdrawAmount(
                fee
            )
            + " "
            + withdrawCoin;

    }



    if (receiveBox) {

        receiveBox.textContent =
            formatWithdrawAmount(
                receive
            )
            + " "
            + withdrawCoin;

    }

}



// ==========================================
// GET SECURITY CODE
// ==========================================

function getSecurityCode() {

    /*
    نفس رمز الأمان يستخدم
    للسحب من الرصيد الأساسي
    ورصيد الأرباح.

    عند ربط السيرفر الحقيقي
    يجب استبدال هذا التحقق
    بطلب API آمن.
    */

    return localStorage.getItem(
        "VALORA_SECURITY_CODE"
    ) || "";

}



// ==========================================
// VALIDATE SECURITY
// ==========================================

function validateSecurityCode() {

    const securityElement =
        document.getElementById(
            "withdrawSecurityCode"
        );


    if (!securityElement) {

        return false;

    }


    const enteredSecurity =
        securityElement.value.trim();


    const savedSecurity =
        getSecurityCode();



    if (
        !enteredSecurity ||
        !savedSecurity ||
        enteredSecurity !== savedSecurity
    ) {

        showWithdrawMessage(
            "withdraw_security_error",
            false
        );


        securityElement.focus();


        return false;

    }


    return true;

}



// ==========================================
// SUBMIT WITHDRAW
// ==========================================

function submitWithdraw() {

    const amountElement =
        document.getElementById(
            "withdrawAmount"
        );


    const addressElement =
        document.getElementById(
            "withdrawAddress"
        );


    const amount =
        Number(
            amountElement?.value
        ) || 0;


    const address =
        addressElement
            ? addressElement.value.trim()
            : "";



    // ======================================
    // SECURITY
    // ======================================

    if (
        !validateSecurityCode()
    ) {

        return;

    }



    // ======================================
    // AMOUNT
    // ======================================

    if (
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        showWithdrawMessage(
            "withdraw_invalid_amount",
            false
        );


        if (amountElement) {

            amountElement.focus();

        }


        return;

    }



    // ======================================
    // ADDRESS
    // ======================================

    if (!address) {

        showWithdrawMessage(
            "withdraw_address_error",
            false
        );


        if (addressElement) {

            addressElement.focus();

        }


        return;

    }



    // ======================================
    // AVAILABLE BALANCE
    // ======================================

    const availableBalance =
        getSelectedWithdrawBalance();



    if (
        amount >
        availableBalance
    ) {

        showWithdrawMessage(
            "withdraw_amount_limit",
            false
        );


        if (amountElement) {

            amountElement.focus();

        }


        return;

    }



    // ======================================
    // FEE
    // ======================================

    const feePercent =
        getWithdrawFee();


    const fee =
        amount *
        (feePercent / 100);


    const receive =
        amount - fee;



    // ======================================
    // UPDATE BALANCE
    // ======================================

    if (
        withdrawSource === "main"
    ) {

        const newBalance =
            getMainBalance() -
            amount;


        localStorage.setItem(
            "VALORA_MAIN_BALANCE",
            String(
                Math.max(
                    0,
                    newBalance
                )
            )
        );

    }

    else {

        deductProfitBalance(
            amount
        );

    }



    // ======================================
    // SAVE HISTORY
    // ======================================

    saveWithdrawHistory(
        amount,
        fee,
        receive,
        address
    );



    // ======================================
    // SUCCESS
    // ======================================

    showWithdrawMessage(
        "withdraw_success",
        true
    );



    // ======================================
    // RESET
    // ======================================

    if (amountElement) {

        amountElement.value =
            "";

    }


    const securityElement =
        document.getElementById(
            "withdrawSecurityCode"
        );


    if (securityElement) {

        securityElement.value =
            "";

    }



    updateBalanceDisplay();

}



// ==========================================
// DEDUCT PROFIT BALANCE
// ==========================================

function deductProfitBalance(
    amount
) {

    let remaining =
        Number(amount) || 0;



    const profitKeys = [

        "VALORA_TRADING_PROFIT",

        "VALORA_BONUS_PROFIT",

        "VALORA_REFERRAL_PROFIT",

        "VALORA_TEAM_PROFIT"

    ];



    profitKeys.forEach(
        function (key) {

            if (
                remaining <= 0
            ) {

                return;

            }



            const current =
                Number(
                    localStorage.getItem(
                        key
                    )
                ) || 0;



            const deduction =
                Math.min(
                    current,
                    remaining
                );



            const newValue =
                current -
                deduction;



            localStorage.setItem(
                key,
                String(
                    Math.max(
                        0,
                        newValue
                    )
                )
            );



            remaining -=
                deduction;

        }
    );

}



// ==========================================
// SAVE HISTORY
// ==========================================

function saveWithdrawHistory(

    amount,

    fee,

    receive,

    address

) {

    let history = [];



    try {

        history =
            JSON.parse(
                localStorage.getItem(
                    "VALORA_WITHDRAW_HISTORY"
                )
            ) || [];

    }

    catch (error) {

        history = [];

    }



    history.push({

        source:
            withdrawSource,

        sourceLabel:
            withdrawSource === "profit"
                ? "Profit Balance"
                : "Main Balance",

        coin:
            withdrawCoin,

        network:
            withdrawNetwork,

        amount:
            amount,

        fee:
            fee,

        feePercent:
            getWithdrawFee(),

        receive:
            receive,

        address:
            address,

        date:
            new Date().toISOString(),

        status:
            "pending"

    });



    localStorage.setItem(

        "VALORA_WITHDRAW_HISTORY",

        JSON.stringify(
            history
        )

    );

}



// ==========================================
// MESSAGE
// ==========================================

function showWithdrawMessage(
    key,
    success
) {

    const box =
        document.getElementById(
            "withdrawMessage"
        );


    if (!box) {

        return;

    }



    const message =
        withdrawTranslate(
            key
        );



    box.style.display =
        "block";


    box.textContent =
        message;


    box.className =
        success
            ? "withdraw-message success"
            : "withdraw-message reject";



    box.scrollIntoView({

        behavior:
            "smooth",

        block:
            "nearest"

    });

}



// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener(

    "DOMContentLoaded",

    function () {

        /*
        --------------------------------------
        تطبيق اللغة
        --------------------------------------
        */

        applyWithdrawLanguage();



        /*
        --------------------------------------
        تحميل الشبكات
        --------------------------------------
        */

        loadWithdrawNetworks();



        /*
        --------------------------------------
        تحديث الأرصدة
        --------------------------------------
        */

        updateBalanceDisplay();



        /*
        --------------------------------------
        إدخال المبلغ
        --------------------------------------
        */

        const amount =
            document.getElementById(
                "withdrawAmount"
            );


        if (amount) {

            amount.addEventListener(
                "input",
                calculateWithdraw
            );

        }



        /*
        --------------------------------------
        مراقبة تغيير اللغة
        --------------------------------------

        إذا كان language.js يغير
        VALORA_LANG عند الضغط على
        زر اللغة، سيتم تحديث الصفحة
        تلقائيًا.
        --------------------------------------
        */

        window.addEventListener(
            "storage",
            function (event) {

                if (
                    event.key ===
                    "VALORA_LANG"
                ) {

                    applyWithdrawLanguage();

                    updateBalanceDisplay();

                }

            }
        );



        /*
        --------------------------------------
        فحص اللغة بشكل دوري
        --------------------------------------

        مفيد إذا كان language.js
        يغير localStorage في نفس الصفحة.
        --------------------------------------
        */

        let lastLanguage =
            getWithdrawLanguage();


        setInterval(
            function () {

                const currentLanguage =
                    getWithdrawLanguage();


                if (
                    currentLanguage !==
                    lastLanguage
                ) {

                    lastLanguage =
                        currentLanguage;


                    applyWithdrawLanguage();

                    updateBalanceDisplay();

                }

            },
            300
        );

    }

);
