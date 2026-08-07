// ======================================
// VALORA LANGUAGE SYSTEM
// ======================================

function setLanguage(lang) {

    // حفظ اللغة
    localStorage.setItem("VALORA_LANG", lang);

    // تحديث اتجاه الصفحة
    if (lang === "ar") {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

    }

    // تحديث زر الاختيار
    document
        .querySelectorAll(".language-radio")
        .forEach(function (item) {

            item.classList.remove("active");

        });


    const radio =
        document.getElementById("radio-" + lang);


    if (radio) {

        radio.classList.add("active");

    }


    // الرجوع إلى الصفحة الرئيسية
    setTimeout(function () {

        window.location.href = "dashboard.html";

    }, 300);

}



// ======================================
// عند فتح صفحة اللغة
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const currentLanguage =
            localStorage.getItem("VALORA_LANG") || "en";


        if (currentLanguage === "ar") {

            document.documentElement.lang = "ar";
            document.documentElement.dir = "rtl";

        } else {

            document.documentElement.lang = "en";
            document.documentElement.dir = "ltr";

        }


        const radio =
            document.getElementById(
                "radio-" + currentLanguage
            );


        if (radio) {

            radio.classList.add("active");

        }

    }
);
