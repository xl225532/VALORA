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


    // Fallback عربي
    const fallback = {

        register_contact_required:
            "يرجى إدخال البريد الإلكتروني أو رقم الهاتف",

        password_mismatch:
            "كلمة المرور غير متطابقة",

        register_success:
            "تم إنشاء الحساب بنجاح",

        login_success:
            "تم تسجيل الدخول",

        login_success_message:
            "جاري الدخول إلى الحساب",

        login_error:
            "بيانات تسجيل الدخول غير صحيحة"

    };


    return fallback[key] || key;

}



// ======================================
// إنشاء كود دعوة
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
// إنشاء حساب
// ======================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


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



            // ------------------------------
            // التحقق من البريد أو الهاتف
            // ------------------------------

            if (contact === "") {

                alert(
                    appTranslate(
                        "register_contact_required"
                    )
                );

                return;

            }



            // ------------------------------
            // التحقق من كلمة المرور
            // ------------------------------

            if (
                password !==
                confirmPassword
            ) {

                alert(
                    appTranslate(
                        "password_mismatch"
                    )
                );

                return;

            }



            // ------------------------------
            // إنشاء المستخدم
            // ------------------------------

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



            // ------------------------------
            // نجاح إنشاء الحساب
            // ------------------------------

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
// تسجيل الدخول
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



            // ------------------------------
            // بيانات صحيحة
            // ------------------------------

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

            // ------------------------------
            // بيانات خاطئة
            // ------------------------------

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
// إظهار وإخفاء كلمة المرور
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
// إشعار نجاح تسجيل الدخول
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
