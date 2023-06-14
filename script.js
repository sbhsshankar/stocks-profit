



var initialInput = document.querySelector("#input-intial");
var quantityInput = document.querySelector("#input-shares");
var sellingInput = document.querySelector("#input-selling");
var buttonTellme = document.querySelector("#button-tellme");
var outputBox = document.querySelector("#output");

buttonTellme.addEventListener("click", submitHandler);

function submitHandler(){

    var ip = Number(initialInput.value);
    var qty = Number(quantityInput.value);
    var sp = Number(sellingInput.value);

    calculateProfitAndLoss(ip, qty, sp);
}

function calculateProfitAndLoss(initial, quantity, selling){

    if(initial > selling){
        var investement = initial * quantity;
        var loss = (initial - selling) * quantity;
        var lossPercentage = (loss/initial) * 100;
        var LP = lossPercentage.toFixed(2);

        showOutput(`You invested amount of ${investement} and you made loss of ${loss} and in percentage loss is about ${LP}%`);
    }  
    else if(selling > initial){
        var investement = initial * quantity;
        var profit = (selling - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        var PP = profitPercentage.toFixed(2);

        showOutput(`You invested amount of ${investement} and you made profit of ${profit} and in percentage profit is about ${PP}%`);
    }
    else{
        showOutput("Balanced! No Profit No Loss.");
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}


