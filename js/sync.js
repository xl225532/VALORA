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
// LANGUAGE HELPER
// ===============================


function syncTranslate(key,fallback){

    try{

        let lang =
        localStorage.getItem("VALORA_LANG") || "ar";


        if(
        window.VALORA_LANG &&
        window.VALORA_LANG.translations &&
        window.VALORA_LANG.translations[lang] &&
        window.VALORA_LANG.translations[lang][key]
        ){

            return window.VALORA_LANG.translations[lang][key];

        }


    }catch(e){

        console.log(e);

    }


    return fallback;

}







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

⚠️ ${syncTranslate(
"enter_trade_error",
"يرجى إدخال كود الصفقة"
)}

</div>

`;

return;

}




let config =
tradeCodes[code];




if(!config){


result.innerHTML=`

<div class="error">

✕ ${syncTranslate(
"invalid_trade_code",
"كود الصفقة غير صحيح"
)}

<br>

${syncTranslate(
"check_code_again",
"تأكد من الكود وحاول مرة أخرى"
)}

</div>

`;

return;

}




let user =
getUserData();





if(config.type==="deposit" && user.deposit < 500){


result.innerHTML=`

<div class="error">

${syncTranslate(
"deposit_trade_error",
"هذه الصفقة خاصة بمن لديه إيداع 500 USDT أو أكثر"
)}

</div>

`;

return;

}





if(config.type==="team" && user.team < 20){


result.innerHTML=`

<div class="error">

${syncTranslate(
"team_trade_error",
"هذه الصفقة تحتاج فريق 20 عضو بإيداعات حقيقية"
)}

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


status:syncTranslate(
"trade_running",
"قيد التنفيذ"
)


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

✓ ${syncTranslate(
"trade_running",
"الصفقة قيد التنفيذ"
)}

<br>

${syncTranslate(
"selected_coin",
"العملة المختارة"
)}:

${trade.coin}

<br>

${syncTranslate(
"profit",
"الربح"
)}:

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




trade.status = syncTranslate(
"trade_completed",
"مكتملة"
);



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

✓ ${syncTranslate(
"trade_completed",
"اكتملت الصفقة"
)}

<br>

${syncTranslate(
"profit",
"الربح"
)}:

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

${syncTranslate(
"no_orders",
"لا توجد صفقات حالياً"
)}

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

${syncTranslate(
"trade_code",
"الكود"
)}:

${t.code}

</span>


</div>



<div>

<span>

${t.status}

</span>

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
document.getElementById("lastSync");


if(!box)return;



let seconds=0;



setInterval(()=>{


seconds++;


box.innerHTML =

syncTranslate(
"before",
"قبل"
)
+" "
+seconds+
" "
+
syncTranslate(
"seconds",
"ثانية"
);



},1000);



}








// ===============================
// LANGUAGE HELPER
// ===============================

function syncTranslate(key,fallback){

try{


let lang =
localStorage.getItem("VALORA_LANG") || "ar";



if(
window.VALORA_LANG &&
window.VALORA_LANG.translations &&
window.VALORA_LANG.translations[lang] &&
window.VALORA_LANG.translations[lang][key]
){

return window.VALORA_LANG.translations[lang][key];

}


}catch(e){


console.log(e);


}



return fallback;


}








// ===============================
// START
// ===============================

document.addEventListener(
"DOMContentLoaded",
()=>{


loadTrades();

updateSyncTime();


if(typeof applyLanguage==="function"){

applyLanguage();

}


});
