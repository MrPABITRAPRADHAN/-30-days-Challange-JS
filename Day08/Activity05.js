// Enhanced object literal

// use enhanced object literal to create an object with methods and property and log
var name = "Toyota";
var color = "black";
var price = "83k USD";

const car = {name, color, price};
console.log(car);

//qn...
const object = {
    Addition:function(a, b){
        return a+b;
    },
    multiple:function(a, b){
        return a*b;
    },
}

console.log(object.Addition(2, 4));
console.log(object.multiple(2, 4));

// computed property name
const propname = "age";
const obj = {
    name:"Pabitra pradhan",
    [propname]:30,
}
console.log(obj);