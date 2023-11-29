import {createInterface} from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function getWords(callback) {
    let words = [];

    function ask() {
        rl.question("Enter a word (or 'stop' to finish):", (word) => {
            if (word === "stop") {
                callback(words);
                rl.close();
            } else {
                words.push(word);
                ask();
            }
        });
    }

    ask();
}

getWords((words) => {
    for (let word of words) {
        console.log(word);
    }
});