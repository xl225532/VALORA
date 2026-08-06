// ======================================
// VALORA Language System
// ======================================

// اللغة الافتراضية
const DEFAULT_LANG = "en";

// قراءة اللغة المحفوظة
let currentLang =
localStorage.getItem("VALORA_LANG") || DEFAULT_LANG;

// حفظ اللغة
function setLanguage(lang){

    localStorage.setItem("VALORA_LANG", lang);

    location.reload();

}

// الحصول على اللغة الحالية
function getLanguage(){

    return localStorage.getItem("VALORA_LANG") || DEFAULT_LANG;

}
