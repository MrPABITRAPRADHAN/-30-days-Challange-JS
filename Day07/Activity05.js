// object iteration

// using for...in loop iterate over a books property and print each property and value
const book = {
    title:"The power of subconscious mind",
    Author:"Joseph Murphy",
    year: 1963,
}

for(let i in book){
    console.log(book[i]);
}

console.log("=================");
// use object.keys and object.values

for(let keys in book){
    console.log(keys);
}
console.log("=================");
for(let v in book){
    console.log(book[v]);
}