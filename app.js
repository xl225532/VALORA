document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("registerForm");


if(form){

form.addEventListener("submit", function(e){

e.preventDefault();


let password = document.getElementById("password").value;

let confirmPassword = document.getElementById("confirmPassword").value;


if(password !== confirmPassword){

alert("كلمة المرور غير متطابقة");

return;

}


localStorage.setItem("valoraUser",
document.getElementById("username").value
);


window.location.href="dashboard.html";


});


}



});
