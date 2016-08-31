var allDivs = document.querySelectorAll('div > div');

function setStyle(object, styles, value) {
    object.style[styles] = value;
};

for (var i = allDivs.length - 1; i >= 0; i--) {
    setStyle(allDivs[i], "background", "blue")
    i--;
};

for (var i = allDivs.length - 2; i >= 0; i--) {
    setStyle(allDivs[i], "background", "yellow")
    i--;
};

var Separators = document.querySelectorAll('div > p');
var divContent = document.getElementById("content");

divContent.insertBefore(Separators[0], allDivs[0]);
divContent.appendChild(Separators[1].cloneNode(true));

for (var i = Separators.length - 1; i >= 0; i--) {
    setStyle(Separators[i], "color", "red");
    setStyle(Separators[i], "font-size", "20");
    setStyle(Separators[i], "font-weight", "bolder");
    setStyle(Separators[i], "font-style", "italic");
}

var elem = document.createElement("div");
elem.innerHTML = "Append text";
elem.id = "content-inserted";
document.body.insertBefore(elem, document.body.firstChild);
