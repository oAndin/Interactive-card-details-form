
console.log("Hello World!");

function verification() {
    event.preventDefault();
}

CVC.onfocus = function () {
    cardInner.style.transform = `rotateY(180deg)`;
}
CVC.onblur = function () {
    cardInner.style.transform = `rotateY(360deg)`;
}


const onlyNumbers = /[0-9]/g;
let onlyLetters;
onlyLetters != onlyNumbers;
cardNumber.onkeyup = function (){
    if (cardNumber.value != onlyNumbers) {
    console.log("Não")
    cardNumber.value = cardNumber.value.replaceAll(onlyLetters,'') 
};
realNumber.innerHTML = `${cardNumber.value}`
}
// realNumber.innerHTML = `${cardNumber.value}`
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

