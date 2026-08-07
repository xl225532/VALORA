// ==================================
// VALORA DEPOSIT SYSTEM
// ==================================

let currentCoin = "USDT";
let currentNetwork = "TRC20";


// العملات والشبكات

const coinNetworks = {

    USDT:[
        "TRC20",
        "ERC20"
    ],

    BTC:[
        "Bitcoin"
    ],

    ETH:[
        "ERC20"
    ],

    TRX:[
        "TRC20"
    ]

};



// العناوين

const addresses = {

    USDT:{

        TRC20:
        "TXXXXXXXXXXXXXXXXXXXXXXXX",

        ERC20:
        "0xUSDTXXXXXXXXXXXXXXXX"

    },


    BTC:{

        Bitcoin:
        "bc1BTCXXXXXXXXXXXXXXXX"

    },


    ETH:{

        ERC20:
        "0xETHXXXXXXXXXXXXXXXX"

    },


    TRX:{

        TRC20:
        "TXTRONXXXXXXXXXXXXXXXX"

    }

};




// اختيار العملة

function selectCoin(coin,button){

    currentCoin = coin;


    document
    .querySelectorAll(".deposit-coin")
    .forEach(btn=>{

        btn.classList.remove("active");

    });



    button.classList.add("active");


    loadNetworks();


    updateAddress();

}




// تحميل الشبكات

function loadNetworks(){

    let box =
    document.getElementById("networkBox");


    if(!box) return;


    box.innerHTML="";



    coinNetworks[currentCoin]
    .forEach((network,index)=>{


        let btn =
        document.createElement("button");


        btn.className="network";


        btn.innerText=network;



        if(index===0){

            btn.classList.add("active");

            currentNetwork = network;

        }



        btn.onclick=function(){

            selectNetwork(this,network);

        };



        box.appendChild(btn);



    });



}




// اختيار الشبكة

function selectNetwork(button,network){


    currentNetwork = network;



    document
    .querySelectorAll(".network")
    .forEach(btn=>{

        btn.classList.remove("active");

    });



    button.classList.add("active");


    updateAddress();


}




// تحديث العنوان

function updateAddress(){


    let input =
    document.getElementById("depositAddress");



    if(input){

        input.value =
        addresses[currentCoin][currentNetwork];

    }


}




// نسخ العنوان

function copyDeposit(){


    let address =
    document
    .getElementById("depositAddress")
    .value;



    navigator.clipboard.writeText(address);



    let lang =
    localStorage.getItem("VALORA_LANG")
    || "en";



    if(lang==="ar"){

        alert("تم نسخ عنوان الإيداع");

    }else{

        alert("Deposit address copied");

    }


}





// تشغيل الصفحة

document.addEventListener(
"DOMContentLoaded",
function(){


    loadNetworks();

    updateAddress();


    if(typeof applyLanguage === "function"){

        applyLanguage();

    }


});
