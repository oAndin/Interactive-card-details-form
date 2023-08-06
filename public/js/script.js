
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

cardNumber.onkeyup = function () {
    // cardNumber.value = cardNumber.value.replaceAll(onlyLetters,'') 
    // cardNumber.value = cardNumber.value.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1","$2","$3","$4")
    // realNumber.innerHTML = `${cardNumber.value}`
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
    if (cardHolder.value == '')
        textName.innerHTML = `Can't be blank`
}
month.onkeyup = function () {
    if(!onlyNumbers.text(month.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    };
    if(onlyNumbers.text(month.value)) {
        textDate.visibility = "hidden";
    };
    if(month.value == '') {
        textDate.visibility = "visible";
        textDate.innerHTML = "Can't be blank";
    };
}
month.onblur = function () {
    if(!onlyNumbers.text(month.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    };
    if(onlyNumbers.text(month.value)) {
        textDate.visibility = "hidden";
    };
    if(month.value == '') {
        textDate.visibility = "visible";
        textDate.innerHTML = "Can't be blank";
    };
}
year.onkeyup = function () {
    if(!onlyNumbers.text(year.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    };
    if(onlyNumbers.text(year.value)) {
        textDate.visibility = "hidden";
    };
    if(year.value == '') {
        textDate.visibility = "visible";
        textDate.innerHTML = "Can't be blank";
    };
}
year.onblur = function () {
    if(!onlyNumbers.text(year.value)) {
        textDate.visibility = "visible";
        textDate.innerHTML = 'Wrong format, numbers only';
    };
    if(onlyNumbers.text(year.value)) {
        textDate.visibility = "hidden";
    };
    if(year.value == '') {
        textDate.visibility = "visible";
        textDate.innerHTML = "Can't be blank";
    };
}
CVC.onkeyup = function () {
    if(onlyNumbers.test(CVC.value)) {
        textCVC.style.visibility = "hidden"
    }
    if(!onlyNumbers.test(CVC.value)) {
        textCVC.style.visibility = "visible"
        textCVC.innerHTML = `Wrong format, numbers only`
    }
    if(CVC.value == '') {
        textCVC.style.visibility = "visible"
        textCVC.innerHTML = `Can't be blank`
    }
}
CVC.onblur = function () {
    if(onlyNumbers.test(CVC.value)) {
        textCVC.style.visibility = "hidden"
    }
    if(!onlyNumbers.test(CVC.value)) {
        textCVC.style.visibility = "visible"
        textCVC.innerHTML = `Wrong format, numbers only`
    }
    if(CVC.value == '') {
        textCVC.style.visibility = "visible"
        textCVC.innerHTML = `Can't be blank`
    }
}