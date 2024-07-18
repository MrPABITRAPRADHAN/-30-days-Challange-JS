//Array iteration 

// use for loop iterate over an array and log each element
let myArray = [4, 6, 3, 7, 2];
console.log("Each elements..");
for(let i=0;i<myArray.length ; i++){
    console.log(myArray[i]);
}


// use forEach to iterate over an array and log each element
console.log("Each elements..");
myArray.forEach((element) =>{
  console.log(element);
});