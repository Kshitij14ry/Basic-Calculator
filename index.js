
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "*Syntax Error*"
    }
}

function backspace(){
    display.value = display.value.substring(0 , display.value.length-1);
}