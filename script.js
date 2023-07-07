let result = document.getElementById('result');

function addToResult(value) {
    // 如果結果是 "0"，直接替換為新的值
    if (result.innerHTML === '0') {
        result.innerHTML = value;
    } else {
        // 否則將新值添加到現有值的末尾
        result.innerHTML += value;
    }
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
    result.innerHTML = parseFloat(calculatedResult.toFixed(10));
}