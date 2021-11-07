const numButtons = [...document.querySelectorAll("[data-number]")];
const operationBtns = [...document.querySelectorAll("[data-operation]")];
const equalBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-clear]");
const oldText = document.querySelector("[data-previous]");
const currentText = document.querySelector("[data-current]");

let oldValue = "";
let currentValue = "";
let operator = "";

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendNumber(e.target.innerText);
    display();
  });
});

operationBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    chooseOperation(e.target.innerText);
    display();
  });
});

allClearBtn.addEventListener("click", () => {
  clear();
  display();
});

function display() {
  currentText.textContent = currentValue;
  oldText.textContent = `${oldValue} ${operator}`  
}
function appendNumber(newNumber) {
  if (newNumber === "." && currentValue.includes(".")) return;
  currentValue += newNumber;
}
function clear() {
  currentValue = "";
  oldValue = "";
  operator = "";
}
function chooseOperation(newOperator) {
  if(currentValue==="") return;
  operator = newOperator;
  oldValue=currentValue;
  currentValue="";
}
