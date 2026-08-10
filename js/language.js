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


        // ======================================
        // ENGLISH
        // ======================================

        en: {


            // ==================================
            // GENERAL
            // ==================================

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


            // ==================================
            // ACCOUNT
            // ==================================

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


            // ==================================
            // DASHBOARD
            // ==================================

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


            // ==================================
            // LOGIN
            // ==================================

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


            // ==================================
            // REGISTER
            // ==================================

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


            // ==================================
            // WALLET
            // ==================================

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


            // ==================================
            // DEPOSIT
            // ==================================

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
                "After confirmation the balance will be added automatically.",

            copy:
                "Copy",

            deposit_copied:
                "Deposit address copied",


            // ==================================
            // WITHDRAW
            // ==================================

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


            // ==================================
            // DEPOSIT HISTORY
            // ==================================

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

            deposit_amount:
                "Amount",

            deposit_date:
                "Deposit Date",

            network_label:
                "Network:",

            amount_label:
                "Amount:",

            successful:
                "Successful",


            // ==================================
            // WITHDRAW HISTORY
            // ==================================

            withdraw_history_title:
                "Withdrawal History",

            total_requests:
                "Total Requests",

            total_amounts:
                "Total Amounts",

            no_withdrawals:
                "No withdrawal requests yet",

            withdraw_amount_label:
                "Amount",

            withdraw_fee_label:
                "Fee",

            withdraw_receive:
                "You Receive",

            withdraw_network_label:
                "Network",

            withdraw_address_label:
                "Address",

            withdraw_date:
                "Date",

            withdraw_pending:
                "Processing",

            withdraw_completed:
                "Completed",

            withdraw_rejected:
                "Rejected",


            // ==================================
            // SECURITY PIN
            // ==================================

            security_title:
                "Withdrawal Security Code",

            security_heading:
                "Create Withdrawal Security Code",

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


            // ==================================
            // COMMON
            // ==================================

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
                     // ==================================
            // SYNC
            // ==================================

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


            // ==================================
            // TEAM
            // ==================================

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


            // ==================================
            // TRADE
            // ==================================

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


            // ==================================
            // SUPPORT
            // ==================================

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


            // ==================================
            // LANGUAGE
            // ==================================

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


            // ==================================
            // TRANSACTIONS
            // ==================================

            no_transactions:
                "No transactions currently",

            deposit_transaction:
                "Deposit",

            withdraw_transaction:
                "Withdrawal",

            profit_transaction:
                "Profit",


            // ==================================
            // FORGOT PASSWORD
            // ==================================

            forgot_password_title:
                "Reset Password",

            forgot_password_subtitle:
                "Reset your password",

            forgot_password_description:
                "Enter the email address or phone number registered to your account.",

            forgot_email_phone:
                "Email or Phone Number",

            forgot_email_phone_placeholder:
                "Enter email or phone number",

            send_verification_code:
                "Send Verification Code",

            verification_description:
                "Enter the verification code that was sent to you.",

            verification_code_placeholder:
                "Enter verification code",

            verify_code_btn:
                "Verify Code",

            new_password_title:
                "Create New Password",

            new_password_description:
                "Enter your new password and confirm it.",

            new_password_placeholder:
                "********",

            reset_password_btn:
                "Reset Password",

            forgot_contact_required:
                "Please enter your email address or phone number",

            verification_demo_code:
                "Demo verification code: ",

            verification_invalid_format:
                "Verification code must be 6 digits",

            verification_code_invalid:
                "Incorrect verification code",

            forgot_submit:
                "Submit Reset Request",

            remember_password:
                "Remember your password?",

            reset_request_sent:
                "Request Sent",

            reset_request_message:
                "Your information will be verified and the recovery process will be completed",


            // ==================================
            // CHANGE PASSWORD
            // ==================================

            change_password_title:
                "Change Password",

            change_password_heading:
                "Change Password",

            change_password_description:
                "A verification code will be sent to your registered email address or phone number.",

            change_password_method:
                "Verification Code Delivery Method",

            verification_method:
                "Verification Method",

            change_password_email:
                "Email",

            change_password_phone:
                "Phone Number",

            change_password_code_placeholder:
                "Enter verification code",

            verification_method_required:
                "Please choose a verification method",

            verification_code_required:
                "Please enter the verification code",

            change_password_method_error:
                "Please choose a verification code delivery method first",

            change_password_code_error:
                "Please enter the verification code",

            change_password_code_invalid:
                "Verification code must be 6 digits",

            new_password:
                "New Password",

            new_password_error:
                "Please enter your new password",

            new_password_required:
                "Please enter your new password",

            new_password_length_error:
                "Password must be at least 6 characters",

            new_password_too_short:
                "Password must be at least 6 characters",

            password_hint:
                "Password must be at least 6 characters",

            save_password_change:
                "Save Changes",

            confirm_password_error:
                "Please confirm your password",

            verification_sent_email:
                "Verification code sent to your email",

            verification_sent_phone:
                "Verification code sent to your phone",

            password_changed_success:
                "Password changed successfully",


            // ==================================
            // IDENTITY VERIFICATION
            // ==================================

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


            // ==================================
            // LOGIN CODE
            // ==================================

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


            // ==================================
            // APPLICATION
            // ==================================

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


            // ==================================
            // NOTIFICATIONS
            // ==================================

            no_notifications:
                "No Notifications",

            notifications_description:
                "All account and transaction alerts will appear here",


            // ==================================
            // TERMS
            // ==================================

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
                "Each user is responsible for their account and use of the platform.",

            terms_4_title:
                "4 - Referral System",

            terms_4_text:
                "Referral links and codes are used according to the system and rules specified within the platform.",

            terms_5_title:
                "5 - Updates",

            terms_5_text:
                "VALORA reserves the right to update its Terms & Conditions and policies when necessary.",

            back_to_register:
                "Back to Create Account",


            // ==================================
            // DEMO TRADING
            // ==================================

            enter_trade_amount:
                "Enter trading amount",

            insufficient_balance:
                "Insufficient balance",

            demo_buy_success:
                "Demo buy executed successfully",

            no_transactions_trade:
                "No transactions",

            price_label:
                "Price",

            buy_demo_profit:
                "Demo profit from sale: ",

            usdt:
                "USDT"

        }, // END EN


        // ======================================
        // ARABIC
        // ======================================

        ar: {
             // ==================================
            // GENERAL
            // ==================================

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


            // ==================================
            // ACCOUNT
            // ==================================

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


            // ==================================
            // DASHBOARD
            // ==================================

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


            // ==================================
            // LOGIN
            // ==================================

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


            // ==================================
            // REGISTER
            // ==================================

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


            // ==================================
            // WALLET
            // ==================================

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


            // ==================================
            // DEPOSIT
            // ==================================

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


            // ==================================
            // WITHDRAW
            // ==================================

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

            security_code_placeholder:
                "أدخل رمز أمان السحب",

            fee_note:
                "قبل التضعيف: 20%<br>بعد التضعيف: 5%",

            withdraw_security_error:
                "رمز الأمان غير صحيح",

            withdraw_amount_error:
                "يرجى إكمال جميع البيانات المطلوبة",


            // ==================================
            // DEPOSIT HISTORY
            // ==================================

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

            deposit_amount:
                "المبلغ",

            deposit_date:
                "تاريخ الإيداع",

            network_label:
                "الشبكة:",

            amount_label:
                "المبلغ:",

            successful:
                "ناجحة",


            // ==================================
            // WITHDRAW HISTORY
            // ==================================

            withdraw_history_title:
                "سجل السحوبات",

            total_requests:
                "إجمالي الطلبات",

            total_amounts:
                "إجمالي المبالغ",

            no_withdrawals:
                "لا توجد طلبات سحب حتى الآن",

            withdraw_amount_label:
                "المبلغ",

            withdraw_fee_label:
                "العمولة",

            withdraw_receive:
                "المستلم",

            withdraw_network_label:
                "الشبكة",

            withdraw_address_label:
                "العنوان",

            withdraw_date:
                "التاريخ",

            withdraw_pending:
                "قيد المعالجة",

            withdraw_completed:
                "مكتمل",

            withdraw_rejected:
                "مرفوض",


            // ==================================
            // SECURITY PIN
            // ==================================

            security_title:
                "رمز أمان السحب",

            security_heading:
                "إنشاء رمز أمان للسحب",

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


            // ==================================
            // SYNC
            //
                       // ==================================
            // TEAM
            // ==================================

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
                "
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
        ?
        "rtl"
        :
        "ltr";


    if(document.body){

        document.body.dir =
            document.documentElement.dir;

    }



    // TEXT

    document
    .querySelectorAll("[data-lang]")
    .forEach(function(el){


        const key =
            el.getAttribute("data-lang");


        if(
            current[key] !== undefined
        ){

            el.textContent =
                current[key];

        }


    });



    // PLACEHOLDER

    document
    .querySelectorAll("[data-lang-placeholder]")
    .forEach(function(el){


        const key =
            el.getAttribute(
                "data-lang-placeholder"
            );


        if(
            current[key] !== undefined
        ){

            el.placeholder =
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
// SET LANGUAGE
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



    setTimeout(function(){

        window.location.reload();

    },150);



    return true;

}




// ==========================================
// TRANSLATION HELPER
// ==========================================

function translate(key){


    const lang =
        getLanguage();


    return (
        translations[lang][key]
        ||
        translations.ar[key]
        ||
        key
    );

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
    translate;



// ==========================================
// START
// ==========================================

if(
    document.readyState === "loading"
){

    document.addEventListener(
        "DOMContentLoaded",
        applyLanguage
    );

}
else{

    applyLanguage();

}



})();         
