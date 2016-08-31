var elem = document.createElement('div');
elem.id = 'content-inserted';
elem.innerHTML = 'My choice';
// var div = document.getElementById('content');
// document.body.insertBefore(elem, div);
document.body.insertBefore(elem, document.body.firstChild);

var divStyles = document.querySelectorAll('div > div');

function setStyle(obj, styles, valueOne, valueTwo) {
	for (var i = 0; i < obj.length; i++) {
		if (i % 2 == 0) {
			obj[i].style[styles] = valueOne;
		}else {
			obj[i].style[styles] = valueTwo;
		};
	}
};

setStyle(divStyles, 'background', 'violet', 'gray');


var sep = document.querySelectorAll('div > p');
div.insertBefore(sep[0], divStyles[0]);
// div.insertBefore(sep[0].cloneNode(true), divStyles[0]);

function setStyleSep(elem) {
    elem.style.color = 'aquamarine';
	elem.style.fontSize = '30px'; //размер шрифта
	elem.style.fontWeight = '700'; //жирность
	elem.style.fontStyle = 'italic'; //шрифт
};

var styleSep = sep[1];
setStyleSep(styleSep);
setStyleSep(styleSep.previousElementSibling);
setStyleSep(styleSep.nextElementSibling);

var addElem = document.createElement('p');
addElem.innerHTML = 'Some text';
div.appendChild(addElem);
// div.lastElementChild.appendChild(addElem);
// document.getElementById('content').appendChild(addElem);
