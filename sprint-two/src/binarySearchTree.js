var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;

};

BinarySearchTree.prototype.insert = function(value) {
  //places a value into a specific index
  var leftOrRight = function(value, node) {
    if (value > node) {
      if (node.right === undefined) {
        node.right.value = value;
      } else if (value > node.right) {
        leftOrRight(value, node.right);
      }
    } else if (value < node) {
      if (node.left === undefined) {
        node.left.value = value;
      } else if (value < node.left) {
        leftOrRight(value, node.left);
      }
    }
  };
  if (value > this.value) {
    if (this.right === undefined) {
      this.right.value = value;
    } else if (value > this.right) {
      leftOrRight(value, this.right);
    }
  } else if (value < this.value) {
    if ( this.left === undefined) {
      this.left['value'] = value;
    } else if (value < this.left) {
      leftOrRight(value, this.left);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  //searches tree for value
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //accepts a callback function and applys it to all the values in the tree
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
