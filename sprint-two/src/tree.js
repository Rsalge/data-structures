var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if ( !this.value ) {
    return false;
  } else if ( this.value === target ) {
    return true;
  } else {
    for ( var i = 0; i < this.children.length; i++) {
      this.children[i].contains(target);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
