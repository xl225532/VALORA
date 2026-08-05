// ===============================
// VALORA Smart Sync System
// ===============================


// إعدادات الصفقات من الإدارة (مؤقتة)
// لاحقاً تنتقل إلى قاعدة البيانات

const tradeCodes = {


"VALORA2026":{

type:"normal",

profit:2,

limit:1

},


"SYNC8888":{

type:"normal",

profit:2,

limit:1

},


"TRADE777":{

type:"normal",

profit:2,

limit:1

},



"VIP2026":{

type:"deposit",

profit:7,

minDeposit:500,

limit:1

},



"BTC1000":{

type:"team",

profit:7,

minTeam:20,

limit:1

}


};





// تحميل الصفقات السابقة

let trades =

JSON.parse(

localStorage.getItem("VALORA_TRADES")

)

|| [];








// ===============================
// بيانات المستخدم
// ===============================


function getUserData(){



return {


deposit:

Number(

localStorage.getItem("VALORA_DEPOSIT")

)

||0,



team:

Number(

localStorage.getItem("VALORA_REAL_TEAM")

)

||0,



tradeCount:

Number(

localStorage.getItem("VALORA_TRADE_COUNT")

)

||0


};



}









// ===============================
// فحص صلاحية الصفقة
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

يرجى إدخال كود الصفقة

</div>

`;

return;

}






let config = tradeCodes[code];






if(!config){


result.innerHTML=`

<div class="error">

✕ كود الصفقة غير صحيح

</div>

`;

return;


}







let user =

getUserData();







// فحص الصفقة الخاصة بالإيداع



if(config.type==="deposit"){



if(user.deposit < config.minDeposit){



result.innerHTML=`

<div class="error">

هذه الصفقة تحتاج إيداع 500 USDT أو أكثر

</div>

`;

return;


}



}







// فحص صفقة الفريق



if(config.type==="team"){



if(user.team < config.minTeam){



result.innerHTML=`

<div class="error">

هذه الصفقة تحتاج فريق لديه 20 عضو بإيداعات حقيقية

</div>

`;

return;


}



}
// ===============================
// بدء الصفقة
// ===============================


let activeTrade =

JSON.parse(

localStorage.getItem("VALORA_ACTIVE_TRADE")

)

|| null;







function startTrade(code,config){



let user = getUserData();




let trade = {


code:code,


profit:config.profit,


start:

Date.now(),



end:

Date.now() + (15 * 60 * 1000),



status:"قيد التنفيذ"



};






localStorage.setItem(

"VALORA_ACTIVE_TRADE",

JSON.stringify(trade)

);






localStorage.setItem(

"VALORA_TRADE_COUNT",

user.tradeCount + 1

);





showTradeTimer();



}









// ===============================
// بعد التحقق
// ===============================


function acceptTrade(code,config){



startTrade(code,config);



let result =

document.getElementById("resultBox");



result.innerHTML=`

<div class="success">

✓ تم تفعيل الصفقة

<br>

جاري التنفيذ لمدة 15 دقيقة

</div>

`;



}





// ===============================
// المؤقت
// ===============================


function showTradeTimer(){



let result =

document.getElementById("resultBox");



let timer = setInterval(function(){



let trade =

JSON.parse(

localStorage.getItem("VALORA_ACTIVE_TRADE")

);





if(!trade){

clearInterval(timer);

return;

}






let remain =

trade.end - Date.now();






if(remain <=0){



clearInterval(timer);



finishTrade();



return;

}







let minutes =

Math.floor(

remain / 60000

);



let seconds =

Math.floor(

(remain % 60000) / 1000

);






result.innerHTML=`

<div class="success">

الصفقة قيد التنفيذ

<br>

${minutes}:${seconds.toString().padStart(2,"0")}

</div>

`;




},1000);



}









// ===============================
// إنهاء الصفقة وإضافة الربح
// ===============================


function finishTrade(){



let trade =

JSON.parse(

localStorage.getItem("VALORA_ACTIVE_TRADE")

);






if(!trade){

return;

}







let balance =

Number(

localStorage.getItem("VALORA_BALANCE")

)

||0;







let profit =

balance *

(trade.profit / 100);







let today =

Number(

localStorage.getItem("VALORA_TODAY_PROFIT")

)

||0;







today += profit;








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
