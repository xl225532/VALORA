// ==========================================
// VALORA
// TRADE PAGE
// ==========================================
//
// Dynamic coin details
// Supports:
// BTC
// ETH
// USDT
// TRX
// XRP
// SOL
//
// URL:
// trade.html?coin=BTC
//
// ==========================================

(function(){

"use strict";


// ==========================================
// COINS
// ==========================================

const COINS = {

    BTC: {
        name: "Bitcoin",
        symbol: "BTC",
        price: 67500,
        change: 2.35
    },

    ETH: {
        name: "Ethereum",
        symbol: "ETH",
        price: 3500,
        change: 1.82
    },

    USDT: {
        name: "Tether",
        symbol: "USDT",
        price: 1,
        change: 0.01
    },

    TRX: {
        name: "TRON",
        symbol: "TRX",
        price: 0.27,
        change: 1.14
    },

    XRP: {
        name: "XRP",
        symbol: "XRP",
        price: 0.58,
        change: 1.06
    },

    SOL: {
        name: "Solana",
        symbol: "SOL",
        price: 180,
        change: 2.11
    }

};


// ==========================================
// VARIABLES
// ==========================================

let selectedCoin = "BTC";

let tradeType = "buy";


// ==========================================
// GET COIN FROM URL
// ==========================================

function getCoinFromUrl(){

    const params =
        new URLSearchParams(
            window.location.search
        );


    const coin =
        (
            params.get("coin") ||
            "BTC"
        ).toUpperCase();


    if(
        Object.prototype.hasOwnProperty.call(
            COINS,
            coin
        )
    ){

        return coin;

    }


    return "BTC";

}


// ==========================================
// FORMAT PRICE
// ==========================================

function formatPrice(value){

    if(value >= 1000){

        return value.toLocaleString(
            undefined,
            {
                maximumFractionDigits: 2
            }
        ) + " USDT";

    }


    if(value >= 1){

        return value.toLocaleString(
            undefined,
            {
                maximumFractionDigits: 4
            }
        ) + " USDT";

    }


    return value.toLocaleString(
        undefined,
        {
            maximumFractionDigits: 8
        }
    ) + " USDT";

}


// ==========================================
// RENDER COIN
// ==========================================

function renderCoin(){

    const coin =
        COINS[selectedCoin];


    if(!coin){

        return;

    }


    // PAGE TITLE

    document.title =
        "VALORA | " +
        coin.name;


    // COIN NAME

    const name =
        document.getElementById(
            "coinName"
        );


    if(name){

        name.textContent =
            coin.name;

    }


    // COIN PAIR

    const pair =
        document.getElementById(
            "coinPair"
        );


    if(pair){

        pair.textContent =
            coin.symbol +
            " / USDT";

    }


    // PRICE

    const price =
        document.getElementById(
            "coinPrice"
        );


    if(price){

        price.textContent =
            formatPrice(
                coin.price
            );

    }


    // CHANGE

    const change =
        document.getElementById(
            "coinChange"
        );


    if(change){

        change.textContent =
            (
                coin.change >= 0
                ? "+"
                : ""
            ) +
            coin.change +
            "%";

    }

}


// ==========================================
// UPDATE SUBMIT BUTTON
// ==========================================

function updateSubmitButton(){

    const button =
        document.getElementById(
            "submitTrade"
        );


    if(!button){

        return;

    }


    const lang =
        typeof window.getLanguage === "function"
        ? window.getLanguage()
        : "ar";


    let text;


    if(lang === "en"){

        text =
            tradeType === "buy"
            ? "Buy"
            : "Sell";

    }else{

        text =
            tradeType === "buy"
            ? "شراء"
            : "بيع";

    }


    button.textContent =
        text;

}


// ==========================================
// SELECT BUY / SELL
// ==========================================

window.selectTradeType =
function(type){

    tradeType =
        type === "sell"
        ? "sell"
        : "buy";


    // BUY BUTTON

    const buyButton =
        document.querySelector(
            ".buy-btn"
        );


    // SELL BUTTON

    const sellButton =
        document.querySelector(
            ".sell-btn"
        );


    if(buyButton){

        buyButton.classList.toggle(
            "active",
            tradeType === "buy"
        );

    }


    if(sellButton){

        sellButton.classList.toggle(
            "active",
            tradeType === "sell"
        );

    }


    updateSubmitButton();

};


// ==========================================
// SUBMIT TRADE
// ==========================================

window.submitTrade =
function(){

    const amountInput =
        document.getElementById(
            "tradeAmount"
        );


    if(!amountInput){

        return;

    }


    const amount =
        Number(
            amountInput.value
        );


    // INVALID AMOUNT

    if(
        !amount ||
        amount <= 0
    ){

        const lang =
            typeof window.getLanguage === "function"
            ? window.getLanguage()
            : "ar";


        alert(
            lang === "en"
            ? "Please enter a valid amount"
            : "يرجى إدخال مبلغ صحيح"
        );


        return;

    }


    const lang =
        typeof window.getLanguage === "function"
        ? window.getLanguage()
        : "ar";


    // SUCCESS MESSAGE

    if(lang === "en"){

        alert(
            tradeType === "buy"
            ? "Buy request submitted"
            : "Sell request submitted"
        );

    }else{

        alert(
            tradeType === "buy"
            ? "تم إرسال طلب الشراء"
            : "تم إرسال طلب البيع"
        );

    }

};


// ==========================================
// LOAD BALANCE
// ==========================================

function loadBalance(){

    const balanceElement =
        document.getElementById(
            "availableBalance"
        );


    if(!balanceElement){

        return;

    }


    /*
     * مؤقتًا يتم عرض الرصيد من localStorage
     * إذا كان مشروعك يحتوي على مفتاح رصيد
     * يمكن ربطه هنا لاحقًا بقاعدة البيانات.
     */

    let balance = 0;


    try{

        const savedBalance =
            localStorage.getItem(
                "VALORA_BALANCE"
            );


        if(savedBalance !== null){

            const parsed =
                Number(
                    savedBalance
                );


            if(
                Number.isFinite(
                    parsed
                )
            ){

                balance =
                    parsed;

            }

        }

    }catch(error){

        console.warn(
            "VALORA balance error:",
            error
        );

    }


    balanceElement.textContent =
        balance.toLocaleString(
            undefined,
            {
                maximumFractionDigits: 8
            }
        ) +
        " USDT";

}


// ==========================================
// LOAD ORDERS
// ==========================================

function loadOrders(){

    const ordersList =
        document.getElementById(
            "ordersList"
        );


    if(!ordersList){

        return;

    }


    /*
     * لا توجد عمليات افتراضيًا.
     * يمكن ربطها لاحقًا بقاعدة البيانات.
     */

    const lang =
        typeof window.getLanguage === "function"
        ? window.getLanguage()
        : "ar";


    ordersList.innerHTML =
        '<div class="empty-orders">' +
        (
            lang === "en"
            ? "No orders currently"
            : "لا توجد عمليات"
        ) +
        '</div>';

}


// ==========================================
// LANGUAGE UPDATE
// ==========================================

function updateTradeLanguage(){

    if(
        typeof window.applyLanguage ===
        "function"
    ){

        window.applyLanguage();

    }


    updateSubmitButton();

    loadOrders();

}


// ==========================================
// DOM READY
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        // Get selected coin

        selectedCoin =
            getCoinFromUrl();


        // Render coin

        renderCoin();


        // Load balance

        loadBalance();


        // Load orders

        loadOrders();


        // Default trade type

        selectTradeType(
            "buy"
        );


        // Apply language

        updateTradeLanguage();

    }
);


// ==========================================
// GLOBAL API
// ==========================================

window.VALORA_TRADE = {

    getCoin:
        function(){

            return selectedCoin;

        },

    getCoinData:
        function(){

            return COINS[
                selectedCoin
            ];

        },

    getTradeType:
        function(){

            return tradeType;

        },

    setTradeType:
        function(type){

            selectTradeType(
                type
            );

        },

    renderCoin:
        renderCoin,

    loadBalance:
        loadBalance,

    loadOrders:
        loadOrders,

    updateLanguage:
        updateTradeLanguage

};


})();
