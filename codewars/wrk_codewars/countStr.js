const a = "Hello World";
const b = "Hello";
const c = "World";
const d = "Hello World user";

function newUint8Array(number) {
    return new Uint8Array(number);
}

const buffer = newUint8Array(2**16).fill("a".codePointAt(0));

const str = new TextDecoder().decode(buffer);
//console.log(str); // a

const buffer2 = new TextEncoder().encode(str);
console.log(buffer2); // Uint8Array [ 97 ]