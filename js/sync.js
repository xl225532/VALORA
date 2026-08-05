// ===============================
// VALORA Smart Sync System
// ===============================


const tradeCodes = {

    "VALORA2026":{
        type:"normal",
        profit:2
    },

    "SYNC8888":{
        type:"normal",
        profit:2
    },

    "TRADE777":{
        type:"normal",
        profit:2
    },


    "VIP2026":{
        type:"deposit",
        profit:7,
        minDeposit:500
    },


    "BTC1000":{
        type:"team",
        profit:7,
        minTeam:20
    }

};



// الصفقات السابقة

let trades =
JSON.parse(
localStorage.getItem("VALORA_TRADES")
)
|| [];




// العملة المختارة

let selectedCoin = "BTC";





// ===============================
// اختيار العملة
// ===============================

document.querySelectorAll(".coin").forEach(coin=>{


coin.addEventListener("click",function(){


document.querySelectorAll(".coin")
.forEach(c=>c.classList.remove("active"));



this.classList.add("active");



selectedCoin =
this.querySelector("h4").innerText;



});



});







// ===============================
// بيانات المستخدم
// ===============================

function getUserData(){


return {


deposit:

Number(localStorage.getItem("VALORA_DEPOSIT"))
||0,


team:

Number(localStorage.getItem("VALORA_REAL_TEAM"))
||0


};


}








// ===============================
// فحص الكود
// ===============================

function checkTrade(){


let input =
document.getElementById("tradeCode");


let code =
input.value.trim();


let result =
document.getElementById("resultBox");



if(code===""){


result.innerHTML=`

<div class="error">

⚠️ يرجى إدخال كود الصفقة

</div>

`;

return;

}




let config =
tradeCodes[code];




if(!config){


result.innerHTML=`

<div class="error">

✕ كود الصفقة غير صحيح

<br>

تأكد من الكود وحاول مرة أخرى

</div>

`;

return;

}




let user =
getUserData();





if(config.type==="deposit" && user.deposit < 500){


result.innerHTML=`

<div class="error">

هذه الصفقة خاصة بمن لديه إيداع 500 USDT أو أكثر

</div>

`;

return;

}





if(config.type==="team" && user.team < 20){


result.innerHTML=`

<div class="error">

هذه الصفقة تحتاج فريق 20 عضو بإيداعات حقيقية

</div>

`;

return;

}





startTrade(code,config);



input.value="";


}








// ===============================
// بدء الصفقة
// ===============================

function startTrade(code,config){



let trade={


coin:selectedCoin + "/USDT",


code:code,


profit:config.profit,


start:Date.now(),


end:Date.now()+900000,


status:"قيد التنفيذ"



};



localStorage.setItem(

"VALORA_ACTIVE_TRADE",

JSON.stringify(trade)

);



showTradeTimer();



}









// ===============================
// المؤقت
// ===============================

function showTradeTimer(){


let result =
document.getElementById("resultBox");



let timer=setInterval(()=>{


let trade =
JSON.parse(
localStorage.getItem("VALORA_ACTIVE_TRADE")
);



if(!trade){

clearInterval(timer);

return;

}



let remain =
trade.end-Date.now();




if(remain<=0){


clearInterval(timer);

finishTrade();


return;

}





let min =
Math.floor(remain/60000);



let sec =
Math.floor((remain%60000)/1000);




result.innerHTML=`

<div class="success">

✓ الصفقة قيد التنفيذ

<br>

العملة:
${trade.coin}

<br>

الربح:
${trade.profit}%

<div class="trade-time">

${min}:${sec.toString().padStart(2,"0")}

</div>


</div>

`;



},1000);



}










// ===============================
// إنهاء الصفقة
// ===============================

function finishTrade(){


let trade =
JSON.parse(
localStorage.getItem("VALORA_ACTIVE_TRADE")
);



if(!trade)return;




let balance =
Number(localStorage.getItem("VALORA_BALANCE"))
||0;



let profit =
balance * trade.profit /100;




let today =
Number(localStorage.getItem("VALORA_TODAY_PROFIT"))
||0;



today+=profit;



localStorage.setItem(
"VALORA_TODAY_PROFIT",
today
);




trade.status="مكتملة";



trades.push(trade);



localStorage.setItem(
"VALORA_TRADES",
JSON.stringify(trades)
);



localStorage.removeItem(
"VALORA_ACTIVE_TRADE"
);





document.getElementById("resultBox").innerHTML=`

<div class="success">

✓ اكتملت الصفقة

<br>

الربح:
${profit.toFixed(2)} USDT

</div>

`;



loadTrades();


}








// ===============================
// عرض الصفقات
// ===============================

function loadTrades(){


let box =
document.getElementById("ordersList");


if(!box)return;




if(trades.length===0){


box.innerHTML=`

<div class="empty-order">

لا توجد صفقات حالياً

</div>

`;

return;

}




box.innerHTML="";



[...trades].reverse().forEach(t=>{


box.innerHTML+=`

<div class="order-card">


<div>

<strong>${t.coin}</strong>

<br>

<span>
الكود: ${t.code}
</span>


</div>



<div>

<span>${t.status}</span>

<br>

<b class="success-text">
${t.profit}%
</b>


</div>


</div>

`;



});


}









// ===============================
// تحديث آخر مزامنة
// ===============================

function updateSyncTime(){


let box =
document.querySelector(".status-item strong");


if(!box)return;



let seconds=0;



setInterval(()=>{


seconds++;


box.innerHTML =
"قبل "+seconds+" ثانية";



},1000);



}






document.addEventListener(
"DOMContentLoaded",
()=>{


loadTrades();

updateSyncTime();


}

);
