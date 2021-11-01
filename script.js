function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

function operate(num1,num2,operator){
    switch(operator)
    {
        case '+':
            return add(num1,num2);
        case '-':
            return sub(num1,num2);
        case '*':
            return mul(num1,num2);
        case '/':
            return div(num1,num2);
        default:
            console.log('choose correct option');
    }
}

document.getElementById('add-btn').onclick=function(){
console.log(operate(4,2,'*'));
console.log(operate(4,2,'+'));
console.log(operate(4,2,'-'));
console.log(operate(4,2,'/'));

}