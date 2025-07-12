console.log("JavaScript is running..");

let calculation = '';
const input = document.querySelector('.input');

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
const addition = document.getElementById('addition');
const subtract = document.getElementById('subtract');
const multiple = document.getElementById('multiple');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

one.addEventListener('click',  () => {
    calculation = calculation + '1';
    console.log(calculation);

    input.textContent = calculation;
});

two.addEventListener('click', () => {
    calculation = calculation + '2';
    console.log(calculation);

    input.textContent = calculation;
});

three.addEventListener('click', () => {
    calculation = calculation + '3';
    console.log(calculation);

    input.textContent = calculation;
});

four.addEventListener('click', () => {
    calculation = calculation + '4';
    console.log(calculation);

    input.textContent = calculation;
});

five.addEventListener('click', () => {
    calculation = calculation + '5';
    console.log(calculation);

    input.textContent = calculation;
});

six.addEventListener('click', () => {
    calculation = calculation + '6';
    console.log(calculation);

    input.textContent = calculation;
});

seven.addEventListener('click', () => {
    calculation = calculation + '7';
    console.log(calculation);

    input.textContent = calculation;
});

eight.addEventListener('click', () => {
    calculation = calculation + '8';
    console.log(calculation);

    input.textContent = calculation;
});

nine.addEventListener('click', () => {
    calculation = calculation + '9';
    console.log(calculation);

    input.textContent = calculation;
});

zero.addEventListener('click', () => {
    calculation = calculation + '0';
    console.log(calculation);

    input.textContent = calculation;
});

addition.addEventListener('click', () => {
    calculation = calculation + ' + ';
    console.log(calculation);

    input.textContent = calculation;
});

subtract.addEventListener('click', () => {
    calculation = calculation + ' - ';
    console.log(calculation);

    input.textContent = calculation;
});

multiple.addEventListener('click', () => {
    calculation = calculation + ' * ';
    console.log(calculation);

    input.textContent = calculation;
});

equal.addEventListener('click',() => {
    calculation = eval(calculation);
    console.log(calculation);

    input.textContent = calculation;
});

clear.addEventListener('click', () => {
    calculation = '';
    console.log(calculation);

    input.textContent = calculation;
});