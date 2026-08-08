// =================================
// VALORA Referral System
// =================================


// =================================
// CREATE REFERRAL CODE
// =================================

function createReferralCode(){

    let chars =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "VA";


    for(let i = 0; i < 6; i++){

        code += chars[
            Math.floor(
                Math.random() * chars.length
            )
        ];

    }

    return code;

}



// =================================
// GET SAVED CODE
// =================================

let userReferralCode =
    localStorage.getItem(
        "VALORA_REFERRAL_CODE"
    );



// =================================
// CREATE CODE IF NOT EXISTS
// =================================

if(!userReferralCode){

    userReferralCode =
        createReferralCode();


    localStorage.setItem(
        "VALORA_REFERRAL_CODE",
        userReferralCode
    );

}



// =================================
// CREATE REFERRAL URL
// =================================

let referralURL =
    window.location.origin +
    "/VALORA/register.html?ref=" +
    userReferralCode;



// =================================
// LANGUAGE HELPER
// =================================

function referralTranslate(
    key,
    fallback
){

    try{

        let lang =
            localStorage.getItem(
                "VALORA_LANG"
            ) || "ar";


        if(
            window.VALORA_LANG &&
            window.VALORA_LANG.translations &&
            window.VALORA_LANG.translations[lang] &&
            window.VALORA_LANG.translations[lang][key]
        ){

            return
                window.VALORA_LANG
                .translations[lang][key];

        }

    }catch(error){

        console.warn(
            "VALORA referral language error:",
            error
        );

    }


    return fallback;

}



// =================================
// DISPLAY REFERRAL DATA
// =================================

document.addEventListener(
    "DOMContentLoaded",
    function(){


        // =============================
        // REFERRAL CODE
        // =============================

        let code =
            document.getElementById(
                "myReferralCode"
            );


        if(code){

            code.innerText =
                userReferralCode;

        }



        // =============================
        // REFERRAL LINK
        // =============================

        let link =
            document.getElementById(
                "referralLink"
            );


        if(link){

            link.innerText =
                referralURL;

        }


    }
);



// =================================
// COPY REFERRAL CODE
// =================================

function copyCode(){

    navigator.clipboard.writeText(
        userReferralCode
    );


    alert(

        referralTranslate(

            "referral_code_copied",

            "تم نسخ كود الدعوة"

        )

    );

}



// =================================
// COPY REFERRAL LINK
// =================================

function copyReferral(){

    navigator.clipboard.writeText(
        referralURL
    );


    alert(

        referralTranslate(

            "referral_link_copied",

            "تم نسخ رابط الدعوة"

        )

    );

}



// =================================
// GLOBAL
// =================================

window.copyCode =
    copyCode;


window.copyReferral =
    copyReferral;
