function fakeBin(x){
  return x.split('').map(n => n < 5 ? 0 : 1).join('')
}
fakeBin('45385593107843568')

//module.exports = fakeBin;
export default fakeBin;