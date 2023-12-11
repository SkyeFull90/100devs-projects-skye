function getCount(str) {
    let vowelList = 'aeiouAEIOU';
    let vcount = 0;
    for(let x = 0; x < str.length ; x++)
    {
        if (vowelList.indexOf(str[x]) !== -1)
        {
            vcount += 1;
        }
    }
    return vcount;
}
export default getCount;