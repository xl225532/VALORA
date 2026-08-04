let trades = JSON.parse(localStorage.getItem("VALORA_TRADES")) || [];





function checkTrade(){


let input = document.getElementById("tradeCode");

let code = input.value.trim();

let result = document.getElementById("resultBox");



if(code.length < 5){


result.innerHTML = `

<div class="error">

✕ كود الصفقة غير صحيح

<br>

يرجى إدخال كود صالح

</div>

`;

return;

}





let exists = trades.find(function(item){

return item.code === code;

});



if(exists){


result.innerHTML = `

<div class="error">

⚠️ هذا الكود مستخدم مسبقاً

</div>

`;

return;


}





result.innerHTML = `

<div class="success">

✓ تم التحقق من الصفقة بنجاح

</div>

`;





let trade = {


coin:"BTC/USDT",

code:code,

date:new Date().toLocaleString("ar-EG"),

status:"مكتملة"


};




trades.push(trade);



localStorage.setItem(

"VALORA_TRADES",

JSON.stringify(trades)

);




input.value="";



loadTrades();



}








function loadTrades(){


let box = document.getElementById("ordersList");



if(!box) return;




if(trades.length === 0){


box.innerHTML = `

<div class="empty-order">

لا توجد صفقات حالياً

</div>

`;

return;


}





box.innerHTML="";





let list = [...trades].reverse();




list.forEach(function(item){



box.innerHTML += `

<div class="order-card">


<div>

<strong>

${item.coin}

</strong>


<br>


<span>

الكود: ${item.code}

</span>


</div>




<div>

<span>

${item.date}

</span>


<br>


<b class="success-text">

✓ ${item.status}

</b>


</div>



</div>

`;



});



}






document.addEventListener(

"DOMContentLoaded",

function(){


loadTrades();


}

);
document.querySelectorAll(".coin").forEach(function(coin){

coin.onclick=function(){


document.querySelectorAll(".coin").forEach(function(c){

c.classList.remove("active");

});


this.classList.add("active");


}


});
