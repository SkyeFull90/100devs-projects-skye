function whoLikesIt(likes) {
    const numLikes = likes.length;
  
    switch (numLikes) {
      case 0:
        return "no one likes this";
      case 1:
        return `${likes[0]} likes this`;
      case 2:
        return `${likes[0]} and ${likes[1]} like this`;
      default:
        const firstTwoLikes = likes.slice(0, 2).join(", ");
        const otherLikes = numLikes - 2;
        return `${firstTwoLikes} and ${otherLikes} others like this`;
    }
  }

console.log(whoLikesIt([]))
console.log(whoLikesIt(['taiko']))
console.log(whoLikesIt(['flash','hose']))