var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function(value, node) {
// time complexity of O(log(n))
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
  //time complexity of O(log(n))
  if (this.value === value) {
    return true;
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //time complexity of O(n)
  if (this.value !== null) {
    callback(this.value);
  }
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
