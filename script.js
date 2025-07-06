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
    num1 =Number(num1);
    num2 = Number(num2);
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
        case "%":
            result = (divide(num1,num2))*100;
            break;
        default:
            return "";

    }
    num1 = null;
    num2 = null;
    return result;
}

const inputArea = document.querySelector("#inputArea");
const button = document.querySelectorAll(".calContainer button");
function inputFill(button_press){
    let val = button_press.target.textContent;
    if(val>= "0" && val <= "9"){
        inputArea.value += val;
    }
    else if(val =="."){
        
        if(!(inputArea.value.split("").includes("."))){
            inputArea.value += val;

        }

    }
    else if(val == "AC"){
        clear(inputArea);
        num1 = null;
        num2 = null;
        operation = "";
    }
    else if(val =="del"){
        inputArea.value = inputArea.value.slice(0,inputArea.value.length -1);
    }
    else if((val == "+") || (val == "/")||(val == "-")||(val == "X")||(val == "%")){
        clear(inputArea);
        operation = val;
    }
    else if(val == "="){
        if(operation != ""){
        result = operate(num1,num2,operation);
        num2 = null;
        operation ="";
        inputArea.value = result;
    }}


    if(operation == "")
        num1 = inputArea.value;
    else
        num2 = inputArea.value;



    
}

button.forEach(function(item){
    item.addEventListener("click",inputFill)});