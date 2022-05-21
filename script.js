const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const display = document.getElementById('display');

let displayValue = '';

one.addEventListener('click', () => {changeDisplay(1);});
two.addEventListener('click', () => {changeDisplay(2);});
three.addEventListener('click', () => {changeDisplay(3);});
four.addEventListener('click', () => {changeDisplay(4);});
five.addEventListener('click', () => {changeDisplay(5);});
six.addEventListener('click', () => {changeDisplay(6);});
seven.addEventListener('click', () => {changeDisplay(7);});
eight.addEventListener('click', () => {changeDisplay(8);});
nine.addEventListener('click', () => {changeDisplay(9);});
zero.addEventListener('click', () => {changeDisplay(0);});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function changeDisplay(num) {
    displayValue += num;
    display.textContent = displayValue;
}