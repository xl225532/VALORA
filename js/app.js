// ======================================
// VALORA USER SYSTEM
// ======================================


// كود الدعوة من الرابط
function getReferralFromURL(){

const params = new URLSearchParams(window.location.search);

return params.get("ref") || "";

}



// إنشاء كود دعوة للمستخدم
function generateReferralCode(){

const code = Math.random()
.toString(36)
.substring(2,8)
.toUpperCase();

return "VALORA-" + code;

}



// كود التحقق المؤقت
let valoraVerifyCode = null;



// إرسال كود التحقق
function sendVerificationCode(){

const contact = document.getElementById("contact");

if(!contact) return;

const value = contact.value.trim();

if(value === ""){

alert("أدخل البريد الإلكتروني أو رقم الهاتف أولاً");

return;

}

valoraVerifyCode = Math.floor(100000 + Math.random() * 900000);

localStorage.setItem(
"VALORA_VERIFY_CODE",
valoraVerifyCode
);

// مؤقتاً
alert("رمز التحقق: " + valoraVerifyCode);

}



// فحص الكود
function checkVerification(){

const input = document.getElementById("verifyCode");

if(!input) return true;

const saved = localStorage.getItem("VALORA_VERIFY_CODE");

if(input.value.trim() !== saved){

alert("رمز التحقق غير صحيح");

return false;

}

return true;

}



// ======================================
// إنشاء الحساب
// ======================================

const registerForm = document.getElementById("registerForm");

if(registerForm){

const invite = document.getElementById("inviteCode");

if(invite){

const ref = getReferralFromURL();

if(ref){

invite.value = ref;

invite.readOnly = true;

}

}

registerForm.addEventListener("submit",function(e){

e.preventDefault();

if(!checkVerification()) return;

const password = document.getElementById("password").value;

const confirm = document.getElementById("confirmPassword").value;

if(password !== confirm){

alert("كلمة المرور غير متطابقة");

return;

}

const user={

contact:document.getElementById("contact").value,

password:password,

referralCode:generateReferralCode(),

invitedBy:getReferralFromURL()

};

localStorage.setItem(
"VALORA_USER",
JSON.stringify(user)
);

alert("تم إنشاء الحساب بنجاح");

window.location.href="login.html";

});

}
// ======================================
// تسجيل الدخول
// ======================================

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const savedUser = JSON.parse(
localStorage.getItem("VALORA_USER")
);

const loginValue =
document.getElementById("loginInput").value.trim();

const password =
document.getElementById("loginPassword").value;

if(

savedUser &&
loginValue === savedUser.contact &&
password === savedUser.password

){

showSuccess();

setTimeout(function(){

window.location.href = "dashboard.html";

},1500);

}else{

alert("بيانات الدخول غير صحيحة");

}

});

}



// ======================================
// إشعار نجاح الدخول
// ======================================

function showSuccess(){

let box = document.createElement("div");

box.className = "success-toast";

box.innerHTML = `

<div class="toast-icon">✓</div>

<div>

<strong>تم تسجيل الدخول</strong>

<p>جاري الدخول إلى الحساب...</p>

</div>

`;

document.body.appendChild(box);

setTimeout(function(){

box.remove();

},1800);

}



// ======================================
// إظهار وإخفاء كلمة المرور
// ======================================

function togglePassword(id,button){

const input = document.getElementById(id);

if(!input) return;

if(input.type === "password"){

input.type = "text";

button.classList.add("show");

}else{

input.type = "password";

button.classList.remove("show");

}

}
