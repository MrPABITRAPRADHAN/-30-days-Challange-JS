// array intermediate method : map() filter() reduce()

//use the map() and create a new array where each num is doubled and log new arrray
const a = [4, 6, 3, 8]
console.log("before doubled each element of array "+a);
let newArray = a.map((i) => {
   return 2*i;
});
console.log("before doubled each element of array "+newArray);
console.log("==================");


//use filter() create an array with only even no.. and log array
const arr = [4, 6, 3, 8]
console.log("Array before filter "+arr);
let evenValue = arr.filter((i) => {
    return i%2==0;
});
console.log("Array after filter even value "+evenValue);
console.log("==================");


//use reduce() calculate sum of all no. of arrays and log
// reduce function perform operation of  value with its after value
const arr1 = [4, 6, 3, 8]

let newarr = arr1.reduce((n1, n2) =>{
    return n1+n2;
    
});
console.log(newarr);
