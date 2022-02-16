const inputIncome = document.getElementById('input-income');
const inputFood = document.getElementById('input-food');
const inputRent = document.getElementById('input-rent');
const inputClothes = document.getElementById('input-clothes');
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const saveMoney = document.getElementById("save-money");
const percentInput = document.getElementById("percent-input");
const remBalance = document.getElementById("rem-balance");

const calculateButton = document.getElementById("calculate-button").addEventListener("click", function(){
    const foodExpenses = parseInt(inputFood.value);
    const rentExpenses = parseInt(inputRent.value);
    const clothesExpenses = parseInt(inputClothes.value);
    const total = foodExpenses + rentExpenses + clothesExpenses;
    totalExpenses.innerText = total;
    const inputValue = parseInt(inputIncome.value);
    // balance part start:-
    const newBalance =  inputValue - total;
    balance.innerText = newBalance;
    
})

//percent part start:-
const save = document.getElementById("save-input").addEventListener('click', function(){
   
})

