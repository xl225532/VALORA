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
// WITHDRAW MESSAGES
// ==========================================

const withdrawMessages = {

    ar: {

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

    let lang =
        localStorage.getItem("VALORA_LANG");


    if (lang === "en") {

        return "en";

    }


    return "ar";

}



// ==========================================
// TRANSLATE WITHDRAW MESSAGE
// ==========================================

function withdrawTranslate(key) {

    const lang =
        getWithdrawLanguage();


    if (
        withdrawMessages[lang] &&
        withdrawMessages[lang][key]
    ) {

        return withdrawMessages[lang][key];

    }


    return key;

}



// ==========================================
// FORMAT BALANCE
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
// GET TOTAL PROFIT BALANCE
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

    if (withdrawSource === "profit") {

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
            formatWithdrawAmount(mainBalance)
            + " "
            + withdrawCoin;

    }


    if (profitBalanceBox) {

        profitBalanceBox.textContent =
            formatWithdrawAmount(profitBalance)
            + " "
            + withdrawCoin;

    }


    if (tradingProfitBox) {

        tradingProfitBox.textContent =
            formatWithdrawAmount(tradingProfit)
            + " "
            + withdrawCoin;

    }


    if (bonusProfitBox) {

        bonusProfitBox.textContent =
            formatWithdrawAmount(bonusProfit)
            + " "
            + withdrawCoin;

    }


    if (referralProfitBox) {

        referralProfitBox.textContent =
            formatWithdrawAmount(referralProfit)
            + " "
            + withdrawCoin;

    }


    if (teamProfitBox) {

        teamProfitBox.textContent =
            formatWithdrawAmount(teamProfit)
            + " "
            + withdrawCoin;

    }


    if (availableBalanceBox) {

        availableBalanceBox.textContent =
            formatWithdrawAmount(availableBalance)
            + " "
            + withdrawCoin;

    }


    calculateWithdraw();

}



// ==========================================
// SELECT WITHDRAW SOURCE
// ==========================================

function selectWithdrawSource(source, button) {

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

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    updateBalanceDisplay();

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

    calculateWithdraw();

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
        withdrawNetworks[withdrawCoin] ||
        [];


    networks.forEach(
        function (network, index) {

            const btn =
                document.createElement(
                    "button"
                );


            btn.type =
                "button";


            btn.className =
                "network";


            btn.innerText =
                network;


            if (index === 0) {

                btn.classList.add(
                    "active"
                );


                withdrawNetwork =
                    network;

            }


            btn.onclick =
                function () {

                    selectWithdrawNetwork(
                        this,
                        network
                    );

                };


            box.appendChild(btn);

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
            ".network"
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
// WITHDRAW FEE SYSTEM
// ==========================================

function getWithdrawFee() {

    /*
    ==========================================
    FEE STATUS
    ==========================================

    قبل التضعيف = 20%

    بعد التضعيف = 5%

    النظام الحالي مضبوط على
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
            formatWithdrawAmount(fee)
            + " "
            + withdrawCoin;

    }


    if (receiveBox) {

        receiveBox.textContent =
            formatWithdrawAmount(receive)
            + " "
            + withdrawCoin;

    }

}



// ==========================================
// GET SECURITY CODE
// ==========================================

function getSecurityCode() {

    /*
    ==========================================
    IMPORTANT

    لا يوجد رمز أمان تجريبي هنا.

    عند الربط الحقيقي مع السيرفر،
    سيتم التحقق من الرمز من الحساب
    عبر API.
    ==========================================
    */

    return localStorage.getItem(
        "VALORA_SECURITY_CODE"
    ) || "";

}



// ==========================================
// VALIDATE SECURITY CODE
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
    // SOURCE
    // ======================================

    if (
        withdrawSource !== "main" &&
        withdrawSource !== "profit"
    ) {

        showWithdrawMessage(
            "withdraw_source_error",
            false
        );

        return;

    }



    // ======================================
    // SECURITY
    // ======================================

    if (!validateSecurityCode()) {

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
    // BALANCE
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
    // UPDATE LOCAL BALANCE
    // ======================================

    if (
        withdrawSource === "main"
    ) {

        const newBalance =
            getMainBalance() -
            amount;


        localStorage.setItem(
            "VALORA_MAIN_BALANCE",
            String(newBalance)
        );

    }


    else {

        /*
        --------------------------------------
        خصم الأرباح من مصادرها بالترتيب:

        1. أرباح التداول
        2. أرباح المكافآت
        3. أرباح الدعوة
        4. أرباح الفريق

        لاحقًا في السيرفر سيتم تنفيذ
        عملية الخصم بطريقة ذرية داخل قاعدة
        البيانات.
        --------------------------------------
        */

        deductProfitBalance(amount);

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
    // RESET FORM
    // ======================================

    if (amountElement) {

        amountElement.value = "";

    }


    const securityElement =
        document.getElementById(
            "withdrawSecurityCode"
        );


    if (securityElement) {

        securityElement.value = "";

    }


    updateBalanceDisplay();

}



// ==========================================
// DEDUCT PROFIT BALANCE
// ==========================================

function deductProfitBalance(amount) {

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

            if (remaining <= 0) {

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
                String(newValue)
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

    let history;


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
                ? "رصيد الأرباح"
                : "الرصيد الأساسي",

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

        JSON.stringify(history)

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
        withdrawTranslate(key);


    box.style.display =
        "block";


    box.textContent =
        message;


    box.className =
        success
            ? "withdraw-message success"
            : "withdraw-message reject";

}



// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener(

    "DOMContentLoaded",

    function () {

        loadWithdrawNetworks();

        updateBalanceDisplay();

        calculateWithdraw();


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

    }

);
