function findNb(m) {
    let n = 0;
    let volume = 0;
    while (volume < m) {
        n++;
        volume += Math.pow(n, 3);
    }
    return volume === m ? n : -1;
}

module.exports = findNb