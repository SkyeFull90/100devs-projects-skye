let musketeers = ["Athos", "Porthos", "Aramis"];
for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
musketeers.forEach(myElement => {
    console.log(`${myElement}`);
}
);
musketeers.splice(2, 1);
for (let myElement of musketeers) {
    console.log(myElement);
}
