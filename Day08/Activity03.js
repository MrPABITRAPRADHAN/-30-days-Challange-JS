//spread and rest operator

// use spread oper. to create a new array that includes all elements of existing array

// creating a new array from existing array
const  arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combine = [...arr1, ...arr2];
console.log(combine);

// create a new array with additional element
const fruits = ["apple", "banana"];
const Morefruits = ["orange", ...fruits, "mango"];
console.log(Morefruits);

// use the rest oper. in a function to accept an orbitary num. of arguments and sum them
function sum(a, b, c, d){
    return a+b+c+d;
} 
const num = [1, 2, 4, 6, 3];
const [a, ...rest] = num;
console.log(sum(a, ...rest));
