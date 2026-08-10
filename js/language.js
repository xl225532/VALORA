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

(function () {

"use strict";


// ==========================================
// SETTINGS
// ==========================================

const STORAGE_KEY = "VALORA_LANG";

const DEFAULT_LANGUAGE = "ar";

const RTL_LANGUAGES = ["ar"];


// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {


en: {


/* ==========================
GENERAL
========================== */

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
verify: "Verify",
identity_verification: "Identity Verification",
change_password: "Change Password",
logout: "Logout",
application: "VALORA App",



/* ==========================
ACCOUNT
========================== */

account: "My Account",
username: "Username",
email: "Email",
phone: "Phone Number",
uid: "UID",



/* ==========================
LOGIN
========================== */

login_subtitle: "Login to your account",

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



/* ==========================
REGISTER
========================== */

register_title:
"Create New Account",

register_contact:
"Email or Phone Number",

verification_code:
"Verification Code",

confirm_password:
"Confirm Password",

invite_code:
"Referral Code",

register_btn:
"Create Account",

already_have_account:
"Already have an account?",



/* ==========================
WALLET
========================== */

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



/* ==========================
DEPOSIT HISTORY
========================== */

deposit_history_title:
"Deposit History",

deposit_count:
"Deposit Count",

total_deposits:
"Total Deposits",

total_deposit_amount:
"Total Deposit Amount",

no_deposits:
"No deposits yet",

network:
"Network",

amount:
"Amount",

deposit_date:
"Deposit Date",

successful:
"Successful",



/* ==========================
WITHDRAW HISTORY
========================== */

withdraw_history_title:
"Withdrawal History",

total_requests:
"Total Requests",

total_amounts:
"Total Amounts",

no_withdrawals:
"No withdrawal requests yet",

withdraw_amount:
"Amount",

withdraw_fee:
"Fee",

withdraw_receive:
"You Receive",

withdraw_network:
"Network",

withdraw_address:
"Address",

withdraw_date:
"Date",

withdraw_pending:
"Processing",

withdraw_completed:
"Completed",

withdraw_rejected:
"Rejected",



/* ==========================
SECURITY PIN
========================== */

security_title:
"Withdrawal Security Code",

security_create:
"Create Withdrawal Security Code",

security_description:
"This code protects your withdrawal operations",

security_code_label:
"Security Code",

security_code_placeholder:
"Enter 6 digit code",

security_confirm_label:
"Confirm Security Code",

security_confirm_placeholder:
"Re-enter the code",

security_save:
"Save Code",

security_saved:
"Security code saved successfully",



/* ==========================
COMMON
========================== */

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

submit:
"Submit",

loading:
"Loading..."
// ==========================================
// ENGLISH CONTINUED
// ==========================================


/* ==========================
DASHBOARD
========================== */

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



/* ==========================
DEPOSIT
========================== */

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
"Make sure to select the same network before transferring.",

deposit_warning_3:
"Transfer through another network may result in loss of funds.",

deposit_warning_4:
"After confirmation the balance will be added automatically.",

copy:
"Copy",

deposit_copied:
"Deposit address copied",



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

verification_code_placeholder:
"Enter verification code",

verify_code_btn:
"Verify Code",

new_password_title:
"Create New Password",

reset_password_btn:
"Reset Password",

password_changed_success:
"Password changed successfully"



}, // END EN
 // ==========================================
// ARABIC
// ==========================================

ar:{


/* ==========================
GENERAL
========================== */

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



/* ==========================
ACCOUNT
========================== */

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



/* ==========================
LOGIN
========================== */

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



/* ==========================
WALLET
========================== */

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



/* ==========================
DEPOSIT HISTORY
========================== */

deposit_history_title:
"سجل الإيداعات",

deposit_count:
"عدد الإيداعات",

total_deposits:
"إجمالي الإيداعات",

total_deposit_amount:
"إجمالي مبلغ الإيداعات",

no_deposits:
"لا توجد إيداعات حتى الآن",

network:
"الشبكة",

amount:
"المبلغ",

deposit_date:
"تاريخ الإيداع",

successful:
"ناجحة",



/* ==========================
WITHDRAW HISTORY
========================== */

withdraw_history_title:
"سجل السحوبات",

total_requests:
"إجمالي الطلبات",

total_amounts:
"إجمالي المبالغ",

no_withdrawals:
"لا توجد طلبات سحب حتى الآن",

withdraw_amount:
"المبلغ",

withdraw_fee:
"العمولة",

withdraw_receive:
"المستلم",

withdraw_network:
"الشبكة",

withdraw_address:
"العنوان",

withdraw_date:
"التاريخ",

withdraw_pending:
"قيد المعالجة",

withdraw_completed:
"مكتمل",

withdraw_rejected:
"مرفوض",



/* ==========================
SECURITY PIN
========================== */

security_title:
"رمز أمان السحب",

security_create:
"إنشاء رمز أمان للسحب",

security_description:
"يستخدم هذا الرمز لحماية عمليات السحب",

security_code_label:
"رمز الأمان",

security_code_placeholder:
"أدخل رمز من 6 أرقام",

security_confirm_label:
"تأكيد رمز الأمان",

security_confirm_placeholder:
"أعد إدخال الرمز",

security_save:
"حفظ الرمز",

security_saved:
"تم حفظ رمز الأمان بنجاح",



/* ==========================
COMMON
========================== */

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

submit:
"إرسال",

loading:
"جارٍ التحميل..."

}


}; // END TRANSLATIONS



// ==========================================
// LANGUAGE FUNCTIONS
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



function saveLanguage(lang){

if(
translations[lang]
){

localStorage.setItem(
STORAGE_KEY,
lang
);

return true;

}


return false;

}



function applyLanguage(){


const lang =
getLanguage();


const current =
translations[lang];


document.documentElement.lang =
lang;


document.documentElement.dir =
RTL_LANGUAGES.includes(lang)
?
"rtl"
:
"ltr";



document.body.dir =
document.documentElement.dir;



document
.querySelectorAll("[data-lang]")
.forEach(function(el){


const key =
el.dataset.lang;


if(
current[key]
){

el.textContent =
current[key];

}


});



document
.querySelectorAll("[data-lang-placeholder]")
.forEach(function(el){


const key =
el.dataset.langPlaceholder;


if(
current[key]
){

el.placeholder =
current[key];

}


});


}



function setLanguage(lang){


if(
!translations[lang]
){

return false;

}


saveLanguage(lang);

applyLanguage();


setTimeout(function(){

location.reload();

},100);


return true;

}



// ==========================================
// GLOBAL
// ==========================================

window.getLanguage =
getLanguage;


window.setLanguage =
setLanguage;


window.applyLanguage =
applyLanguage;


window.t =
function(key){

return translations[getLanguage()][key]
||
translations.ar[key]
||
key;

};



document.addEventListener(
"DOMContentLoaded",
applyLanguage
);



})();
