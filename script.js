'use strict';

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.newElem = function () {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.className = this.selector.slice(1);
    }
    if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
        elem.textContent = 'До Нового Года осталось 200 дней';
    }
    elem.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        margin: 200px 700px;
        padding: 30px;
        border-radius: 15px`;
    return elem;
};

let elDiv = new DomElement('.block', 100, 200, '#40E0D0', 12);
let elParagraph = new DomElement('#best', 150, 400, '#7B68EE', 30);

document.body.appendChild(elDiv.newElem());
document.body.appendChild(elParagraph.newElem());