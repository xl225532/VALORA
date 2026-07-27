// VALORA USER SYSTEM


// إنشاء حساب

const registerForm = document.getElementById("registerForm");


if(registerForm){


registerForm.addEventListener("submit", function(e){


e.preventDefault();



let user = {


email: document.getElementById("email").value,


phone: document.getElementById("phone").value,


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

(
loginValue == savedUser.email ||

loginValue == savedUser.phone

)

&&

password == savedUser.password


){



window.location.href="dashboard.html";



}



else{



alert("بيانات الدخول غير صحيحة");



}



});



}
