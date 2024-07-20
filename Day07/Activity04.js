// 'this' key words

// add a metthod to the book object using 'this' kw return string with books title and year
const book = {
   first:{

        title:"The power of subconscious mind ",
        
        year: 1963,
        string: function(){
            console.log("Book title- "+this.title +"Year of publish- "+this.year)
        },
    },
    second:{
        title:"subconscious mind ",
        
        year: 2020,
        string: function(){
            console.log("Book title- "+this.title +"Year of publish- "+this.year)
        },
    }

}
// book.string();
book.second.string()