let firstNumber;
let secondNumber;
let operation;
let result = 0;
let step = 0;
let numArray = [];
let secondNumArray = [];
// let display = document.querySelector('#display');

function getNumber(num) {
  if (step === 0 || step === 1) {
    numArray.push(num);
    step = 1;
    firstNumber = numArray.join('');
    display.value = +firstNumber;
  } else if (step === 2) {
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(''));
    display.value = secondNumber;
  }
}
function getOperator(op) {
  step = 2;
  operation = op;
  // opstr = numArray.join(operation);
  // display.value = opstr;
}
function clearDisplay() {
  display.value = 0;
  firstNumber = null;
  secondNumber = null;
  operation = null;
  result = 0;
  step = 0;
  numArray = [];
  secondNumArray = [];
}

const calculateEquals = () => {
  if (operation === '+') {
    result = firstNumber + secondNumArray;
    display.value = result;
  } else if (operation === '-') {
    result = firstNumber - secondNumArray;
    display.value = result;
  } else if (operation === '*') {
    result = firstNumber * secondNumArray;
    display.value = result;
  } else if (operation === '/') {
    result = firstNumber / secondNumArray;
    display.value = result;
  }
};
