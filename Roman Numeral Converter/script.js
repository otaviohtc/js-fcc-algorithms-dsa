const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

const checkInput = () => {
    if (!numberInput.value) {
        output.innerText = "Please enter a valid number";
    } else if (numberInput.value < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (numberInput.value > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
    } else {
        output.innerText = toRoman(numberInput.value)
    }
}

const toRoman = (num) => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
}

convertBtn.addEventListener("click", checkInput);