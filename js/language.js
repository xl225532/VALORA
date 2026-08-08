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

const DEFAULT_LANGUAGE = "ar";

const RTL_LANGUAGES = [
    "ar"
];


// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {


// ==========================================
// ENGLISH
// ==========================================

en: {


// ==========================================
// GENERAL
// ==========================================

home: "Home",
dashboard: "Dashboard",
wallet: "Wallet",
assets: "Total Assets",
team: "Team",
sync: "Sync",
settings: "Settings",
language: "Language",
notifications: "Notifications",
support: "Customer Support",
terms: "Terms & Conditions",
security: "Withdrawal Security Code",
verify: "Identity Verification",
password: "Change Password",
logout: "Logout",
application: "VALORA App",


// ==========================================
// ACCOUNT
// ==========================================

account: "My Account",
username: "Username",
email: "Email",
phone: "Phone Number",
uid: "UID",


// ==========================================
// DASHBOARD
// ==========================================

today_profit: "Today's Profit",
markets: "Markets",
bitcoin: "Bitcoin",
ethereum: "Ethereum",
tether: "Tether",
tron: "TRON",
ripple: "XRP",
solana: "Solana",


// ==========================================
// LOGIN
// ==========================================

login_subtitle: "Login to your account",
email_phone: "Email or Phone Number",
email_phone_placeholder: "Enter Email or Phone Number",
password: "Password",
password_placeholder: "Enter Password",
login_btn: "Login",
forgot_password: "Forgot Password?",
create_account: "Create Account",


// ==========================================
// WALLET
// ==========================================

wallet_title: "Wallet",
deposit: "Deposit",
withdraw: "Withdraw",
transaction_history: "Transaction History",
today: "Today's Profit",
invite_profit: "Invitation Profit",
team_profit: "Team Profit",
reward_profit: "Reward Profit",


// ==========================================
// DEPOSIT
// ==========================================

deposit_title: "Deposit Coins",

deposit_subtitle:
"Choose coin and network to display deposit address",

deposit_network:
"Deposit Network",

deposit_address:
"Deposit Address",

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

copy:
"Copy",

deposit_copied:
"Deposit address copied",


// ==========================================
// WITHDRAW
// ==========================================

withdraw_title:
"Withdraw Coins",

withdraw_subtitle:
"Withdraw your assets safely",

withdraw_network:
"Withdrawal Network",

withdraw_address:
"Withdrawal Address",

withdraw_address_placeholder:
"Enter withdrawal address",

withdraw_amount:
"Withdrawal Amount",

withdraw_amount_placeholder:
"Enter withdrawal amount",

available_balance:
"Available Balance",

confirm_withdraw:
"Confirm Withdrawal",

withdraw_success:
"Withdrawal request submitted successfully",

withdraw_error:
"Insufficient balance",

withdraw_fee:
"Withdrawal Fee",

receive_amount:
"You Receive",

security_code:
"Withdrawal Security Code",

security_code_placeholder:
"Enter security code",

fee_note:
"Before doubling: 20%<br>After doubling: 5%",

withdraw_security_error:
"Incorrect security code",

withdraw_amount_error:
"Please complete all required information",


// ==========================================
// SYNC
// ==========================================

sync_title:
"Smart Sync",

sync_subtitle:
"Sync your trades easily and securely",

smart_sync:
"Smart Sync",

sync_description:
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

check_trade:
"Verify Trade",

enter_trade_code:
"Enter trade code",

trade_code_placeholder:
"Enter trade code",

check:
"Check",

latest_orders:
"Latest Orders",

last_orders:
"Latest Orders",

no_orders:
"No orders currently",

enter_trade_error:
"Please enter trade code",

invalid_trade_code:
"Invalid trade code",

check_code_again:
"Check the code and try again",

deposit_trade_error:
"This trade requires a deposit of 500 USDT or more",

team_trade_error:
"This trade requires a team of 20 members with real deposits",

trade_running:
"Trade in progress",

trade_completed:
"Trade completed",

profit:
"Profit",

trade_code:
"Code",

before:
"Before",

seconds:
"seconds",

trade_coin:
"Coin",

trade_status:
"Status",

trade_time:
"Time",

completed:
"Completed",

pending:
"Pending",

error:
"Error",

success:
"Success",


// ==========================================
// TEAM
// ==========================================

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

team_history_title:
"Team Members History",

team_history_description:
"View all your team members and referrals",

referral_link_title:
"Your Referral Link",

invited_count:
"Invited Members",

referral_reward:
"Referral Reward",

reward_description:
"Invite 10 people with a deposit of 500 USDT or more to receive",

referral_table:
"Referral Table",

team_levels:
"Team Levels",

level:
"Level",

invite_count:
"Number of Invitations",

profit:
"Profit",

trades_table:
"Trades Table",

trade:
"Trade",

daily_return:
"Daily Return",

trade_1:
"Trade 1",

trade_2:
"Trade 2",

trade_3:
"Trade 3",

vip_trade:
"VIP Trade",

compensation_trade:
"Compensation Trade",

according_to_status:
"According to Status",

team_trade:
"Team Trade",

over_20_members:
"Over 20 Members",

total_team:
"Total Team",

team_earnings:
"Earnings",

active_members:
"Active",

no_team_members:
"No Team Members",

team_history_empty:
"Share your referral link to build your team",

referral_code_copied:
"Referral code copied",

referral_link_copied:
"Referral link copied",


// ==========================================
// LANGUAGE
// ==========================================

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
// COMMON
// ==========================================

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

required:
"This field is required"

},


