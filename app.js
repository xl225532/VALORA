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



window.location.href="dashboard.html";



}



else{



alert("بيانات الدخول غير صحيحة");



}



});



}






// إظهار وإخفاء كلمة المرور

function togglePassword(id, button){


let input = document.getElementById(id);



if(input.type === "password"){


input.type = "text";

button.classList.add("active");


}

else{


input.type = "password";

button.classList.remove("active");


}


}
