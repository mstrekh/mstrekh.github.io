let lastOperand = 0;
let operation = null;

let pointNum = false;

const inputWindow = document.getElementById('inputWindow');

inputWindow.placeholder = '0'; // placeholder 0

//Кнопка очистить
    document.getElementById('btn_clr').addEventListener('click', function () {
        lastOperand = 0;
        operation = null;
        inputWindow.value = '';
        pointNum = false;
    })

//цифры start
    document.getElementById('btn_1').addEventListener('click', function () {
        inputWindow.value += '1';
    })
    document.getElementById('btn_2').addEventListener('click', function () {
        inputWindow.value += '2';
    })
    document.getElementById('btn_3').addEventListener('click', function () {
        inputWindow.value += '3';
    })
    document.getElementById('btn_4').addEventListener('click', function () {
        inputWindow.value += '4';
    })
    document.getElementById('btn_5').addEventListener('click', function () {
        inputWindow.value += '5';
    })
    document.getElementById('btn_6').addEventListener('click', function () {
        inputWindow.value += '6';
    })
    document.getElementById('btn_7').addEventListener('click', function () {
        inputWindow.value += '7';
    })
    document.getElementById('btn_8').addEventListener('click', function () {
        inputWindow.value += '8';
    })
    document.getElementById('btn_9').addEventListener('click', function () {
        inputWindow.value += '9';
    })
    document.getElementById('btn_0').addEventListener('click', function () {
        inputWindow.value += '0';
    })
//цифры end

//кнопки start
    //кнопка сумма
    document.getElementById('btn_sum').addEventListener('click', function () {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'sum';
        inputWindow.value = '';
    })
    //кнопка разница
    document.getElementById('btn_diff').addEventListener('click', function () {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'diff';
        inputWindow.value = '';
    })
    //кнопка умножение
    document.getElementById('btn_mult').addEventListener('click', function () {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'mult';
        inputWindow.value = '';
    })
    //кнопка деление
    document.getElementById('btn_division').addEventListener('click', function () {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'division';
        inputWindow.value = '';
    })

    //кнопка + операция квадрат
    document.getElementById('btn_pow').addEventListener('click', function() {
        const powTwo = Math.pow(parseFloat(inputWindow.value),2);
        inputWindow.value = powTwo;
        pointNum = false;

        addToHistory(inputWindow.value, null, 'pow', powTwo);
        let historyVar = document.getElementById('history');
        historyVar.innerHTML = currentHistory;
    })

    //кнопка + операция квадратный корень
    document.getElementById('btn_sqrt').addEventListener('click', function() {
        const sqrtRes = Math.sqrt(parseFloat(inputWindow.value));
        inputWindow.value = sqrtRes;
        pointNum = false;

        addToHistory(inputWindow.value, null, 'sqrt', sqrtRes);
        let historyVar = document.getElementById('history');
        historyVar.innerHTML = currentHistory;
    })

    //кнопка унарный минус
    {let isNeg = false;
    document.getElementById('btn_neg').addEventListener('click', function() {
        lastOperand = inputWindow.value;
        
        if(isNeg == false) {
            inputWindow.value = '-' + lastOperand;
            isNeg = true
        }
        else {
            inputWindow.value = lastOperand.substr(1);
            isNeg = false;
        }    
    })}

    document.getElementById('btn_period').addEventListener('click', function () {
        inputWindow.value += '.';
        pointNum = true;
    })
//кнопки end

//кнопка результат
document.getElementById('btn_calc').addEventListener('click', function () {
    // операция сумма
    if(operation === 'sum') {
        const result = lastOperand + parseFloat(inputWindow.value) ;
        addToHistory(lastOperand, inputWindow.value, operation, result);

        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    
    // операция разница
    if(operation === 'diff') {
    const result = lastOperand - parseFloat(inputWindow.value) ;
    addToHistory(lastOperand, inputWindow.value, operation, result);

    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
    }

    //операция уцмножение
    if(operation === 'mult') {
        const result = lastOperand * parseFloat(inputWindow.value) ;
        addToHistory(lastOperand, inputWindow.value, operation, result);

        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    //операция деление
    if(operation === 'division') {
        const result = lastOperand / parseFloat(inputWindow.value) ;
        addToHistory(lastOperand, inputWindow.value, operation, result);

        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    pointNum = false;
})

let currentHistory = 'История: <br>';
document.getElementById('btn_calc').addEventListener('click', function() {
    let historyVar = document.getElementById('history');
    historyVar.innerHTML = currentHistory;
})

function addToHistory(firstOp, lastOp, operation, result) {
    let operator;

    if (operation === 'sqrt') {
        currentHistory += `&#8730 ${firstOp} = ${result} <br>`;
    }
    else {
        if(operation === 'pow') {
            currentHistory += `${firstOp}<sup>2</sup> = ${result} <br>`;
        }
        else {
            switch (operation) {
                case 'sum': operator = ' + ';
                break;
                case 'diff': operator = ' - ';
                break;
                case 'mult':  operator = ' * ';
                break;
                case 'division': operator = ' / ';
                break;
            }
            currentHistory += `${firstOp}${operator}${lastOp} = ${result} <br>`;
        }
    }
}