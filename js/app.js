// ======================================
// VALORA USER SYSTEM
// ======================================

// جلب كود الدعوة من الرابط
function getReferralFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("ref") || "";
}

// إنشاء كود دعوة جديد
function generateReferralCode() {
    const code = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    return "VALORA-" + code;
}

// ======================================
// إظهار وإخفاء كلمة المرور
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

// ======================================
// نظام كود التحقق
// ======================================

let valoraVerifyCode = "";

// إرسال الكود (تجريبي)
function sendVerificationCode() {

    const contact = document
        .getElementById("contact")
        .value
        .trim();

    if (contact === "") {

        alert("يرجى إدخال البريد الإلكتروني أو رقم الهاتف أولاً");

        return;

    }

    valoraVerifyCode = Math.floor(
        100000 + Math.random() * 900000
    ).toString();

    localStorage.setItem(
        "VALORA_VERIFY_CODE",
        valoraVerifyCode
    );

    alert(
        "رمز التحقق: " +
        valoraVerifyCode
    );

}

// فحص الكود
function checkVerification() {

    const input = document
        .getElementById("verifyCode");

    if (!input) {
        return true;
    }

    const code = input.value.trim();

    const saved = localStorage.getItem(
        "VALORA_VERIFY_CODE"
    );

    if (code !== saved) {

        alert("رمز التحقق غير صحيح");

        return false;

    }

    return true;

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

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        if (!checkVerification()) {
            return;
        }

        const contact = document
            .getElementById("contact")
            .value
            .trim();

        const password = document
            .getElementById("password")
            .value;

        const confirmPassword = document
            .getElementById("confirmPassword")
            .value;

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

            showSuccess();

            setTimeout(function () {

                window.location.href = "dashboard.html";

            }, 1500);

        } else {

            alert("بيانات تسجيل الدخول غير صحيحة");

        }

    });

}
// ======================================
// إشعار نجاح تسجيل الدخول
// ======================================

function showSuccess() {

    const oldToast = document.querySelector(".success-toast");

    if (oldToast) {
        oldToast.remove();
    }

    const box = document.createElement("div");

    box.className = "success-toast";

    box.innerHTML = `
        <div class="toast-icon">✓</div>
        <div>
            <strong>تم تسجيل الدخول</strong>
            <p>جاري الدخول إلى الحساب...</p>
        </div>
    `;

    document.body.appendChild(box);

    setTimeout(function () {

        if (box) {
            box.remove();
        }

    }, 1800);

}
