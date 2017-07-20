
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

function resultNumber(result) {
    
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
    var charCodeNum = null;
    
    charCodeNum = ch.charCodeAt(0);
    
    if (charCodeNum === 97 ||       // a
        charCodeNum === 106 ||      // j
        charCodeNum === 115) {      // s
        return 1;
    }
    if (charCodeNum === 98 ||       // b
        charCodeNum === 107 ||      // k
        charCodeNum === 116) {      // t
        return 2;
    }
    if (charCodeNum === 99 ||       // c
        charCodeNum === 108 ||      // l
        charCodeNum === 117) {      // u
        return 3;
    }
    if (charCodeNum === 100 ||      // d
        charCodeNum === 109 ||      // m
        charCodeNum === 118) {      // v
        return 4;
    }
    if (charCodeNum === 101 ||      // e
        charCodeNum === 110 ||      // n
        charCodeNum === 119) {      // w
        return 5;
    }
    if (charCodeNum === 102 ||      // f
        charCodeNum === 111 ||      // o
        charCodeNum === 120) {      // x
        return 6;
    }
    if (charCodeNum === 103 ||      // g
        charCodeNum === 112 ||      // p
        charCodeNum === 121) {      // y
        return 7;
    }
    if (charCodeNum === 104 ||      // h
        charCodeNum === 113 ||      // q
        charCodeNum === 122) {      // y
        return 8;
    }
    if (charCodeNum === 105 ||      // i
        charCodeNum === 114) {      // r
        return 9;
    }
           
    return 0;
}

function calcNum(res) {
    var len = 1,
        str = '',
        resSum = 0,
        i = 0;
    
    str = res.toString();
    len = str.length;
    console.log('res: ' + res);
    console.log('len: ' + len);

    console.log('resSum: ' + resSum);

    if (len > 1) {
        for (i = 0; i < len; i++) {
            resSum += parseInt(str[i]);
        }
        calcNum(resSum);
    } else {
        console.log('else resSum: ' + resSum + ' = ' + res);
        resSum = res;
    }
    console.log('resSum: ' + resSum);
    return resSum;
}

function calculate(text){
    var i = 0,
        res = 0;
        result = 0;
    console.log('t: ', text);
    for(i = 0; i < text.length; i++) {
        res += getCharacterNumber(text[i]);
    }
    console.log('przed rekurencja: ' + res);    
    res = calcNum(res);
    console.log('po rekurencja: ' + res);
    return res;
    //return result;
}


function calculateBtnPressed () {
    var res = null,
        text = null;
    
    text = getText();
    
    if (text !== null) {
        res = calculate(text);
    }
    
    if(res !== null) {
        resultNumber(res);
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