const multiply=function(a,b){
    return a*b;
}

const operate = function(a,operator,b){
    return operator(a,b)
}
let functionname = window["multiply"]
console.log(operate(1,functionname,12))

