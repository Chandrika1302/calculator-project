
const numButtons=[...document.querySelectorAll("[data-number]")];
const operationBtns=[...document.querySelectorAll("[data-operation]")];
const equalBtn=document.querySelector("[data-equals]");
const deleteBtn=document.querySelector("[data-delete]");
const allClearBtn=document.querySelector("[data-clear]");
const oldText=document.querySelector("[data-previous]");
const currentText=document.querySelector("[data-current]");

let oldValue="";
let currentValue="";
let operator=null;

numButtons.forEach(button =>{
  button.addEventListener("click",(e)=> {
  appendNumber(e.target.innerText)
    display();
  });
});

operationBtns.forEach(button => {
  button.addEventListener("click",()=>{
  });
});

function display(){
  currentText.textContent=currentValue;
}
function appendNumber(newNumber){
  if(newNumber==='.' && currentValue.includes('.')) return;
  currentValue+=newNumber;
}
