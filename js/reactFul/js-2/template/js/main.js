//write pseduo code here
//0 -> 32
document.querySelector('#convert').addEventListener('click', convert)
function convert(){
    //need the value in celcius
    let celcius = document.querySelector('#celcius').value;
    //convert the value to ferinheight
    let ferinheight = celcius * 9/5 + 32;
    //show it on the page
    document.querySelector('#ferinheight').value = ferinheight;
}




