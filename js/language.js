// ==========================
// VALORA Language System
// ==========================

// تغيير اللغة
function setLanguage(lang){

    // حفظ اللغة
    localStorage.setItem("VALORA_LANG", lang);

    // إزالة التحديد السابق
    document.querySelectorAll(".language-radio").forEach(function(item){
        item.classList.remove("active");
    });

    // تحديد اللغة المختارة
    const radio = document.getElementById("radio-" + lang);

    if(radio){
        radio.classList.add("active");
    }

    // رسالة نجاح
    alert(lang === "ar"
        ? "تم تغيير اللغة بنجاح"
        : "Language changed successfully");

    // الرجوع للإعدادات
    setTimeout(function(){
        window.location.href = "settings.html";
    },500);

}


// عند فتح الصفحة
document.addEventListener("DOMContentLoaded",function(){

    const lang =
    localStorage.getItem("VALORA_LANG") || "en";

    const radio =
    document.getElementById("radio-" + lang);

    if(radio){
        radio.classList.add("active");
    }

});
