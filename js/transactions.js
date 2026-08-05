// ===============================
// VALORA Transactions System
// ===============================


function loadTransactions(){


let box = document.getElementById("transactionsList");



let transactions =

JSON.parse(

localStorage.getItem("VALORA_TRANSACTIONS")

)

|| [];




if(transactions.length === 0){


box.innerHTML = `

<div class="empty-history">

لا توجد عمليات حالياً

</div>

`;

return;


}





box.innerHTML = "";





transactions.reverse().forEach(function(item){



let typeClass = "";

let typeName = "";




if(item.type === "deposit"){

typeClass = "deposit";

typeName = "إيداع";

}



else if(item.type === "withdraw"){


typeClass = "withdraw";

typeName = "سحب";


}



else{


typeClass = "profit";

typeName = "أرباح";


}





box.innerHTML += `


<div class="transaction-item">


<div>


<div class="transaction-title">

${typeName}

</div>


<div class="transaction-date">

${item.date || "اليوم"}

</div>


</div>



<div class="transaction-value ${typeClass}">

${item.amount}

 USDT

</div>


</div>


`;



});



}





document.addEventListener(

"DOMContentLoaded",

loadTransactions

)
