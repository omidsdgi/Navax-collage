let currentInput=""
let firstOperand=null
let operator=null
const resultBox=document.getElementById("resultBox")
const historyList=document.getElementById("historyList")

function appendNumber(number){
    currentInput +=number;
    updateDisplay(currentInput);
}

function setOperator(op){
    if(currentInput==="") return;
    if (firstOperand===null){
        firstOperand = parseFloat(currentInput);
    } else if (operator){
        const secondOperand=parseFloat(currentInput);
        const result= calculateResult(firstOperand,secondOperand,operator);
        addHistory(firstOperand,op,secondOperand,result);
        firstOperand=result
    }
    operator=op;
    currentInput="";
    updateDisplay(firstOperand + "" + operator);
}

function calculate(){
    if(currentInput==="" || operator===null || firstOperand===null) return;
    const secondOperand=parseFloat(currentInput);
    const result=calculateResult(firstOperand,secondOperand,operator);
    addHistory(firstOperand,operator,secondOperand, result);

    firstOperand=result;
    currentInput=result.toString();
    operator= null
    updateDisplay(result);
}
function addHistory(num1,op,num2,result){
    const listItem=document.createElement("li");
    listItem.textContent=`${num1} ${op} ${num2}= ${result}`;
    historyList.appendChild(listItem);
}

function calculateResult(num1,num2,op){
    switch(op){
        case "+":return  num1 + num2
        case "-": return  num1 - num2
        case "*": return  num1 * num2
        case "/": return  num2 !==0 ? num1 / num2 : "Error"
        default:  return  null;

    }
}
function clearCalculator(){
    currentInput=""
    firstOperand=null
    operator=null
    updateDisplay(0);
    historyList.innerHTML="";
}

function updateDisplay(value=""){
    resultBox.textContent=value || "0";
}

