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


en:{


// GENERAL

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
"Verify",

identity_verification:
"Identity Verification",

change_password:
"Change Password",

logout:
"Logout",

application:
"VALORA App",


// ACCOUNT

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


// DASHBOARD

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


// LOGIN

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

login_success:
"Login successful",

login_error:
"Invalid login credentials",

login_account_not_found:
"Account not found",

login_wrong_password:
"Incorrect password",


// REGISTER

register_title:
"Create New Account",

register_contact:
"Email or Phone Number",

register_contact_placeholder:
"Enter Email or Phone Number",

verification_code:
"Verification Code",

verification_code_placeholder:
"Enter Verification Code",

password_placeholder_register:
"Enter Password",

confirm_password:
"Confirm Password",

confirm_password_placeholder:
"Confirm your password",

invite_code:
"Referral Code",

invite_code_placeholder:
"Automatically filled from referral link",

agree_terms:
"I agree to",

terms_privacy:
"Terms & Conditions and Privacy Policy",

register_btn:
"Create Account",

already_have_account:
"Already have an account?",


// WALLET

wallet_title:
"Wallet",

deposit:
"Deposit",

withdraw:
"Withdraw",

transaction_history:
"Transaction History",

today:
"Today's Profit",

invite_profit:
"Invitation Profit",

team_profit:
"Team Profit",

reward_profit:
"Reward Profit",


// DEPOSIT

deposit_title:
"Deposit Coins",

deposit_subtitle:
"Choose coin and network to display deposit address",

deposit_network:
"Deposit Network",

deposit_address:
"Deposit Address",

deposit_auto_credit:
"Balance will be added automatically",

deposit_warning_1:
"Send coins only to the displayed address.",

deposit_warning_2:
"Select the same network before transfer.",

deposit_warning_3:
"Using another network may cause loss of funds.",

deposit_warning_4:
"After confirmation balance will be added automatically.",

copy:
"Copy",

deposit_copied:
"Deposit address copied",


// WITHDRAW

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

withdraw_security_error:
"Incorrect security code",


// WITHDRAW HISTORY

withdraw_history_title:
"Withdrawal History",

total_requests:
"Total Requests",

total_amounts:
"Total Amounts",

no_withdrawals:
"No withdrawal requests yet",

withdraw_receive:
"You Receive",

withdraw_history_network:
"Network",

withdraw_history_address:
"Address",

withdraw_history_date:
"Date",

withdraw_pending:
"Processing",

withdraw_completed:
"Completed",

withdraw_rejected:
"Rejected",


// COMMON

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
    /* ==========================
WITHDRAW
========================== */

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

receive_amount:
"You Receive",

security_code:
"Withdrawal Security Code",

withdraw_security_error:
"Incorrect security code",


/* ==========================
TEAM
========================== */

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

referral_link_title:
"Your Referral Link",

invited_count:
"Invited Members",

referral_reward:
"Referral Reward",

team_history_title:
"Team Members History",

no_team_members:
"No Team Members",

team_history_empty:
"Share your referral link to build your team",

referral_code_copied:
"Referral code copied",

referral_link_copied:
"Referral link copied",


/* ==========================
TRADE
========================== */

current_price:
"Current Price",

enter_amount:
"Enter trading amount in USDT",

buy:
"Buy",

sell:
"Sell",

recent_orders:
"Recent Orders",

no_orders_trade:
"No orders currently",

buy_success:
"Buy request submitted successfully",

sell_success:
"Sell request submitted successfully",


/* ==========================
SYNC
========================== */

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

trade_code_placeholder:
"Enter trade code",

check:
"Check",

no_orders:
"No orders currently",

profit:
"Profit",

trade_code:
"Code",

trade_status:
"Status",

trade_time:
"Time",

completed:
"Completed",

pending:
"Pending",

success:
"Success",

error:
"Error",


/* ==========================
SUPPORT
========================== */

support_title:
"Customer Support",

support_heading:
"Contact Support",

support_description:
"If you experience any problem, you can contact VALORA support team.",

official_channel:
"Official Channel",

join_channel:
"Join Channel",

support_welcome:
"Welcome",

support_message_placeholder:
"Write your message here...",

send_message:
"Send",


/* ==========================
LANGUAGE
========================== */

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
"Language saved automatically",


/* ==========================
TRANSACTIONS
========================== */

no_transactions:
"No transactions currently",

deposit_transaction:
"Deposit",

withdraw_transaction:
"Withdrawal",

profit_transaction:
"Profit",


/* ==========================
FORGOT PASSWORD
========================== */

forgot_password_title:
"Reset Password",

forgot_password_description:
"Enter your email or phone number registered to your account.",

send_verification_code:
"Send Verification Code",

verify_code_btn:
"Verify Code",

new_password_title:
"Create New Password",

reset_password_btn:
"Reset Password",

password_changed_success:
"Password changed successfully"

},


