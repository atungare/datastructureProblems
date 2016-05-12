/*
  Determine if the tree provided is a valid binary search tree

  You have 15 trees, even cases are valid binary search trees,
  odds are not.
*/

var isValidTree = function (tree) {
  var is_valid = true;
  if (tree.left && tree.left.value) {
    is_valid = is_valid && (tree.value >= tree.left.value) && isValidTree(tree.left);
  }
  if (tree.right && tree.right.value) {
    is_valid = is_valid && (tree.value <= tree.right.value) && isValidTree(tree.right);
  }
  return is_valid;
};


/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////

var trees = require('./test/problem2cases');
trees.forEach(function (tree, i) {
  console.log(isValidTree(tree.root), (i % 2 === 0 ? 'TRUE' : 'FALSE'));
});
