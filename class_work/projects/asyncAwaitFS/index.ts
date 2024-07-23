// console.log("Hello via Bun!");

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json())
    .then(user => console.log('smile', user.title));

console.log('block Synchronous')    
