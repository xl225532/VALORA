// ==================================
// VALORA DEPOSIT SYSTEM
// ==================================

"use strict";


let currentCoin = "USDT";
let currentNetwork = "TRC20";

let wallets = {};

const SERVER_URL = "http://localhost:3000";



// ==================================
// LOAD WALLETS FROM SERVER
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


    }

    catch(error){

        console.error(
            error
        );

    }

}



// ==================================
// SELECT COIN
// ==================================

function selectCoin(coin,button){

    currentCoin = coin;


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

}



// ==================================
// LOAD NETWORKS
// ==================================

function loadNetworks(){


    const box =
    document.getElementById(
        "networkBox"
    );


    if(!box){

        return;

    }


    box.innerHTML = "";


    if(!wallets[currentCoin]){

        return;

    }



    Object.keys(
        wallets[currentCoin]
    )
    .forEach(
        (network,index)=>{


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



            if(index === 0){

                button.classList.add(
                    "active"
                );


                currentNetwork =
                network;

            }



            button.onclick =
            function(){

                selectNetwork(
                    this,
                    network
                );

            };


            box.appendChild(
                button
            );


        }
    );


    updateAddress();

}



// ==================================
// SELECT NETWORK
// ==================================

function selectNetwork(button,network){

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

        input.value = "";

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
    );

}



// ==================================
// FIELD ERRORS
// ==================================

function showFieldError(
    inputId,
    message
){

    const input =
    document.getElementById(
        inputId
    );


    if(!input){

        return;

    }


    const area =
    input.closest(
        ".deposit-input-area"
    );


    if(area){

        area.classList.add(
            "error"
        );

    }


    const error =
    area.querySelector(
        ".field-error"
    );


    if(error){

        error.textContent =
        message;

        error.style.display =
        "block";

    }

}




function clearFieldErrors(){

    document
    .querySelectorAll(
        ".deposit-input-area"
    )
    .forEach(area=>{

        area.classList.remove(
            "error"
        );


        const error =
        area.querySelector(
            ".field-error"
        );


        if(error){

            error.textContent =
            "";

            error.style.display =
            "none";

        }


    });


}




// ==================================
// SUBMIT DEPOSIT
// ==================================

async function submitDeposit(){


    clearFieldErrors();



    const amountInput =
    document.getElementById(
        "depositAmount"
    );


    const txInput =
    document.getElementById(
        "transactionId"
    );


    const confirmInput =
    document.getElementById(
        "confirmTransactionId"
    );



    const amount =
    Number(
        amountInput.value
    );


    const txid =
    txInput.value.trim();


    const confirmTxid =
    confirmInput.value.trim();



    if(
        !amount ||
        amount <= 0
    ){

        showFieldError(
            "depositAmount",
            "أدخل المبلغ الصحيح"
        );

        return;

    }



    if(!txid){

        showFieldError(
            "transactionId",
            "أدخل رمز التحويل"
        );

        return;

    }



    if(!confirmTxid){

        showFieldError(
            "confirmTransactionId",
            "أكد رمز التحويل"
        );

        return;

    }



    if(txid !== confirmTxid){

        showFieldError(
            "confirmTransactionId",
            "رمز التحويل غير متطابق"
        );

        return;

    }




    try{


        const token =
        localStorage.getItem(
            "token"
        );



        const response =
        await fetch(
            SERVER_URL +
            "/deposit/check",
            {

                method:"POST",

                headers:{

                    "Content-Type":
                    "application/json",


                    "Authorization":
                    "Bearer " + token

                },


                body:
                JSON.stringify({

                    coin:
                    currentCoin,


                    network:
                    currentNetwork,


                    amount:
                    amount,


                    txid:
                    txid,


                    confirmTxid:
                    confirmTxid

                })

            }

        );



        const data =
        await response.json();



        if(!response.ok){


            showFieldError(
                "transactionId",
                data.message ||
                "فشل تأكيد التحويل"
            );


            return;

        }



        const success =
        document.getElementById(
            "depositSuccessMessage"
        );


        if(success){

            success.hidden =
            false;

        }


    }


    catch(error){


        showFieldError(
            "transactionId",
            "تعذر الاتصال بالسيرفر"
        );


    }



}



// ==================================
// START
// ==================================

document.addEventListener(
"DOMContentLoaded",
async function(){


    await loadWallets();


    loadNetworks();


    updateAddress();



    const button =
    document.getElementById(
        "confirmDepositButton"
    );


    if(button){

        button.onclick =
        submitDeposit;

    }


});
