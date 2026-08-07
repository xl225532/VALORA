// ==================================
// VALORA DEPOSIT SYSTEM
// ==================================

let currentCoin = "USDT";
let currentNetwork = "TRC20";



// ==================================
// COIN NETWORKS
// ==================================

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




// ==================================
// DEPOSIT ADDRESSES
// ==================================

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




// ==================================
// SELECT COIN
// ==================================

function selectCoin(coin,button){


    if(!coinNetworks[coin]) return;


    currentCoin = coin;



    document
    .querySelectorAll(".deposit-coin")
    .forEach(function(btn){

        btn.classList.remove("active");

    });



    if(button){

        button.classList.add("active");

    }



    loadNetworks();


}





// ==================================
// LOAD NETWORKS
// ==================================

function loadNetworks(){


    const box =
    document.getElementById("networkBox");



    if(!box) return;



    box.innerHTML="";



    const networks =
    coinNetworks[currentCoin];



    networks.forEach(function(network,index){



        let btn =
        document.createElement("button");



        btn.type="button";

        btn.className="network";


        btn.innerText = network;



        if(index===0){


            btn.classList.add("active");

            currentNetwork = network;


        }



        btn.onclick=function(){


            selectNetwork(
                this,
                network
            );


        };



        box.appendChild(btn);



    });



    updateAddress();


}







// ==================================
// SELECT NETWORK
// ==================================

function selectNetwork(button,network){



    currentNetwork = network;



    document
    .querySelectorAll(".network")
    .forEach(function(btn){


        btn.classList.remove("active");


    });



    button.classList.add("active");



    updateAddress();



}







// ==================================
// UPDATE ADDRESS
// ==================================

function updateAddress(){



    const input =
    document.getElementById(
        "depositAddress"
    );



    if(!input) return;




    if(
        addresses[currentCoin] &&
        addresses[currentCoin][currentNetwork]
    ){


        input.value =
        addresses[currentCoin][currentNetwork];


    }else{


        input.value="";


    }



}







// ==================================
// COPY ADDRESS
// ==================================

function copyDeposit(){



    const input =
    document.getElementById(
        "depositAddress"
    );



    if(!input || !input.value) return;



    navigator.clipboard
    .writeText(input.value)
    .then(function(){



        let lang =
        localStorage.getItem(
            "VALORA_LANG"
        ) || "en";



        if(lang==="ar"){


            alert(
            "تم نسخ عنوان الإيداع"
            );


        }else{


            alert(
            "Deposit address copied"
            );


        }



    });



}







// ==================================
// START
// ==================================

document.addEventListener(
"DOMContentLoaded",
function(){



    if(typeof applyLanguage === "function"){


        applyLanguage();


    }



    loadNetworks();


    updateAddress();



});
