function camelCase(str){
    return str.split('-').map(
        (word, index)=> index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join('');
}

console.log(camelCase('background-color'));