// ======================================
// VALORA APP
// ======================================

// إنشاء كود دعوة
function generateReferralCode() {
    const code = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    return "VALORA-" + code;
}

// ======================================
// إنشاء حساب
// ======================================

const registerForm = document.getElementById("registerForm");

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
            referralCode: generateReferralCode()
        };

        localStorage.setItem("VALORA_USER", JSON.stringify(user));

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

        const savedUser = JSON.parse(localStorage.getItem("VALORA_USER"));

        const loginInput = document.getElementById("loginInput").value.trim();
        const loginPassword = document.getElementById("loginPassword").value;

        if (
            savedUser &&
            loginInput === savedUser.contact &&
            loginPassword === savedUser.password
        ) {

    showLoginSuccess();

setTimeout(function(){

    window.location.href = "dashboard.html";

},1800);

        } else {

            alert("بيانات تسجيل الدخول غير صحيحة");

        }

    });

}

// ======================================
// إظهار وإخفاء كلمة المرور
// ======================================

function togglePassword(id, button) {

    const input = document.getElementById(id);

    if (!input) return;

    if (input.type === "password") {

        input.type = "text";

        if (button) button.classList.add("show");

    } else {

        input.type = "password";

        if (button) button.classList.remove("show");

    }

}
// ======================================
// إشعار نجاح تسجيل الدخول
// ======================================

function showLoginSuccess(){

    const box = document.createElement("div");

    box.className = "login-success";

    box.innerHTML = `

    <div class="success-icon">
        ✓
    </div>

    <div class="success-text">

        <strong>
        تم تسجيل الدخول
        </strong>

        <p>
        جاري الدخول إلى الحساب
        </p>

    </div>

    `;

    document.body.appendChild(box);


    setTimeout(function(){

        box.remove();

    },1800);

}
