let firstNuber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');

function onNumberClick(number){
    input.value += number;
}

function onActionClick(clickedAction){
    input.value += ' ' + clickedAction + ' ';
    action = clickedAction;
}

function onCountClick(){
    let splitted = input.value.split(' ');
    FirstNumber = parseInt (splitted[0]);
    action = splitted [1];
    secondNumber = parseInt(splitted[2]);
}

function calculateAnswer(){
    switch (action){
        case '+': answer = firstNuber + secondNumber; break;
        case '-': answer = firstNuber + secondNumber; break;
        case 'x': answer = firstNuber + secondNumber; break;
        case '/': answer = firstNuber + secondNumber; break;

    }
}