// ==========================================
// VALORA WITHDRAW SYSTEM
// ==========================================


let withdrawCoin = "USDT";

let withdrawNetwork = "TRC20";





// ==========================================
// COINS NETWORKS
// ==========================================


const withdrawNetworks = {


USDT:[

"TRC20",

"ERC20"

],



BTC:[

"Bitcoin"

],



ETH:[

"ERC20"

]

};





// ==========================================
// WITHDRAW BALANCE
// ==========================================


function loadWithdrawBalance(){


let balance =

Number(

localStorage.getItem("VALORA_BALANCE")

) || 0;



let box =

document.getElementById(
"availableBalance"
);



if(box){


box.innerHTML =

balance.toFixed(2)

+

" USDT";


}


}






// ==========================================
// SELECT COIN
// ==========================================


function selectWithdrawCoin(coin,button){



if(!withdrawNetworks[coin]){

return;

}



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



}







// ==========================================
// LOAD NETWORKS
// ==========================================


function loadWithdrawNetworks(){



let box =

document.getElementById(
"withdrawNetwork"
);



if(!box){

return;

}



box.innerHTML = "";




withdrawNetworks[withdrawCoin]

.forEach(function(network,index){



let btn =

document.createElement("button");



btn.type = "button";

btn.className = "network";

btn.innerText = network;




if(index === 0){


btn.classList.add("active");


withdrawNetwork = network;


}






btn.onclick=function(){


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


function selectWithdrawNetwork(button,network){



withdrawNetwork = network;



document

.querySelectorAll(".network")

.forEach(function(btn){


btn.classList.remove("active");


});




button.classList.add("active");



}







// ==========================================
// SUBMIT WITHDRAW
// ==========================================


function submitWithdraw(){



let amount =

Number(

document.getElementById(
"withdrawAmount"
).value

);



let address =

document.getElementById(
"withdrawAddress"
).value;





let message =

document.getElementById(
"withdrawMessage"
);





let lang =

localStorage.getItem(
"VALORA_LANG"
)

|| "en";







if(!amount || !address){



showWithdrawMessage(

lang==="ar"

?

"يرجى إدخال جميع البيانات"

:

"Please fill all fields",

false

);



return;

}







let balance =

Number(

localStorage.getItem(
"VALORA_BALANCE"

)

) || 0;







if(amount > balance){



showWithdrawMessage(

lang==="ar"

?

"الرصيد غير كافٍ"

:

"Insufficient balance",

false

);



return;

}







// خصم الرصيد


localStorage.setItem(

"VALORA_BALANCE",

balance - amount

);







saveWithdrawHistory(

amount,

address

);







showWithdrawMessage(

lang==="ar"

?

"تم إرسال طلب السحب بنجاح"

:

"Withdrawal request submitted successfully",

true

);




}







// ==========================================
// MESSAGE
// ==========================================


function showWithdrawMessage(text,success){



let box =

document.getElementById(
"withdrawMessage"
);



if(!box){

return;

}



box.style.display="block";


box.innerText=text;



if(success){


box.className=

"withdraw-message success";


}else{


box.className=

"withdraw-message reject";


}



}







// ==========================================
// SAVE HISTORY
// ==========================================


function saveWithdrawHistory(amount,address){



let history =

JSON.parse(

localStorage.getItem(
"VALORA_WITHDRAW_HISTORY"

)

)

|| [];





history.push({

coin: withdrawCoin,

network: withdrawNetwork,

amount: amount,

address: address,

date: new Date().toLocaleString()

});





localStorage.setItem(

"VALORA_WITHDRAW_HISTORY",

JSON.stringify(history)

);



}







// ==========================================
// START
// ==========================================


document.addEventListener(

"DOMContentLoaded",

function(){



if(typeof applyLanguage === "function"){


applyLanguage();


}



loadWithdrawBalance();


loadWithdrawNetworks();



});
