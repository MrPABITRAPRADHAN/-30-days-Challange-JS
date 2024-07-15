//w a p to check if the year is leap year using multiple condition(div by 4, but not 100 unless also divisible by 400)

let y = 2000;
if(y%4 == 0 && y%100 != 0 || y%400 ==0){
    console.log(y+" is a leap year");
}
else{
    console.log(y+" is not a leap year");
}