// ======================================
// VALORA LANGUAGE SYSTEM
// ======================================


const translations = {


en: {

    // Login
    login_subtitle: "Login to your account",
    email_phone: "Email or Phone Number",
    email_phone_placeholder: "Enter Email or Phone Number",
    password: "Password",
    password_placeholder: "Enter Password",
    login_btn: "Login",
    forgot_password: "Forgot Password?",
    create_account: "Create Account",


    // Language Page
    language_title: "Language",
    language_choose: "Choose your preferred language",
    english: "English",
    arabic: "Arabic"

},



ar: {

    // Login
    login_subtitle: "تسجيل الدخول إلى حسابك",
    email_phone: "البريد الإلكتروني أو رقم الهاتف",
    email_phone_placeholder: "أدخل البريد الإلكتروني أو رقم الهاتف",
    password: "كلمة المرور",
    password_placeholder: "أدخل كلمة المرور",
    login_btn: "تسجيل الدخول",
    forgot_password: "نسيت كلمة المرور؟",
    create_account: "إنشاء حساب",


    // Language Page
    language_title: "اللغة",
    language_choose: "اختر اللغة المفضلة لديك",
    english: "الإنجليزية",
    arabic: "العربية"

}


};



// اللغة الحالية
let currentLanguage =
localStorage.getItem("VALORA_LANG") || "en";




// تغيير اللغة
function setLanguage(lang){

    localStorage.setItem(
        "VALORA_LANG",
        lang
    );

    location.reload();

}




// تطبيق الترجمة
function applyLanguage(){


    currentLanguage =
    localStorage.getItem("VALORA_LANG") || "en";


    const data =
    translations[currentLanguage];



    document.querySelectorAll("[data-lang]").forEach(element=>{


        const key =
        element.getAttribute("data-lang");



        if(data[key]){

            element.textContent =
            data[key];

        }


    });




    document.querySelectorAll("[data-lang-placeholder]").forEach(element=>{


        const key =
        element.getAttribute("data-lang-placeholder");



        if(data[key]){

            element.placeholder =
            data[key];

        }


    });



}




document.addEventListener(
"DOMContentLoaded",
applyLanguage
);
