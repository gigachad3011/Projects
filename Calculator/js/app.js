let displayBox = document.querySelector(".display-box");
let keyPad = document.querySelector(".keyPad");
let operators = ["+","-","*","/","%"];

keyPad.addEventListener("click",_ => {
    if(displayBox.innerText.length > 15){
        displayBox.style.fontSize = 30+"px";
    }else if(displayBox.innerText.length > 10){
        displayBox.style.fontSize = 50+"px";
    }else if(displayBox.innerText.length > 7){
        displayBox.style.fontSize = 60+"px";
    }
})

let filter = x => {
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];
    let length = displayBox.innerText.length;

    if(length > 20){
        return false;
    }

    if(current == "0" && x != "."){
        clearLast();
    }

    if(operators.includes(x) && operators.includes(lastChar)){
        return false;
    }

    return true;
}

let showInDisplay = x => {
    if(filter(x)){
        displayBox.innerText += x;
    }
}

function calc(){
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];

    if(!operators.includes(lastChar)){
        displayBox.innerText = eval(displayBox.innerText);
    }
}

let clearAll = _ => displayBox.innerText = "";

let clearLast = _ => displayBox.innerText = displayBox.innerText.substr(0,displayBox.innerText.length-1)

