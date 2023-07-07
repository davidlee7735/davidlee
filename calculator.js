let result = document.getElementById('result');

function addToResult(value) {
    result.innerHTML += value;
}

function clearResult() {
    result.innerHTML = '0';
}

function backspace() {
    let currentResult = result.innerHTML;
    result.innerHTML = currentResult.substring(0, currentResult.length - 1);
}

function calculateResult() {
    let currentResult = result.innerHTML;
    let calculatedResult = eval(currentResult);
    result.innerHTML = calculatedResult;
}