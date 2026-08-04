// =================================
// VALORA Referral System
// =================================


// إنشاء كود دعوة خاص بالمستخدم

function createReferralCode(){

    let chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "VA";

    for(let i = 0; i < 6; i++){

        code += chars[
            Math.floor(Math.random() * chars.length)
        ];

    }

    return code;

}



// جلب الكود المحفوظ

let userReferralCode = localStorage.getItem(
    "VALORA_REFERRAL_CODE"
);



// إذا لا يوجد كود أنشئ واحد

if(!userReferralCode){

    userReferralCode = createReferralCode();

    localStorage.setItem(
        "VALORA_REFERRAL_CODE",
        userReferralCode
    );

}



// إنشاء رابط الدعوة

let referralURL =
window.location.origin +
"/VALORA/register.html?ref=" +
userReferralCode;




// عرض كود الدعوة

document.addEventListener(
"DOMContentLoaded",
function(){


    let code =
    document.getElementById(
        "myReferralCode"
    );


    if(code){

        code.innerText =
        userReferralCode;

    }




    let link =
    document.getElementById(
        "referralLink"
    );


    if(link){

        link.innerText =
        referralURL;

    }


});






// نسخ الكود

function copyCode(){


navigator.clipboard.writeText(
    userReferralCode
);


alert(
"تم نسخ كود الدعوة"
);


}






// نسخ الرابط

function copyReferral(){


navigator.clipboard.writeText(
    referralURL
);


alert(
"تم نسخ رابط الدعوة"
);


}
