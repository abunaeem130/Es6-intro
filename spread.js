const numbers = [34, 65, 99, 234, 98,];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 65, 99, 21, 456, 65);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

// numbers.push(55);
// console.log(numbers);
const numbers2 = [22, ...numbers, 88];
numbers.push(43);
console.log(numbers);
console.log(numbers2);