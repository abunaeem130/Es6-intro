// function declaration
function add(num1, num2) {
    return num1 + num2;
}
// function expresion 
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
// function expresion (anonimous)
const add3 = function (num1, num2) {
    return num1 + num2;
}
// arrow function 
const add4 = (num1, num2) => num1 + num2
const sum1 = add(43, 56);
const sum2 = add2(15, 17);
const sum3 = add3(54, 87);
const sum4 = add4(24, 87);
console.log(sum1, sum2, sum3, sum4);

// document.getElementById('my-btn').onclick = function handleEvent() {

// }

