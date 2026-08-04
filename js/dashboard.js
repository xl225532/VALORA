// ===============================
// VALORA Dashboard System
// ===============================


function loadDashboard(){



// الرصيد الأساسي

let balance =

Number(

localStorage.getItem("VALORA_BALANCE")

) || 0;







// أرباح اليوم فقط

let todayProfit =

Number(

localStorage.getItem("VALORA_TODAY_PROFIT")

) || 0;








// إجمالي الأصول

let totalAssets =

balance + todayProfit;








let balanceBox =

document.getElementById("balance");





let todayBox =

document.getElementById("todayProfit");








if(balanceBox){


balanceBox.innerHTML =

totalAssets.toFixed(2)

+

' <small>USDT</small>';


}








if(todayBox){


todayBox.innerHTML =

"+"

+

todayProfit.toFixed(2)

+

" USDT";


}







}



// تشغيل عند فتح الصفحة

document.addEventListener(

"DOMContentLoaded",

loadDashboard

);
