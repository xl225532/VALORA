"use strict";


// ==================================
// VALORA DEPOSIT SYSTEM
// ==================================

const SERVER_URL = "http://localhost:3000";


let currentCoin = "USDT";

let currentNetwork = "TRC20";

let wallets = {};



// ==================================
// SAFE TRANSLATION
// ==================================

function tr(key, fallback){

    if(typeof t === "function"){

        return t(key);

    }

    return fallback;

}



// ==================================
// MESSAGE SYSTEM
// ==================================

function showDepositMessage(type, message){

    const box =
    document.getElementById("depositMessage");


    if(!box){

        return;

    }


    box.className =
    "deposit-message " + type;


    box.textContent =
    message;


    box.style.display =
    "block";

}



function clearDepositMessage(){

    const box =
    document.getElementById("depositMessage");


    if(box){

        box.style.display =
        "none";

        box.textContent =
        "";

    }

}




// ==================================
// FIELD ERROR
// ==================================

function showFieldError(input,message){


    if(!input){

        return;

    }


    const area =
    input.closest(".deposit-input-area");



    if(area){

        area.classList.add("error");

    }



    let error =
    area ?
    area.nextElementSibling :
    null;



    if(
        !error ||
        !error.classList.contains("field-error")
    ){

        error =
        document.createElement("div");


        error.className =
        "field-error";


        if(area){

            area.after(error);

        }

    }



    error.textContent =
    message;


    error.style.display =
    "block";


}





function clearFieldError(input){


    if(!input){

        return;

    }



    const area =
    input.closest(".deposit-input-area");



    if(area){

        area.classList.remove("error");

    }



    const error =
    area ?
    area.nextElementSibling :
    null;



    if(
        error &&
        error.classList.contains("field-error")
    ){

        error.style.display =
        "none";

    }


}




// ==================================
// LOAD WALLETS
// ==================================

async function loadWallets(){


    try{


        const response =
        await fetch(
            SERVER_URL + "/wallets"
        );



        if(!response.ok){

            throw new Error(
                "Wallet loading failed"
            );

        }



        wallets =
        await response.json();



        loadNetworks();

        updateAddress();



    }
    catch(error){


        showDepositMessage(
            "error",
            tr(
                "wallet_load_error",
                "تعذر تحميل عناوين الإيداع"
            )
        );


        console.error(error);


    }


}




// ==================================
// COIN NETWORKS
// ==================================

const coinNetworks = {


    USDT:[
        "TRC20",
        "ERC20"
    ],


    BTC:[
        "Bitcoin"
    ],


    ETH:[
        "ERC20"
    ],


    TRX:[
        "TRC20"
    ]


};




// ==================================
// SELECT COIN
// ==================================

function selectCoin(coin,button){


    currentCoin =
    coin;



    document
    .querySelectorAll(".deposit-coin")
    .forEach(btn=>{

        btn.classList.remove(
            "active"
        );

    });



    if(button){

        button.classList.add(
            "active"
        );

    }



    loadNetworks();


    updateAddress();


}




// ==================================
// NETWORK BUTTONS
// ==================================

function loadNetworks(){


    const box =
    document.getElementById(
        "networkBox"
    );


    if(!box){

        return;

    }



    box.innerHTML =
    "";



    coinNetworks[currentCoin]
    .forEach(network=>{


        const btn =
        document.createElement(
            "button"
        );


        btn.className =
        "network";


        btn.type =
        "button";


        btn.textContent =
        network;



        if(network === currentNetwork){

            btn.classList.add(
                "active"
            );

        }



        btn.onclick =
        function(){

            selectNetwork(
                btn,
                network
            );

        };



        box.appendChild(btn);


    });



    currentNetwork =
    coinNetworks[currentCoin][0];



}
// ==================================
// SELECT NETWORK
// ==================================

function selectNetwork(button, network){


    currentNetwork =
    network;



    document
    .querySelectorAll(".network")
    .forEach(btn=>{

        btn.classList.remove(
            "active"
        );

    });



    button.classList.add(
        "active"
    );



    updateAddress();


}




// ==================================
// UPDATE ADDRESS
// ==================================

function updateAddress(){


    const input =
    document.getElementById(
        "depositAddress"
    );



    if(!input){

        return;

    }



    if(
        wallets[currentCoin] &&
        wallets[currentCoin][currentNetwork]
    ){

        input.value =
        wallets[currentCoin][currentNetwork];

    }
    else{

        input.value =
        "";

    }


}




