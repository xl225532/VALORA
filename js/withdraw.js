// ==========================================
// VALORA WITHDRAW SYSTEM
// ==========================================


let withdrawCoin = "USDT";

let withdrawNetwork = "TRC20";




// ==========================================
// COIN NETWORKS
// ==========================================


const withdrawNetworks = {

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





// ==========================================
// SELECT COIN
// ==========================================


function selectWithdrawCoin(coin, button){


    if(!withdrawNetworks[coin]) return;



    withdrawCoin = coin;



    document
    .querySelectorAll(".withdraw-coin")
    .forEach(function(btn){

        btn.classList.remove("active");

    });



    if(button){

        button.classList.add("active");

    }



    loadWithdrawNetworks();


}






// ==========================================
// LOAD NETWORKS
// ==========================================


function loadWithdrawNetworks(){



    let box =
    document.getElementById(
        "withdrawNetwork"
    );



    if(!box) return;



    box.innerHTML = "";



    withdrawNetworks[withdrawCoin]
    .forEach(function(network,index){



        let btn =
        document.createElement("button");



        btn.type="button";

        btn.className="network";

        btn.innerText=network;



        if(index===0){

            btn.classList.add("active");

            withdrawNetwork = network;

        }




        btn.onclick=function(){


            selectWithdrawNetwork(
                this,
                network
            );


        };



        box.appendChild(btn);



    });



}







// ==========================================
// SELECT NETWORK
// ==========================================


function selectWithdrawNetwork(button,network){


    withdrawNetwork = network;



    document
    .querySelectorAll(".network")
    .forEach(function(btn){


        btn.classList.remove("active");


    });



    button.classList.add("active");



}








// ==========================================
// GET BALANCE
// ==========================================


function getBalance(){


    return Number(

        localStorage.getItem(
            "VALORA_BALANCE"
        )

    ) || 0;


}








// ==========================================
// WITHDRAW FEE SYSTEM
// ==========================================


function getWithdrawFee(){



    let doubled =

    localStorage.getItem(
        "VALORA_DOUBLED"
    );



    if(doubled === "true"){


        return 5;


    }



    return 20;



}







// ==========================================
// CALCULATE WITHDRAW
// ==========================================


function calculateWithdraw(){



    let amount =

    Number(

        document.getElementById(
            "withdrawAmount"
        ).value

    )

    ||0;





    let feePercent =

    getWithdrawFee();





    let fee =

    amount *

    (feePercent / 100);





    let receive =

    amount - fee;





    let feeBox =

    document.getElementById(
        "withdrawFee"
    );



    let receiveBox =

    document.getElementById(
        "receiveAmount"
    );





    if(feeBox){

        feeBox.innerHTML =

        fee.toFixed(2)

        +" USDT";

    }





    if(receiveBox){

        receiveBox.innerHTML =

        receive.toFixed(2)

        +" USDT";

    }



}








// ==========================================
// SUBMIT WITHDRAW
// ==========================================


function submitWithdraw(){



    let amount =

    Number(

        document.getElementById(
            "withdrawAmount"
        ).value

    )

    ||0;




    let address =

    document.getElementById(
        "withdrawAddress"
    ).value;





    let security =

    document.getElementById(
        "withdrawSecurityCode"
    ).value;







    let savedSecurity =

    localStorage.getItem(
        "VALORA_SECURITY_CODE"
    )

    ||"123456";







    if(security !== savedSecurity){


        showWithdrawMessage(
        "رمز الأمان غير صحيح",
        false
        );


        return;

    }







    if(!amount || !address){


        showWithdrawMessage(
        "أكمل جميع البيانات",
        false
        );


        return;

    }







    let balance = getBalance();





    if(amount > balance){


        showWithdrawMessage(
        "الرصيد غير كافي",
        false
        );


        return;


    }







    let fee =

    amount *

    (getWithdrawFee()/100);





    let receive =

    amount-fee;






    localStorage.setItem(

        "VALORA_BALANCE",

        balance-amount

    );





    saveWithdrawHistory(

        amount,

        fee,

        receive,

        address

    );







    showWithdrawMessage(
    "تم إرسال طلب السحب",
    true
    );



}








// ==========================================
// SAVE HISTORY
// ==========================================


function saveWithdrawHistory(

amount,

fee,

receive,

address

){



    let history =

    JSON.parse(

        localStorage.getItem(
            "VALORA_WITHDRAW_HISTORY"
        )

    )

    ||[];






    history.push({

        coin:withdrawCoin,

        network:withdrawNetwork,

        amount:amount,

        fee:fee,

        receive:receive,

        address:address,

        date:new Date().toLocaleString()


    });





    localStorage.setItem(

        "VALORA_WITHDRAW_HISTORY",

        JSON.stringify(history)

    );



}







// ==========================================
// MESSAGE
// ==========================================


function showWithdrawMessage(text,success){



    let box =

    document.getElementById(
        "withdrawMessage"
    );



    if(!box) return;



    box.style.display="block";


    box.innerHTML=text;



    box.className =

    success

    ?

    "withdraw-message success"

    :

    "withdraw-message reject";



}







// ==========================================
// START
// ==========================================


document.addEventListener(

"DOMContentLoaded",

function(){



    loadWithdrawNetworks();


    calculateWithdraw();



    let amount =

    document.getElementById(
        "withdrawAmount"
    );



    if(amount){


        amount.addEventListener(

        "input",

        calculateWithdraw

        );


    }



});
