console.log("Hello World!");
const onlyNumbers = /[0-9]/g;
const onlyLetters = /[a-z]/ig;

let correctNumber = false;
let correctName = false;
let correctMonth = false;
let correctYear = false;
let correctCVC = false;

console.log(correctNumber);
console.log(correctName);
console.log(correctMonth);
console.log(correctYear);
console.log(correctCVC);

function verification() {
    event.preventDefault();
}

CVC.onfocus = function () {
    cardInner.style.transform = `rotateY(180deg)`;
}
CVC.onblur = function () {
    cardInner.style.transform = `rotateY(360deg)`;
}


cardNumber.onkeyup = function () {
    // cardNumber.value = cardNumber.value.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1","$2","$3","$4")
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
};
cardNumber.onblur = function () {
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
cardHolder.onkeyup = function () {
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
}
cardHolder.onblur = function () {
    if (onlyLetters.test(cardHolder.value)) {
        textName.style.visibility = 'hidden'
    }
    if (!onlyLetters.test(cardHolder.value)) {
        textName.style.visibility = 'visible'
        textName.innerHTML = `Wrong formate, letters only`
    }
    if (cardHolder.value == '') {
        textName.innerHTML = `Can't be blank`
    }
    if (cardHolder.value != '' && onlyLetters.test(cardHolder.value) == true) {
        correctName = true;
    }
}
month.onkeyup = function () {
    if (!onlyNumbers.test(month.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    };
    if (onlyNumbers.test(month.value)) {
        textDate.visibility = "hidden";
    };
    if (month.value == '') {
        textDate.visibility = "visible";
        textDate.innerHTML = "Can't be blank";
    };
}
month.onblur = function () {
    if (!onlyNumbers.test(month.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    };
    if (onlyNumbers.test(month.value)) {
        textDate.visibility = "hidden";
    };
    if (month.value == '') {
        textDate.visibility = "visible";
        textDate.innerHTML = "Can't be blank";
    };
    if (month.value != '' && onlyNumbers.test(month.value) == true) {
        correctMonth = true;
    }
}
year.onkeyup = function () {
    if (!onlyNumbers.test(year.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    };
    if (onlyNumbers.test(year.value)) {
        textDate.visibility = "hidden";
    };
    if (year.value == '') {
        textDate.visibility = "visible";
        textDate.innerHTML = "Can't be blank";
    };
}
year.onblur = function () {
    if (!onlyNumbers.test(year.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    };
    if (onlyNumbers.test(year.value)) {
        textDate.visibility = "hidden";
    };
    if (year.value == '') {
        textDate.visibility = "visible";
        textDate.innerHTML = "Can't be blank";
    };
    if (year.value != '' && onlyNumbers.test(year.value) == true) {
        correctYear = true;
    }
}
CVC.onkeyup = function () {
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
}
CVC.onblur = function () {
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
    if (CVC.value != '' && onlyNumbers.test(CVC.value) == true) {
        correctCVC = true;
    }
}

send.onclick = function () {
    if (correctCVC == true && correctYear == true && correctMonth == true && correctName == true && correctNumber == true) {
        cardForm.innerHTML = '';
    }
}