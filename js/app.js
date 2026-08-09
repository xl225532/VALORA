// ======================================
// VALORA APP
// ======================================
// يعمل مع:
// js/language.js
//
// لا يقوم هذا الملف بتغيير اللغة.
// اللغة يتم التحكم بها فقط من language.js
// والتخزين:
// VALORA_LANG
// ======================================

"use strict";


// ======================================
// GET TRANSLATION
// ======================================

function appTranslate(key) {

    try {

        // ==================================
        // VALORA LANGUAGE SYSTEM
        // ==================================

        if (
            window.VALORA_LANG &&
            typeof window.VALORA_LANG.getLanguage === "function" &&
            window.VALORA_LANG.translations
        ) {

            const lang =
                window.VALORA_LANG.getLanguage();

            const translations =
                window.VALORA_LANG.translations;


            if (
                translations[lang] &&
                Object.prototype.hasOwnProperty.call(
                    translations[lang],
                    key
                )
            ) {

                return translations[lang][key];

            }

        }

    } catch (error) {

        console.warn(
            "VALORA translation error:",
            error
        );

    }


    // ==================================
    // FALLBACK
    // ==================================
    // لا نغيّر اللغة هنا.
    // نستخدم اللغة الموجودة في localStorage
    // إذا كان language.js غير جاهز مؤقتاً.
    // ==================================

    let currentLanguage = "ar";

    try {

        currentLanguage =
            localStorage.getItem(
                "VALORA_LANG"
            ) || "ar";

    } catch (error) {

        currentLanguage = "ar";

    }


    const fallback = {

        ar: {

            register_contact_required:
                "يرجى إدخال البريد الإلكتروني أو رقم الهاتف",

            password_required:
                "يرجى إدخال كلمة المرور",

            confirm_password_required:
                "يرجى تأكيد كلمة المرور",

            password_mismatch:
                "كلمتا المرور غير متطابقتين",

            agree_required:
                "يجب الموافقة على الشروط والأحكام وسياسة الخصوصية",

            verification_required:
                "يرجى إدخال كود التحقق",

            verification_sent:
                "تم إرسال كود التحقق",

            register_success:
                "تم إنشاء الحساب بنجاح",

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

            login_success:
                "تم تسجيل الدخول بنجاح",

            login_success_message:
                "جاري الدخول إلى حسابك"

        },


        en: {

            register_contact_required:
                "Please enter your email or phone number",

            password_required:
                "Please enter your password",

            confirm_password_required:
                "Please confirm your password",

            password_mismatch:
                "Passwords do not match",

            agree_required:
                "You must agree to the Terms & Conditions and Privacy Policy",

            verification_required:
                "Please enter the verification code",

            verification_sent:
                "Verification code sent",

            register_success:
                "Account created successfully",

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

            login_success:
                "Login successful",

            login_success_message:
                "Logging into your account"

        }

    };


    if (
        fallback[currentLanguage] &&
        fallback[currentLanguage][key]
    ) {

        return fallback[currentLanguage][key];

    }


    return key;

}



// ======================================
// FIELD ERROR
// ======================================

function clearFieldError(
    groupId,
    errorId
) {

    const group =
        document.getElementById(
            groupId
        );


    const error =
        document.getElementById(
            errorId
        );


    if (group) {

        group.classList.remove(
            "error"
        );

    }


    if (error) {

        error.textContent =
            "";

    }

}



function showFieldError(
    groupId,
    errorId,
    message
) {

    const group =
        document.getElementById(
            groupId
        );


    const error =
        document.getElementById(
            errorId
        );


    if (group) {

        group.classList.add(
            "error"
        );

    }


    if (error) {

        error.textContent =
            message;

    }

}



// ======================================
// CLEAR REGISTER ERRORS
// ======================================

