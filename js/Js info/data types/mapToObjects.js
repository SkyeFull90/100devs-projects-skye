/*function mapToObjects(array) {
  return array.map(function (item) {
    return { key: item };
  });
}
console.log(mapToObjects([1, 2, 3, 4, 5])); // [ { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 } ];
console.log(mapToObjects([1, 2, 3, 4, 5]).length); // 5
*/

let users = [
    {id: 1, name: "John", surname: "Smith", age: 20},
    {id: 2, name: "Ann", surname: "Smith", age: 24},
    {id: 3, name: "Pete", surname: "Peterson", age: 31},
];
let usersMapped = users.map((user =>({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
})))
console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith