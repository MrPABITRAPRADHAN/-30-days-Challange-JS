// Nested objecct
// create a nested object representing a library with properties like name and book
const person = {
    details:{
        name:"mrpradhan",
        book:[
            "the power of mind", 
            "rich dad poor dad",
        ],
    },
    address:{
         city:"berhampur",
         state:"Odisha",
         pin:761042,
    }
}

console.log(person.details);
console.log(person.details.name);
console.log(person.details.book);