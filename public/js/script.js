const onlyLetters = /[w*]/;

console.log("Hello World!");

function verification() {
    event.preventDefault();
}

function onlyNumbers () {
    
}

CVC.onfocus = function () {
    cardInner.style.transform = `rotateY(180deg)`;
}
CVC.onblur = function () {
    cardInner.style.transform = `rotateY(360deg)`;
}


cardNumber.onkeyup = function (){
    if(cardNumber.value != /^\D+$/) {
        cardNumber.replaceAll([a-z], '');
    }
    realNumber.innerHTML = `${cardNumber.value}`
}
cardHolder.onkeyup = function (){
    realName.innerHTML = `${cardHolder.value}`
}
month.onkeyup = function (){
    
    realDateMonth.innerHTML = `${month.value}`
}
year.onkeyup = function (){
    realDateYear.innerHTML = `${year.value}`
}

CVC.onkeyup = function () {
    realCVC.innerHTML = `${CVC.value}`
}

