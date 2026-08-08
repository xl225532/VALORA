// ==========================================
// VALORA WITHDRAW SYSTEM
// ==========================================


let withdrawCoin = "USDT";

let withdrawNetwork = "TRC20";



// ==========================================
// NETWORKS
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

],


TRX:[

"TRC20"

]


};





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
// LOAD NETWORK
// ==========================================


function loadWithdrawNetworks(){



let box =

document.getElementById(
"withdrawNetwork"
);



if(!box){

return;

}



box.innerHTML="";





withdrawNetworks[withdrawCoin]

.forEach(function(network,index){



let btn =

document.createElement("button");



btn.type="button";

btn.className="network";

btn.innerText=network;




if(index===0){


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
// BALANCE
// ==========================================


function loadWithdrawBalance(){



let balance =

Number(

localStorage.getItem(
"VALORA_BALANCE"

)

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
// CALCULATE FEE
// ==========================================


function calculateWithdraw(){



let amount =

Number(

document.getElementById(
"withdrawAmount"
).value

)

||0;




let feePercent = 5;



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

+

" USDT";


}



if(receiveBox){


receiveBox.innerHTML =

receive.toFixed(2)

+

" USDT";


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
).value

);



let address =

document.getElementById(
"withdrawAddress"
).value;



let security =

document.getElementById(
"withdrawSecurityCode"
).value;






let lang =

localStorage.getItem(
"VALORA_LANG"

)

||"en";





// رمز الأمان

let savedSecurity =

localStorage.getItem(
"VALORA_WITHDRAW_SECURITY"

);





if(savedSecurity && security !== savedSecurity){


showWithdrawMessage(

lang==="ar"

?

"رمز الأمان غير صحيح"

:

"Wrong security code",

false

);


return;

}







if(!amount || !address || !security){


showWithdrawMessage(

lang==="ar"

?

"يرجى تعبئة جميع البيانات"

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

)||0;







if(amount > balance){


showWithdrawMessage(

lang==="ar"

?

"الرصيد غير كافي"

:

"Insufficient balance",

false

);


return;


}







let fee =

amount * 0.05;


let receive =

amount - fee;





localStorage.setItem(

"VALORA_BALANCE",

balance - amount

);






saveWithdrawHistory(

amount,

fee,

receive,

address

);







showWithdrawMessage(

lang==="ar"

?

"تم إرسال طلب السحب بنجاح"

:

"Withdrawal submitted successfully",

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

)

||[];





history.push({

coin:withdrawCoin,

network:withdrawNetwork,

amount:amount,

fee:fee,

receive:receive,

address:address,

date:new Date().toLocaleString()

});






localStorage.setItem(

"VALORA_WITHDRAW_HISTORY",

JSON.stringify(history)

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


box.innerHTML=text;



if(success){


box.className=

"withdraw-message success";


}else{


box.className=

"withdraw-message reject";


}



}







// ==========================================
// START
// ==========================================


document.addEventListener(

"DOMContentLoaded",

function(){



if(typeof applyLanguage==="function"){


applyLanguage();


}



loadWithdrawBalance();


loadWithdrawNetworks();



});
// ==========================================
// GET WITHDRAW FEE
// ==========================================


function getWithdrawFee(){



let deposits =

JSON.parse(

localStorage.getItem(
"VALORA_DEPOSITS"
)

)

||[];





let feePercent = 20;



// البحث عن آخر دورة إيداع غير مكتملة

let activeDeposit =

deposits.find(function(item){


return item.doubled === false;


});






if(activeDeposit){



let balance =

Number(

localStorage.getItem(
"VALORA_BALANCE"
)

)

||0;




if(balance >= activeDeposit.target){



feePercent = 5;


}



}

else{


feePercent = 5;


}





return feePercent;



}








// ==========================================
// CALCULATE WITHDRAW
// ==========================================


function calculateWithdraw(){



let amountInput =

document.getElementById(
"withdrawAmount"
);



if(!amountInput){

return;

}



let amount =

Number(
amountInput.value
)

||0;





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

+

" USDT ("+

feePercent+

"%)";



}





if(receiveBox){


receiveBox.innerHTML =

receive.toFixed(2)

+

" USDT";


}



}






// ==========================================
// AUTO CALCULATE
// ==========================================


document.addEventListener(

"input",

function(e){



if(
e.target.id ===
"withdrawAmount"

){



calculateWithdraw();



}



});
// ==========================================
// SUBMIT WITHDRAW
// ==========================================


function submitWithdraw(){



let amount =

Number(

document.getElementById(
"withdrawAmount"
).value

)

||0;





let address =

document.getElementById(
"withdrawAddress"
).value;





let security =

document.getElementById(
"withdrawSecurityCode"
);



let securityValue =

security ?

security.value

:

"";







let lang =

localStorage.getItem(
"VALORA_LANG"
)

||"ar";







// التحقق من رمز الأمان


let savedCode =

localStorage.getItem(
"VALORA_WITHDRAW_SECURITY"
);





if(savedCode && securityValue !== savedCode){



showWithdrawMessage(

lang==="ar"

?

"رمز الأمان غير صحيح"

:

"Incorrect security code",

false

);



return;

}





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

)

||0;





if(amount > balance){



showWithdrawMessage(

lang==="ar"

?

"الرصيد غير كافي"

:

"Insufficient balance",

false

);



return;

}







let feePercent =

getWithdrawFee();





let fee =

amount *

(feePercent/100);





let receive =

amount-fee;







localStorage.setItem(

"VALORA_BALANCE",

balance-amount

);






saveWithdrawHistory(

amount,

fee,

receive,

address

);







showWithdrawMessage(

lang==="ar"

?

"تم إرسال طلب السحب بنجاح"

:

"Withdrawal request submitted",

true

);



}







// ==========================================
// SAVE WITHDRAW HISTORY
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

)

||[];





history.push({


coin:withdrawCoin,


network:withdrawNetwork,


amount:amount,


fee:fee,


receive:receive,


address:address,


date:new Date().toLocaleString()



});





localStorage.setItem(

"VALORA_WITHDRAW_HISTORY",

JSON.stringify(history)

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


box.innerHTML=text;





if(success){


box.className=

"withdraw-message success";


}else{


box.className=

"withdraw-message reject";


}



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
// LOAD BALANCE
// ==========================================


function loadWithdrawBalance(){



let balance =

Number(

localStorage.getItem(
"VALORA_BALANCE"
)

)

||0;





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
// CREATE SECURITY CODE
// ==========================================
// إذا لم يوجد رمز أمان يتم إنشاء رمز افتراضي


function createSecurityCode(){



let code =

localStorage.getItem(
"VALORA_WITHDRAW_SECURITY"
);





if(!code){



localStorage.setItem(

"VALORA_WITHDRAW_SECURITY",

"123456"

);



}



}







// ==========================================
// START SYSTEM
// ==========================================


document.addEventListener(

"DOMContentLoaded",

function(){



if(typeof applyLanguage==="function"){


applyLanguage();


}



loadWithdrawNetworks();


loadWithdrawBalance();


createSecurityCode();





let amountBox =

document.getElementById(
"withdrawAmount"
);



if(amountBox){


amountBox.addEventListener(

"input",

calculateWithdraw

);


}



});
