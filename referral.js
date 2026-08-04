// ===============================
// VALORA Referral System
// ===============================

// إنشاء كود عشوائي
function generateReferralCode() {

    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "VA";

    for (let i = 0; i < 6; i++) {

        code += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );

    }

    return code;

}



// الحصول على الكود أو إنشاؤه

let referralCode = localStorage.getItem("VALORA_REFERRAL_CODE");

if (!referralCode) {

    referralCode = generateReferralCode();

    localStorage.setItem(
        "VALORA_REFERRAL_CODE",
        referralCode
    );

}



// إنشاء الرابط

const referralLink =
window.location.origin +
"/VALORA/register.html?ref=" +
referralCode;




// عرض الكود

const codeBox = document.getElementById("myReferralCode");

if (codeBox) {

    codeBox.textContent = referralCode;

}



// عرض الرابط

const linkBox = document.getElementById("referralLink");

if (linkBox) {

    linkBox.textContent = referralLink;

}



// نسخ الكود

function copyCode() {

    navigator.clipboard.writeText(referralCode);

    alert("تم نسخ كود الدعوة");

}



// نسخ الرابط

function copyReferral() {

    navigator.clipboard.writeText(referralLink);

    alert("تم نسخ رابط الدعوة");

}
