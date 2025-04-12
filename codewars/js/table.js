/**
 * Generates an N×N multiplication table.
 *
 * @param {number} size The size of the multiplication table (N).
 * @returns {Array<Array<number>>} A list of lists representing the multiplication table.
 *  Returns an empty array if the size is less than 1.
 */
function multiplicationTable(size) {
  if (size < 1) {
    return [];
  }

  const table = [];
  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

console.log(multiplicationTable(3)); // Example usage

export default multiplicationTable;