'use strict';

const books = document.querySelectorAll('.books'),
      booksElem = document.querySelectorAll('.book'),
      ulElems = document.querySelectorAll('ul'),
      aElems = document.querySelectorAll('a'),
      liElems = document.querySelectorAll('li');
// 1)
booksElem[1].after(booksElem[0]);
booksElem[3].after(booksElem[5]);
booksElem[5].after(booksElem[2]);
booksElem[3].before(booksElem[4]);


// 2)
document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'; 

// 3)
aElems[4].text = 'Книга 3. this и Прототипы Объектов';

// 4)
document.querySelector('.adv').remove();

// 5)

liElems[3].after(liElems[8]);
liElems[3].after(liElems[6]);
liElems[10].before(liElems[2]);

const fiveLiElem = ulElems[5].querySelectorAll('li');
fiveLiElem[1].after(fiveLiElem[9]);
fiveLiElem[4].after(fiveLiElem[2]);
fiveLiElem[7].after(fiveLiElem[5]);

// 6)

ulElems[2].append('Глава 8: За пределами ES6');

const sixliElems = ulElems[2].querySelectorAll('li');
ulElems[2].append(sixliElems[9]);