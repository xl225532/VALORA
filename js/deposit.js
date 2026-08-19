"use strict";


// ==================================
// VALORA DEPOSIT SYSTEM
// ==================================

const SERVER_URL = "http://localhost:3000";


let currentCoin = "USDT";

let currentNetwork = "TRC20";

let wallets = {};




// ==================================
// MESSAGE SYSTEM
// ==================================

function showDepositMessage(type,message){

    const box =
    document.getElementById("depositMessage");


    if(!box) return;


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

        box.style.display="none";

        box.textContent="";

    }

}




// ==================================
// FIELD ERROR
// ==================================

function showFieldError(input,message){


    const area =
    input.closest(".deposit-input-area");


    if(area){

        area.classList.add("error");

    }


    let error =
    area.nextElementSibling;


    if(
        !error ||
        !error.classList.contains("field-error")
    ){

        error=document.createElement("div");

        error.className="field-error";

        area.after(error);

    }


    error.textContent=message;

    error.style.display="block";

}




function clearFieldError(input){


    const area =
    input.closest(".deposit-input-area");


    if(area){

        area.classList.remove("error");

    }


    const error =
    area.nextElementSibling;


    if(
        error &&
        error.classList.contains("field-error")
    ){

        error.style.display="none";

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

throw new Error();

}



wallets =
await response.json();



loadNetworks();


updateAddress();



}

catch(error){


showDepositMessage(
"error",
t("wallet_load_error") || "تعذر تحميل عناوين الإيداع"
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


currentCoin=coin;



document
.querySelectorAll(".deposit-coin")
.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");



loadNetworks();


updateAddress();


}




// ==================================
// NETWORK BUTTONS
// ==================================

function loadNetworks(){


const box =
document.getElementById("networkBox");


if(!box)return;



box.innerHTML="";



coinNetworks[currentCoin]
.forEach(network=>{


let btn =
document.createElement("button");



btn.className="network";

btn.type="button";


btn.textContent=network;



if(network===currentNetwork){

btn.classList.add("active");

}



btn.onclick=function(){

selectNetwork(btn,network);

};



box.appendChild(btn);



});



currentNetwork =
coinNetworks[currentCoin][0];



}




function selectNetwork(button,network){


currentNetwork=network;


document
.querySelectorAll(".network")
.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");


updateAddress();


}




// ==================================
// UPDATE ADDRESS
// ==================================

function updateAddress(){


const input =
document.getElementById("depositAddress");


if(!input)return;



if(
wallets[currentCoin] &&
wallets[currentCoin][currentNetwork]
){

input.value =
wallets[currentCoin][currentNetwork];

}

else{

input.value="";

}


}




// ==================================
// COPY
// ==================================

function copyDeposit(){


const input =
document.getElementById("depositAddress");


if(!input.value)return;



navigator.clipboard
.writeText(input.value)
.then(()=>{


showDepositMessage(
"success",
t("deposit_copied")
);



});

}




// ==================================
// VALIDATE
// ==================================

function validateDeposit(){


clearDepositMessage();



const amount =
document.getElementById("depositAmount");


const txid =
document.getElementById("transactionId");


const confirmTxid =
document.getElementById("confirmTransactionId");




if(
!amount.value ||
Number(amount.value)<=0
){

showFieldError(
amount,
t("deposit_amount_error") || "أدخل المبلغ الصحيح"
);


return false;

}



clearFieldError(amount);




if(!txid.value.trim()){


showFieldError(
txid,
t("deposit_txid_error") || "أدخل رمز التحويل TXID"
);


return false;

}


clearFieldError(txid);




if(!confirmTxid.value.trim()){


showFieldError(
confirmTxid,
t("deposit_confirm_txid_error") || "أكد رمز التحويل"
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
t("deposit_txid_match_error") || "رمز التحويل غير مطابق"
);



return false;

}



return true;


}





// ==================================
// SEND TO SERVER
// ==================================

async function submitDeposit(){


if(!validateDeposit())return;



const token =
localStorage.getItem("VALORA_TOKEN");



const body={


coin:currentCoin,

network:currentNetwork,


amount:Number(
document.getElementById("depositAmount").value
),


txid:
document.getElementById("transactionId").value.trim()


};




try{


const response =
await fetch(
SERVER_URL+"/deposit/check",
{


method:"POST",


headers:{


"Content-Type":"application/json",


"Authorization":
"Bearer "+token


},


body:JSON.stringify(body)


});





const data =
await response.json();





if(!response.ok){


showDepositMessage(
"error",
data.message ||
t("deposit_error")
);



return;


}




showDepositMessage(
"success",
t("deposit_success")
);



}


catch(error){


showDepositMessage(
"error",
t("server_error")
);



}



}





// ==================================
// START
// ==================================

document.addEventListener(
"DOMContentLoaded",
()=>{


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



}
);
