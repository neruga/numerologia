
function getText() {
    var text = null;
    
    text = document.getElementById('textinput').value;
    
    return text;
}

function hideElements() {
    var numbers = null,
        i = 0;
    
    numbers = document.getElementsByClassName('column');
    for(i = 0; i < numbers.length; i++) {
        numbers[i].classList.add('hidden');
    }
}

function showResult(result) {
    var resultDiv = null;
    
    resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.classList.remove('show')
    
    resultDiv.innerHTML = result;
}

function result(result) {
    
    hideElements();
    showResult(result);
}


/*
Literom A, Ą, J, S, Ś jest przypisana cyfra 1.
Literom B, K, T jest przypisana cyfra 2.
Literom C, Ć, L, Ł, U jest przypisana cyfra 3.
Literom D, M, V, jest przypisana cyfra 4.
Literom E, Ę, N, Ń, W jest przypisana cyfra 5.
Literom F, O, Ó, X jest przypisana cyfra 6.
Literom G, P, Y jest przypisana cyfra 7.
Literom H, Q, Z, Ż, Ź jest przypisana cyfra 8.
Literom I , R jest przypisana cyfra 9.
*/

function getCharacterNumber(ch) {
    console.log(ch.charCodeAt(0));
}

function calculate(text){
    var i = 0,
        result = 10;
    console.log('t: ', text);
    for(i = 0; i < text.length; i++) {
        ch = getCharacterNumber(text[i]);
    }
    
    return result;
}


function calculateBtnPressed () {
    var res = null,
        text = null;
    
    text = getText();
    
    if (text != null) {
        res = calculate(text);
    }
    
    if(res != null) {
        result(res);
    }
}

function addEvents() {
    var calcBtn = null;
    
    calcBtn = document.getElementById('calcbutton');
    
    calcBtn.addEventListener('click', calculateBtnPressed)
}

function f() {
    //screen.orientation.lock('portrait')
    // screen.lockOrientation('landscape');
    // document.body.setAttribute('orient', 'landscape');
    
    addEvents();
}


window.addEventListener('load', f, false);