const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const check = () => {
    if (!input.value) {
        alert("Please provide a phone number");
    } else if (isValid(input.value)) {
        results.textContent = "Valid US number: " + input.value;
    } else {
        results.textContent = "Invalid US number: " + input.value;
    }
}

const isValid = (number) => {
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
    return number.match(regex);
}

const clear = () => {
    input.value = "";
    results.textContent = "";
}

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);