function filter_list(l){
    return l.filter(x => typeof x === "number")
}
console.log(filter_list([1,2,'a','b'])) // [1,2]

function filterList(l){
  return l.filter(function(v){
    return typeof v == 'number'
  })
}
console.log(filterList([1,2,'a','b'])) // [1,2]