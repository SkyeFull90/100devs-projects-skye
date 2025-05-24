function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse(' ').join(' ')
}
console.log(nameShuffler("john mclane"));

export default nameShuffler;