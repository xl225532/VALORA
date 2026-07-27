// VALORA USER SYSTEM


// إنشاء حساب

const registerForm = document.getElementById("registerForm");


if(registerForm){


registerForm.addEventListener("submit", function(e){


e.preventDefault();



let user = {


contact: document.getElementById("contact").value,


password: document.getElementById("password").value,


inviteCode: document.getElementById("inviteCode").value


};



// حفظ بيانات المستخدم

localStorage.setItem(
"VALORA_USER",
JSON.stringify(user)
);



alert("تم إنشاء الحساب بنجاح");



// الانتقال لتسجيل الدخول

window.location.href="login.html";


});


}







// تسجيل الدخول


const loginForm = document.getElementById("loginForm");



if(loginForm){



loginForm.addEventListener("submit",function(e){



e.preventDefault();



let savedUser = JSON.parse(
localStorage.getItem("VALORA_USER")
);



let loginValue =
document.getElementById("loginInput").value;



let password =
document.getElementById("loginPassword").value;





if(

savedUser &&

loginValue == savedUser.contact

&&

password == savedUser.password


){


showSuccess();

setTimeout(()=>{

window.location.href="dashboard.html";

},1800);



}



else{



alert("بيانات الدخول غير صحيحة");



}



});



}







// رسالة نجاح حديثة

function showSuccess(){


let box = document.createElement("div");


box.className="success-box";


box.innerHTML=`

<div class="success-icon">

<svg viewBox="0 0 52 52">

<circle cx="26" cy="26" r="24"></circle>

<path d="M14 27 L22 35 L38 18"></path>

</svg>

</div>


<h3>تم تسجيل الدخول بنجاح</h3>

<p>جاري الدخول إلى الحساب</p>

`;



document.body.appendChild(box);



}
