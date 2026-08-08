// ==========================================
// VALORA WITHDRAW SYSTEM
// ==========================================


// ==========================================
// VARIABLES
// ==========================================

let withdrawCoin = "USDT";

console.log("VALORA WITHDRAW JS NEW VERSION");
console.log("VALORA LANG:", localStorage.getItem("VALORA_LANG"));

let withdrawNetwork = "TRC20";





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
// LANGUAGE HELPER
// ==========================================

function withdrawTranslate(key, fallback){

    try {

        const lang =
            localStorage.getItem("VALORA_LANG") || "ar";


        if(
            window.VALORA_LANG &&
            window.VALORA_LANG.translations &&
            window.VALORA_LANG.translations[lang] &&
            window.VALORA_LANG.translations[lang][key]
        ){

            return window.VALORA_LANG.translations[lang][key];

        }

    } catch(error){

        console.warn(
            "VALORA language error:",
            error
        );

    }


    return fallback;

}




// ==========================================
// SELECT COIN
// ==========================================

function selectWithdrawCoin(coin, button){

    if(!withdrawNetworks[coin]) return;


    withdrawCoin = coin;


    document
    .querySelectorAll(".withdraw-coin")
    .forEach(function(btn){

        btn.classList.remove("active");

    });


    if(button){

        button.classList.add("active");

    }


    loadWithdrawNetworks();

    calculateWithdraw();

}




// ==========================================
// LOAD NETWORKS
// ==========================================

function loadWithdrawNetworks(){

    let box =
        document.getElementById(
            "withdrawNetwork"
        );


    if(!box) return;


    box.innerHTML = "";


    withdrawNetworks[withdrawCoin]
    .forEach(function(network, index){

        let btn =
            document.createElement("button");


        btn.type = "button";

        btn.className = "network";

        btn.innerText = network;


        if(index === 0){

            btn.classList.add("active");

            withdrawNetwork = network;

        }


        btn.onclick = function(){

            selectWithdrawNetwork(
                this,
                network
            );

        };


        box.appendChild(btn);

    });

}




// ==========================================
// SELECT NETWORK
// ==========================================

function selectWithdrawNetwork(button, network){

    withdrawNetwork = network;


    document
    .querySelectorAll(".network")
    .forEach(function(btn){

        btn.classList.remove("active");

    });


    button.classList.add("active");

}




// ==========================================
// GET BALANCE
// ==========================================

function getBalance(){

    return Number(

        localStorage.getItem(
            "VALORA_BALANCE"
        )

    ) || 0;

}




// ==========================================
// WITHDRAW FEE SYSTEM
// ==========================================

function getWithdrawFee(){

    /*
        نظام التضعيف:

        قبل التضعيف = 20%
        بعد التضعيف = 5%

        حالياً النظام مضبوط على
        مرحلة ما بعد التضعيف.
    */

    let doubled = "true";


    if(doubled === "true"){

        return 5;

    }


    return 20;

}




// ==========================================
// CALCULATE WITHDRAW
// ==========================================

function calculateWithdraw(){

    let amount =

        Number(

            document.getElementById(
                "withdrawAmount"
            )?.value

        ) || 0;


    let feePercent =
        getWithdrawFee();


    let fee =
        amount *
        (feePercent / 100);


    let receive =
        amount - fee;


    let feeBox =
        document.getElementById(
            "withdrawFee"
        );


    let receiveBox =
        document.getElementById(
            "receiveAmount"
        );


    if(feeBox){

        feeBox.innerHTML =
            fee.toFixed(2)
            + " USDT";

    }


    if(receiveBox){

        receiveBox.innerHTML =
            receive.toFixed(2)
            + " USDT";

    }

}




// ==========================================
// SUBMIT WITHDRAW
// ==========================================

function submitWithdraw(){

    let amount =

        Number(

            document.getElementById(
                "withdrawAmount"
            )?.value

        ) || 0;


    let addressElement =
        document.getElementById(
            "withdrawAddress"
        );


    let securityElement =
        document.getElementById(
            "withdrawSecurityCode"
        );


    let address =
        addressElement
        ? addressElement.value.trim()
        : "";


    let security =
        securityElement
        ? securityElement.value.trim()
        : "";




    // ======================================
    // SAVED SECURITY CODE
    // ======================================

    let savedSecurity =

        localStorage.getItem(
            "VALORA_SECURITY_CODE"
        ) || "123456";




    // ======================================
    // SECURITY ERROR
    // ======================================

    if(security !== savedSecurity){

        showWithdrawMessage(

            withdrawTranslate(

                "withdraw_security_error",

                "رمز الأمان غير صحيح"

            ),

            false

        );

        return;

    }




    // ======================================
    // EMPTY DATA
    // ======================================

    if(!amount || !address){

        showWithdrawMessage(

            withdrawTranslate(

                "withdraw_amount_error",

                "أكمل جميع البيانات"

            ),

            false

        );

        return;

    }




    // ======================================
    // BALANCE
    // ======================================

    let balance =
        getBalance();


    if(amount > balance){

        showWithdrawMessage(

            withdrawTranslate(

                "withdraw_error",

                "الرصيد غير كافي"

            ),

            false

        );

        return;

    }




    // ======================================
    // CALCULATE FEE
    // ======================================

    let fee =

        amount *
        (getWithdrawFee() / 100);


    let receive =

        amount - fee;




    // ======================================
    // UPDATE BALANCE
    // ======================================

    localStorage.setItem(

        "VALORA_BALANCE",

        balance - amount

    );




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

        withdrawTranslate(

            "withdraw_success",

            "تم إرسال طلب السحب"

        ),

        true

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

){

    let history =

        JSON.parse(

            localStorage.getItem(
                "VALORA_WITHDRAW_HISTORY"
            )

        ) || [];


    history.push({

        coin:
            withdrawCoin,

        network:
            withdrawNetwork,

        amount:
            amount,

        fee:
            fee,

        receive:
            receive,

        address:
            address,

        date:
            new Date().toLocaleString()

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
    text,
    success
){

    let box =

        document.getElementById(
            "withdrawMessage"
        );


    if(!box) return;


    box.style.display = "block";


    box.innerHTML = text;


    box.className =

        success

        ?

        "withdraw-message success"

        :

        "withdraw-message reject";

}




// ==========================================
// START
// ==========================================

document.addEventListener(

    "DOMContentLoaded",

    function(){

        loadWithdrawNetworks();

        calculateWithdraw();


        let amount =

            document.getElementById(
                "withdrawAmount"
            );


        if(amount){

            amount.addEventListener(

                "input",

                calculateWithdraw

            );

        }

    }

);