// ==================================
// COPY ADDRESS
// ==================================

function copyDeposit(){


    const input =
    document.getElementById(
        "depositAddress"
    );



    if(
        !input ||
        !input.value
    ){

        return;

    }



    navigator.clipboard
    .writeText(
        input.value
    )
    .then(()=>{


        showDepositMessage(
            "success",
            tr(
                "deposit_copied",
                "تم نسخ عنوان الإيداع"
            )
        );


    })
    .catch(()=>{


        showDepositMessage(
            "error",
            tr(
                "copy_error",
                "فشل نسخ العنوان"
            )
        );


    });


}





// ==================================
// VALIDATE
// ==================================

function validateDeposit(){


    clearDepositMessage();



    const amount =
    document.getElementById(
        "depositAmount"
    );


    const txid =
    document.getElementById(
        "transactionId"
    );


    const confirmTxid =
    document.getElementById(
        "confirmTransactionId"
    );





    if(
        !amount ||
        !amount.value ||
        Number(amount.value) <= 0
    ){

        showFieldError(
            amount,
            tr(
                "deposit_amount_error",
                "أدخل مبلغ الإيداع الصحيح"
            )
        );


        return false;

    }



    clearFieldError(amount);





    if(
        !txid.value.trim()
    ){


        showFieldError(
            txid,
            tr(
                "deposit_txid_error",
                "أدخل رمز التحويل TXID"
            )
        );


        return false;

    }



    clearFieldError(txid);





    if(
        !confirmTxid.value.trim()
    ){


        showFieldError(
            confirmTxid,
            tr(
                "deposit_confirm_txid_error",
                "أكد رمز التحويل TXID"
            )
        );


        return false;

    }



    clearFieldError(confirmTxid);





    if(
        txid.value.trim()
        !==
        confirmTxid.value.trim()
    ){


        showFieldError(
            confirmTxid,
            tr(
                "deposit_txid_match_error",
                "رمز التحويل غير مطابق"
            )
        );


        return false;

    }




    return true;


}





// ==================================
// SEND TO SERVER
// ==================================

async function submitDeposit(){


    if(
        !validateDeposit()
    ){

        return;

    }




    const token =
    localStorage.getItem(
        "VALORA_TOKEN"
    );



    const body = {


        coin:
        currentCoin,


        network:
        currentNetwork,


        amount:
        Number(
            document.getElementById(
                "depositAmount"
            ).value
        ),


        txid:
        document.getElementById(
            "transactionId"
        ).value.trim()


    };




    try{


        const response =
        await fetch(
            SERVER_URL + "/deposit/check",
            {


                method:
                "POST",


                headers:{


                    "Content-Type":
                    "application/json",


                    "Authorization":
                    "Bearer " + token


                },


                body:
                JSON.stringify(body)


            }
        );





        const data =
        await response.json();





        if(!response.ok){


            showDepositMessage(
                "error",
                data.message ||
                tr(
                    "deposit_error",
                    "فشل تأكيد الإيداع"
                )
            );


            return;


        }





        showDepositMessage(
            "success",
            tr(
                "deposit_success",
                "تم إرسال طلب الإيداع"
            )
        );



    }
    catch(error){


        showDepositMessage(
            "error",
            tr(
                "server_connection_error",
                "تعذر الاتصال بالسيرفر"
            )
        );


        console.error(error);


    }


}





// ==================================
// START
// ==================================

document.addEventListener(
"DOMContentLoaded",
()=>{


    if(typeof applyLanguage === "function"){

        applyLanguage();

    }



    loadWallets();




    const btn =
    document.getElementById(
        "confirmDepositButton"
    );


    if(btn){

        btn.addEventListener(
            "click",
            submitDeposit
        );

    }





    const copyBtn =
    document.getElementById(
        "copyDepositButton"
    );


    if(copyBtn){

        copyBtn.addEventListener(
            "click",
            copyDeposit
        );

    }





    document
    .querySelectorAll(".deposit-coin")
    .forEach(button=>{


        button.addEventListener(
            "click",
            ()=>{


                selectCoin(
                    button.dataset.coin,
                    button
                );


            }
        );


    });



});
