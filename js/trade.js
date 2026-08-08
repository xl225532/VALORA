// ==========================================
// VALORA
// TRADE PAGE
// ==========================================
//
// Dynamic Coins
//
// BTC
// ETH
// USDT
// TRX
// XRP
// SOL
//
// Example:
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

        icon: "₿",

        price: 67500,

        change: 2.45

    },


    ETH: {

        name: "Ethereum",

        symbol: "ETH",

        icon: "Ξ",

        price: 3500,

        change: 1.82

    },


    USDT: {

        name: "Tether",

        symbol: "USDT",

        icon: "₮",

        price: 1,

        change: 0.01

    },


    TRX: {

        name: "TRON",

        symbol: "TRX",

        icon: "T",

        price: 0.27,

        change: 1.14

    },


    XRP: {

        name: "XRP",

        symbol: "XRP",

        icon: "X",

        price: 0.58,

        change: 1.06

    },


    SOL: {

        name: "Solana",

        symbol: "SOL",

        icon: "S",

        price: 180,

        change: 2.11

    }

};



// ==========================================
// CURRENT COIN
// ==========================================

let selectedCoin = "BTC";



// ==========================================
// GET COIN
// ==========================================

function getCoinFromURL(){

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

function formatPrice(price){

    if(price >= 1000){

        return price.toLocaleString(
            "en-US",
            {
                maximumFractionDigits: 2
            }
        ) + "$";

    }


    if(price >= 1){

        return price.toLocaleString(
            "en-US",
            {
                maximumFractionDigits: 4
            }
        ) + "$";

    }


    return price.toLocaleString(
        "en-US",
        {
            maximumFractionDigits: 8
        }
    ) + "$";

}



// ==========================================
// LOAD COIN
// ==========================================

function loadCoin(){

    const coin =
        COINS[selectedCoin];


    if(!coin){

        return;

    }



    // ======================================
    // NAME
    // ======================================

    const name =
        document.getElementById(
            "coinName"
        );


    if(name){

        name.textContent =
            coin.name;

    }



    // ======================================
    // SYMBOL
    // ======================================

    const pair =
        document.getElementById(
            "coinPair"
        );


    if(pair){

        pair.textContent =
            coin.symbol +
            " / USDT";

    }



    // ======================================
    // ICON
    // ======================================

    const icon =
        document.getElementById(
            "coinIcon"
        );


    if(icon){

        icon.textContent =
            coin.icon;

    }



    // ======================================
    // PRICE
    // ======================================

    const price =
        document.getElementById(
            "tradePrice"
        );


    if(price){

        price.textContent =
            formatPrice(
                coin.price
            );

    }



    // ======================================
    // CHANGE
    // ======================================

    const change =
        document.getElementById(
            "tradeChange"
        );


    if(change){

        change.textContent =
            "▲ " +
            coin.change +
            "%";

    }



    // ======================================
    // TITLE
    // ======================================

    document.title =
        "VALORA | " +
        coin.name;

}



// ==========================================
// LOAD BALANCE
// ==========================================

function loadBalance(){

    const balanceElement =
        document.getElementById(
            "tradeBalance"
        );


    if(!balanceElement){

        return;

    }


    let balance = 0;


    try{

        const saved =
            localStorage.getItem(
                "VALORA_BALANCE"
            );


        if(saved !== null){

            const value =
                Number(saved);


            if(
                Number.isFinite(
                    value
                )
            ){

                balance =
                    value;

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
            "en-US",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 8
            }
        ) +
        " USDT";

}



// ==========================================
// GET AMOUNT
// ==========================================

function getTradeAmount(){

    const input =
        document.getElementById(
            "tradeAmount"
        );


    if(!input){

        return 0;

    }


    return Number(
        input.value
    );

}



// ==========================================
// LANGUAGE
// ==========================================

function getCurrentLanguage(){

    if(
        typeof window.getLanguage ===
        "function"
    ){

        return window.getLanguage();

    }


    return "ar";

}



// ==========================================
// BUY
// ==========================================

window.buyTrade =
function(){

    const amount =
        getTradeAmount();


    const lang =
        getCurrentLanguage();


    if(
        !amount ||
        amount <= 0
    ){

        alert(

            lang === "en"

            ? "Please enter a valid amount"

            : "يرجى إدخال مبلغ صحيح"

        );


        return;

    }



    if(lang === "en"){

        alert(
            "Buy request submitted"
        );

    }else{

        alert(
            "تم إرسال طلب الشراء"
        );

    }

};



// ==========================================
// SELL
// ==========================================

window.sellTrade =
function(){

    const amount =
        getTradeAmount();


    const lang =
        getCurrentLanguage();


    if(
        !amount ||
        amount <= 0
    ){

        alert(

            lang === "en"

            ? "Please enter a valid amount"

            : "يرجى إدخال مبلغ صحيح"

        );


        return;

    }



    if(lang === "en"){

        alert(
            "Sell request submitted"
        );

    }else{

        alert(
            "تم إرسال طلب البيع"
        );

    }

};



// ==========================================
// UPDATE LANGUAGE
// ==========================================

function updateLanguage(){

    if(
        typeof window.applyLanguage ===
        "function"
    ){

        window.applyLanguage();

    }

}



// ==========================================
// DOM READY
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        // تحديد العملة من الرابط

        selectedCoin =
            getCoinFromURL();


        // تحميل بيانات العملة

        loadCoin();


        // تحميل الرصيد

        loadBalance();


        // تطبيق اللغة

        updateLanguage();

    }
);



// ==========================================
// GLOBAL
// ==========================================

window.VALORA_TRADE = {

    getCoin: function(){

        return selectedCoin;

    },


    getCoinData: function(){

        return COINS[
            selectedCoin
        ];

    },


    reloadCoin: function(){

        loadCoin();

    },


    reloadBalance: function(){

        loadBalance();

    }

};


})();
