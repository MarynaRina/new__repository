'use strict';

// Рандомное число
const randomNum = function(maxNum) {
    return Math.floor(Math.random() * Math.floor(maxNum));
};

// Число ли это?
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

 
const start = function() {
    let rNum = randomNum(100);
    // Начало игры 
    let attempt = 10;
    const game = function() {
        attempt--;
        if (attempt < 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                start();
            } else {
                alert('Игра окончена');
                return;
            }
            } else {
                const strNum = prompt('Угадай число от 1 до 100');
                if (strNum === null) {
                    alert('Игра окончена');
                    return;
                }
                if (isNumber(strNum)) {
                const num = +strNum;
                if (num > rNum) {
                    alert('Загаданное число меньше');
                    game();
                } else if (num < rNum) {
                    alert('Загаданное число больше');
                    game();
                } else {
                if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                    start();
                } else {
                    alert('Конец игры! Возвращайтесь еще.');
                    return;
                }
                }
                } else {
                    alert('Введи число!');
                    game();
                }
            }
    };
    game();
};

// Запуск игры
start();