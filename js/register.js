// ===============================
// VALORA Demo Trading System
// ===============================


let tradePrice = 67500;





function loadTradeBalance(){


let balance =

Number(

localStorage.getItem("VALORA_BALANCE")

) || 0;



let deposits =

Number(

localStorage.getItem("VALORA_CONFIRMED_DEPOSITS")

) || 0;



let today =

Number(

localStorage.getItem("VALORA_TODAY_PROFIT")

) || 0;




let total =

balance

+

deposits

+

today;





let box =

document.getElementById("tradeBalance");



if(box){

box.innerHTML =

total.toFixed(2)

+

" USDT";

}



}









function buyTrade(){



let amount =

Number(

document.getElementById("tradeAmount").value

);





if(!amount || amount <= 0){


alert("أدخل مبلغ التداول");


return;


}






let balance =

Number(

localStorage.getItem("VALORA_BALANCE")

) || 0;



let deposits =

Number(

localStorage.getItem("VALORA_CONFIRMED_DEPOSITS")

) || 0;



let today =

Number(

localStorage.getItem("VALORA_TODAY_PROFIT")

) || 0;






let available =

balance

+

deposits

+

today;







if(amount > available){


alert("الرصيد غير كافي");


return;


}








saveTrade({

type:"شراء",

amount:amount,

price:tradePrice,

date:new Date().toLocaleString("ar-EG")

});






alert("تم تنفيذ عملية الشراء التجريبية");



}









function sellTrade(){



let amount =

Number(

document.getElementById("tradeAmount").value

);






if(!amount || amount <= 0){


alert("أدخل مبلغ التداول");


return;


}






// ربح تجريبي 2%


let profit =

amount * 0.02;







let todayProfit =

Number(

localStorage.getItem("VALORA_TODAY_PROFIT")

) || 0;






todayProfit += profit;







localStorage.setItem(

"VALORA_TODAY_PROFIT",

todayProfit

);








saveTrade({

type:"بيع",

amount:amount,

profit:profit,

price:tradePrice,

date:new Date().toLocaleString("ar-EG")

});







alert(

"تم البيع وربحك التجريبي: "

+

profit.toFixed(2)

+

" USDT"

);






loadTradeBalance();



}









function saveTrade(data){



let trades =

JSON.parse(

localStorage.getItem("VALORA_TRADES")

)

|| [];





trades.push(data);





localStorage.setItem(

"VALORA_TRADES",

JSON.stringify(trades)

);





showTrades();



}









function showTrades(){



let box =

document.getElementById("tradeHistory");



if(!box){

return;

}





let trades =

JSON.parse(

localStorage.getItem("VALORA_TRADES")

)

|| [];






box.innerHTML="";







if(trades.length===0){


box.innerHTML=

'<div class="empty">لا توجد عمليات</div>';



return;


}








trades.reverse().forEach(item=>{



let div =

document.createElement("div");





div.className="trade-item";





div.innerHTML = `


<strong>

${item.type}

</strong>


<p>

المبلغ:

${item.amount} USDT

</p>



<p>

السعر:

${item.price}$

</p>



<p>

${item.date}

</p>



`;





box.appendChild(div);



});



}









document.addEventListener(

"DOMContentLoaded",

function(){


loadTradeBalance();


showTrades();


}

);
