// import * as math from "mathjs";


const buttons = document.querySelectorAll("button")
const symbols = ["+", "-", "*", "/", ""]


function calculate(expression) {
    if (expression.length === 0) return;

    
    if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
        return;
    }

    try {
        return math.evaluate(expression);
    } catch {
        return;
    }
}


function typeNum(buttonValue){
    let value = document.querySelector(".screen").textContent;
    const lastOperator = Math.max(
    value.lastIndexOf("+"),
    value.lastIndexOf("-"),
    value.lastIndexOf("*"),
    value.lastIndexOf("/"), 0
    );
    console.log(lastOperator)
    
    if (buttonValue == "⌫"){
        if(value != 0){
            document.querySelector(".screen").textContent = value.slice(1);
        }
    }
    else if(buttonValue == "CE"){
        document.querySelector(".screen").textContent = ""
    }

    else if(buttonValue == "±"){
        document.querySelector(".screen").textContent = value.slice(lastOperator) + "(-" + value.slice(lastOperator) + ")"
        
    }
    else if(buttonValue == "%"){
        document.querySelector(".screen").textContent = value.slice(lastOperator) / 100 
    }
    else if(buttonValue == "="){
        document.querySelector(".screen").textContent = calculate(value)
    }
    else if(!symbols.includes(buttonValue) || !symbols.includes(value.slice(-1))){
            document.querySelector(".screen").textContent += buttonValue;
    }
    
}


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.textContent;
        let value = document.querySelector(".screen").textContent;
        typeNum(buttonValue);
        console.log(buttonValue);
        
    });
});

// let h = "12345"
// console.log(h.slice(-1))