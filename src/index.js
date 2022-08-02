module.exports = function towelSort (matrix) {
  return matrix === undefined ? [] : matrix.reduce((acc, item, index) => index % 2 === 0 ? acc.concat(item) : acc.concat(item.reverse()), []);
}