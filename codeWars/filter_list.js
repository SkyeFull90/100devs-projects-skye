function filter_list(l) {
    return l.filter(item => typeof item === 'number');
}
module.exports = filter_list;
// export default filter_list;