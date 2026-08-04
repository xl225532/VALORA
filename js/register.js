// =================================
// VALORA Register Referral Reader
// =================================


document.addEventListener("DOMContentLoaded", function(){


    const inviteInput = document.getElementById("inviteCode");


    if(!inviteInput) return;



    // قراءة الرابط

    const params = new URLSearchParams(
        window.location.search
    );


    const ref = params.get("ref");



    // وضع الكود تلقائياً

    if(ref){

        inviteInput.value = ref;

        inviteInput.readOnly = true;

    }



});
