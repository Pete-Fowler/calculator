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
const dotBtn = document.getElementById('dot');
const display = document.getElementById('display');
const delBtn = document.getElementById('back-space');

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
dotBtn.addEventListener('click', () => {changeDisplay('.');});
delBtn.addEventListener('click', backSpace);

// Operators event listeners
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const acBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

addBtn.addEventListener('click', () => {compute(add);});
subtractBtn.addEventListener('click', () => {compute(subtract);});
multiplyBtn.addEventListener('click', () => {compute(multiply);});
divideBtn.addEventListener('click', () => {compute(divide);});
acBtn.addEventListener('click', clear); 
equalsBtn.addEventListener('click', equals);

// Global variables
let displayValue = '';
let n1 = NaN;
let n2 = NaN;
let result = NaN;
let lastOperand;

// Functions
function add(a, b) {
    return roundToTwo(a + b);
}

function subtract(a, b) {
    return roundToTwo(a - b);
}

function multiply (a, b) {
    return roundToTwo(a * b);
}

function divide(a, b) {
    if (b == 0) {
        return 'No thanks';
    } else {
        return roundToTwo(a / b);
    }
}

// Puts clicked numbers into the display screen
function changeDisplay(num) {
    if (displayValue.length > 5) {
        display.textContent = 'Nice try';
    } else {
        if (num === '.') {
            dotBtn.disabled = true;
        }
        displayValue += num;
        display.textContent = displayValue;
    }
}

// Called when an operand is clicked
function compute(operand) {
    dotBtn.disabled = false;
    if (!lastOperand) {
        lastOperand = operand;
        }  
    if(!n1) {
        n1 = Number(displayValue);
        displayValue = '';              // prevents string concatenation from display
    } else if (n1) {
        n2 = Number(displayValue);
        operate(lastOperand, n1, n2);
    }
    lastOperand = operand;
}

// Calls the actual math function
function operate(operator, a, b) {
    result = operator(a, b);
    display.textContent = result;
    n1 = result;
    displayValue = '';
}

function equals () {
    dotBtn.disabled = false;
    n2 = Number(displayValue);
    displayValue = '';
    operate(lastOperand, n1, n2);
    n1 = NaN;
    displayValue = display.textContent;
}

function clear () {
    display.textContent = '';
    displayValue = '';
    n1 = NaN;
    n2 = NaN;
    result = NaN;
    lastOperand = '';
}

function roundToTwo(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

function backSpace () {
    let newStr = displayValue.slice(0, displayValue.length - 1);
    display.textContent = newStr;
    displayValue = display.textContent;
}