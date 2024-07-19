// object method

// add a method to the book object and return string with author and title
const book = {
    title:"The power of subconscious mind ",
    Author:"By Joseph Murphy ",
    // year: 1963,
    myFun:function(title, Author, year= 2019){
        console.log(title + Author + year)
    }
}
// console.log(book.myFun(book.title, book.Author));
book.myFun(book.title, book.Author, book.year);

// add year property through parameter and log