function clearRegisterErrors() {

    clearFieldError(
        "contactGroup",
        "contactError"
    );


    clearFieldError(
        "verificationGroup",
        "verificationError"
    );


    clearFieldError(
        "passwordGroup",
        "passwordError"
    );


    clearFieldError(
        "confirmPasswordGroup",
        "confirmPasswordError"
    );


    const termsGroup =
        document.getElementById(
            "termsGroup"
        );


    const termsError =
        document.getElementById(
            "termsError"
        );


    if (termsGroup) {

        termsGroup.classList.remove(
            "error"
        );

    }


    if (termsError) {

        termsError.textContent =
            "";

    }

}



// ======================================
// GENERATE REFERRAL CODE
// ======================================

function generateReferralCode() {

    const code =
        Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();


    return "VALORA-" + code;

}



// ======================================
// REGISTER
// ======================================

function setupRegister() {

    const registerForm =
        document.getElementById(
            "registerForm"
        );


    if (!registerForm) {

        return;

    }


    registerForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            clearRegisterErrors();


            const contactElement =
                document.getElementById(
                    "contact"
                );


            const passwordElement =
                document.getElementById(
                    "password"
                );


            const confirmPasswordElement =
                document.getElementById(
                    "confirmPassword"
                );


            const verifyCodeElement =
                document.getElementById(
                    "verifyCode"
                );


            const agreeElement =
                document.getElementById(
                    "agree"
                );


            const contact =
                contactElement
                ? contactElement.value.trim()
                : "";


            const password =
                passwordElement
                ? passwordElement.value
                : "";


            const confirmPassword =
                confirmPasswordElement
                ? confirmPasswordElement.value
                : "";


            const verifyCode =
                verifyCodeElement
                ? verifyCodeElement.value.trim()
                : "";


            const agree =
                agreeElement
                ? agreeElement.checked
                : false;



            // ==================================
            // CONTACT
            // ==================================

            if (contact === "") {

                showFieldError(
                    "contactGroup",
                    "contactError",
                    appTranslate(
                        "register_contact_required"
                    )
                );


                if (contactElement) {

                    contactElement.focus();

                }


                return;

            }



            // ==================================
            // PASSWORD
            // ==================================

            if (password === "") {

                showFieldError(
                    "passwordGroup",
                    "passwordError",
                    appTranslate(
                        "password_required"
                    )
                );


                if (passwordElement) {

                    passwordElement.focus();

                }


                return;

            }



            // ==================================
            // CONFIRM PASSWORD
            // ==================================

            if (confirmPassword === "") {

                showFieldError(
                    "confirmPasswordGroup",
                    "confirmPasswordError",
                    appTranslate(
                        "confirm_password_required"
                    )
                );


                if (confirmPasswordElement) {

                    confirmPasswordElement.focus();

                }


                return;

            }



            // ==================================
            // PASSWORD MATCH
            // ==================================

            if (
                password !==
                confirmPassword
            ) {

                showFieldError(
                    "confirmPasswordGroup",
                    "confirmPasswordError",
                    appTranslate(
                        "password_mismatch"
                    )
                );


                if (confirmPasswordElement) {

                    confirmPasswordElement.focus();

                }


                return;

            }



            // ==================================
            // VERIFICATION CODE
            // ==================================

            if (
                verifyCodeElement &&
                verifyCode === ""
            ) {

                showFieldError(
                    "verificationGroup",
                    "verificationError",
                    appTranslate(
                        "verification_required"
                    )
                );


                verifyCodeElement.focus();

                return;

            }



            // ==================================
            // TERMS
            // ==================================

            if (!agree) {

                const termsGroup =
                    document.getElementById(
                        "termsGroup"
                    );


                const termsError =
                    document.getElementById(
                        "termsError"
                    );


                if (termsGroup) {

                    termsGroup.classList.add(
                        "error"
                    );

                }


                if (termsError) {

                    termsError.textContent =
                        appTranslate(
                            "agree_required"
                        );

                }


                return;

            }



            // ==================================
            // CREATE USER
            // ==================================

            const user = {

                contact:
                    contact,

                password:
                    password,

                referralCode:
                    generateReferralCode()

            };


            try {

                localStorage.setItem(
                    "VALORA_USER",
                    JSON.stringify(user)
                );

            } catch (error) {

                console.error(
                    "VALORA storage error:",
                    error
                );

                return;

            }



            // ==================================
            // SUCCESS
            // ==================================

            alert(
                appTranslate(
                    "register_success"
                )
            );


            window.location.href =
                "login.html";

        }
    );

}



