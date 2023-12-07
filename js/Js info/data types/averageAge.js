function averageAge(persons) {
    let sum = 0;
    for (let i = 0; i < persons.length; i++) {
        sum += persons[i].age;
    }
    return sum / persons.length;
}

function persons() {
    return [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Jim", age: 20 },
    ];
}
let personsArray = persons();
console.log(averageAge(personsArray));
