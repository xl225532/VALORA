// ==========================================
// VALORA
// GLOBAL LANGUAGE SYSTEM
// ==========================================
//
// Supported languages:
// ar = العربية
// en = English
//
// Storage key:
// VALORA_LANG
//
// HTML usage:
//
// <span data-lang="home">الرئيسية</span>
//
// <input
//     data-lang-placeholder="email_phone_placeholder"
// >
//
// ==========================================


(function () {

    "use strict";


    // ======================================
    // إعدادات النظام
    // ======================================

    const STORAGE_KEY = "VALORA_LANG";

    const DEFAULT_LANGUAGE = "en";

    const RTL_LANGUAGES = ["ar"];


    // ======================================
    // الترجمات
    // ======================================

    const translations = {

        // ==================================
        // ENGLISH
        // ==================================

        en: {

            // ------------------------------
            // General
            // ------------------------------

            home: "Home",

            dashboard: "Dashboard",

            wallet: "Wallet",

            assets: "Total Assets",

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


            // ------------------------------
            // Dashboard
            // ------------------------------

            total_assets: "Total Assets",

            today_profit: "Today's Profit",

            sync: "Sync",

            markets: "Markets",

            bitcoin: "Bitcoin",

            ethereum: "Ethereum",

            tether: "Tether",

            tron: "TRON",

            ripple: "XRP",

            solana: "Solana",


            // ------------------------------
            // Account
            // ------------------------------

            account: "My Account",

            uid: "UID",

            email: "Email",

            phone: "Phone",

            security_code: "Security Code",

            identity_verification: "Identity Verification",


            // ------------------------------
            // Login
            // ------------------------------

            login: "Login",

            login_subtitle: "Login to your account",

            email_phone: "Email or Phone Number",

            email_phone_placeholder:
                "Enter Email or Phone Number",

            password_label: "Password",

            password_placeholder:
                "Enter Password",

            login_btn: "Login",

            forgot_password:
                "Forgot Password?",

            create_account:
                "Create Account",


            // ------------------------------
            // Register
            // ------------------------------

            register: "Register",

            register_title:
                "Create your account",

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


            // ------------------------------
            // Wallet
            // ------------------------------

            wallet_title: "Wallet",

            deposit: "Deposit",

            withdraw: "Withdraw",

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


            // ------------------------------
            // Team
            // ------------------------------

            my_team: "My Team",

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


            // ------------------------------
            // Notifications
            // ------------------------------

            notification_title:
                "Notifications",

            no_notifications:
                "No notifications",

            mark_read:
                "Mark as read",


            // ------------------------------
            // Language
            // ------------------------------

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


            // ------------------------------
            // Settings
            // ------------------------------

            settings_title:
                "Settings",

            account_settings:
                "Account Settings",

            app_settings:
                "App Settings",

            security_settings:
                "Security Settings",


            // ------------------------------
            // Security
            // ------------------------------

            withdrawal_security:
                "Withdrawal Security",

            enter_security_code:
                "Enter Security Code",

            security_code_placeholder:
                "Enter your security code",


            // ------------------------------
            // Verification
            // ------------------------------

            verification:
                "Identity Verification",

            verification_title:
                "Verify your identity",

            verification_status:
                "Verification Status",

            verified:
                "Verified",

            not_verified:
                "Not Verified",

            pending:
                "Pending",


            // ------------------------------
            // Common actions
            // ------------------------------

            save: "Save",

            cancel: "Cancel",

            confirm: "Confirm",

            close: "Close",

            back: "Back",

            next: "Next",

            submit: "Submit",

            edit: "Edit",

            delete: "Delete",

            search: "Search",

            loading: "Loading...",


            // ------------------------------
            // Messages
            // ------------------------------

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

            // ------------------------------
            // عام
            // ------------------------------

            home: "الرئيسية",

            dashboard: "لوحة الرئيسية",

            wallet: "المحفظة",

            assets: "إجمالي الأصول",

            team: "الفريق",

            language: "اللغة",

            settings: "الإعدادات",

            notifications: "الإشعارات",

            support: "مراسلة العملاء",

            terms: "الشروط والأحكام",

            security: "رمز أمان السحب",

            verify: "التحقق من الهوية",

            password: "تغيير كلمة المرور",

            logout: "تسجيل الخروج",

            application: "تطبيق VALORA",


            // ------------------------------
            // الرئيسية
            // ------------------------------

            total_assets:
                "إجمالي الأصول",

            today_profit:
                "أرباح اليوم",

            sync:
                "التزامن",

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


            // ------------------------------
            // الحساب
            // ------------------------------

            account:
                "حسابي",

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


            // ------------------------------
            // تسجيل الدخول
            // ------------------------------

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


            // ------------------------------
            // إنشاء الحساب
            // ------------------------------

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


            // ------------------------------
            // المحفظة
            // ------------------------------

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


            // ------------------------------
            // الفريق
            // ------------------------------

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


            // ------------------------------
            // الإشعارات
            // ------------------------------

            notification_title:
                "الإشعارات",

            no_notifications:
                "لا توجد إشعارات",

            mark_read:
                "تحديد كمقروء",


            // ------------------------------
            // اللغة
            // ------------------------------

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


            // ------------------------------
            // الإعدادات
            // ------------------------------

            settings_title:
                "الإعدادات",

            account_settings:
                "إعدادات الحساب",

            app_settings:
                "إعدادات التطبيق",

            security_settings:
                "إعدادات الأمان",


            // ------------------------------
            // الأمان
            // ------------------------------

            withdrawal_security:
                "أمان السحب",

            enter_security_code:
                "أدخل رمز الأمان",

            security_code_placeholder:
                "أدخل رمز الأمان الخاص بك",


            // ------------------------------
            // التحقق
            // ------------------------------

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


            // ------------------------------
            // الأوامر
            // ------------------------------

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


            // ------------------------------
            // الرسائل
            // ------------------------------

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
    // الحصول على اللغة الحالية
    // ======================================

    function getLanguage() {

        const savedLanguage =
            localStorage.getItem(STORAGE_KEY);


        if (
            savedLanguage &&
            translations[savedLanguage]
        ) {

            return savedLanguage;

        }


        return DEFAULT_LANGUAGE;

    }


    // ======================================
    // تطبيق اتجاه ولغة الصفحة
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
    // ترجمة النصوص
    // ======================================

    function applyTranslations() {

        const lang =
            getLanguage();


        const data =
            translations[lang];


        if (!data) return;


        // ------------------------------
        // النصوص
        // ------------------------------

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


        // ------------------------------
        // Placeholders
        // ------------------------------

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


        // ------------------------------
        // Title
        // ------------------------------

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
    // تطبيق اللغة بالكامل
    // ======================================

    function applyLanguage() {

        const lang =
            getLanguage();


        applyDocumentLanguage(lang);

        applyTranslations();

    }


    // ======================================
    // تغيير اللغة
    // ======================================

    function setLanguage(lang) {

        if (!translations[lang]) {

            lang = DEFAULT_LANGUAGE;

        }


        // حفظ اللغة

        localStorage.setItem(
            STORAGE_KEY,
            lang
        );


        // تطبيقها فورًا

        applyDocumentLanguage(lang);

        applyTranslations();


        // تحديث اختيار الراديو
        document
            .querySelectorAll(".language-radio")
            .forEach(function (item) {

                item.classList.remove("active");

            });


        const radio =
            document.getElementById(
                "radio-" + lang
            );


        if (radio) {

            radio.classList.add("active");

        }


        // الرجوع للرئيسية

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 300);

    }


    // ======================================
    // تشغيل النظام عند تحميل الصفحة
    // ======================================

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            applyLanguage();


            // تحديد اللغة الحالية
            const currentLanguage =
                getLanguage();


            const radio =
                document.getElementById(
                    "radio-" + currentLanguage
                );


            if (radio) {

                radio.classList.add("active");

            }

        }
    );


    // ======================================
    // جعل الدوال متاحة للـ HTML
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


    // دعم الكود القديم
    window.setLanguage =
        setLanguage;


    window.applyLanguage =
        applyLanguage;


})();
