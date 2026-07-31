const translations = {

ar: {

home: "الرئيسية",
wallet: "المحفظة",
team: "الفريق",
settings: "الإعدادات",
language: "اللغة",
security: "رمز أمان السحب",
verify: "التحقق من الهوية",
support: "مراسلة العملاء"

},


en: {

home: "Home",
wallet: "Wallet",
team: "Team",
settings: "Settings",
language: "Language",
security: "Withdrawal Security",
verify: "Identity Verification",
support: "Customer Support"

}

};



function applyLanguage(){


let lang = localStorage.getItem("VALORA_LANGUAGE");


if(!lang){

lang="العربية";

}



let current = lang.includes("English") ? "en" : "ar";



document.querySelectorAll("[data-lang]").forEach(function(el){


let key = el.getAttribute("data-lang");


el.innerText = translations[current][key];


});


}
