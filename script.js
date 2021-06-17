'use strict';

let btn = document.querySelector('.btn'),
    btnReset = document.querySelector('.btn_reset'),
    cat = document.querySelector('.cat'),
    star = document.querySelector('.star'),
    count = 0;

    let flyInterval;
    let flyAnimate = function(){
        flyInterval = requestAnimationFrame(flyAnimate);
        count++;
        if (count < 360) {
            cat.style.left = count * 6 + 'px';
            star.style.width = count + 'px';
        } else {
            cancelAnimationFrame(flyAnimate);
        }
    };
    let animate = false;
    btn.addEventListener('click', function(){
        if (!animate) {
            flyInterval = requestAnimationFrame(flyAnimate);
            animate = true;
        } else {
            animate = false;
            cancelAnimationFrame(flyInterval);
        }
    });


const reset = function(){
    btnReset.addEventListener('click', function(){
        count = 0;
    });
};

reset();

