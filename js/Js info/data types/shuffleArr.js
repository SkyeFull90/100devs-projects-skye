function shuffleArr(arr) {
    let i = arr.length;
    while (i) {
        const j = Math.floor(Math.random() * i);
        const t = arr[--i];
        arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

const arr = [1, 2, 3];
console.log(shuffleArr(arr)); // shuffled array
console.log(arr); // original array
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}
let arr2 = [1, 2, 3];
shuffle(arr2);
console.log(arr2); // shuffled array