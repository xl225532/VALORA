// ==========================================
// VALORA
// TRADE PAGE
// ==========================================
//
// Language compatible
// Uses:
// VALORA_LANG
//
// Supported coins:
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
// GET LANGUAGE
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
// GET TRANSLATIONS
// ==========================================

function getTranslations(){

    const lang =
        getCurrentLanguage();


    if(
        window.VALORA_LANG &&
        window.VALORA_LANG.translations &&
        window.VALORA_LANG.translations[lang]
    ){

        return window.VALORA_LANG.translations[lang];

    }


    return {};

}


// ==========================================
// GET COIN FROM URL
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
// UPDATE STATIC LANGUAGE ELEMENTS
// ==========================================

function updateStaticLanguage(){

    if(
        typeof window.applyLanguage ===
        "function"
    ){

        window.applyLanguage();

    }

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
    // PAGE TITLE
    // ======================================

    const translations =
        getTranslations();


    const tradeTitle =
        translations.trade || "Trade";


    document.title =
        "VALORA | " +
        tradeTitle +
        " | " +
        coin.name;


    // ======================================
    // COIN NAME
    // ======================================

    const coinName =
        document.getElementById(
            "coinName"
        );


    if(coinName){

        /*
         * أسماء العملات لها مفاتيح خاصة
         * داخل language.js
         */

        let translatedName =
            coin.name;


        if(
            selectedCoin === "BTC" &&
            translations.bitcoin
        ){

            translatedName =
                translations.bitcoin;

        }


        if(
            selectedCoin === "ETH" &&
            translations.ethereum
        ){

            translatedName =
                translations.ethereum;

        }


        if(
            selectedCoin === "USDT" &&
            translations.tether
        ){

            translatedName =
                translations.tether;

        }


        if(
            selectedCoin === "TRX" &&
            translations.tron
        ){

            translatedName =
                translations.tron;

        }


        if(
            selectedCoin === "XRP" &&
            translations.ripple
        ){

            translatedName =
                translations.ripple;

        }


        if(
            selectedCoin === "SOL" &&
            translations.solana
        ){

            translatedName =
                translations.solana;

        }


        coinName.textContent =
            translatedName;

    }


    // ======================================
    // COIN PAIR
    // ======================================

    const coinPair =
        document.getElementById(
            "coinPair"
        );


    if(coinPair){

        coinPair.textContent =
            coin.symbol +
            " / USDT";

    }


    // ======================================
    // COIN ICON
    // ======================================

    const coinIcon =
        document.getElementById(
            "coinIcon"
        );


    if(coinIcon){

        coinIcon.textContent =
            coin.icon;

    }


    // ======================================
    // PRICE
    // ======================================

    const tradePrice =
        document.getElementById(
            "tradePrice"
        );


    if(tradePrice){

        tradePrice.textContent =
            formatPrice(
                coin.price
            );

    }


    // ======================================
    // CHANGE
    // ======================================

    const tradeChange =
        document.getElementById(
            "tradeChange"
        );


    if(tradeChange){

        const prefix =
            coin.change >= 0
            ? "+"
            : "";


        tradeChange.textContent =
            "▲ " +
            prefix +
            coin.change +
            "%";


        if(
            coin.change >= 0
        ){

            tradeChange.classList.add(
                "up"
            );

            tradeChange.classList.remove(
                "down"
            );

        }else{

            tradeChange.classList.add(
                "down"
            );

            tradeChange.classList.remove(
                "up"
            );

        }

    }

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

        const savedBalance =
            localStorage.getItem(
                "VALORA_BALANCE"
            );


        if(savedBalance !== null){

            const parsedBalance =
                Number(
                    savedBalance
                );


            if(
                Number.isFinite(
                    parsedBalance
                )
            ){

                balance =
                    parsedBalance;

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
// GET TRADE AMOUNT
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
// SHOW MESSAGE
// ==========================================

function showTradeMessage(key){

    const translations =
        getTranslations();


    const message =
        translations[key];


    if(message){

        alert(message);

    }

}


// ==========================================
// BUY
// ==========================================

window.buyTrade =
function(){

    const amount =
        getTradeAmount();


    if(
        !amount ||
        amount <= 0
    ){

        showTradeMessage(
            "required"
        );

        return;

    }


    /*
     * لا يوجد نص ثابت هنا.
     * الرسالة تأتي من language.js.
     *
     * إذا أضفت لاحقًا:
     *
     * buy_success
     *
     * إلى اللغات، سيتم استخدامها.
     */

    const translations =
        getTranslations();


    if(
        translations.buy_success
    ){

        alert(
            translations.buy_success
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


    if(
        !amount ||
        amount <= 0
    ){

        showTradeMessage(
            "required"
        );

        return;

    }


    /*
     * لا يوجد نص عربي ثابت هنا.
     */

    const translations =
        getTranslations();


    if(
        translations.sell_success
    ){

        alert(
            translations.sell_success
        );

    }

};


// ==========================================
// REFRESH LANGUAGE
// ==========================================

function updateTradeLanguage(){

    /*
     * أولًا نطبق نظام اللغة العام
     */

    updateStaticLanguage();


    /*
     * ثم نعيد تحميل اسم العملة
     * لأن أسماء العملات لها مفاتيح
     * مختلفة في language.js.
     */

    loadCoin();


    /*
     * الرصيد لا يحتاج ترجمة،
     * لكنه يعاد عرضه فقط.
     */

    loadBalance();

}


// ==========================================
// DOM READY
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        // تحديد العملة

        selectedCoin =
            getCoinFromURL();


        // تطبيق اللغة أولًا

        updateStaticLanguage();


        // تحميل العملة

        loadCoin();


        // تحميل الرصيد

        loadBalance();

    }
);


// ==========================================
// LANGUAGE CHANGE LISTENER
// ==========================================
//
// إذا تم تغيير اللغة من صفحة أخرى
// ثم العودة إلى صفحة العملة،
// يتم تطبيق اللغة الجديدة.
//
// ==========================================

window.addEventListener(
    "storage",
    function(event){

        if(
            event.key ===
            "VALORA_LANG"
        ){

            updateTradeLanguage();

        }

    }
);


// ==========================================
// GLOBAL API
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

    },


    updateLanguage: function(){

        updateTradeLanguage();

    }

};


})();
