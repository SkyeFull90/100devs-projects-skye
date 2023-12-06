let John = {name: "John", age: 25};
let Pete = {name: "Pete", age: 30};
let Mary = {name: "Mary", age: 28};
let users = [John, Pete, Mary];
let names = users.map(item => item.name);
console.log(names); // John, Pete, Mary
//alert( names ); // John, Pete, Mary
