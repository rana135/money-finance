const inputIncome = document.getElementById('input-income');
const inputFood = document.getElementById('input-food');
const inputRent = document.getElementById('input-rent');
const inputClothes = document.getElementById('input-clothes');
const calculateButton = document.getElementById("calculate-button");
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const saveMoney = document.getElementById("save-money");
const saveInput = document.getElementById("save-input")
const percentInput = document.getElementById("percent-input");
const remBalance = document.getElementById("rem-balance");


calculateButton.addEventListener('click', calculateFunction);
function calculateFunction(){
    const foodExpenses = parseInt(inputFood.value);
    const rentExpenses = parseInt(inputRent.value);
    const clothesExpenses = parseInt(inputClothes.value);
    const total = foodExpenses + rentExpenses + clothesExpenses;
    totalExpenses.innerText = total;
    const inputValue = parseInt(inputIncome.value);
    // balance part start:-
    const newBalance =  inputValue - total;
    balance.innerText = newBalance;
    const finalBalance = balance.innerText;
    return finalBalance;
}



//percent part start:-
// saveInput.addEventListener('click', reserveMoney);
//    function reserveMoney(){
//        const incomeValue = parseInt(inputIncome.value);
//     const percentText = parseInt(percentInput.value);
//     let percentNum = incomeValue / 100;
//     const saveAmount = percentNum * percentText;
//     if(saveAmount < calculateFunction()){
//         saveMoney.innerText =saveAmount;
//         remBalance.innerText = calculateFunction() - saveAmount;
//     }
//     else{
//         alert('There is not enough balance in your account.')
//     }
// }


saveInput.addEventListener('click', reserveMoney);
   function reserveMoney(){
       const incomeValue = parseInt(inputIncome.value);
    const percentText = parseInt(percentInput.value);
    let percentNum = (incomeValue / 100)*percentText;
    if(percentNum < calculateFunction()){
        saveMoney.innerText =percentNum;
        remBalance.innerText = calculateFunction() - percentNum;
    }
    else{
        alert('There is not enough balance in your account.')
    }
}




//error handaling:-
// const failedError = document.getElementById('notify-failed');
// else{
//     failedError.style.display = 'block';
// }
    




