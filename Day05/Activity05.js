// write a function that takes number and call the function many times
const n = 5;
function abc(){
  console.log(n+1);
}
abc();

function xyz(){
    console.log(n+2);
  }
  xyz();

function pqr(){
    console.log(n+3);
  }
  pqr();

  function file(){
    let num = 9;
    console.log("file() started");
    abc();
    xyz();
    pqr();
    console.log("file() ended");
  }


  console.log("============");
// higher order function that take 2 fun.. and 1 num. 
//apply the first fun.. to the value and second as result

function oper(a, b, operation){
  return operation(a, b);
}

function add(x, y){
  return x+y;
}
function multiple(x, y){
  return x*y;
}

console.log(oper(2, 4, add));
console.log(oper(2, 4, multiple));




