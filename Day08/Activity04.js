//Default parameters

//Qn... write a fun() and take 2 parameters and return their  products, with 2nd parameter
//  having default value 1.log the result with calling fun() with and without 2nd parameter
function product(a, b=1){
    return a*b;
}
console.log(product(2, 4)); // with 2nd parameter
console.log(product(5));    // without 2nd parameter or/ using default value

