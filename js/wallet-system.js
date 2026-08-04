// ===============================
// VALORA Wallet System
// ===============================


function loadWallet(){


let balance =
Number(localStorage.getItem(
"VALORA_BALANCE"
)) || 0;



let today =
Number(localStorage.getItem(
"VALORA_TODAY_PROFIT"
)) || 0;



let total =
balance + today;



let balanceBox =
document.getElementById(
"balance"
);



let todayBox =
document.getElementById(
"todayProfit"
);



if(balanceBox){

balanceBox.innerHTML =
total.toFixed(2)
+
' <small>USDT</small>';

}



if(todayBox){

todayBox.innerHTML =
"+"+
today.toFixed(2)
+
" USDT";

}



}



// تشغيل

document.addEventListener(
"DOMContentLoaded",
loadWallet
);
// ===============================
// VALORA Separate Profits
// ===============================


function getReferralProfit(){

    return Number(
        localStorage.getItem(
            "VALORA_REFERRAL_PROFIT"
        )
    ) || 0;

}



function getTeamProfit(){

    return Number(
        localStorage.getItem(
            "VALORA_TEAM_PROFIT"
        )
    ) || 0;

}



function getRewardProfit(){

    return Number(
        localStorage.getItem(
            "VALORA_REWARD_PROFIT"
        )
    ) || 0;

}
