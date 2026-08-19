"use strict";


// ==================================
// VALORA DEPOSIT SYSTEM
// ==================================

const SERVER_URL = "http://localhost:3000";


let currentCoin = "USDT";

let currentNetwork = "TRC20";

let wallets = {};




// ==================================
// MESSAGE
// ==================================

function showDepositMessage(type, message){

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

function showFieldError(input,message){


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
"wallet error"
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

t("deposit_server_error") ||
"Error loading deposit address"

);



console.error(error);


}


}






// ==================================
// NETWORKS
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






function loadNetworks(){


const box =
document.getElementById(
"networkBox"
);



if(!box){

return;

}



box.innerHTML = "";



coinNetworks[currentCoin]
.forEach(
network=>{


const button =
document.createElement(
"button"
);



button.className =
"network";



button.textContent =
network;



button.onclick =
function(){

selectNetwork(
button,
network
);

};



box.appendChild(
button
);



if(network === currentNetwork){

button.classList.add(
"active"
);

}


});


}







// ==================================
// SELECT COIN
// ==================================

function selectCoin(coin,button){


currentCoin =
coin;



document
.querySelectorAll(
".deposit-coin"
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



currentNetwork =
coinNetworks[coin][0];


loadNetworks();


updateAddress();



}






// ==================================
// SELECT NETWORK
// ==================================

function selectNetwork(button,network){


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
// COPY
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

t("deposit_copied")

);



})

.catch(()=>{


showDepositMessage(

"error",

t("copy_error")

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
!amount.value ||
Number(amount.value)<=0
){


showFieldError(

amount,

t("deposit_amount_error")

);


return false;


}




if(!txid.value.trim()){


showFieldError(

txid,

t("deposit_txid_error")

);


return false;


}




if(!confirmTxid.value.trim()){


showFieldError(

confirmTxid,

t("deposit_confirm_txid_error")

);


return false;


}





if(
txid.value.trim()
!==
confirmTxid.value.trim()
){


showFieldError(

confirmTxid,

t("deposit_txid_match_error")

);


return false;


}



return true;


}







// ==================================
// SEND DEPOSIT
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
txid

})

}


);




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

t("server_connection_error")

);


console.error(error);


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



}

);
