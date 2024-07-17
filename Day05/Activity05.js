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

// higher order function that take 2 fun.. and 1 num. 
//apply the first fun.. to the value and second as result


function main(){
    console.log("main() started");

    function first(){
        let i = 10;  // apply for value
    }

    function sec(){
        console.log(i);  // apply for result
    }
    console.log("main() ended");
}

