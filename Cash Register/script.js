const cash = document.getElementById("cash")
const purchaseButton = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const getChange = (change, cid) => {
    const DENOMINATIONS = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];
    let result = [];
    let cidObj = Object.fromEntries(cid.map(([name, amount]) => [name, amount]));

    for (let [name, value] of DENOMINATIONS) {

        let amount = 0;
        let available = Math.round(cidObj[name] * 100);
        let val = Math.round(value * 100);

        while (Math.round(change * 100) >= val && available >= val) {
            change = Math.round((change - value) * 100) / 100;
            available -= val;
            amount += value;
        }

        cidObj[name] = available / 100;

        if (amount > 0) {
            amount = Math.round(amount * 100) / 100;
            result.push([name, amount]);
        }
    }

    return result;
}

const purchase = () => {
    const cashValue = parseFloat(cash.value);

    if (cashValue < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (cashValue === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }

    let change = cashValue - price;
    let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0);
    totalCid = Math.round(totalCid * 100) / 100; 

    let changeArr = getChange(change, cid);
    let changeGiven = changeArr.reduce((sum, curr) => sum + curr[1], 0);
    changeGiven = Math.round(changeGiven * 100) / 100;

    if (changeGiven < change || changeArr.length === 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    } else if (changeGiven === totalCid && change === totalCid) {
        changeDue.textContent = "Status: CLOSED " + changeArr.map(([denom, amt]) => `${denom}: $${amt.toFixed(2)}`).join(" ");
    } else {
        changeDue.textContent = "Status: OPEN " + changeArr.map(([denom, amt]) => `${denom}: $${amt.toFixed(2)}`).join(" ");
    }
}

purchaseButton.addEventListener("click", purchase);