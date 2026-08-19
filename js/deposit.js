"use strict";


// ==================================
// VALORA DEPOSIT SYSTEM
// ==================================


// حاليا محلي
// لاحقا يتم تغيير هذا الرابط فقط

const SERVER_URL = "http://localhost:3000";



let currentCoin = "USDT";

let currentNetwork = "TRC20";

let wallets = {};





// ==================================
// MESSAGE SYSTEM
// ==================================

function showDepositMessage(
    type,
    message
){

    const box =
    document.getElementById(
        "depositMessage"
    );


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
    document.getElementById(
        "depositMessage"
    );


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

function showFieldError(
    input,
    message
){

    const area =
    input.closest(
        ".deposit-input-area"
    );


    if(area){

        area.classList.add(
            "error"
        );

    }



    let error =
    area.nextElementSibling;



    if(
        !error ||
        !error.classList.contains(
            "field-error"
        )
    ){

        error =
        document.createElement(
            "div"
        );


        error.className =
        "field-error";


        area.after(error);

    }



    error.textContent =
    message;



    error.style.display =
    "block";

}





function clearFieldError(input){


    const area =
    input.closest(
        ".deposit-input-area"
    );


    if(area){

        area.classList.remove(
            "error"
        );

    }



    const error =
    area.nextElementSibling;



    if(
        error &&
        error.classList.contains(
            "field-error"
        )
    ){

        error.style.display =
        "none";

    }

}
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
                "Wallets error"
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

            "تعذر تحميل عناوين الإيداع من السيرفر"

        );


        console.error(
            error
        );


    }


}






// ==================================
// COINS NETWORKS
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

function selectCoin(
    coin,
    button
){


    currentCoin =
    coin;




    document
    .querySelectorAll(
        ".deposit-coin"
    )
    .forEach(
// ==================================
// SELECT NETWORK
// ==================================

function selectNetwork(
    button,
    network
){

    currentNetwork =
    network;



    document
    .querySelectorAll(
        ".network"
    )
    .forEach(
        btn=>{

            btn.classList.remove(
                "active"
            );

        }
    );



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

            "تم نسخ عنوان الإيداع"

        );


    })

    .catch(()=>{


        showDepositMessage(

            "error",

            "فشل نسخ العنوان"

        );


    });


}









// ==================================
// VALIDATE FORM
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

        !amount.value ||

        Number(amount.value)<=0

    ){


        showFieldError(

            amount,

            "أدخل المبلغ الصحيح"

        );


        amount.focus();


        return false;

    }



    clearFieldError(amount);






    if(!txid.value.trim()){


        showFieldError(

            txid,

            "أدخل رمز التحويل TXID"

        );


        txid.focus();


        return false;


    }


    clearFieldError(txid);







    if(!confirmTxid.value.trim()){


        showFieldError(

            confirmTxid,

            "أكد رمز التحويل"

        );


        confirmTxid.focus();


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

            "رمز التحويل غير مطابق"

        );


        confirmTxid.focus();


        return false;


    }



    return true;


}
    // ==================================
// SEND DEPOSIT TO SERVER
// ==================================

async function submitDeposit(){


    if(!validateDeposit()){

        return;

    }





    const amount =
    Number(
        document.getElementById(
            "depositAmount"
        ).value
    );



    const txid =
    document.getElementById(
        "transactionId"
    ).value.trim();



    const confirmTxid =
    document.getElementById(
        "confirmTransactionId"
    ).value.trim();







    try{


        const token =
        localStorage.getItem(
            "VALORA_TOKEN"
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


                body:JSON.stringify({

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


            showDepositMessage(

                "error",

                data.message ||
                "فشل تأكيد الإيداع"

            );


            return;

        }







        showDepositMessage(

            "success",

            "تم تأكيد الإيداع وإضافة الرصيد"

        );







        const button =
        document.getElementById(
            "confirmDepositButton"
        );



        if(button){


            button.disabled =
            true;



            button.textContent =
            "تم التأكيد";


        }






    }

    catch(error){


        showDepositMessage(

            "error",

            "تعذر الاتصال بالسيرفر"

        );


        console.error(
            error
        );


    }


}







// ==================================
// START
// ==================================

document.addEventListener(

"DOMContentLoaded",

function(){



    loadWallets();




    const button =
    document.getElementById(
        "confirmDepositButton"
    );



    if(button){


        button.addEventListener(

            "click",

            submitDeposit

        );


    }



});
