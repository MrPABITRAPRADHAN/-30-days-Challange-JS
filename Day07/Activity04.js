// 'this' key words

// add a metthod to the book object using 'this' kw return string with books title and year
const book = {
    title:"The power of subconscious mind ",
    
    year: 1963,
    string: function(){
         console.log("Book title- "+this.title +"Year of publish- "+this.year)
    },
}
book.string();