// ==========================================
// ARABIC
// ==========================================

ar: {


// ==========================================
// GENERAL
// ==========================================

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


// ==========================================
// ACCOUNT
// ==========================================

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


// ==========================================
// DASHBOARD
// ==========================================

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


// ==========================================
// LOGIN
// ==========================================

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


// ==========================================
// WALLET
// ==========================================

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


// ==========================================
// DEPOSIT
// ==========================================

deposit_title:
"إيداع العملات",

deposit_subtitle:
"اختر العملة والشبكة لعرض عنوان الإيداع",

deposit_network:
"شبكة الإيداع",

deposit_address:
"عنوان الإيداع",

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

copy:
"نسخ",

deposit_copied:
"تم نسخ عنوان الإيداع",


// ==========================================
// WITHDRAW
// ==========================================

withdraw_title:
"سحب العملات",

withdraw_subtitle:
"اسحب أصولك بأمان",

withdraw_network:
"شبكة السحب",

withdraw_address:
"عنوان السحب",

withdraw_address_placeholder:
"أدخل عنوان المحفظة",

withdraw_amount:
"مبلغ السحب",

withdraw_amount_placeholder:
"أدخل مبلغ السحب",

available_balance:
"الرصيد المتاح",

confirm_withdraw:
"تأكيد السحب",

withdraw_success:
"تم إرسال طلب السحب بنجاح",

withdraw_error:
"الرصيد غير كافٍ",

withdraw_fee:
"رسوم السحب",

receive_amount:
"المبلغ المستلم",

security_code:
"رمز أمان السحب",

security_code_placeholder:
"أدخل رمز أمان السحب",

fee_note:
"قبل التضعيف: 20%<br>بعد التضعيف: 5%",

withdraw_security_error:
"رمز الأمان غير صحيح",

withdraw_amount_error:
"يرجى إكمال جميع البيانات المطلوبة",


// ==========================================
// SYNC
// ==========================================

sync_title:
"التزامن الذكي",

sync_subtitle:
"قم بمزامنة صفقاتك بسهولة وأمان",

smart_sync:
"التزامن الذكي",

sync_description:
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

check_trade:
"تحقق من الصفقة",

enter_trade_code:
"أدخل كود الصفقة",

trade_code_placeholder:
"أدخل كود الصفقة",

check:
"تحقق",

latest_orders:
"آخر الصفقات",

last_orders:
"آخر الصفقات",

no_orders:
"لا توجد صفقات حالياً",

enter_trade_error:
"يرجى إدخال كود الصفقة",

invalid_trade_code:
"كود الصفقة غير صحيح",

check_code_again:
"تأكد من الكود وحاول مرة أخرى",

deposit_trade_error:
"هذه الصفقة خاصة بمن لديه إيداع 500 USDT أو أكثر",

team_trade_error:
"هذه الصفقة تحتاج فريقاً من 20 عضواً بإيداعات حقيقية",

trade_running:
"الصفقة قيد التنفيذ",

trade_completed:
"اكتملت الصفقة",

profit:
"الربح",

trade_code:
"الكود",

before:
"قبل",

seconds:
"ثانية",

trade_coin:
"العملة",

trade_status:
"الحالة",

trade_time:
"الوقت",

completed:
"مكتملة",

pending:
"قيد التنفيذ",

error:
"خطأ",

success:
"نجاح",


// ==========================================
// TEAM
// ==========================================

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

team_history_title:
"سجل أعضاء الفريق",

team_history_description:
"عرض جميع أعضاء فريقك والدعوات",

referral_link_title:
"رابط الدعوة الخاص بك",

invited_count:
"عدد المدعوين",

referral_reward:
"مكافأة الدعوة",

reward_description:
"ادعُ 10 أشخاص لديهم إيداع 500 USDT أو أكثر لتحصل على",

referral_table:
"جدول الدعوة",

team_levels:
"مستويات الفريق",

level:
"المستوى",

invite_count:
"عدد الدعوات",

profit:
"الربح",

trades_table:
"جدول الصفقات",

trade:
"الصفقة",

daily_return:
"العائد اليومي",

trade_1:
"صفقة 1",

trade_2:
"صفقة 2",

trade_3:
"صفقة 3",

vip_trade:
"صفقة VIP",

compensation_trade:
"صفقة التعويض",

according_to_status:
"حسب الحالة",

team_trade:
"صفقة الفريق",

over_20_members:
"فوق 20 عضو",

total_team:
"إجمالي الفريق",

team_earnings:
"الأرباح",

active_members:
"النشط",

no_team_members:
"لا يوجد أعضاء في الفريق",

team_history_empty:
"شارك رابط الدعوة الخاص بك لبناء فريقك",

referral_code_copied:
"تم نسخ كود الدعوة",

referral_link_copied:
"تم نسخ رابط الدعوة",


// ==========================================
// LANGUAGE
// ==========================================

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
// COMMON
// ==========================================

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
"جارٍ التحميل...",

required:
"هذا الحقل مطلوب"

}

};


