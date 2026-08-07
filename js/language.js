// ==========================================
// VALORA
// GLOBAL LANGUAGE SYSTEM
// ==========================================
//
// Languages:
// ar = العربية
// en = English
//
// Storage:
// VALORA_LANG
//
// Text:
// <span data-lang="home">الرئيسية</span>
//
// Placeholder:
// <input data-lang-placeholder="email_phone_placeholder">
//
// ==========================================

(function () {

    "use strict";


    // ======================================
    // SETTINGS
    // ======================================

    const STORAGE_KEY = "VALORA_LANG";

    const DEFAULT_LANGUAGE = "en";

    const RTL_LANGUAGES = ["ar"];


    // ======================================
    // TRANSLATIONS
    // ======================================

    const translations = {

        // ==================================
        // ENGLISH
        // ==================================

        en: {

            // --------------------------------
            // General
            // --------------------------------

            home: "Home",

            dashboard: "Dashboard",

            wallet: "Wallet",

            assets: "Total Assets",

            total_assets: "Total Assets",

            team: "Team",

            language: "Language",

            settings: "Settings",

            notifications: "Notifications",

            support: "Customer Support",

            terms: "Terms & Conditions",

            security: "Withdrawal Security Code",

            verify: "Identity Verification",

            password: "Change Password",

            logout: "Logout",

            application: "VALORA App",

            sync: "Sync",


            // --------------------------------
            // Account
            // --------------------------------

            account: "My Account",

            username: "Username",

            uid: "UID",

            email: "Email",

            phone: "Phone Number",

            security_code: "Security Code",

            identity_verification:
                "Identity Verification",


            // --------------------------------
            // Dashboard
            // --------------------------------

            today_profit: "Today's Profit",

            markets: "Markets",

            bitcoin: "Bitcoin",

            ethereum: "Ethereum",

            tether: "Tether",

            tron: "TRON",

            ripple: "XRP",

            solana: "Solana",


            // --------------------------------
            // Login
            // --------------------------------

            login: "Login",

            login_subtitle:
                "Login to your account",

            email_phone:
                "Email or Phone Number",

            email_phone_placeholder:
                "Enter Email or Phone Number",

            password_label:
                "Password",

            password_placeholder:
                "Enter Password",

            login_btn:
                "Login",

            forgot_password:
                "Forgot Password?",

            create_account:
                "Create Account",


            // --------------------------------
            // Register
            // --------------------------------

            register:
                "Register",

            register_title:
                "Create Your Account",

            register_subtitle:
                "Join VALORA today",

            confirm_password:
                "Confirm Password",

            confirm_password_placeholder:
                "Confirm your password",

            referral_code:
                "Referral Code",

            referral_code_placeholder:
                "Enter referral code",

            register_btn:
                "Create Account",


            // --------------------------------
            // Wallet
            // --------------------------------

            wallet_title:
                "Wallet",

            deposit:
                "Deposit",

            withdraw:
                "Withdraw",

            deposit_title:
                "Deposit",

            withdraw_title:
                "Withdraw",

            deposit_amount:
                "Deposit Amount",

            withdraw_amount:
                "Withdrawal Amount",

            available_balance:
                "Available Balance",

            transaction_history:
                "Transaction History",


            // --------------------------------
            // Team
            // --------------------------------

            my_team:
                "My Team",

            team_members:
                "Team Members",

            referral:
                "Referral",

            referral_code_title:
                "Referral Code",

            copy:
                "Copy",

            copied:
                "Copied",


            // --------------------------------
            // Notifications
            // --------------------------------

            notification_title:
                "Notifications",

            no_notifications:
                "No notifications",

            mark_read:
                "Mark as read",


            // --------------------------------
            // Language
            // --------------------------------

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

            language_changed:
                "Language changed successfully",


            // --------------------------------
            // Settings
            // --------------------------------

            settings_title:
                "Settings",

            account_settings:
                "Account Settings",

            app_settings:
                "App Settings",

            security_settings:
                "Security Settings",

            loginCode:
                "Login Code",

            withdrawSecurity:
                "Withdrawal Security Code",

            change:
                "Change",

            view:
                "View",

            open:
                "Open",


            // --------------------------------
            // Security
            // --------------------------------

            withdrawal_security:
                "Withdrawal Security",

            enter_security_code:
                "Enter Security Code",

            security_code_placeholder:
                "Enter your security code",


            // --------------------------------
            // Verification
            // --------------------------------

            verification:
                "Identity Verification",

            verification_title:
                "Verify Your Identity",

            verification_status:
                "Verification Status",

            verified:
                "Verified",

            not_verified:
                "Not Verified",

            pending:
                "Pending",


            // --------------------------------
            // Common Actions
            // --------------------------------

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

            edit:
                "Edit",

            delete:
                "Delete",

            search:
                "Search",

            loading:
                "Loading...",


            // --------------------------------
            // Messages
            // --------------------------------

            login_success:
                "Login successful",

            login_success_message:
                "Entering your account",

            invalid_login:
                "Invalid login information",

            account_created:
                "Account created successfully",

            password_mismatch:
                "Passwords do not match",

            required_field:
                "Please fill in all required fields"

        },


        // ==================================
        // العربية
        // ==================================

        ar: {

            // --------------------------------
            // عام
            // --------------------------------

            home:
                "الرئيسية",

            dashboard:
                "الرئيسية",

            wallet:
                "المحفظة",

            assets:
                "إجمالي الأصول",

            total_assets:
                "إجمالي الأصول",

            team:
                "الفريق",

            language:
                "اللغة",

            settings:
                "الإعدادات",

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

            sync:
                "التزامن",


            // --------------------------------
            // الحساب
            // --------------------------------

            account:
                "حسابي",

            username:
                "اسم المستخدم",

            uid:
                "UID",

            email:
                "البريد الإلكتروني",

            phone:
                "رقم الهاتف",

            security_code:
                "رمز الأمان",

            identity_verification:
                "التحقق من الهوية",


            // --------------------------------
            // الرئيسية
            // --------------------------------

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


            // --------------------------------
            // تسجيل الدخول
            // --------------------------------

            login:
                "تسجيل الدخول",

            login_subtitle:
                "تسجيل الدخول إلى حسابك",

            email_phone:
                "البريد الإلكتروني أو رقم الهاتف",

            email_phone_placeholder:
                "أدخل البريد الإلكتروني أو رقم الهاتف",

            password_label:
                "كلمة المرور",

            password_placeholder:
                "أدخل كلمة المرور",

            login_btn:
                "تسجيل الدخول",

            forgot_password:
                "نسيت كلمة المرور؟",

            create_account:
                "إنشاء حساب",


            // --------------------------------
            // إنشاء الحساب
            // --------------------------------

            register:
                "إنشاء حساب",

            register_title:
                "إنشاء حسابك",

            register_subtitle:
                "انضم إلى VALORA اليوم",

            confirm_password:
                "تأكيد كلمة المرور",

            confirm_password_placeholder:
                "أعد إدخال كلمة المرور",

            referral_code:
                "رمز الدعوة",

            referral_code_placeholder:
                "أدخل رمز الدعوة",

            register_btn:
                "إنشاء الحساب",


            // --------------------------------
            // المحفظة
            // --------------------------------

            wallet_title:
                "المحفظة",

            deposit:
                "إيداع",

            withdraw:
                "سحب",

            deposit_title:
                "الإيداع",

            withdraw_title:
                "السحب",

            deposit_amount:
                "مبلغ الإيداع",

            withdraw_amount:
                "مبلغ السحب",

            available_balance:
                "الرصيد المتاح",

            transaction_history:
                "سجل المعاملات",


            // --------------------------------
            // الفريق
            // --------------------------------

            my_team:
                "فريقي",

            team_members:
                "أعضاء الفريق",

            referral:
                "الإحالة",

            referral_code_title:
                "رمز الدعوة",

            copy:
                "نسخ",

            copied:
                "تم النسخ",


            // --------------------------------
            // الإشعارات
            // --------------------------------

            notification_title:
                "الإشعارات",

            no_notifications:
                "لا توجد إشعارات",

            mark_read:
                "تحديد كمقروء",


            // --------------------------------
            // اللغة
            // --------------------------------

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

            language_changed:
                "تم تغيير اللغة بنجاح",


            // --------------------------------
            // الإعدادات
            // --------------------------------

            settings_title:
                "الإعدادات",

            account_settings:
                "إعدادات الحساب",

            app_settings:
                "إعدادات التطبيق",

            security_settings:
                "إعدادات الأمان",

            loginCode:
                "رمز الدخول",

            withdrawSecurity:
                "رمز أمان السحب",

            change:
                "تغيير",

            view:
                "عرض",

            open:
                "فتح",


            // --------------------------------
            // الأمان
            // --------------------------------

            withdrawal_security:
                "أمان السحب",

            enter_security_code:
                "أدخل رمز الأمان",

            security_code_placeholder:
                "أدخل رمز الأمان الخاص بك",


            // --------------------------------
            // التحقق
            // --------------------------------

            verification:
                "التحقق من الهوية",

            verification_title:
                "تحقق من هويتك",

            verification_status:
                "حالة التحقق",

            verified:
                "تم التحقق",

            not_verified:
                "لم يتم التحقق",

            pending:
                "قيد الانتظار",


            // --------------------------------
            // الأوامر
            // --------------------------------

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

            edit:
                "تعديل",

            delete:
                "حذف",

            search:
                "بحث",

            loading:
                "جارٍ التحميل...",


            // --------------------------------
            // الرسائل
            // --------------------------------

            login_success:
                "تم تسجيل الدخول",

            login_success_message:
                "جاري الدخول إلى الحساب",

            invalid_login:
                "بيانات تسجيل الدخول غير صحيحة",

            account_created:
                "تم إنشاء الحساب بنجاح",

            password_mismatch:
                "كلمة المرور غير متطابقة",

            required_field:
                "يرجى إدخال جميع الحقول المطلوبة"

        }

    };


    // ======================================
    // GET CURRENT LANGUAGE
    // ======================================

    function getLanguage() {

        let savedLanguage = null;

        try {

            savedLanguage =
                localStorage.getItem(STORAGE_KEY);

        } catch (error) {

            savedLanguage = null;

        }


        if (
            savedLanguage &&
            translations[savedLanguage]
        ) {

            return savedLanguage;

        }


        return DEFAULT_LANGUAGE;

    }


    // ======================================
    // APPLY HTML LANGUAGE & DIRECTION
    // ======================================

    function applyDocumentLanguage(lang) {

        const html =
            document.documentElement;


        if (!html) return;


        html.lang = lang;


        html.dir =
            RTL_LANGUAGES.includes(lang)
                ? "rtl"
                : "ltr";

    }


    // ======================================
    // APPLY TEXT TRANSLATIONS
    // ======================================

    function applyTranslations() {

        const lang =
            getLanguage();


        const data =
            translations[lang];


        if (!data) return;


        // ----------------------------------
        // Normal text
        // ----------------------------------

        document
            .querySelectorAll("[data-lang]")
            .forEach(function (element) {

                const key =
                    element.getAttribute("data-lang");


                if (
                    Object.prototype.hasOwnProperty.call(
                        data,
                        key
                    )
                ) {

                    element.textContent =
                        data[key];

                }

            });


        // ----------------------------------
        // Placeholder
        // ----------------------------------

        document
            .querySelectorAll(
                "[data-lang-placeholder]"
            )
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-lang-placeholder"
                    );


                if (
                    Object.prototype.hasOwnProperty.call(
                        data,
                        key
                    )
                ) {

                    element.placeholder =
                        data[key];

                }

            });


        // ----------------------------------
        // Title
        // ----------------------------------

        const titleElement =
            document.querySelector(
                "[data-lang-title]"
            );


        if (titleElement) {

            const key =
                titleElement.getAttribute(
                    "data-lang-title"
                );


            if (
                Object.prototype.hasOwnProperty.call(
                    data,
                    key
                )
            ) {

                document.title =
                    "VALORA | " + data[key];

            }

        }

    }


    // ======================================
    // APPLY LANGUAGE
    // ======================================

    function applyLanguage() {

        const lang =
            getLanguage();


        applyDocumentLanguage(lang);

        applyTranslations();

    }


    // ======================================
    // CHANGE LANGUAGE
    // ======================================

    function setLanguage(lang) {

        if (!translations[lang]) {

            lang =
                DEFAULT_LANGUAGE;

        }


        // Save selected language

        try {

            localStorage.setItem(
                STORAGE_KEY,
                lang
            );

        } catch (error) {

            console.warn(
                "VALORA: Unable to save language."
            );

        }


        // Apply immediately

        applyDocumentLanguage(lang);

        applyTranslations();


        // Update radio buttons

        document
            .querySelectorAll(".language-radio")
            .forEach(function (item) {

                item.classList.remove(
                    "active"
                );

            });


        const radio =
            document.getElementById(
                "radio-" + lang
            );


        if (radio) {

            radio.classList.add(
                "active"
            );

        }


        // Return to dashboard

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 300);

    }


    // ======================================
    // PAGE LOAD
    // ======================================

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            applyLanguage();


            const currentLanguage =
                getLanguage();


            const radio =
                document.getElementById(
                    "radio-" +
                    currentLanguage
                );


            if (radio) {

                radio.classList.add(
                    "active"
                );

            }

        }
    );


    // ======================================
    // PUBLIC API
    // ======================================

    window.VALORA_LANG = {

        getLanguage:
            getLanguage,

        setLanguage:
            setLanguage,

        applyLanguage:
            applyLanguage,

        translations:
            translations

    };


    // ======================================
    // BACKWARD COMPATIBILITY
    // ======================================

    window.setLanguage =
        setLanguage;


    window.applyLanguage =
        applyLanguage;


})();
