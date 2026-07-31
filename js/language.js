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
logout:"تسجيل الخروج"

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
logout:"Logout"

}

};





function applyLanguage(){


let lang = localStorage.getItem("VALORA_LANG") || "ar";



document.documentElement.lang = lang;



if(lang=="ar"){

document.documentElement.dir="rtl";

}else{

document.documentElement.dir="ltr";

}





document.querySelectorAll("[data-lang]").forEach(function(el){



let key=el.dataset.lang;



if(translations[lang][key]){


el.innerText=translations[lang][key];


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
