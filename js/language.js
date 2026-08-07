// ==========================================
// VALORA
// GLOBAL LANGUAGE SYSTEM
// ==========================================
//
// ar = العربية
// en = English
//
// Storage:
// VALORA_LANG
//
// ==========================================

(function(){

"use strict";


const STORAGE_KEY = "VALORA_LANG";

const DEFAULT_LANGUAGE = "en";

const RTL_LANGUAGES = ["ar"];


// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {


en:{


// General

home:"Home",

dashboard:"Dashboard",

wallet:"Wallet",

assets:"Total Assets",

total_assets:"Total Assets",

team:"Team",

language:"Language",

settings:"Settings",

notifications:"Notifications",

support:"Customer Support",

terms:"Terms & Conditions",

security:"Withdrawal Security Code",

verify:"Identity Verification",

password:"Change Password",

logout:"Logout",

application:"VALORA App",

sync:"Sync",



// Account

account:"My Account",

username:"Username",

uid:"UID",

email:"Email",

phone:"Phone Number",



// Dashboard

today_profit:"Today's Profit",

markets:"Markets",

bitcoin:"Bitcoin",

ethereum:"Ethereum",

tether:"Tether",

tron:"TRON",

ripple:"XRP",

solana:"Solana",



// Login

login:"Login",

login_subtitle:"Login to your account",

email_phone:"Email or Phone Number",

email_phone_placeholder:"Enter Email or Phone Number",

password_label:"Password",

password_placeholder:"Enter Password",

login_btn:"Login",

forgot_password:"Forgot Password?",

create_account:"Create Account",



// Wallet

wallet_title:"Wallet",

deposit:"Deposit",

withdraw:"Withdraw",

deposit_title:"Deposit",

withdraw_title:"Withdraw",

deposit_amount:"Deposit Amount",

withdraw_amount:"Withdrawal Amount",

available_balance:"Available Balance",

transaction_history:"Transaction History",


invite_profit:"Invitation Profit",

team_profit:"Team Profit",

reward_profit:"Reward Profit",



// Team

my_team:"My Team",

team_members:"Team Members",

referral:"Referral",

referral_code_title:"Referral Code",

copy:"Copy",

copied:"Copied",



// Language

language_title:"Language",

language_subtitle:"Choose your preferred language",

english:"English",

arabic:"Arabic",

default_language:"Default Language",

save_language:"Language will be saved automatically",

language_changed:"Language changed successfully",



// Settings

settings_title:"Settings",

account_settings:"Account Settings",

app_settings:"App Settings",

security_settings:"Security Settings",

loginCode:"Login Code",

withdrawSecurity:"Withdrawal Security Code",

change:"Change",

view:"View",

open:"Open",



// Common

save:"Save",

cancel:"Cancel",

confirm:"Confirm",

close:"Close",

back:"Back",

next:"Next",

submit:"Submit",

loading:"Loading...",



// Messages

login_success:"Login successful",

login_success_message:"Entering your account",

invalid_login:"Invalid login information",

account_created:"Account created successfully",

password_mismatch:"Passwords do not match",

required_field:"Please fill all required fields"


},



// ==========================================
// العربية
// ==========================================


ar:{


home:"الرئيسية",

dashboard:"الرئيسية",

wallet:"المحفظة",

assets:"إجمالي الأصول",

total_assets:"إجمالي الأصول",

team:"الفريق",

language:"اللغة",

settings:"الإعدادات",

notifications:"الإشعارات",

support:"مراسلة العملاء",

terms:"الشروط والأحكام",

security:"رمز أمان السحب",

verify:"التحقق من الهوية",

password:"تغيير كلمة المرور",

logout:"تسجيل الخروج",

application:"تطبيق VALORA",

sync:"التزامن",



// Account

account:"حسابي",

username:"اسم المستخدم",

uid:"UID",

email:"البريد الإلكتروني",

phone:"رقم الهاتف",



// Dashboard

today_profit:"أرباح اليوم",

markets:"الأسواق",

bitcoin:"Bitcoin",

ethereum:"Ethereum",

tether:"Tether",

tron:"TRON",

ripple:"XRP",

solana:"Solana",



// Login

login:"تسجيل الدخول",

login_subtitle:"تسجيل الدخول إلى حسابك",

email_phone:"البريد الإلكتروني أو رقم الهاتف",

email_phone_placeholder:"أدخل البريد الإلكتروني أو رقم الهاتف",

password_label:"كلمة المرور",

password_placeholder:"أدخل كلمة المرور",

login_btn:"تسجيل الدخول",

forgot_password:"نسيت كلمة المرور؟",

create_account:"إنشاء حساب",



// Wallet

wallet_title:"المحفظة",

deposit:"إيداع",

withdraw:"سحب",

deposit_title:"الإيداع",

withdraw_title:"السحب",

deposit_amount:"مبلغ الإيداع",

withdraw_amount:"مبلغ السحب",

available_balance:"الرصيد المتاح",

transaction_history:"سجل المعاملات",


invite_profit:"أرباح الدعوة",

team_profit:"أرباح الفريق",

reward_profit:"أرباح المكافآت",



// Team

my_team:"فريقي",

team_members:"أعضاء الفريق",

referral:"الإحالة",

referral_code_title:"رمز الدعوة",

copy:"نسخ",

copied:"تم النسخ",



// Language

language_title:"اللغة",

language_subtitle:"اختر لغتك المفضلة",

english:"English",

arabic:"العربية",

default_language:"اللغة الافتراضية",

save_language:"سيتم حفظ اللغة تلقائياً",

language_changed:"تم تغيير اللغة بنجاح",
// Settings

settings_title:"الإعدادات",

account_settings:"إعدادات الحساب",

app_settings:"إعدادات التطبيق",

security_settings:"إعدادات الأمان",

loginCode:"رمز الدخول",

withdrawSecurity:"رمز أمان السحب",

change:"تغيير",

view:"عرض",

open:"فتح",



// Security

withdrawal_security:"أمان السحب",

enter_security_code:"أدخل رمز الأمان",

security_code_placeholder:"أدخل رمز الأمان الخاص بك",



// Verification

verification:"التحقق من الهوية",

verification_title:"تحقق من هويتك",

verification_status:"حالة التحقق",

verified:"تم التحقق",

not_verified:"لم يتم التحقق",

pending:"قيد الانتظار",



// Common

save:"حفظ",

cancel:"إلغاء",

confirm:"تأكيد",

close:"إغلاق",

back:"رجوع",

next:"التالي",

submit:"إرسال",

edit:"تعديل",

delete:"حذف",

search:"بحث",

loading:"جارٍ التحميل...",



// Messages

login_success:"تم تسجيل الدخول",

login_success_message:"جاري الدخول إلى الحساب",

invalid_login:"بيانات تسجيل الدخول غير صحيحة",

account_created:"تم إنشاء الحساب بنجاح",

password_mismatch:"كلمة المرور غير متطابقة",

required_field:"يرجى إدخال جميع الحقول المطلوبة"



}


};
// ==========================================
// GET CURRENT LANGUAGE
// ==========================================

function getLanguage(){

    let lang = localStorage.getItem(STORAGE_KEY);


    if(lang && translations[lang]){

        return lang;

    }


    return DEFAULT_LANGUAGE;

}



// ==========================================
// APPLY DOCUMENT LANGUAGE
// ==========================================

function applyDocumentLanguage(lang){

    document.documentElement.lang = lang;


    if(RTL_LANGUAGES.includes(lang)){

        document.documentElement.dir = "rtl";

    }else{

        document.documentElement.dir = "ltr";

    }

}



// ==========================================
// APPLY TRANSLATIONS
// ==========================================

function applyTranslations(){


    const lang = getLanguage();

    const data = translations[lang];


    document.querySelectorAll("[data-lang]").forEach(function(element){


        const key = element.getAttribute("data-lang");


        if(data[key]){

            element.textContent = data[key];

        }


    });



    document.querySelectorAll("[data-lang-placeholder]").forEach(function(element){


        const key = element.getAttribute("data-lang-placeholder");


        if(data[key]){

            element.placeholder = data[key];

        }


    });


}



// ==========================================
// APPLY LANGUAGE
// ==========================================

function applyLanguage(){


    const lang = getLanguage();


    applyDocumentLanguage(lang);


    applyTranslations();


}



// ==========================================
// CHANGE LANGUAGE
// ==========================================

function setLanguage(lang){


    if(!translations[lang]){

        lang = DEFAULT_LANGUAGE;

    }



    localStorage.setItem(

        STORAGE_KEY,

        lang

    );



    applyLanguage();



    setTimeout(function(){


        window.location.href="dashboard.html";


    },300);



}



// ==========================================
// START SYSTEM
// ==========================================

document.addEventListener(

"DOMContentLoaded",

function(){


    applyLanguage();



}

);



// ==========================================
// PUBLIC
// ==========================================

window.applyLanguage = applyLanguage;


window.setLanguage = setLanguage;


window.VALORA_LANG = {


    getLanguage:getLanguage,


    setLanguage:setLanguage,


    applyLanguage:applyLanguage,


    translations:translations


};



})();    