// ==========================================
// ARABIC
// ==========================================

ar: {
// GENERAL

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
"خدمة العملاء",

terms:
"الشروط والأحكام",

security:
"رمز أمان السحب",

verify:
"تحقق",

identity_verification:
"التحقق من الهوية",

change_password:
"تغيير كلمة المرور",

logout:
"تسجيل الخروج",

application:
"تطبيق VALORA",


// ACCOUNT

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


// DASHBOARD

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


// LOGIN

login_subtitle:
"تسجيل الدخول إلى حسابك",

email_phone:
"البريد الإلكتروني أو رقم الهاتف",

password:
"كلمة المرور",

login_btn:
"تسجيل الدخول",

forgot_password:
"نسيت كلمة المرور؟",

create_account:
"إنشاء حساب",


// REGISTER

register_title:
"إنشاء حساب جديد",

register_contact:
"البريد الإلكتروني أو رقم الهاتف",

verification_code:
"رمز التحقق",

confirm_password:
"تأكيد كلمة المرور",

invite_code:
"رمز الدعوة",

register_btn:
"إنشاء الحساب",

already_have_account:
"لديك حساب بالفعل؟",


// WALLET

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


// DEPOSIT

deposit_title:
"إيداع العملات",

deposit_network:
"شبكة الإيداع",

deposit_address:
"عنوان الإيداع",

copy:
"نسخ",

deposit_copied:
"تم نسخ عنوان الإيداع",
    // WITHDRAW

withdraw_title:
"سحب العملات",

withdraw_subtitle:
"اسحب أصولك بأمان",

withdraw_network:
"شبكة السحب",

withdraw_address:
"عنوان السحب",

withdraw_address_placeholder:
"أدخل عنوان السحب",

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

withdraw_security_error:
"رمز الأمان غير صحيح",


// WITHDRAW HISTORY

withdraw_history_title:
"سجل السحوبات",

total_requests:
"إجمالي الطلبات",

total_amounts:
"إجمالي المبالغ",

no_withdrawals:
"لا توجد طلبات سحب حتى الآن",

withdraw_receive:
"المستلم",

withdraw_history_network:
"الشبكة",

withdraw_history_address:
"العنوان",

withdraw_history_date:
"التاريخ",

withdraw_pending:
"قيد المعالجة",

withdraw_completed:
"مكتمل",

withdraw_rejected:
"مرفوض",


// TEAM

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

referral_link_title:
"رابط الدعوة الخاص بك",

invited_count:
"عدد المدعوين",

referral_reward:
"مكافأة الدعوة",

team_history_title:
"سجل أعضاء الفريق",

no_team_members:
"لا يوجد أعضاء في الفريق",

team_history_empty:
"شارك رابط الدعوة الخاص بك لبناء فريقك",

referral_code_copied:
"تم نسخ رمز الدعوة",

referral_link_copied:
"تم نسخ رابط الدعوة",


// TRADE

current_price:
"السعر الحالي",

enter_amount:
"أدخل مبلغ التداول بالـ USDT",

buy:
"شراء",

sell:
"بيع",

recent_orders:
"آخر العمليات",

no_orders_trade:
"لا توجد عمليات حالياً",

buy_success:
"تم إرسال طلب الشراء بنجاح",

sell_success:
"تم إرسال طلب البيع بنجاح",


// SYNC

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

trade_code_placeholder:
"أدخل كود الصفقة",

check:
"تحقق",

no_orders:
"لا توجد صفقات حالياً",

profit:
"الربح",

trade_code:
"الكود",

trade_status:
"الحالة",

trade_time:
"الوقت",

completed:
"مكتملة",

pending:
"قيد التنفيذ",

success:
"نجاح",

error:
"خطأ",


// SUPPORT

support_title:
"خدمة العملاء",

support_heading:
"مراسلة العملاء",

support_description:
"إذا واجهتك أي مشكلة يمكنك التواصل مع فريق دعم VALORA.",

official_channel:
"القناة الرسمية",

join_channel:
"الانضمام إلى القناة",

support_welcome:
"مرحباً بك",

support_message_placeholder:
"اكتب رسالتك هنا...",

send_message:
"إرسال",


// LANGUAGE

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


// TRANSACTIONS

no_transactions:
"لا توجد عمليات حالياً",

deposit_transaction:
"إيداع",

withdraw_transaction:
"سحب",

profit_transaction:
"أرباح",


// FORGOT PASSWORD

forgot_password_title:
"استرجاع كلمة المرور",

forgot_password_description:
"أدخل البريد الإلكتروني أو رقم الهاتف المسجل في حسابك.",

send_verification_code:
"إرسال رمز التحقق",

verify_code_btn:
"تحقق من الرمز",

new_password_title:
"إنشاء كلمة مرور جديدة",

reset_password_btn:
"إعادة تعيين كلمة المرور",

password_changed_success:
"تم تغيير كلمة المرور بنجاح",


// COMMON

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
// GET CURRENT LANGUAGE
// ==========================================

function getLanguage(){

    let lang = null;

    try{

        lang =
            localStorage.getItem(
                STORAGE_KEY
            );

    }catch(error){

        lang = null;

    }


    if(
        lang === "en" ||
        lang === "ar"
    ){

        return lang;

    }


    return DEFAULT_LANGUAGE;

}


// ==========================================
// SAVE LANGUAGE
// ==========================================

function saveLanguage(lang){

    if(
        lang !== "ar" &&
        lang !== "en"
    ){

        return false;

    }


    try{

        localStorage.setItem(
            STORAGE_KEY,
            lang
        );

        return true;

    }catch(error){

        console.error(
            "VALORA language save error:",
            error
        );

        return false;

    }

}


// ==========================================
// TRANSLATE ELEMENTS
// ==========================================

function applyLanguage(){

    const lang =
        getLanguage();

    const current =
        translations[lang];


    // HTML LANGUAGE

    document.documentElement.lang =
        lang;


    // RTL / LTR

    document.documentElement.dir =
        RTL_LANGUAGES.includes(lang)
            ? "rtl"
            : "ltr";


    if(document.body){

        document.body.dir =
            document.documentElement.dir;

    }


    // TEXT

    document
        .querySelectorAll("[data-lang]")
        .forEach(function(element){

            const key =
                element.getAttribute(
                    "data-lang"
                );


            if(
                Object.prototype.hasOwnProperty.call(
                    current,
                    key
                )
            ){

                element.textContent =
                    current[key];

            }

        });


    // PLACEHOLDER

    document
        .querySelectorAll(
            "[data-lang-placeholder]"
        )
        .forEach(function(element){

            const key =
                element.getAttribute(
                    "data-lang-placeholder"
                );


            if(
                Object.prototype.hasOwnProperty.call(
                    current,
                    key
                )
            ){

                element.placeholder =
                    current[key];

            }

        });


    // TITLE

    document
        .querySelectorAll(
            "[data-lang-title]"
        )
        .forEach(function(element){

            const key =
                element.getAttribute(
                    "data-lang-title"
                );


            if(
                Object.prototype.hasOwnProperty.call(
                    current,
                    key
                )
            ){

                element.title =
                    current[key];

            }

        });


    document.documentElement
        .setAttribute(
            "data-language",
            lang
        );

}


// ==========================================
// CHANGE LANGUAGE
// ==========================================

function setLanguage(lang){

    if(
        lang !== "ar" &&
        lang !== "en"
    ){

        return false;

    }


    const saved =
        saveLanguage(lang);


    if(!saved){

        return false;

    }


    applyLanguage();


    return true;

}


// ==========================================
// TRANSLATION HELPER
// ==========================================

function translate(key){

    const lang =
        getLanguage();


    const current =
        translations[lang];


    if(
        current &&
        Object.prototype.hasOwnProperty.call(
            current,
            key
        )
    ){

        return current[key];

    }


    if(
        translations.ar &&
        Object.prototype.hasOwnProperty.call(
            translations.ar,
            key
        )
    ){

        return translations.ar[key];

    }


    return key;

}


// ==========================================
// GLOBAL FUNCTIONS
// ==========================================

window.getLanguage =
    getLanguage;

window.saveLanguage =
    saveLanguage;

window.setLanguage =
    setLanguage;

window.applyLanguage =
    applyLanguage;

window.t =
    translate;


// ==========================================
// INITIALIZE
// ==========================================

function initializeLanguage(){

    applyLanguage();

}


// DOM READY

if(
    document.readyState ===
    "loading"
){

    document.addEventListener(
        "DOMContentLoaded",
        initializeLanguage
    );

}else{

    initializeLanguage();

}


// ==========================================
// LANGUAGE STORAGE EVENT
// ==========================================
//
// إذا تغيرت اللغة من تبويب آخر
// يتم تحديث الصفحة الحالية.
//

window.addEventListener(
    "storage",
    function(event){

        if(
            event.key === STORAGE_KEY
        ){

            applyLanguage();

        }

    }
);


// ==========================================
// VALORA LANGUAGE OBJECT
// ==========================================

window.VALORA_LANG = {

    getLanguage:
        getLanguage,

    saveLanguage:
        saveLanguage,

    setLanguage:
        setLanguage,

    applyLanguage:
        applyLanguage,

    translations:
        translations,

    t:
        translate

};


})();
