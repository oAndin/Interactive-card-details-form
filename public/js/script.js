
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
const onlyLetters = /[a-z]/ig;

cardNumber.onkeyup = function (){
    // cardNumber.value = cardNumber.value.replaceAll(onlyLetters,'') 
    // cardNumber.value = cardNumber.value.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1","$2","$3","$4")
    // realNumber.innerHTML = `${cardNumber.value}`
    if(!onlyNumbers.test(cardNumber.value)) {
        textNumber.innerHTML = `Wrong format, numbers only`
        textNumber.style.visibility = 'visible'
    }
    if(onlyNumbers.test(cardNumber.value)){
        textNumber.style.visibility = 'hidden'
    }
    if(cardNumber == '') {
        textNumber.innerHTML = `Can't be blank`
        textNumber.style.visibility = 'visible'
    }
};
cardHolder.onkeyup = function (){
    cardHolder.value = cardHolder.value.replaceAll(onlyNumbers, '')
    realName.innerHTML = `${cardHolder.value}`
}
month.onkeyup = function (){
    month.value = month.value.replaceAll(onlyLetters, '')
    realDateMonth.innerHTML = `${month.value}`
}
year.onkeyup = function (){
    year.value = year.value.replaceAll(onlyLetters, '') 
    realDateYear.innerHTML = `${year.value}`    
}

CVC.onkeyup = function () {
    CVC.value = CVC.value.replaceAll(onlyLetters,'')
    realCVC.innerHTML = `${CVC.value}`
}

//textName
//textNumber
//textDate
//textCVC