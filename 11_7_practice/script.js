//вывести модальное окно
document.addEventListener ('DOMContentLoaded', () => {
    $('#setNewNum').modal("show");
});
//рабочие переменные
let minValue;
let maxValue;
let gameRun;
let orderNumber = 1;
let answerNumber;
const inputMinValue = document.getElementById('minValue');
const inputMaxValue = document.getElementById('maxValue');

//функция начала игры
function gameStart () {
    gameRun = true;

    minValue = parseInt(inputMinValue.value);
    maxValue = parseInt(inputMaxValue.value);

    // проверка на NaN
    if(isNaN(minValue) || isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
        
        document.getElementById('modalTwoSpan').innerText = `Вы ввели некорректные значения. \r\nЗагадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
        $('#modalTwo').modal("show");
    }
    else{
        //проверка границ min и max value
        (minValue < -999) ? minValue = -999 : minValue;
        (maxValue > 999) ? maxValue = 999 : maxValue;
        
        document.getElementById('modalTwoSpan').innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
        $('#modalTwo').modal("show");
    }
    
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;

    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    // вывод предположения (answerField)
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${transformationToText()}?`;
}
//2-е модальное окно
document.getElementById('saveNums').addEventListener('click', () => {
    gameStart();
})

//запуск программы из 1-го модального окна
document.getElementById('startTheGame').addEventListener('click', () => {
    // gameStart();
})

// кнопка "заново"
document.getElementById('btnRetry').addEventListener('click', function () {
    answerField.innerText = "Новая игра";
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;

    inputMinValue.value = 0;
    inputMaxValue.value = 100;
    $('#setNewNum').modal("show");
})

//функция генерации фразы в answerField
function generateAnswerField() {
    const phraseRandom = Math.round( Math.random()*3);
    const answerText = transformationToText(answerNumber);
    switch (phraseRandom) {
        case 1 : answerField.innerText = `Может это число ${answerText}?`;
        break;
        case 2 : answerField.innerText = `Думаю это число ${answerText}`;
        break;
        case 3 : answerField.innerText = `Легко! Это число ${answerText}?`;
        break;
        default: answerField.innerText = `Скорее всего это число ${answerText}`;
        break;
    }
}

//трансформация в текст
function transformationToText () {
    const oneToTen = ["один","два","три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять"];

    const elevenToNineteen = ["одиннадцать","двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];

    let secondRankValues = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];

    let thirdRankValues = ["сто","двести","триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

    let textAnswerNumber;

    let firstRank;
    let secondRank; 
    let thirdRank;
    // обработка чисел 10-19
    if(answerNumber > 9 && answerNumber <20) {
        textAnswerNumber = elevenToNineteen[answerNumber%10 - 1];
    }
    //остальные числа
    else { 
        if(answerNumber === 0) {textAnswerNumber = 0}
        thirdRank = thirdRankValues[(answerNumber-answerNumber%100)/100-1];
        secondRank = secondRankValues[(answerNumber%100-answerNumber%10)/10-2];
        firstRank = oneToTen[answerNumber%10-1];
        
        textAnswerNumber = `${thirdRank === undefined ? '' : thirdRank} ${secondRank === undefined ? '' : secondRank} ${firstRank === undefined ? '' : firstRank}`;
    }
    if(answerNumber ===0) { 
        return 0;
    }
    else {
        return textAnswerNumber.length < 20 ? textAnswerNumber : answerNumber;
    }
}

//кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;   
            generateAnswerField();
        }
    }
})

//кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            generateAnswerField();
        }
    }
})

//кнопка "верно"
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*3);
        switch (phraseRandom) {
            case 1 : answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
            break;
            case 2 : answerField.innerText = `Есть что посложнее?\n\u{1F60E}`;
            break;
            case 3 : answerField.innerText = `Давай еще разок\n\u{1F60E}`;
            break;
            default: answerField.innerText = `Всегда срабатывает\n\u{1F60E}`;
            break;
        }
        gameRun = false;
    }
})