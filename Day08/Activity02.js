// Destructuring

// Use array destructuring to extract the first and sec no. of array of numbers.
const num = [3, 2, 5, 7, 8];
const [first, second] = num ;
console.log(first, second);

// use object destructing to extract the title and author from a book obj
const book = {
    title:"The power of subconcious mind ",
    Author:"Joseph murphy",
    year: 1963,
}
const {title, Author} = book;
console.log(title, Author);