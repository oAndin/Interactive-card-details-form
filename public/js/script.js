console.log("Hello World!");
const onlyNumbers = /[0-9]/g;
const onlyLetters = /[a-z]/ig;
let correctNumber = false;
let correctName = false;
let correctMonth = false;
let correctYear = false;
let correctCVC = false;

// cardNumber.value = cardNumber.value.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1","$2","$3","$4")

function checkNumber() {
    if (!onlyNumbers.test(cardNumber.value)) {
        textNumber.innerHTML = `Wrong format, numbers only`
        textNumber.style.visibility = 'visible'
    }
    if (onlyNumbers.test(cardNumber.value)) {
        textNumber.style.visibility = 'hidden'
    }
    if (cardNumber.value == '') {
        textNumber.innerHTML = `Can't be blank`
        textNumber.style.visibility = 'visible'
    }
    if (cardNumber.value != '' && onlyNumbers.test(cardNumber.value) == true) {
        correctNumber = true;
    }
}

function checkName() {
    event.preventDefault();
    if (onlyLetters.test(cardHolder.value)) {
        textName.style.visibility = 'hidden'
    }
    if (!onlyLetters.test(cardHolder.value)) {
        textName.style.visibility = 'visible'
        textName.innerHTML = `Wrong formate, letters only`
    }
    if (cardHolder.value == '') {
        textName.innerHTML = `Can't be blank`
        textName.style.visibility = 'visible'
    }
    if (cardHolder.value != '' && onlyLetters.test(cardHolder.value) == true) {
        correctName = true;
    }
}

function checkMonth() {
    event.preventDefault();
    if (!onlyNumbers.test(month.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    }
    if (onlyNumbers.test(month.value)) {
        textDate.visibility = "hidden";
    }
    if (month.value == '') {
        textDate.style.visibility = "visible"
        textDate.innerHTML = "Can't be blank";
    }
    if(month.value != '' && onlyNumbers.test(month.value) == true) {
        correctMonth = true;
    }
}

function checkYear() {
    event.preventDefault();
    if (!onlyNumbers.test(year.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    }
    if (onlyNumbers.test(year.value)) {
        textDate.visibility = "hidden";
    }
    if (year.value == '') {
        textDate.style.visibility = "visible"
        textDate.innerHTML = "Can't be blank"
    }
    if(year.value != '' && onlyNumbers.test(year.value) == true) {
        correctYear = true;
    }
}

function checkCVC() {
    event.preventDefault();
    if (onlyNumbers.test(CVC.value)) {
        textCVC.style.visibility = "hidden"
    }
    if (!onlyNumbers.test(CVC.value)) {
        textCVC.style.visibility = "visible"
        textCVC.innerHTML = `Wrong format, numbers only`
    }
    if (CVC.value == '') {
        textCVC.style.visibility = "visible"
        textCVC.innerHTML = `Can't be blank`
    }
    if(CVC.value != '' && onlyNumbers.test(CVC.value) == true) {
        correctCVC = true;
    }
}

CVC.onfocus = function () {
    cardInner.style.transform = `rotateY(180deg)`;
}
CVC.onblur = function () {
    cardInner.style.transform = `rotateY(360deg)`;
}

function verification() {
    event.preventDefault();
    checkNumber();
    checkName();
    checkMonth();
    checkYear();
    checkCVC();
    console.log(correctName);
    console.log(correctNumber);
    console.log(correctMonth);
    console.log(correctYear);
    console.log(correctCVC);

}

send.onclick = function () {
    if (correctCVC == true && correctYear == true && correctMonth == true && correctName == true && correctNumber == true) {
        cardForm.innerHTML = '';
    }
}
