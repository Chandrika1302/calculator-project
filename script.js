const numButtons=[...document.querySelectorAll("[data-number]")];
const operationBtns=[...document.querySelectorAll("[data-opertion]")];
const equalBtn=[...document.querySelector("[data-equals]")];
const deleteBtn=[...document.querySelector("[data-delete]")];
const allClearBtn=[...document.querySelector("[data-clear]")];
const oldText=[...document.querySelector("[data-previous]")];
const currentText=[...document.querySelector("[data-current]")];

// console.log(numButtons,operationBtns,equalBtn,deleteBtn,allClearBtn,oldText,currentText);
numButtons.forEach(button =>{
  button.addEventListener("click",()=> {
      console.log("working!");
  });
});