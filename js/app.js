// VALORA USER SYSTEM



function getReferralFromURL(){

let params = new URLSearchParams(window.location.search);

return params.get("ref") || "";

}






function generateReferralCode(){

let code = Math.random()
.toString(36)
.substring(2,8)
.toUpperCase();


return "VALORA-" + code;

}







const registerForm =
document.getElementById("registerForm");



if(registerForm){



let referralInput =
document.getElementById("inviteCode");





if(referralInput){


let ref = getReferralFromURL();


if(ref){


referralInput.value = ref;

referralInput.readOnly = true;


}



}







registerForm.addEventListener("submit",function(e){


e.preventDefault();




let password =
document.getElementById("password").value;



let confirm =
document.getElementById("confirmPassword").value;





if(password !== confirm){


alert("كلمة المرور غير متطابقة");

return;


}






let myCode =
generateReferralCode();






let user = {


contact:
document.getElementById("contact").value,


password:password,


referralCode:myCode,



invitedBy:
getReferralFromURL()



};





localStorage.setItem(

"VALORA_USER",

JSON.stringify(user)

);





alert("تم إنشاء الحساب بنجاح");



window.location.href="login.html";



});


}

// تسجيل الدخول


const loginForm =
document.getElementById("loginForm");



if(loginForm){



loginForm.addEventListener("submit",function(e){


e.preventDefault();





let savedUser =
JSON.parse(
localStorage.getItem("VALORA_USER")
);





let loginValue =
document.getElementById("loginInput").value;



let password =
document.getElementById("loginPassword").value;







if(

savedUser &&

loginValue === savedUser.contact &&

password === savedUser.password


){



showSuccess();



setTimeout(function(){


window.location.href="dashboard.html";


},1500);




}



else{


alert("بيانات الدخول غير صحيحة");


}



});


}









// إشعار نجاح صغير


function showSuccess(){



let box =
document.createElement("div");



box.className="success-toast";



box.innerHTML = `

<div class="toast-icon">

✓

</div>


<div>

<strong>
تم تسجيل الدخول
</strong>


<p>
جاري الدخول للحساب
</p>


</div>

`;



document.body.appendChild(box);






setTimeout(function(){


box.remove();


},1800);



}









// إظهار وإخفاء كلمة المرور


function togglePassword(id,button){



let input =
document.getElementById(id);




if(input.type==="password"){


input.type="text";


button.classList.add("active");


}

else{


input.type="password";


button.classList.remove("active");


}



}
// ===============================
// VALORA Verification Code
// ===============================

let valoraVerifyCode = null;


// إرسال كود التحقق
function sendVerificationCode(){

let contact = document.getElementById("contact").value.trim();


if(contact === ""){

alert("أدخل البريد الإلكتروني أو رقم الهاتف أولاً");

return;

}


// إنشاء كود 6 أرقام

valoraVerifyCode =

Math.floor(100000 + Math.random() * 900000);


// حفظ مؤقت

localStorage.setItem(
"VALORA_VERIFY_CODE",
valoraVerifyCode
);


// عرض للتجربة فقط
// لاحقاً يتم إرساله للبريد أو الهاتف

alert(
"كود التحقق التجريبي: " + valoraVerifyCode
);


}


// التحقق من الكود عند إنشاء الحساب

function checkVerification(){

let inputCode =

document.getElementById("verifyCode").value.trim();


let savedCode =

localStorage.getItem("VALORA_VERIFY_CODE");



if(inputCode !== savedCode){

alert("كود التحقق غير صحيح");

return false;

}


return true;

   }
