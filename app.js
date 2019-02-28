 
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeWhite(element) {
    element.style.backgroundColor = "white";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function addStyleToElement(element, callback) {
    callback(element);
}

// Call the function, and pass in div1 (the 
// DOM element stored in a variable), and pass in the secondd parameter, "makeblue", which is a function. When "MakeBlue" is called, div1 will be passed in. 
addStyleToElement(div1, makeRed);
addStyleToElement(div2, makeWhite);
addStyleToElement(div3, makeBlue);
