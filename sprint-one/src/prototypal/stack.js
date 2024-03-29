var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackLength = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.pop = function() {
  if ( this.stackLength === 0 ) {
    return;
  } else {
    var value = this.storage[this.stackLength];
    delete this.storage[this.stackLength];
    this.stackLength--;
    return value;
  }
};

stackMethods.push = function(value) {
  this.stackLength++;
  this.storage[this.stackLength] = value;
};

stackMethods.size = function() {
  return this.stackLength;
};
