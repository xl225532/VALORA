alert("APP WORKING");
// ======================================
// VALORA APP
// ======================================

// استخراج كود الدعوة من الرابط
function getReferralFromURL() {

    const params = new URLSearchParams(window.location.search);

    return params.get("ref") || "";

}

// إنشاء كود دعوة عشوائي
function generateReferralCode() {

    const code = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    return "VALORA-" + code;

}

// ======================================
// إنشاء الحساب
// ======================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    const inviteInput = document.getElementById("inviteCode");

    if (inviteInput) {

        const ref = getReferralFromURL();

        if (ref !== "") {

            inviteInput.value = ref;
            inviteInput.readOnly = true;

        }

    }

}
// ======================================
// إنشاء الحساب
// ======================================

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const contact = document.getElementById("contact").value.trim();

        const password = document.getElementById("password").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        if (contact === "") {

            alert("يرجى إدخال البريد الإلكتروني أو رقم الهاتف");

            return;

        }

        if (password !== confirmPassword) {

            alert("كلمة المرور غير متطابقة");

            return;

        }

        const user = {

            contact: contact,

            password: password,

            referralCode: generateReferralCode(),

            invitedBy: getReferralFromURL()

        };

        localStorage.setItem(
            "VALORA_USER",
            JSON.stringify(user)
        );

        alert("تم إنشاء الحساب بنجاح");

        window.location.href = "login.html";

    });

}
// ======================================
// تسجيل الدخول
// ======================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const savedUser = JSON.parse(
            localStorage.getItem("VALORA_USER")
        );

        const loginInput = document
            .getElementById("loginInput")
            .value
            .trim();

        const loginPassword = document
            .getElementById("loginPassword")
            .value;

        if (
            savedUser &&
            loginInput === savedUser.contact &&
            loginPassword === savedUser.password
        ) {

            alert("تم تسجيل الدخول بنجاح");

            window.location.href = "dashboard.html";

        } else {

            alert("بيانات تسجيل الدخول غير صحيحة");

        }

    });

}
// ======================================
// إظهار / إخفاء كلمة المرور
// ======================================

function togglePassword(id, button) {

    const input = document.getElementById(id);

    if (!input) return;

    if (input.type === "password") {

        input.type = "text";

        if (button) {
            button.classList.add("show");
        }

    } else {

        input.type = "password";

        if (button) {
            button.classList.remove("show");
        }

    }

}
