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


en: {


/* =========================
   GENERAL
========================= */

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



/* =========================
   ACCOUNT
========================= */

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



/* =========================
   DASHBOARD
========================= */

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



/* =========================
   LOGIN
========================= */

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

login_email_required:
"Please enter your email or phone number",

login_password_required:
"Please enter your password",

login_account_not_found:
"Account not found",

login_wrong_password:
"Incorrect password",

login_invalid_contact:
"Please enter a valid email or phone number",

login_error:
"Invalid login credentials",

login_success:
"Login successful",

login_success_message:
"Logging into your account",

login_redirect:
"Redirecting to your account...",



/* =========================
   REGISTER
========================= */

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

verification_sent:
"Verification code sent",

required_field:
"Please fill in this field",

field_required:
"This field is required",

invalid_contact:
"Please enter a valid email address or phone number",

register_contact_required:
"Please enter your email or phone number",

password_required:
"Please enter your password",

password_mismatch:
"Passwords do not match",

password_too_short:
"Password must be at least 6 characters",

confirm_password_required:
"Please confirm your password",

verification_required:
"Please enter the verification code",

invalid_verification_code:
"Invalid verification code",

verification_success:
"Verification successful",

invite_code_invalid:
"Invalid referral code",

terms_required:
"You must agree to the Terms & Conditions and Privacy Policy",

agree_required:
"You must agree to the Terms & Conditions and Privacy Policy",

register_success:
"Account created successfully",

account_created:
"Account created successfully",

register_error:
"Unable to create account",

redirecting_login:
"Redirecting to login...",



/* =========================
   WALLET
========================= */

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



/* =========================
   DEPOSIT
========================= */

wallet_load_error:
"Unable to load deposit addresses",

deposit_amount_placeholder:
"Enter the amount sent",

deposit_txid_placeholder:
"Enter TXID",

deposit_confirm_txid_placeholder:
"Re-enter TXID",

deposit_server_error:
"Unable to load deposit address",

copy_error:
"Failed to copy address",

deposit_amount_error:
"Please enter a valid deposit amount",

deposit_txid_error:
"Please enter TXID",

deposit_confirm_txid_error:
"Please confirm TXID",

deposit_txid_match_error:
"TXID does not match",

deposit_error:
"Deposit confirmation failed",

deposit_success:
"Deposit request submitted successfully",

server_connection_error:
"Unable to connect to server",

deposit_request_sent:
"Deposit Request Sent",

deposit_request_text:
"Your transfer details have been recorded. The transaction will be verified and balance will be added after confirmation.",

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
// DEPOSIT HISTORY
// ==========================================

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

deposit_amount:
"Amount",

deposit_date:
"Deposit Date",

successful:
"Successful",



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
// WITHDRAW HISTORY
// ==========================================

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

withdraw_date:
"Date",

withdraw_pending:
"Processing",

withdraw_completed:
"Completed",

withdraw_rejected:
"Rejected",



// ==========================================
// SECURITY
// ==========================================

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

security_empty:
"Please enter security code",

security_digits:
"Security code must contain 6 numbers",

security_match:
"Security codes do not match",

security_saved:
"Security code saved successfully",

security_heading:
"Create Withdrawal Security Code",

confirm_security_code:
"Confirm Security Code",

confirm_security_placeholder:
"Re-enter security code",

save_security:
"Save Security Code",



// ==========================================
// LOGIN CODE
// ==========================================

login_code_title:
"Login Code",

change_login_code:
"Change Login Code",

login_code_description:
"Use a login code to protect your account",

current_login_code:
"Current Login Code",

new_login_code:
"New Login Code",

confirm_new_login_code:
"Confirm New Login Code",

save_login_code:
"Save Changes",

change:
"Change",

loginCode:
"Login Code",

open:
"Open",

view:
"View",

withdrawSecurity:
"Withdrawal Security Code",



// ==========================================
// CHANGE PASSWORD
// ==========================================

change_password_title:
"Change Password",

change_password_heading:
"Change Password",

change_password_description:
"A verification code will be sent to your registered email address or phone number.",

change_password_method:
"Verification Code Delivery Method",

change_password_email:
"Email",

change_password_phone:
"Phone Number",

change_password_code_placeholder:
"Enter verification code",

new_password:
"New Password",

new_password_placeholder:
"Enter your new password",

password_hint:
"Password must be at least 6 characters",

save_password_change:
"Save Changes",

verification_sent_email:
"Verification code sent to your email address",

verification_sent_phone:
"Verification code
    // ==========================================
// IDENTITY VERIFICATION
// ==========================================

identity_confirmation:
"Identity Confirmation",

identity_description:
"Complete verification to protect your account",

verification_rules:
"Verification Requirements",

verification_rule_1:
"The document must be issued by an official government authority.",

verification_rule_2:
"Passport or identity card is accepted.",

verification_rule_3:
"The image must be clear.",

verification_rule_4:
"A real photo of your face must be uploaded.",

id_document:
"ID Card or Passport Photo",

upload_id:
"Take or Upload Document",

change_image:
"Change Image",

face_image:
"Face Photo",

take_selfie:
"Take Selfie",

retake_selfie:
"Retake Photo",

submit_verification:
"Submit for Verification",

invalid_image:
"Please select a valid image",

id_image_required:
"Please upload your ID card or passport photo",

face_image_required:
"Please upload your face photo",

verification_submitted:
"Verification request submitted successfully",



// ==========================================
// SMART SYNC
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
// TRADE
// ==========================================

current_price:
"Current Price",

enter_amount:
"Enter trading amount in USDT",

amount:
"Amount",

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



// ==========================================
// SUPPORT
// ==========================================

support_title:
"Customer Support",

support_heading:
"Contact Support",

support_description:
"If you experience any problem, you can contact the VALORA support team.",

official_channel:
"Official Channel",

channel_description:
"Follow all news and updates about the VALORA platform.",

join_channel:
"Join the Channel",

support_welcome:
"Welcome",

support_welcome_message:
"You can send your inquiry or problem, and the support team will respond as soon as possible.",

support_message_placeholder:
"Write your message here...",

send_message:
"Send",



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
// TRANSACTIONS
// ==========================================

no_transactions:
"No transactions currently",

deposit_transaction:
"Deposit",

withdraw_transaction:
"Withdrawal",

profit_transaction:
"Profit",



// ==========================================
// TERMS
// ==========================================

terms_title:
"Terms & Conditions",

terms_1_title:
"1 - Acceptance of Terms",

terms_1_text:
"By creating an account on the VALORA platform, you agree to comply with the platform's Terms & Conditions and Usage Policy.",

terms_2_title:
"2 - User Responsibility",

terms_2_text:
"Users must provide accurate information, protect their login details, and must not share them with others.",

terms_3_title:
"3 - Accounts",

terms_3_text:
"Each user is responsible for their account and use of the platform. Users must not create accounts that violate the applicable rules.",

terms_4_title:
"4 - Referral System",

terms_4_text:
"Referral links and codes are used according to the system and rules specified within the platform.",

terms_5_title:
"5 - Updates",

terms_5_text:
"VALORA reserves the right to update its Terms & Conditions and policies when necessary. Users will be notified of important changes.",

back_to_register:
"Back to Create Account",



// ==========================================
// NOTIFICATIONS
// ==========================================

no_notifications:
"No Notifications",

notifications_description:
"All account and transaction alerts will appear here",



// ==========================================
// APPLICATION
// ==========================================

app_description:
"Get the best experience through the official VALORA app",

current_version:
"Current Version",

last_update:
"Last Update",

download_app:
"Download App",

download_android:
"Download Android App",

download_ios:
"Download iOS App",

latest_updates:
"Latest Updates",

update_speed:
"✓ Improved app speed",

update_security:
"✓ Improved account security",

update_interface:
"✓ Updated VALORA interface",

update_wallet:
"✓ Improved wallet and transactions",

android_coming_soon:
"Android app download will be available soon",

ios_coming_soon:
"iOS app download will be available soon",



// ==========================================
// DEMO TRADING
// ==========================================

enter_trade_amount:
"Enter trading amount",

insufficient_balance:
"Insufficient balance",

demo_buy_success:
"Demo buy executed successfully",

no_transactions_trade:
"No transactions",

amount_label:
"Amount",

price_label:
"Price",

buy_demo_profit:
"Demo profit from sale: ",

usdt:
"USDT",



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
// END ENGLISH
// START ARABIC
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

login_email_required:
"يرجى إدخال البريد الإلكتروني أو رقم الهاتف",

login_password_required:
"يرجى إدخال كلمة المرور",

login_account_not_found:
"الحساب غير موجود",

login_wrong_password:
"كلمة المرور غير صحيحة",

login_invalid_contact:
"يرجى إدخال بريد إلكتروني أو رقم هاتف صحيح",

login_error:
"بيانات تسجيل الدخول غير صحيحة",

login_success:
"تم تسجيل الدخول بنجاح",

login_success_message:
"جاري الدخول إلى حسابك",

login_redirect:
"جاري الدخول إلى حسابك...",



// ==========================================
// REGISTER
// ==========================================

register_title:
"إنشاء حساب جديد",

register_contact:
"البريد الإلكتروني أو رقم الهاتف",

register_contact_placeholder:
"أدخل البريد الإلكتروني أو رقم الهاتف",

verification_code:
"كود التحقق",

verification_code_placeholder:
"أدخل كود التحقق",

password_placeholder_register:
"أدخل كلمة المرور",

confirm_password:
"تأكيد كلمة المرور",

confirm_password_placeholder:
"أعد إدخال كلمة المرور",

invite_code:
"كود الدعوة",

invite_code_placeholder:
"يتم تعبئته تلقائياً من رابط الدعوة",

agree_terms:
"أوافق على",

terms_privacy:
"الشروط والأحكام وسياسة الخصوصية",

register_btn:
"إنشاء الحساب",

already_have_account:
"لديك حساب بالفعل؟",

verification_sent:
"تم إرسال كود التحقق",

required_field:
"يرجى ملء هذا الحقل",

field_required:
"هذا الحقل مطلوب",

invalid_contact:
"يرجى إدخال بريد إلكتروني أو رقم هاتف صحيح",

register_contact_required:
"يرجى إدخال البريد الإلكتروني أو رقم الهاتف",

password_required:
"يرجى إدخال كلمة المرور",

password_mismatch:
"كلمة المرور غير متطابقة",

password_too_short:
"يجب أن تكون كلمة المرور 6 أحرف على الأقل",

confirm_password_required:
"يرجى تأكيد كلمة المرور",

verification_required:
"يرجى إدخال كود التحقق",

invalid_verification_code:
"كود التحقق غير صحيح",

verification_success:
"تم التحقق بنجاح",

invite_code_invalid:
"كود الدعوة غير صحيح",

terms_required:
"يجب الموافقة على الشروط والأحكام وسياسة الخصوصية",

agree_required:
"يجب الموافقة على الشروط والأحكام وسياسة الخصوصية",

register_success:
"تم إنشاء الحساب بنجاح",

account_created:
"تم إنشاء الحساب بنجاح",

register_error:
"تعذر إنشاء الحساب",

redirecting_login:
"جاري تحويلك إلى تسجيل الدخول...",
    
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

wallet_load_error:
"تعذر تحميل عناوين الإيداع",

deposit_amount_placeholder:
"أدخل المبلغ الذي أرسلته",

deposit_txid_placeholder:
"أدخل رمز التحويل TXID",

deposit_confirm_txid_placeholder:
"أعد إدخال رمز التحويل TXID",

deposit_server_error:
"تعذر تحميل عنوان الإيداع",

copy_error:
"فشل نسخ العنوان",

deposit_amount_error:
"أدخل مبلغ إيداع صحيح",

deposit_txid_error:
"أدخل رمز التحويل TXID",

deposit_confirm_txid_error:
"أكد رمز التحويل TXID",

deposit_txid_match_error:
"رمز التحويل غير مطابق",

deposit_error:
"فشل تأكيد الإيداع",

deposit_success:
"تم إرسال طلب الإيداع بنجاح",

server_connection_error:
"تعذر الاتصال بالسيرفر",

deposit_request_sent:
"تم إرسال طلب الإيداع",

deposit_request_text:
"تم تسجيل بيانات التحويل بنجاح. سيتم التحقق من المعاملة وإضافة الرصيد بعد تأكيدها.",

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
// DEPOSIT HISTORY
// ==========================================

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

deposit_amount:
"المبلغ",

deposit_date:
"تاريخ الإيداع",

successful:
"ناجحة",



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
// WITHDRAW HISTORY
// ==========================================

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

withdraw_date:
"التاريخ",

withdraw_pending:
"قيد المعالجة",
withdraw_rejected:
"مرفوض",
withdraw_completed:
"مكتمل",

withdraw
    // ==========================================
// SECURITY
// ==========================================

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

security_empty:
"يرجى إدخال رمز الأمان",

security_digits:
"يجب أن يكون رمز الأمان 6 أرقام",

security_match:
"رمز الأمان غير متطابق",

security_saved:
"تم حفظ رمز الأمان بنجاح",

security_heading:
"إنشاء رمز أمان للسحب",

confirm_security_code:
"تأكيد رمز الأمان",

confirm_security_placeholder:
"أعد إدخال الرمز",

save_security:
"حفظ رمز الأمان",



// ==========================================
// LOGIN CODE
// ==========================================

login_code_title:
"رمز الدخول",

change_login_code:
"تغيير رمز الدخول",

login_code_description:
"استخدم رمز دخول لحماية حسابك",

current_login_code:
"الرمز الحالي",

new_login_code:
"الرمز الجديد",

confirm_new_login_code:
"تأكيد الرمز الجديد",

save_login_code:
"حفظ التغيير",

change:
"تغيير",

loginCode:
"رمز الدخول",

open:
"فتح",

view:
"عرض",

withdrawSecurity:
"رمز أمان السحب",



// ==========================================
// CHANGE PASSWORD
// ==========================================

change_password_title:
"تغيير كلمة المرور",

change_password_heading:
"تغيير كلمة المرور",

change_password_description:
"سيتم إرسال رمز تحقق إلى البريد الإلكتروني أو رقم الهاتف المسجل.",

change_password_method:
"طريقة إرسال رمز التحقق",

change_password_email:
"البريد الإلكتروني",

change_password_phone:
"رقم الهاتف",

change_password_code_placeholder:
"أدخل رمز التحقق",

new_password:
"كلمة المرور الجديدة",

new_password_placeholder:
"أدخل كلمة المرور الجديدة",

password_hint:
"يجب أن تكون كلمة المرور 6 أحرف على الأقل",

save_password_change:
"حفظ التغيير",

verification_sent_email:
"تم إرسال رمز التحقق إلى البريد الإلكتروني",

verification_sent_phone:
"تم إرسال رمز التحقق إلى رقم الهاتف",

change_password_method_error:
"اختر طريقة إرسال رمز التحقق أولاً",

change_password_code_error:
"أدخل رمز التحقق",

change_password_code_invalid:
"رمز التحقق يجب أن يتكون من 6 أرقام",

new_password_error:
"أدخل كلمة المرور الجديدة",

new_password_length_error:
"يجب أن تكون كلمة المرور 6 أحرف على الأقل",

confirm_password_error:
"أعد إدخال كلمة المرور",

verification_method:
"طريقة إرسال الرمز",

verification_method_required:
"اختر طريقة إرسال الرمز",

verification_code_required:
"يرجى إدخال رمز التحقق",

new_password_required:
"يرجى إدخال كلمة المرور الجديدة",

new_password_too_short:
"يجب أن تكون كلمة المرور 6 أحرف على الأقل",

password_changed_success:
"تم تغيير كلمة المرور بنجاح",



// ==========================================
// FORGOT PASSWORD
// ==========================================

forgot_password_title:
"استرجاع كلمة المرور",

forgot_password_subtitle:
"استرجاع كلمة المرور",

forgot_email_phone:
"البريد الإلكتروني أو رقم الهاتف",

forgot_email_phone_placeholder:
"أدخل البريد أو رقم الهاتف",

forgot_password_description:
"أدخل البريد الإلكتروني أو رقم الهاتف المسجل في حسابك.",

send_verification_code:
"إرسال رمز التحقق",

verification_description:
"أدخل رمز التحقق الذي تم إرساله إليك.",

verify_code_btn:
"تحقق من الرمز",

new_password_title:
"إنشاء كلمة مرور جديدة",

new_password_description:
"أدخل كلمة المرور الجديدة ثم قم بتأكيدها.",

reset_password_btn:
"إعادة تعيين كلمة المرور",

forgot_contact_required:
"يرجى إدخال البريد الإلكتروني أو رقم الهاتف",

verification_demo_code:
"رمز التحقق التجريبي: ",

verification_invalid_format:
"رمز التحقق يجب أن يتكون من 6 أرقام",

verification_code_invalid:
"رمز التحقق غير صحيح",

remember_password:
"تذكرت كلمة المرور؟",

reset_request_sent:
"تم إرسال الطلب",

reset_request_message:
"سيتم التحقق من البيانات وإكمال الاسترجاع",
 
// ==========================================
// IDENTITY VERIFICATION
// ==========================================

identity_confirmation:
"تأكيد الهوية",

identity_description:
"أكمل التحقق لحماية حسابك",

verification_rules:
"شروط التحقق",

verification_rule_1:
"يجب أن تكون الوثيقة صادرة من جهة حكومية رسمية.",

verification_rule_2:
"يقبل جواز السفر أو بطاقة الهوية.",

verification_rule_3:
"يجب أن تكون الصورة واضحة.",

verification_rule_4:
"يجب رفع صورة الوجه الحقيقية.",

id_document:
"صورة الهوية أو جواز السفر",

upload_id:
"تصوير أو رفع الوثيقة",

change_image:
"تغيير الصورة",

face_image:
"صورة الوجه",

take_selfie:
"تصوير السيلفي",

retake_selfie:
"إعادة التصوير",

submit_verification:
"إرسال للتحقق",

invalid_image:
"يرجى اختيار صورة صحيحة",

id_image_required:
"يرجى رفع صورة الهوية أو جواز السفر",

face_image_required:
"يرجى رفع صورة الوجه",

verification_submitted:
"تم إرسال طلب التحقق بنجاح",



// ==========================================
// SMART SYNC
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
"هذه الصفقة تحتاج إلى إيداع 500 USDT أو أكثر",

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
// TRADE
// ==========================================

current_price:
"السعر الحالي",

enter_amount:
"أدخل مبلغ التداول بالـ USDT",

amount:
"المبلغ",

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



// ==========================================
// SUPPORT
// ==========================================

support_title:
"خدمة العملاء",

support_heading:
"مراسلة الدعم",

support_description:
"إذا واجهتك أي مشكلة يمكنك التواصل مع فريق دعم VALORA.",

official_channel:
"القناة الرسمية",

channel_description:
"تابع جميع الأخبار والتحديثات الخاصة بمنصة VALORA.",

join_channel:
"الانضمام إلى القناة",

support_welcome:
"مرحباً بك",

support_welcome_message:
"يمكنك إرسال استفسارك أو مشكلتك وسيقوم فريق الدعم بالرد عليك في أقرب وقت.",

support_message_placeholder:
"اكتب رسالتك هنا...",

send_message:
"إرسال",



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
// TRANSACTIONS
// ==========================================

no_transactions:
"لا توجد عمليات حالياً",

deposit_transaction:
"إيداع",

withdraw_transaction:
"سحب",

profit_transaction:
"أرباح",



// ==========================================
// TERMS
// ==========================================

terms_title:
"الشروط والأحكام",

terms_1_title:
"1 - قبول الشروط",

terms_1_text:
"عند إنشاء حساب في منصة VALORA فإنك توافق على الالتزام بالشروط والأحكام وسياسة الاستخدام الخاصة بالمنصة.",

terms_2_title:
"2 - مسؤولية المستخدم",

terms_2_text:
"يجب على المستخدم تقديم بيانات صحيحة والمحافظة على معلومات الدخول الخاصة به وعدم مشاركتها مع الآخرين.",

terms_3_title:
"3 - الحسابات",

terms_3_text:
"كل مستخدم مسؤول عن حسابه واستخدامه للمنصة ويجب عدم إنشاء حسابات مخالفة للأنظمة.",

terms_4_title:
"4 - نظام الإحالات",

terms_4_text:
"يتم استخدام روابط الدعوة والأكواد الخاصة بالمستخدمين حسب النظام المحدد داخل المنصة.",

terms_5_title:
"5 - التحديثات",

terms_5_text:
"تحتفظ VALORA بحق تحديث الشروط والسياسات عند الحاجة وسيتم إعلام المستخدمين بالتغييرات المهمة.",

back_to_register:
"العودة إلى إنشاء الحساب",



// ==========================================
// NOTIFICATIONS
// ==========================================

no_notifications:
"لا توجد إشعارات",

notifications_description:
"ستظهر هنا جميع التنبيهات الخاصة بالحساب والعمليات",



// ==========================================
// APPLICATION
// ==========================================

app_description:
"احصل على أفضل تجربة من خلال تطبيق VALORA الرسمي",

current_version:
"الإصدار الحالي",

last_update:
"آخر تحديث",

download_app:
"تحميل التطبيق",

download_android:
"تحميل تطبيق Android",

download_ios:
"تحميل تطبيق iOS",

latest_updates:
"آخر التحديثات",

update_speed:
"✓ تحسين سرعة التطبيق",

update_security:
"✓ تحسين حماية الحساب",

update_interface:
"✓ تحديث واجهة VALORA",

update_wallet:
"✓ تحسين المحفظة والعمليات",

android_coming_soon:
"سيتم توفير تحميل تطبيق Android قريباً",

ios_coming_soon:
"سيتم توفير تطبيق iOS قريباً",



// ==========================================
// DEMO TRADING
// ==========================================

enter_trade_amount:
"أدخل مبلغ التداول",

insufficient_balance:
"الرصيد غير كافٍ",

demo_buy_success:
"تم تنفيذ عملية الشراء التجريبية بنجاح",

no_transactions_trade:
"لا توجد عمليات",

amount_label:
"المبلغ",

price_label:
"السعر",

buy_demo_profit:
"ربحك التجريبي من البيع: ",

usdt:
"USDT",



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
// LANGUAGE CORE FUNCTIONS
// ==========================================

const STORAGE_KEY = "VALORA_LANG";

const DEFAULT_LANGUAGE = "ar";

const RTL_LANGUAGES = [
    "ar"
];


// ==========================================
// GET CURRENT LANGUAGE
// ==========================================

function getLanguage(){

    let lang = DEFAULT_LANGUAGE;


    try {

        lang =
            localStorage.getItem(
                STORAGE_KEY
            ) || DEFAULT_LANGUAGE;


    } catch(error){

        console.warn(
            "VALORA language read error:",
            error
        );

    }


    if(
        translations[lang]
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
        !translations[lang]
    ){

        return false;

    }


    try {

        localStorage.setItem(
            STORAGE_KEY,
            lang
        );


        return true;


    }catch(error){


        console.warn(
            "VALORA language save error:",
            error
        );


        return false;

    }

}



// ==========================================
// CHANGE LANGUAGE
// ==========================================

function setLanguage(lang){


    if(
        !translations[lang]
    ){

        console.warn(
            "Invalid language:",
            lang
        );


        return false;

    }



    saveLanguage(lang);



    applyLanguage();



    window.dispatchEvent(
        new CustomEvent(
            "VALORA_LANGUAGE_CHANGED",
            {
                detail:{
                    language:lang
                }
            }
        )
    );



    return true;

}



// ==========================================
// TRANSLATE
// ==========================================

function translate(key){


    const lang =
        getLanguage();



    if(
        translations[lang] &&
        translations[lang][key]
    ){

        return translations[lang][key];

    }



    if(
        translations[DEFAULT_LANGUAGE][key]
    ){

        return translations[DEFAULT_LANGUAGE][key];

    }



    return key;

}



// ==========================================
// APPLY LANGUAGE
// ==========================================

function applyLanguage(){


    const lang =
        getLanguage();



    const current =
        translations[lang];



    document.documentElement.lang =
        lang;



    document.documentElement.dir =
        RTL_LANGUAGES.includes(lang)
        ? "rtl"
        : "ltr";



    if(document.body){

        document.body.dir =
            document.documentElement.dir;

    }



    document
    .querySelectorAll(
        "[data-lang]"
    )
    .forEach(
        function(element){


            const key =
                element.dataset.lang;



            if(
                current[key] !== undefined
            ){


                element.textContent =
                    current[key];


            }


        }
    );



    document
    .querySelectorAll(
        "[data-lang-placeholder]"
    )
    .forEach(
        function(element){


            const key =
                element.dataset.langPlaceholder;



            if(
                current[key] !== undefined
            ){

                element.placeholder =
                    current[key];

            }

        }
    );



}



// ==========================================
// GLOBAL
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



// ==========================================
// AUTO START
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        applyLanguage();

    }
);



// ==========================================
// SYNC BETWEEN PAGES
// ==========================================

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
