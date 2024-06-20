function hoopCount (n) {
   if(n > 10){
     return ("Great, now move on to tricks")
   } else{
     return ("Keep at it until you get it")
   }
 }
console.log(hoopCount(12));
console.log(hoopCount(10));
console.log(hoopCount(2));

 module.exports = hoopCount;