const translations = {

ar: {

home:"الرئيسية",
wallet:"المحفظة",
team:"الفريق",
settings:"الإعدادات",
language:"اللغة",

security:"رمز أمان السحب",
verify:"التحقق من الهوية",
support:"مراسلة العملاء",
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
open:"فتح"

},



en: {

home:"Home",
wallet:"Wallet",
team:"Team",
settings:"Settings",
language:"Language",

security:"Withdrawal Security",
verify:"Identity Verification",
support:"Customer Support",
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
open:"Open"

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
