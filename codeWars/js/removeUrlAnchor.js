function removeUrlAnchor(url){
  return url.split('#')[0];
}
removeUrlAnchor('www.codewars.com#about')

 // 'www.codewars.com'
module.exports = removeUrlAnchor;