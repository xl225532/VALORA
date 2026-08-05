// ===============================
// VALORA Smart Sync System
// ===============================


// إعدادات الصفقات من الإدارة
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




// حفظ الصفقات

let trades = JSON.parse(
    localStorage.getItem("VALORA_TRADES")
) || [];




// ===============================
// بيانات المستخدم
// ===============================

function getUserData(){

    return {

        deposit:
        Number(localStorage.getItem("VALORA_DEPOSIT")) || 0,


        team:
        Number(localStorage.getItem("VALORA_REAL_TEAM")) || 0

    };

}





// ===============================
// التحقق من الصفقة
// ===============================

function checkTrade(){


    let input =
    document.getElementById("tradeCode");


    let code =
    input.value.trim();


    let result =
    document.getElementById("resultBox");



    if(code === ""){

        result.innerHTML = `
        <div class="error">
        ⚠️ يرجى إدخال كود الصفقة
        </div>
        `;

        return;
    }




    let config = tradeCodes[code];



    if(!config){

        result.innerHTML = `
        <div class="error">
        ❌ كود الصفقة غير صحيح
        </div>
        `;

        return;

    }





    // منع وجود صفقة قيد التنفيذ

    let active =
    localStorage.getItem("VALORA_ACTIVE_TRADE");


    if(active){

        result.innerHTML = `
        <div class="error">
        ⚠️ لديك صفقة قيد التنفيذ
        </div>
        `;

        return;
    }






    let user = getUserData();




    // صفقة الإيداع

    if(config.type === "deposit"){


        if(user.deposit < config.minDeposit){


            result.innerHTML = `
            <div class="error">
            هذه الصفقة خاصة بأصحاب الإيداع 500 USDT أو أكثر
            </div>
            `;

            return;

        }

    }






    // صفقة الفريق

    if(config.type === "team"){


        if(user.team < config.minTeam){


            result.innerHTML = `
            <div class="error">
            هذه الصفقة تحتاج فريق 20 عضو بإيداعات حقيقية
            </div>
            `;

            return;

        }

    }






    startTrade(code,config);


    input.value="";



}









// ===============================
// بدء الصفقة
// ===============================


function startTrade(code,config){



    let trade = {


        code:code,


        profit:config.profit,


        coin:
        document.querySelector(".coin.active h4")?.innerText || "BTC",



        start:Date.now(),



        end:
        Date.now() + (15 * 60 * 1000),



        status:"قيد التنفيذ"


    };






    localStorage.setItem(

        "VALORA_ACTIVE_TRADE",

        JSON.stringify(trade)

    );




    showMessage(

    `
    <div class="success">
    ✅ تم تفعيل الصفقة
    <br>
    جاري التنفيذ لمدة 15 دقيقة
    </div>
    `

    );



    startTimer();


}









// ===============================
// الرسائل
// ===============================

function showMessage(html){

    let box =
    document.getElementById("resultBox");

    if(box){

        box.innerHTML = html;

    }

}









// ===============================
// المؤقت
// ===============================

function startTimer(){



let timer =
setInterval(()=>{


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





if(remain <= 0){


clearInterval(timer);


finishTrade();


return;

}





let min =
Math.floor(remain / 60000);



let sec =
Math.floor((remain % 60000)/1000);



showMessage(`

<div class="success">

⏳ الصفقة قيد التنفيذ

<br>

${min}:${sec.toString().padStart(2,"0")}

</div>

`);




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



if(!trade){

return;

}




let balance =
Number(
localStorage.getItem("VALORA_BALANCE")
)||0;




let profit =
balance * (trade.profit /100);





let today =
Number(
localStorage.getItem("VALORA_TODAY_PROFIT")
)||0;



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




showMessage(`

<div class="success">

✅ اكتملت الصفقة

<br>

الربح:
${profit.toFixed(2)}
USDT

</div>

`);



loadTrades();



}









// ===============================
// عرض سجل الصفقات
// ===============================


function loadTrades(){


let box =
document.getElementById("ordersList");



if(!box) return;




if(trades.length===0){


box.innerHTML=`

<div class="empty-order">

لا توجد صفقات حالياً

</div>

`;

return;


}




box.innerHTML="";




trades.slice().reverse().forEach(t=>{


box.innerHTML += `

<div class="order-card">


<strong>

${t.coin}

</strong>


<br>

الكود:
${t.code}


<br>

الربح:
${t.profit}%


<br>

<span>

${t.status}

</span>


</div>


`;



});



}








// ===============================
// اختيار العملات
// ===============================


document.querySelectorAll(".coin")
.forEach(coin=>{


coin.onclick=function(){


document.querySelectorAll(".coin")
.forEach(c=>c.classList.remove("active"));


this.classList.add("active");


};


});









// تشغيل الصفحة

document.addEventListener(

"DOMContentLoaded",

()=>{


loadTrades();


let active =
localStorage.getItem("VALORA_ACTIVE_TRADE");


if(active){

startTimer();

}


}

);
