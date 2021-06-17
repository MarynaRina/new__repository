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



//     let pos = 0;

//     let animate = function(){
//         pos++;
//         if(pos < 500) {
//             starImg.style.top = pos + 'px';
//         }
//     };
// setInterval(animate, 1000);


// starImg.onclick = function() {
//       let start = Date.now();

//       let timer = setInterval(function() {
//         let timePassed = Date.now() - start;

//         starImg.style.top = timePassed / 5 + 'px';

//         if (timePassed > 2000) {
//             clearInterval(timer);
//         } 
//       }, 20);
// };
