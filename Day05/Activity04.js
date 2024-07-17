// function parameter and default value
//wap fun. to print product of 2 value through parameter

function param(a, b=3){
    let p = a*b;
    console.log(p);
}
param(4);
param(6,10)

// wap to print persons name and default age
function person(name, age=20){
     let greet ="good mornig "+ name + age;
     console.log(greet);
}
person("pabitra ", 23);
person("asish ");   // it prints default