// ======================================
// REGISTER ERROR CLEAR
// ======================================

function setupRegisterErrorClear() {

    const fields = [

        {
            input: "contact",
            group: "contactGroup",
            error: "contactError"
        },

        {
            input: "verifyCode",
            group: "verificationGroup",
            error: "verificationError"
        },

        {
            input: "password",
            group: "passwordGroup",
            error: "passwordError"
        },

        {
            input: "confirmPassword",
            group: "confirmPasswordGroup",
            error: "confirmPasswordError"
        }

    ];


    fields.forEach(
        function (item) {

            const input =
                document.getElementById(
                    item.input
                );


            if (!input) {

                return;

            }


            input.addEventListener(
                "input",
                function () {

                    clearFieldError(
                        item.group,
                        item.error
                    );

                }
            );

        }
    );



    const agree =
        document.getElementById(
            "agree"
        );


    if (agree) {

        agree.addEventListener(
            "change",
            function () {

                if (!agree.checked) {

                    return;

                }


                const termsGroup =
                    document.getElementById(
                        "termsGroup"
                    );


                const termsError =
                    document.getElementById(
                        "termsError"
                    );


                if (termsGroup) {

                    termsGroup.classList.remove(
                        "error"
                    );

                }


                if (termsError) {

                    termsError.textContent =
                        "";

                }

            }
        );

    }

}



// ======================================
// LOGIN ERROR
// ======================================

function showLoginError(
    groupId,
    errorId,
    message
) {

    const group =
        document.getElementById(
            groupId
        );


    const error =
        document.getElementById(
            errorId
        );


    if (group) {

        group.classList.add(
            "error"
        );

    }


    if (error) {

        error.textContent =
            message;

    }

}



function clearLoginError(
    groupId,
    errorId
) {

    const group =
        document.getElementById(
            groupId
        );


    const error =
        document.getElementById(
            errorId
        );


    if (group) {

        group.classList.remove(
            "error"
        );

    }


    if (error) {

        error.textContent =
            "";

    }

}



// ======================================
// LOGIN
// ======================================

function setupLogin() {

    const loginForm =
        document.getElementById(
            "loginForm"
        );


    if (!loginForm) {

        return;

    }


    loginForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            // ==================================
            // CLEAR ERRORS
            // ==================================

            clearLoginError(
                "loginInputGroup",
                "loginInputError"
            );


            clearLoginError(
                "loginPasswordGroup",
                "loginPasswordError"
            );



            const loginInputElement =
                document.getElementById(
                    "loginInput"
                );


            const loginPasswordElement =
                document.getElementById(
                    "loginPassword"
                );



            const loginInput =
                loginInputElement
                ? loginInputElement.value.trim()
                : "";


            const loginPassword =
                loginPasswordElement
                ? loginPasswordElement.value
                : "";



            // ==================================
            // EMAIL / PHONE REQUIRED
            // ==================================

            if (loginInput === "") {

                showLoginError(
                    "loginInputGroup",
                    "loginInputError",
                    appTranslate(
                        "login_email_required"
                    )
                );


                if (loginInputElement) {

                    loginInputElement.focus();

                }


                return;

            }



            // ==================================
            // PASSWORD REQUIRED
            // ==================================

            if (loginPassword === "") {

                showLoginError(
                    "loginPasswordGroup",
                    "loginPasswordError",
                    appTranslate(
                        "login_password_required"
                    )
                );


                if (loginPasswordElement) {

                    loginPasswordElement.focus();

                }


                return;

            }



            // ==================================
            // GET USER
            // ==================================

            let savedUser = null;


            try {

                const storedUser =
                    localStorage.getItem(
                        "VALORA_USER"
                    );


                if (storedUser) {

                    savedUser =
                        JSON.parse(
                            storedUser
                        );

                }

            } catch (error) {

                savedUser = null;

            }



            // ==================================
            // ACCOUNT NOT FOUND
            // ==================================

            if (!savedUser) {

                showLoginError(
                    "loginInputGroup",
                    "loginInputError",
                    appTranslate(
                        "login_account_not_found"
                    )
                );


                if (loginInputElement) {

                    loginInputElement.focus();

                }


                return;

            }



            // ==================================
            // WRONG EMAIL / PHONE
            // ==================================

            if (
                loginInput !==
                savedUser.contact
            ) {

                showLoginError(
                    "loginInputGroup",
                    "loginInputError",
                    appTranslate(
                        "login_invalid_contact"
                    )
                );


                if (loginInputElement) {

                    loginInputElement.focus();

                    loginInputElement.select();

                }


                return;

            }



            // ==================================
            // WRONG PASSWORD
            // ==================================

            if (
                loginPassword !==
                savedUser.password
            ) {

                showLoginError(
                    "loginPasswordGroup",
                    "loginPasswordError",
                    appTranslate(
                        "login_wrong_password"
                    )
                );


                if (loginPasswordElement) {

                    loginPasswordElement.focus();

                    loginPasswordElement.select();

                }


                return;

            }



            // ==================================
            // SUCCESS
            // ==================================

            showLoginSuccess();


            setTimeout(
                function () {

                    window.location.href =
                        "dashboard.html";

                },
                1800
            );

        }
    );

}



