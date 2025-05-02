console.log("hello")
// defining all the basic operation

const add=function(a,b){
    return a+b;
}

const substract=function(a,b){
    return a-b;
}

const multiply=function(a,b){
    return a*b;
}

const divide=function(a,b){
    return a/b;
}

const doNothing=function(a,b){
    return 0;
}


// declaring variables and operation

let firstVariable = 0
let secondVariable = 0
let operator = "doNothing" 
let displayValue = ""


//operation function

function resolveOperator(opString) {
    if (opString === "add") return add;
    if (opString === "substract") return substract;
    if (opString === "multiply") return multiply;
    if (opString === "divide") return divide;
    return doNothing;
  }

const operate = function(a,operator,b){
    return operator(a,b);
}

const button = document.querySelector('button');
const display = document.querySelector("#display");
let displayValueArray =[];
const singleNumber = '0123456789.';


document.addEventListener("click", (event)=>{
    if(event.target.type === "button"){
        if(event.target.classList.contains("clear")){
            console.log("clear");
            firstVariable = 0;
            secondVariable = 0;
            operator = "doNothing" ;
            displayValue = "";
            displayValueArray =[];
            display.textContent = displayValue;
        }
        else if (event.target.value === "percent"){
            if (parseFloat(displayValue) === firstVariable) {
                displayValue = parseFloat(displayValue)/ 100;
                firstVariable = displayValue;
            }
            else {
                displayValue = parseFloat(displayValue)/ 100;
                secondVariable = displayValue;
            }
            display.textContent = displayValue;
        }
        else if (event.target.value === "sign"){
            if (parseFloat(displayValue) === firstVariable) {
                displayValue = parseFloat(displayValue)* -1;
                firstVariable = displayValue;
            }
            else {
                displayValue = parseFloat(displayValue)*-1;
                secondVariable = displayValue;
            }
            display.textContent = displayValue;
        }
        else if (singleNumber.includes(event.target.value)){
            if (operator === "doNothing"){
                console.log(event.target.value);
                displayValueArray.push(event.target.value);
                displayValue = displayValueArray.join('');
                firstVariable = parseFloat(displayValue);
                display.textContent = displayValue;


            }
            else {
                console.log(event.target.value);
                displayValueArray.push(event.target.value);
                displayValue = displayValueArray.join('');
                secondVariable = parseFloat(displayValue);
                display.textContent = displayValue;

            }
        }
        else if (event.target.value === "=" ){
            if (secondVariable === 0 && operator === divide){
                displayValue = "LOL"
                display.textContent = displayValue;
            }
            else {
                displayValue = operate(firstVariable,operator,secondVariable);
                display.textContent = Math.round(displayValue * 1000000) / 1000000;

            }
            firstVariable = 0;
            secondVariable = 0;
            operator = "doNothing" ;


        }
        else{
            // operators
            console.log(event.target.value);

            operator = resolveOperator(event.target.value);
            displayValueArray = [];

        }
 
    }
})


