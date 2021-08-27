const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box")


function luckyOrNot (sum , luckyNumber ) {
    if ( sum % luckyNumber === 0) {
        outputBox.innerText = "Your Birthday is Lucky"
    } else {
        outputBox.innerText = "Your Birthday is not Lucky"
    }
}

function birthdayLuckyOrNot() {
    const birthDate = dateOfBirth.value;
const sum = fetchSum(birthDate);
luckyOrNot (sum , luckyNumber.value)
}

function fetchSum (birthDate) {
    birthDate =  birthDate.replaceAll ("-" , "")
let sum = 0;

for(let v = 0 ; v < birthDate.length ; v++ ){
sum = sum + Number(birthDate.charAt(v));
    }
    return sum;
}

checkButton.addEventListener("click" , birthdayLuckyOrNot)