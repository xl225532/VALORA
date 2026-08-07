// ==========================================
// VALORA
// GLOBAL LANGUAGE SYSTEM
// ==========================================
//
// Languages:
// ar = Arabic
// en = English
//
// Storage:
// VALORA_LANG
//
// ==========================================

(function(){

"use strict";


// ==========================================
// SETTINGS
// ==========================================

const STORAGE_KEY = "VALORA_LANG";

const DEFAULT_LANGUAGE = "en";

const RTL_LANGUAGES = [
    "ar"
];



// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {


en:{


/* GENERAL */

home:
"Home",

dashboard:
"Dashboard",

wallet:
"Wallet",

assets:
"Total Assets",

team:
"Team",

sync:
"Sync",

settings:
"Settings",

language:
"Language",

notifications:
"Notifications",

support:
"Customer Support",

terms:
"Terms & Conditions",

security:
"Withdrawal Security Code",

verify:
"Identity Verification",

password:
"Change Password",

logout:
"Logout",

application:
"VALORA App",



/* ACCOUNT */

account:
"My Account",

username:
"Username",

email:
"Email",

phone:
"Phone Number",

uid:
"UID",



/* DASHBOARD */

today_profit:
"Today's Profit",

markets:
"Markets",

bitcoin:
"Bitcoin",

ethereum:
"Ethereum",

tether:
"Tether",

tron:
"TRON",

ripple:
"XRP",

solana:
"Solana",



/* LOGIN */

login_subtitle:
"Login to your account",

email_phone:
"Email or Phone Number",

email_phone_placeholder:
"Enter Email or Phone Number",

password:
"Password",

password_placeholder:
"Enter Password",

login_btn:
"Login",

forgot_password:
"Forgot Password?",

create_account:
"Create Account",



/* WALLET */

wallet_title:
"Wallet",

deposit:
"Deposit",

withdraw:
"Withdraw",

transaction_history:
"Transaction History",



/* PROFITS */

today:
"Today's Profit",

invite_profit:
"Invitation Profit",

team_profit:
"Team Profit",

reward_profit:
"Reward Profit",



/* LANGUAGE */

language_title:
"Language",

language_subtitle:
"Choose your preferred language",

english:
"English",

arabic:
"Arabic",

default_language:
"Default Language",

save_language:
"Language will be saved automatically",
    
// ==========================================
// CONTINUE ENGLISH
// ==========================================


/* DEPOSIT */

deposit_title:
"Deposit Coins",

deposit_subtitle:
"Choose coin and network to display deposit address",

deposit_network:
"Deposit Network",

deposit_address:
"Deposit Address",

copy:
"Copy",

deposit_auto_credit:
"Balance will be added automatically",

deposit_auto_credit_text:
"After sending coins to the deposit address, the transfer will be detected and your balance will be added after network confirmation.",

deposit_warning_1:
"Send coins only to the displayed address.",

deposit_warning_2:
"Make sure to select the same network before transferring.",

deposit_warning_3:
"Transfer through another network may result in loss of funds.",

deposit_warning_4:
"After blockchain confirmation, the balance will be added automatically.",

deposit_copied:
"Deposit address copied",



/* SYNC */

sync_title:
"Smart Sync",

sync_subtitle:
"Sync your trades easily and securely",

connected:
"Connected",

last_sync:
"Last Sync",

selected_coin:
"Selected Coin",

server:
"Server",

verify_trade:
"Verify Trade",

enter_trade_code:
"Enter trade code",

check:
"Check",

latest_orders:
"Latest Orders",

no_orders:
"No orders currently",



/* TEAM */

my_team:
"My Team",

team_members:
"Team Members",

referral:
"Referral",

referral_code:
"Referral Code",

copied:
"Copied",



/* COMMON */

save:
"Save",

cancel:
"Cancel",

confirm:
"Confirm",

close:
"Close",

back:
"Back",

next:
"Next",

submit:
"Submit",

loading:
"Loading...",


},



// ==========================================
// ARABIC
// ==========================================


ar:{


home:
"الرئيسية",

dashboard:
"الرئيسية",

wallet:
"المحفظة",

assets:
"إجمالي الأصول",

team:
"الفريق",

sync:
"التزامن",

settings:
"الإعدادات",

language:
"اللغة",

notifications:
"الإشعارات",

support:
"مراسلة العملاء",

terms:
"الشروط والأحكام",

security:
"رمز أمان السحب",

verify:
"التحقق من الهوية",

password:
"تغيير كلمة المرور",

logout:
"تسجيل الخروج",

application:
"تطبيق VALORA",



account:
"حسابي",

username:
"اسم المستخدم",

email:
"البريد الإلكتروني",

phone:
"رقم الهاتف",

uid:
"UID",



today_profit:
"أرباح اليوم",

markets:
"الأسواق",

bitcoin:
"Bitcoin",

ethereum:
"Ethereum",

tether:
"Tether",

tron:
"TRON",

ripple:
"XRP",

solana:
"Solana",



login_subtitle:
"تسجيل الدخول إلى حسابك",

email_phone:
"البريد الإلكتروني أو رقم الهاتف",

email_phone_placeholder:
"أدخل البريد الإلكتروني أو رقم الهاتف",

password:
"كلمة المرور",

password_placeholder:
"أدخل كلمة المرور",

login_btn:
"تسجيل الدخول",

forgot_password:
"نسيت كلمة المرور؟",

create_account:
"إنشاء حساب",


wallet_title:
"المحفظة",

deposit:
"إيداع",

withdraw:
"سحب",

transaction_history:
"سجل العمليات",


today:
"أرباح اليوم",

invite_profit:
"أرباح الدعوة",

team_profit:
"أرباح الفريق",

reward_profit:
"أرباح المكافآت",


language_title:
"اللغة",

language_subtitle:
"اختر لغتك المفضلة",

english:
"English",

arabic:
"العربية",

default_language:
"اللغة الافتراضية",

save_language:
"سيتم حفظ اللغة تلقائياً",
   
// ==========================================
// COMPLETE ARABIC TRANSLATIONS
// ==========================================


deposit_title:
"إيداع العملات",

deposit_subtitle:
"اختر العملة والشبكة لعرض عنوان الإيداع",

deposit_network:
"شبكة الإيداع",

deposit_address:
"عنوان الإيداع",

copy:
"نسخ",

deposit_auto_credit:
"سيتم إضافة الرصيد تلقائياً",

deposit_auto_credit_text:
"بعد إرسال العملات إلى عنوان الإيداع سيتم اكتشاف التحويل وإضافة الرصيد بعد تأكيد الشبكة.",

deposit_warning_1:
"أرسل العملات إلى العنوان الظاهر فقط.",

deposit_warning_2:
"تأكد من اختيار نفس الشبكة قبل التحويل.",

deposit_warning_3:
"أي تحويل عبر شبكة مختلفة قد يؤدي إلى فقدان الأموال.",

deposit_warning_4:
"بعد تأكيد التحويل سيتم إضافة الرصيد تلقائياً.",

deposit_copied:
"تم نسخ عنوان الإيداع",



sync_title:
"التزامن الذكي",

sync_subtitle:
"قم بمزامنة صفقاتك بسهولة وأمان",

connected:
"متصل",

last_sync:
"آخر مزامنة",

selected_coin:
"العملة المختارة",

server:
"الخادم",

verify_trade:
"تحقق من الصفقة",

enter_trade_code:
"أدخل كود الصفقة",

check:
"تحقق",

latest_orders:
"آخر الصفقات",

no_orders:
"لا توجد صفقات حالياً",



my_team:
"فريقي",

team_members:
"أعضاء الفريق",

referral:
"الإحالة",

referral_code:
"رمز الدعوة",

copied:
"تم النسخ",



save:
"حفظ",

cancel:
"إلغاء",

confirm:
"تأكيد",

close:
"إغلاق",

back:
"رجوع",

next:
"التالي",

submit:
"إرسال",

loading:
"جارٍ التحميل..."


}


};




// ==========================================
// GET LANGUAGE
// ==========================================

function getLanguage(){

let lang =
localStorage.getItem(STORAGE_KEY);


if(
lang &&
translations[lang]
){

return lang;

}


return DEFAULT_LANGUAGE;

}




// ==========================================
// APPLY LANGUAGE
// ==========================================

function applyLanguage(){


let lang =
getLanguage();



document.documentElement.lang =
lang;


document.documentElement.dir =
RTL_LANGUAGES.includes(lang)
?
"rtl"
:
"ltr";





document
.querySelectorAll("[data-lang]")
.forEach(function(element){


let key =
element.getAttribute("data-lang");



if(
translations[lang][key]
){

element.textContent =
translations[lang][key];

}


});






document
.querySelectorAll("[data-lang-placeholder]")
.forEach(function(element){


let key =
element.getAttribute("data-lang-placeholder");



if(
translations[lang][key]
){

element.placeholder =
translations[lang][key];

}


});


}





// ==========================================
// CHANGE LANGUAGE
// ==========================================

function setLanguage(lang){


if(!translations[lang]){

return;

}



localStorage.setItem(
STORAGE_KEY,
lang
);



applyLanguage();



setTimeout(function(){

location.reload();

},200);



}







// ==========================================
// START
// ==========================================

document.addEventListener(
"DOMContentLoaded",
function(){

applyLanguage();

});






// ==========================================
// GLOBAL ACCESS
// ==========================================

window.setLanguage =
setLanguage;


window.applyLanguage =
applyLanguage;


window.VALORA_LANG = {


getLanguage:
getLanguage,


translations:
translations,


setLanguage:
setLanguage


};



})(); 
