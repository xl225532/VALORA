const translations = {

ar: {

home:"الرئيسية",
wallet:"المحفظة",
team:"الفريق",
settings:"الإعدادات",
language:"اللغة",

security:"رمز أمان السحب",
verify:"التحقق من الهوية",
support:"دعم",
notifications:"الإشعارات",
terms:"الشروط والأحكام",
logout:"تسجيل الخروج",

assets:"إجمالي الأصول",
password:"تغيير كلمة المرور",

username:"اسم المستخدم",
email:"البريد الإلكتروني",
phone:"رقم الهاتف",
loginCode:"رمز الدخول",
withdrawSecurity:"رمز أمان السحب",
change:"تغيير",
view:"عرض",
open:"فتح",

totalAssets:"إجمالي الأصول",
todayProfit:"أرباح اليوم",
inviteProfit:"أرباح الدعوة",
teamProfit:"أرباح الفريق",
rewardProfit:"أرباح المكافآت",
withdraw:"سحب",
deposit:"إيداع",
history:"السجل",

referralTitle:"رابط الدعوة الخاص بك",
referralCode:"كود الإحالة",
invited:"عدد المدعوين",
inviteReward:"🎁 مكافأة الدعوة",
rewardCondition:"ادعُ 10 أشخاص لديهم إيداع 500 USDT أو أكثر واحصل على",
inviteProfitTitle:"أرباح الدعوة",
teamLevels:"مستويات الفريق",

depositAmount:"الإيداع",
profit:"الربح",
level:"المستوى",
members:"الأعضاء",
percentage:"النسبة"

},



en: {

home:"Home",
wallet:"Wallet",
team:"Team",
settings:"Settings",
language:"Language",

security:"Withdrawal Security",
verify:"Identity Verification",
support:"Support",
notifications:"Notifications",
terms:"Terms & Conditions",
logout:"Logout",

assets:"Total Assets",
password:"Change Password",

username:"Username",
email:"Email",
phone:"Phone Number",
loginCode:"Login Code",
withdrawSecurity:"Withdrawal Security",
change:"Change",
view:"View",
open:"Open",

totalAssets:"Total Assets",
todayProfit:"Today's Profit",
inviteProfit:"Invite Profit",
teamProfit:"Team Profit",
rewardProfit:"Reward Profit",
withdraw:"Withdraw",
deposit:"Deposit",
history:"History",

referralTitle:"Your Referral Link",
referralCode:"Referral Code",
invited:"Invited Members",
inviteReward:"🎁 Referral Reward",
rewardCondition:"Invite 10 people with deposits of 500 USDT or more and get",
inviteProfitTitle:"Referral Earnings",
teamLevels:"Team Levels",

depositAmount:"Deposit",
profit:"Profit",
level:"Level",
members:"Members",
percentage:"Percentage"

}

};





function applyLanguage(){


let lang = localStorage.getItem("VALORA_LANG") || "ar";


document.documentElement.lang = lang;



if(lang === "ar"){

document.documentElement.dir="rtl";

}else{

document.documentElement.dir="ltr";

}



document.querySelectorAll("[data-lang]").forEach(function(el){


let key = el.dataset.lang;


if(translations[lang] && translations[lang][key]){


el.innerText = translations[lang][key];


}


});


}





function setLanguage(lang){


localStorage.setItem(
"VALORA_LANG",
lang
);


applyLanguage();


}





document.addEventListener("DOMContentLoaded",function(){


applyLanguage();


});
