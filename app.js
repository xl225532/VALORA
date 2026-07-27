// VALORA USER SYSTEM



// قراءة كود الدعوة من الرابط

function getReferralFromURL(){

let params = new URLSearchParams(window.location.search);

return params.get("ref") || "";

}





// إنشاء كود إحالة جديد

function generateReferralCode(){

let number = Math.floor(100000 + Math.random() * 900000);

return "VAL-" + number;

}







// إنشاء حساب


const registerForm = document.getElementById("registerForm");


if(registerForm){


let referralInput = document.getElementById("referralCode");


// تعبئة كود الدعوة من الرابط تلقائياً

if(referralInput){

let ref = getReferralFromURL();

if(ref){

referralInput.value = ref;

referralInput.readOnly = true;

}

}



registerForm.addEventListener("submit", function(e){


e.preventDefault();



let myReferralCode = generateReferralCode();



let user = {


contact: document.getElementById("contact").value,


password: document.getElementById("password").value,


referralCode: myReferralCode,


invitedBy: getReferralFromURL()



};



// حفظ بيانات المستخدم

localStorage.setItem(
"VALORA_USER",
JSON.stringify(user)
);



alert("تم إنشاء الحساب بنجاح");



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
