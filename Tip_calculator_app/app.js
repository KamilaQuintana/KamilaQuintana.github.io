let billPrice;
let numberOfPeople;
let customPorcent;
const porcentBtn5 = document.getElementById("5porcent-btn");
const porcentBtn10 = document.getElementById("10porcent-btn");
const porcentBtn15 = document.getElementById("15porcent-btn");
const porcentBtn25 = document.getElementById("25porcent-btn");
const porcentBtn50 = document.getElementById("50porcent-btn");
const customPorcentInput = document.getElementById("custom-porcent");
const numberOfPeopleInput = document.getElementById("number-of-people");
const billPriceInput = document.getElementById("bill-price");
const tipAmountResultEl = document.getElementById("tip-amount-result-el");
const totalResultEl = document.getElementById("total-result-el");
const resetBtn = document.getElementById("reset-btn");
const buttons = document.getElementsByTagName("button");

billPriceInput.addEventListener("input", () => {
    activateReset();
});

porcentBtn5.addEventListener("click", () => {
    porcentBtn5.classList.toggle("active");
    calculatePorcent(5);
});
porcentBtn10.addEventListener("click", () => {
    porcentBtn10.classList.toggle("active");
    calculatePorcent(10);
});
porcentBtn15.addEventListener("click", () => {
    porcentBtn15.classList.toggle("active");
    calculatePorcent(15);
});
porcentBtn25.addEventListener("click", () => {
    porcentBtn25.classList.toggle("active");
    calculatePorcent(25);
});
porcentBtn50.addEventListener("click", () => {
    porcentBtn50.classList.toggle("active");
    calculatePorcent(50);
});
customPorcentInput.addEventListener("input", () => {
    activateReset();
    Array.from(buttons).forEach(btn => btn.classList.remove("active"));
    customPorcent = customPorcentInput.value;
    calculatePorcent(customPorcent);
});

numberOfPeopleInput.addEventListener("input", () => {
    activateReset();
    writeTipPerson();
    writeTotalPerson();
});

function calculatePorcent (porcentage) {
    billPrice = billPriceInput.value;
    tip = billPrice * (porcentage/100)
};

function writeTipPerson () {
    numberOfPeople = numberOfPeopleInput.value;
    tipPerson = tip / numberOfPeople;
    tipAmountResultEl.innerHTML = `$${tipPerson}`;
};
function writeTotalPerson () {
    totalPerson = tipPerson + (billPrice / numberOfPeople);
    totalResultEl.innerHTML = `$${totalPerson}`;
};

function activateReset() {
    resetBtn.className = "activeR";
}

resetBtn.addEventListener("click", () => {
    billPriceInput.value = "";
    Array.from(buttons).forEach(btn => btn.classList.remove("active"));
    customPorcentInput.value = "Custom";
    numberOfPeopleInput.value = "";
    tipAmountResultEl.innerHTML = "$0.00";
    totalResultEl.innerHTML = "$0.00";
    resetBtn.className = "disabled";
})






