// Source - https://stackoverflow.com/a/56622045
// Posted by classic, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-25, License - CC BY-SA 4.0

export default function findOdd(a) {
    let m = new Map();

    a.forEach(e => m.set(e, (m.get(e) || 0) + 1));
    for (let [k, v] of m) {
        if (v % 2 !== 0) return k;
    }
}