
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let a = [];
  let i = 1;

  for (k of matrix) {
    a = (i % 2 == 0) ? a.concat(k.reverse()) : a.concat(k);
    i++;
  }
  return a;
}
