/*create a function which answers a question "Are you playing banjo?".
If your name starts with the letter r or R, you are playing.
*/
//the function takes a name as its only arg, and returns if the user is either playing banjo or not.
function banjo(name) {
    return name + (name[0].toLowerCase() === 'r' ? ' plays banjo' : ' does not play banjo') ;
}
console.log(banjo('Adam'));

export default banjo;