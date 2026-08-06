// ===============================
// VALORA Language System
// ===============================

const LANG = {

en:{

login_subtitle:"Login to your account",
email_phone:"Email or Phone Number",
email_phone_placeholder:"Email or Phone Number",
password:"Password",
password_placeholder:"Password",
login_btn:"Login",
forgot_password:"Forgot Password?",
create_account:"Create Account"

},

ar:{

login_subtitle:"تسجيل الدخول إلى حسابك",
email_phone:"البريد الإلكتروني أو رقم الهاتف",
email_phone_placeholder:"أدخل البريد الإلكتروني أو رقم الهاتف",
password:"كلمة المرور",
password_placeholder:"أدخل كلمة المرور",
login_btn:"تسجيل الدخول",
forgot_password:"نسيت كلمة المرور؟",
create_account:"إنشاء حساب"

}

};

// اللغة الافتراضية
let lang = localStorage.getItem("VALORA_LANG") || "en";

// تغيير اللغة
function setLanguage(language){

    localStorage.setItem("VALORA_LANG", language);

    location.reload();

}

// تطبيق اللغة
function applyLanguage(){

    lang = localStorage.getItem("VALORA_LANG") || "en";

    document.documentElement.lang = lang;

    document.documentElement.dir =
        lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-lang]").forEach(el=>{

        const key = el.dataset.lang;

        if(LANG[lang][key]){

            el.textContent = LANG[lang][key];

        }

    });

    document.querySelectorAll("[data-lang-placeholder]").forEach(el=>{

        const key = el.dataset.langPlaceholder;

        if(LANG[lang][key]){

            el.placeholder = LANG[lang][key];

        }

    });

}

document.addEventListener("DOMContentLoaded",applyLanguage);
