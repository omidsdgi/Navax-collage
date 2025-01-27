let currentInput=""
let firstOperand=null
let operator=null
const resultBox=document.getElementById("resultBox")
const historyList=document.getElementById("historyList")

function appendNumber(number){
    currentInput +=number;
    updateDisplay(currentInput);
}

function updateDisplay(value=""){
    resultBox.textContent=value || "0";
}