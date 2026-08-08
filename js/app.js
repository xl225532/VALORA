// ======================================
// VALORA APP
// ======================================


// ======================================
// GET TRANSLATION
// ======================================

function appTranslate(key) {

    try {

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
                translations[lang][key]
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


    const fallback = {

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

        register_success:
            "تم إنشاء الحساب بنجاح",

        login_success:
            "تم تسجيل الدخول بنجاح",

        login_success_message:
            "جاري الدخول إلى الحساب",

        login_error:
            "بيانات تسجيل الدخول غير صحيحة"

    };


    return fallback[key] || key;

}



// ======================================
// CLEAR ERROR
// ======================================

function clearFieldError(groupId, errorId) {

    const group =
        document.getElementById(groupId);

    const error =
        document.getElementById(errorId);


    if (group) {

        group.classList.remove("error");

    }


    if (error) {

        error.textContent = "";

    }

}



// ======================================
// SHOW FIELD ERROR
// ======================================

function showFieldError(
    groupId,
    errorId,
    message
) {

    const group =
        document.getElementById(groupId);

    const error =
        document.getElementById(errorId);


    if (group) {

        group.classList.add("error");

    }


    if (error) {

        error.textContent =
            message;

    }

}



// ======================================
// CLEAR ALL REGISTER ERRORS
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
        document.getElementById("termsGroup");

    const termsError =
        document.getElementById("termsError");


    if (termsGroup) {

        termsGroup.classList.remove("error");

    }


    if (termsError) {

        termsError.textContent = "";

    }

}



// ======================================
// CREATE REFERRAL CODE
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

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            clearRegisterErrors();


            const contact =
                document
                .getElementById("contact")
                .value
                .trim();


            const password =
                document
                .getElementById("password")
                .value;


            const confirmPassword =
                document
                .getElementById("confirmPassword")
                .value;


            const verifyCode =
                document
                .getElementById("verifyCode")
                ?.value
                .trim() || "";


            const agree =
                document
                .getElementById("agree")
                ?.checked || false;



            // ==================================
            // CONTACT REQUIRED
            // ==================================

            if (contact === "") {

                showFieldError(
                    "contactGroup",
                    "contactError",
                    appTranslate(
                        "register_contact_required"
                    )
                );

                document
                .getElementById("contact")
                .focus();

                return;

            }



            // ==================================
            // PASSWORD REQUIRED
            // ==================================

            if (password === "") {

                showFieldError(
                    "passwordGroup",
                    "passwordError",
                    appTranslate(
                        "password_required"
                    )
                );

                document
                .getElementById("password")
                .focus();

                return;

            }



            // ==================================
            // CONFIRM PASSWORD REQUIRED
            // ==================================

            if (confirmPassword === "") {

                showFieldError(
                    "confirmPasswordGroup",
                    "confirmPasswordError",
                    appTranslate(
                        "confirm_password_required"
                    )
                );

                document
                .getElementById("confirmPassword")
                .focus();

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

                document
                .getElementById("confirmPassword")
                .focus();

                return;

            }



            // ==================================
            // VERIFICATION CODE
            // ==================================

            if (
                document.getElementById("verifyCode") &&
                verifyCode === ""
            ) {

                showFieldError(
                    "verificationGroup",
                    "verificationError",
                    appTranslate(
                        "verification_required"
                    )
                );

                document
                .getElementById("verifyCode")
                .focus();

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



            localStorage.setItem(
                "VALORA_USER",
                JSON.stringify(user)
            );



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
// REMOVE ERROR WHEN USER STARTS TYPING
// ======================================

function registerInputClear() {

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


    fields.forEach(function(item) {

        const input =
            document.getElementById(
                item.input
            );


        if (input) {

            input.addEventListener(
                "input",
                function() {

                    clearFieldError(
                        item.group,
                        item.error
                    );

                }
            );

        }

    });


    const agree =
        document.getElementById("agree");


    if (agree) {

        agree.addEventListener(
            "change",
            function() {

                const termsGroup =
                    document.getElementById(
                        "termsGroup"
                    );

                const termsError =
                    document.getElementById(
                        "termsError"
                    );


                if (agree.checked) {

                    if (termsGroup) {

                        termsGroup.classList.remove(
                            "error"
                        );

                    }


                    if (termsError) {

                        termsError.textContent = "";

                    }

                }

            }
        );

    }

}


registerInputClear();



// ======================================
// LOGIN
// ======================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            let savedUser = null;


            try {

                savedUser =
                    JSON.parse(
                        localStorage.getItem(
                            "VALORA_USER"
                        )
                    );

            } catch (error) {

                savedUser = null;

            }


            const loginInput =
                document
                .getElementById("loginInput")
                .value
                .trim();


            const loginPassword =
                document
                .getElementById("loginPassword")
                .value;



            // ==================================
            // LOGIN SUCCESS
            // ==================================

            if (
                savedUser &&
                loginInput === savedUser.contact &&
                loginPassword === savedUser.password
            ) {

                showLoginSuccess();


                setTimeout(
                    function () {

                        window.location.href =
                            "dashboard.html";

                    },
                    1800
                );

            }


            // ==================================
            // LOGIN ERROR
            // ==================================

            else {

                alert(
                    appTranslate(
                        "login_error"
                    )
                );

            }

        }
    );

}



// ======================================
// PASSWORD SHOW / HIDE
// ======================================

function togglePassword(
    id,
    button
) {

    const input =
        document.getElementById(id);


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

    }

    else {

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
// LOGIN SUCCESS MESSAGE
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

            box.remove();

        },
        1800
    );

}



// ======================================
// VERIFICATION BUTTON
// ======================================

function sendVerificationCode() {

    const contact =
        document
        .getElementById("contact")
        ?.value
        .trim();


    if (!contact) {

        showFieldError(
            "contactGroup",
            "contactError",
            appTranslate(
                "register_contact_required"
            )
        );

        document
        .getElementById("contact")
        ?.focus();

        return;

    }


    alert(
        appTranslate("verification_sent")
    );

}



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