// ======================================
// CLEAR LOGIN ERRORS WHILE TYPING
// ======================================

function setupLoginErrorClear() {

    const loginInput =
        document.getElementById(
            "loginInput"
        );


    const loginPassword =
        document.getElementById(
            "loginPassword"
        );


    if (loginInput) {

        loginInput.addEventListener(
            "input",
            function () {

                clearLoginError(
                    "loginInputGroup",
                    "loginInputError"
                );

            }
        );

    }


    if (loginPassword) {

        loginPassword.addEventListener(
            "input",
            function () {

                clearLoginError(
                    "loginPasswordGroup",
                    "loginPasswordError"
                );

            }
        );

    }

}



// ======================================
// PASSWORD SHOW / HIDE
// ======================================

function togglePassword(
    id,
    button
) {

    const input =
        document.getElementById(
            id
        );


    if (!input) {

        return;

    }


    if (
        input.type ===
        "password"
    ) {

        input.type =
            "text";


        if (button) {

            button.classList.add(
                "show"
            );

        }

    } else {

        input.type =
            "password";


        if (button) {

            button.classList.remove(
                "show"
            );

        }

    }

}



// ======================================
// LOGIN SUCCESS
// ======================================

function showLoginSuccess() {

    const box =
        document.createElement(
            "div"
        );


    box.className =
        "login-success";


    box.innerHTML = `

        <div class="success-icon">
            ✓
        </div>

        <div class="success-text">

            <strong>
                ${appTranslate("login_success")}
            </strong>

            <p>
                ${appTranslate("login_success_message")}
            </p>

        </div>

    `;


    document.body.appendChild(
        box
    );


    setTimeout(
        function () {

            if (box) {

                box.remove();

            }

        },
        1800
    );

}



// ======================================
// VERIFICATION CODE
// ======================================

function sendVerificationCode() {

    const contactElement =
        document.getElementById(
            "contact"
        );


    const contact =
        contactElement
        ? contactElement.value.trim()
        : "";


    if (!contact) {

        showFieldError(
            "contactGroup",
            "contactError",
            appTranslate(
                "register_contact_required"
            )
        );


        if (contactElement) {

            contactElement.focus();

        }


        return;

    }


    alert(
        appTranslate(
            "verification_sent"
        )
    );

}



// ======================================
// INITIALIZE
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupRegister();

        setupRegisterErrorClear();

        setupLogin();

        setupLoginErrorClear();

    }
);



// ======================================
// GLOBAL
// ======================================

window.appTranslate =
    appTranslate;

window.generateReferralCode =
    generateReferralCode;

window.togglePassword =
    togglePassword;

window.sendVerificationCode =
    sendVerificationCode;

window.showLoginError =
    showLoginError;

window.clearLoginError =
    clearLoginError;
