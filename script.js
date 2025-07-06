function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    if(num2 ==0){
        return "Division by zero";
    }
    return num1/num2;
}


let num1 = null;
let num2 = null;
let result = 0;
let operation = "";

function clear(event){
    event.value ="";
}


function operate(num1,num2 ,op){
    if(num1 == null){
        return "";
    }
    let result;
    switch(op){
        case "+":
            result = add(num1,num2);
            break;
        case "-":
            result = sub(num1,num2);
            break;
        case "X":
            result =multiply(num1,num2);
            break;
        case "/":
            result = divide(num1,num2);
            break;
        default:
            return "";

    }
    return result;
}

const inputArea = document.querySelector("#inputArea");
const button = document.querySelectorAll(".calContainer button");
function inputFill(button_press){
    let val = button_press.target.textContent;
    if(val>= "0" && val <= "9"){
        inputArea.value += val;
    }
    else if(val == "AC"){
        clear(inputArea);
        num1 = null;
        num2 = null;
    }
    else if(val =="del"){
        inputArea.value = inputArea.value.slice(0,inputArea.value.length -1);
    }
    else if((val == "+") || (val == "/")||(val == "-")||(val == "X")){
        num2 = Number(inputArea.value);
        clear(inputArea);
        operation = val;
        


    
    }
    else if((val == "=")){
        inputArea.value = operate(num1,num2,operation);

    }
    num1 = num2;

    
}

button.forEach(function(item){
    item.addEventListener("click",inputFill)});