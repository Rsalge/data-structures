var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //time complexity of O(1)
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // time complexity of O(n)
  if ( this.value === target ) {
    return true;
  } else if ( this.children.length !== 0 ) {
    for ( var i = 0; i < this.children.length; i++) {
      if ( this.children[i].contains(target) ) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
