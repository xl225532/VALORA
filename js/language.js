const translations = {

ar: {

home: "الرئيسية",
wallet: "المحفظة",
team: "الفريق",
settings: "الإعدادات",
language: "اللغة",
security: "رمز أمان السحب",
verify: "التحقق من الهوية",
support: "مراسلة العملاء",
notifications: "الإشعارات",
terms: "الشروط والأحكام",
logout: "تسجيل الخروج"

},


en: {

home: "Home",
wallet: "Wallet",
team: "Team",
settings: "Settings",
language: "Language",
security: "Withdrawal Security",
verify: "Identity Verification",
support: "Customer Support",
notifications: "Notifications",
terms: "Terms & Conditions",
logout: "Logout"

}

};





function applyLanguage(){


let current = localStorage.getItem("VALORA_LANG");



if(!current){

current = "ar";

}



document.querySelectorAll("[data-lang]").forEach(function(el){


let key = el.getAttribute("data-lang");


if(translations[current][key]){


el.innerText = translations[current][key];


}



});



}






function changeLanguage(lang){


localStorage.setItem("VALORA_LANG",lang);



location.reload();


}
