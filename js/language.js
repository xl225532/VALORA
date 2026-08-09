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

    const RTL_LANGUAGES = [
        "ar"
    ];


    // ==========================================
    // TRANSLATIONS
    // ==========================================

    const translations = {


        // ======================================
        // ENGLISH
        // ======================================

        en: {

            // ======================================
            // GENERAL
            // ======================================

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


            // ======================================
            // ACCOUNT
            // ======================================

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


            // ======================================
            // DASHBOARD
            // ======================================

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


            // ======================================
            // LOGIN
            // ======================================

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


            // ======================================
            // WALLET
            // ======================================

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


            // ======================================
            // DEPOSIT
            // ======================================

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


            // ======================================
            // WITHDRAW
            // ======================================

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


            // ======================================
            // SYNC
            // ======================================

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


            // ======================================
            // TEAM
            // ======================================

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


            // ======================================
            // TRADE PAGE
            // ======================================

            current_price:
                "Current Price",

            amount:
                "Amount",

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


            // ======================================
            // REGISTER
            // ======================================

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


            // ======================================
            // REGISTER VALIDATION
            // ======================================

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


            // ======================================
            // FORGOT PASSWORD
            // ======================================

            forgot_password_title:
                "Reset Password",

            forgot_password_subtitle:
                "Reset your password",

            forgot_email_phone:
                "Email or Phone Number",

            forgot_email_phone_placeholder:
                "Enter email or phone number",

            forgot_submit:
                "Submit Reset Request",

            remember_password:
                "Remember your password?",

            reset_request_sent:
                "Request Sent",

            reset_request_message:
                "Your information will be verified and the recovery process will be completed",


            // ======================================
            // TRANSACTIONS
            // ======================================

            no_transactions:
                "No transactions currently",

            deposit_transaction:
                "Deposit",

            withdraw_transaction:
                "Withdrawal",

            profit_transaction:
                "Profit",


            // ======================================
            // LANGUAGE
            // ======================================

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


            // ======================================
            // COMMON
            // ======================================
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


        // ======================================
        // ARABIC
        // ======================================

        ar: {

            // ======================================
            // GENERAL
            // ======================================

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
                "تحقق",

            identity_verification:
                "التحقق من الهوية",

            change_password:
                "تغيير كلمة المرور",

            logout:
                "تسجيل الخروج",

            application:
                "تطبيق VALORA",


            // ======================================
            // ACCOUNT
            // ======================================

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


            // ======================================
            // DASHBOARD
            // ======================================

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


            // ======================================
            // LOGIN
            // ======================================

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


            // ======================================
            // WALLET
            // ======================================

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


            // ======================================
            // DEPOSIT
            // ======================================

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


            // ======================================
            // WITHDRAW
            // ======================================

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


            // ======================================
            // SYNC
            // ======================================

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


            // ======================================
            // TEAM
            // ======================================

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


            // ======================================
            // TRADE PAGE
            // ======================================

            current_price:
                "السعر الحالي",

            amount:
                "الكمية",

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


            // ======================================
            // REGISTER
            // ======================================

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


            // ======================================
            // REGISTER VALIDATION
            // ======================================

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


            // ======================================
            // FORGOT PASSWORD
            // ======================================

            forgot_password_title:
                "استرجاع كلمة المرور",

            forgot_password_subtitle:
                "استرجاع كلمة المرور",

            forgot_email_phone:
                "البريد الإلكتروني أو رقم الهاتف",

            forgot_email_phone_placeholder:
                "أدخل البريد أو رقم الهاتف",

            forgot_submit:
                "إرسال طلب الاسترجاع",

            remember_password:
                "تذكرت كلمة المرور؟",

            reset_request_sent:
                "تم إرسال الطلب",

            reset_request_message:
                "سيتم التحقق من البيانات وإكمال الاسترجاع",


            // ======================================
            // TRANSACTIONS
            // ======================================

            no_transactions:
                "لا توجد عمليات حالياً",

            deposit_transaction:
                "إيداع",

            withdraw_transaction:
                "سحب",

            profit_transaction:
                "أرباح",


            // ======================================
            // LANGUAGE
            // ======================================

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


            // ======================================
            // COMMON
            // ======================================

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

    function getLanguage() {

        let lang = null;


        try {

            lang =
                localStorage.getItem(
                    STORAGE_KEY
                );

        } catch (error) {

            console.warn(
                "VALORA localStorage error:",
                error
            );

        }


        if (
            lang &&
            Object.prototype.hasOwnProperty.call(
                translations,
                lang
            )
        ) {

            return lang;

        }


        return DEFAULT_LANGUAGE;

    }


    // ==========================================
    // APPLY LANGUAGE
    // ==========================================

    function applyLanguage() {

        const lang =
            getLanguage();


        const currentTranslations =
            translations[lang] ||
            translations[DEFAULT_LANGUAGE];


        // ======================================
        // HTML LANGUAGE
        // ======================================

        document.documentElement.lang =
            lang;


        // ======================================
        // RTL / LTR
        // ======================================

        document.documentElement.dir =
            RTL_LANGUAGES.includes(lang)
                ? "rtl"
                : "ltr";


        // ======================================
        // TEXT
        // ======================================

        document
            .querySelectorAll(
                "[data-lang]"
            )
            .forEach(
                function (el) {

                    const key =
                        el.getAttribute(
                            "data-lang"
                        );


                    if (
                        Object.prototype.hasOwnProperty.call(
                            currentTranslations,
                            key
                        )
                    ) {

                        el.innerHTML =
                            currentTranslations[key];

                    }

                }
            );


        // ======================================
        // PLACEHOLDER
        // ======================================

        document
            .querySelectorAll(
                "[data-lang-placeholder]"
            )
            .forEach(
                function (el) {

                    const key =
                        el.getAttribute(
                            "data-lang-placeholder"
                        );


                    if (
                        Object.prototype.hasOwnProperty.call(
                            currentTranslations,
                            key
                        )
                    ) {

                        el.placeholder =
                            currentTranslations[key];

                    }

                }
            );

    }


    // ==========================================
    // SET LANGUAGE
    // ==========================================

    function setLanguage(lang) {

        // ======================================
        // VALIDATE LANGUAGE
        // ======================================

        if (
            !Object.prototype.hasOwnProperty.call(
                translations,
                lang
            )
        ) {

            console.warn(
                "VALORA: Invalid language:",
                lang
            );

            return;

        }


        // ======================================
        // SAVE LANGUAGE
        // ======================================

        try {

            localStorage.setItem(
                STORAGE_KEY,
                lang
            );

        } catch (error) {

            console.warn(
                "VALORA language save error:",
                error
            );

            return;

        }


        // ======================================
        // APPLY IMMEDIATELY
        // ======================================

        applyLanguage();


        // ======================================
        // RELOAD PAGE
        // ======================================

        setTimeout(
            function () {

                window.location.reload();

            },
            100
        );

    }


    // ==========================================
    // DOM READY
    // ==========================================

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            applyLanguage();

        }
    );


    // ==========================================
    // GLOBAL FUNCTIONS
    // ==========================================

    window.setLanguage =
        setLanguage;


    window.applyLanguage =
        applyLanguage;


    window.getLanguage =
        getLanguage;


    // ==========================================
    // VALORA LANGUAGE OBJECT
    // ==========================================

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
