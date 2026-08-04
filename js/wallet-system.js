// ===============================
// VALORA Wallet System
// ===============================


function loadWallet(){



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






// أرباح الدعوة

let inviteProfit =

Number(
localStorage.getItem("VALORA_INVITE_PROFIT")
) || 0;






// أرباح الفريق

let teamProfit =

Number(
localStorage.getItem("VALORA_TEAM_PROFIT")
) || 0;






// المكافآت

let rewardProfit =

Number(
localStorage.getItem("VALORA_REWARD_PROFIT")
) || 0;







// إجمالي الأصول
// الرصيد + أرباح اليوم فقط

let totalAssets =

balance + todayProfit;








// الصفحة الرئيسية

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







// صفحة المحفظة

let inviteBox =

document.getElementById("inviteProfit");



if(inviteBox){


inviteBox.innerHTML =

inviteProfit.toFixed(2)

+

" USDT";


}





let teamBox =

document.getElementById("teamProfit");



if(teamBox){


teamBox.innerHTML =

teamProfit.toFixed(2)

+

" USDT";


}





let rewardBox =

document.getElementById("rewardProfit");



if(rewardBox){


rewardBox.innerHTML =

rewardProfit.toFixed(2)

+

" USDT";


}



}






document.addEventListener(

"DOMContentLoaded",

loadWallet

);
