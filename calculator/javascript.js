let currentInput=""
let firstOperand=null
let operator=null
const resultBox=document.getElementById("resultBox")
const historyList=document.getElementById("historyList")

function appendNumber(number){
    currentInput +=number;
    updateDisplay(currentInput);
}
function setOperator(op) {
    if (currentInput === '') return; // اگر عددی وارد نشده، عملگر تنظیم نشود
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput); // ذخیره اولین عدد
    } else if (operator) {
        const secondOperand = parseFloat(currentInput);
        const result = calculateResult(firstOperand, secondOperand, operator);
        addHistory(firstOperand, operator, secondOperand, result);
        firstOperand = result; // نتیجه به‌عنوان عدد اول ذخیره می‌شود
    }
    operator = op;
    currentInput = ''; // ورودی ریست می‌شود
    updateDisplay(firstOperand + ' ' + operator);
}
function updateDisplay(value=""){
    resultBox.textContent=value || "0";
}