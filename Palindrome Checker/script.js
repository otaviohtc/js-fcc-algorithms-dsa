const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const checkInput = () => {
    if (!textInput.value) {
        window.alert("Please input a value");
    } else if (isPalindrome(textInput.value)) {
        result.innerText = textInput.value + " is a palindrome";
    } else {
        result.innerText = textInput.value + " is not a palindrome";
    }
}

const isPalindrome = (input) => {
    const cleanedInput = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    return cleanedInput === reversedInput;
}

checkButton.addEventListener("click", checkInput);