var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function(value, node) {
  //places a value into a specific index
  var leftOrRight = function(value, node) {
    if (value > node.value) {
      if (node.right === null) {
        node.right = new BinarySearchTree(value);
      } else if (value > node.right.value) {
        leftOrRight(value, node.right);
      }
    } else if (value < node.value) {
      if (node.left === null) {
        node.left = new BinarySearchTree(value);
      } else {
        leftOrRight(value, node.left);
      }
    }
  };
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if ( this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  //searches tree for value
  if (this.value === value) {
    return true;
  } else if (this.right.value === value) {
    return true;
  } else if (this.left.value === value) {
    return true;
  } else if (value > this.right.value) {

  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //accepts a callback function and applys it to all the values in the tree
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