// ==========================================
// GET LANGUAGE
// ==========================================

function getLanguage(){

    let lang = null;

    try {

        lang =
            localStorage.getItem(STORAGE_KEY);

    } catch(error){

        console.warn(
            "VALORA localStorage error:",
            error
        );

    }


    if(
        lang &&
        Object.prototype.hasOwnProperty.call(
            translations,
            lang
        )
    ){

        return lang;

    }


    return DEFAULT_LANGUAGE;

}


// ==========================================
// APPLY LANGUAGE
// ==========================================

function applyLanguage(){

    const lang =
        getLanguage();

    const currentTranslations =
        translations[lang] ||
        translations[DEFAULT_LANGUAGE];


    document.documentElement.lang =
        lang;

    document.documentElement.dir =
        RTL_LANGUAGES.includes(lang)
        ? "rtl"
        : "ltr";


    // ======================================
    // TEXT
    // ======================================

    document
    .querySelectorAll("[data-lang]")
    .forEach(function(el){

        const key =
            el.getAttribute("data-lang");


        if(
            Object.prototype.hasOwnProperty.call(
                currentTranslations,
                key
            )
        ){

            el.innerHTML =
                currentTranslations[key];

        }

    });


    // ======================================
    // PLACEHOLDER
    // ======================================

    document
    .querySelectorAll("[data-lang-placeholder]")
    .forEach(function(el){

        const key =
            el.getAttribute(
                "data-lang-placeholder"
            );


        if(
            Object.prototype.hasOwnProperty.call(
                currentTranslations,
                key
            )
        ){

            el.placeholder =
                currentTranslations[key];

        }

    });

}


// ==========================================
// SET LANGUAGE
// ==========================================

function setLanguage(lang){

    if(
        !Object.prototype.hasOwnProperty.call(
            translations,
            lang
        )
    ){

        return;

    }


    try {

        localStorage.setItem(
            STORAGE_KEY,
            lang
        );

    } catch(error){

        console.warn(
            "VALORA language save error:",
            error
        );

        return;

    }


    // تطبيق اللغة فوراً قبل إعادة تحميل الصفحة
    applyLanguage();


    // إعادة تحميل الصفحة الحالية فقط
    setTimeout(function(){

        window.location.reload();

    }, 100);

}


// ==========================================
// DOM READY
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        applyLanguage();

    }
);


// ==========================================
// GLOBAL
// ==========================================

window.setLanguage =
    setLanguage;

window.applyLanguage =
    applyLanguage;

window.getLanguage =
    getLanguage;

window.VALORA_LANG = {

    getLanguage:
        getLanguage,

    translations:
        translations,

    setLanguage:
        setLanguage,

    applyLanguage:
        applyLanguage

};


})();
