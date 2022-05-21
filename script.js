// click an operator
//     store the display Number and store which operand
//     use operate function on them


// Numbers event listeners
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const zeroBtn = document.getElementById('zero');
const displayBtn = document.getElementById('display');

oneBtn.addEventListener('click', () => {changeDisplay(1);});
twoBtn.addEventListener('click', () => {changeDisplay(2);});
threeBtn.addEventListener('click', () => {changeDisplay(3);});
fourBtn.addEventListener('click', () => {changeDisplay(4);});
fiveBtn.addEventListener('click', () => {changeDisplay(5);});
sixBtn.addEventListener('click', () => {changeDisplay(6);});
sevenBtn.addEventListener('click', () => {changeDisplay(7);});
eightBtn.addEventListener('click', () => {changeDisplay(8);});
nineBtn.addEventListener('click', () => {changeDisplay(9);});
zeroBtn.addEventListener('click', () => {changeDisplay(0);});

// Operators event listeners
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const acBtn = document.getElementById('ac');
const equalsBtn = document.getElementById('equals');

addBtn.addEventListener('click', () => {compute(add);});
subtractBtn.addEventListener('click', () => {compute(subtract);});
multiplyBtn.addEventListener('click', () => {compute(multiply);});
divideBtn.addEventListener('click', () => {compute(divide);});
equalsBtn.addEventListener('click', clear); 

// Global variables
let displayValue = '';
let n1 = NaN;
let n2 = NaN;

// Functions
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
    let result = operator(a, b);
    display.textContent = result;
    n1 = result;
    displayValue = '';
}

// Puts clicked numbers into the display screen
function changeDisplay(num) {
    displayValue += num;
    display.textContent = displayValue;
}

// Called when an operand is clicked

function compute(operand) {
    if(!n1) {
    n1 = Number(displayValue);
    displayValue = '';
    } else if (n1) {
    n2 = Number(displayValue);
    operate(operand, n1, n2);
    }
}

function clear () {
    display.textContent = '';
    displayValue = '';
    n1 = NaN;
    n2 = NaN;
}
