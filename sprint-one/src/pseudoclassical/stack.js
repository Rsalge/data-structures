var Stack = function() {
  this.stackLength = 0;
  this.storage = {};
};

Stack.prototype.pop = function() {
  if (this.stackLength === 0) {
    return;
  } else {
    var value = this.storage[this.stackLength];
    delete this.storage[this.stackLength];
    this.stackLength--;
    return value;
  }
};

Stack.prototype.push = function(value) {
  this.stackLength++;
  this.storage[this.stackLength] = value;
};

Stack.prototype.size = function() {
  return this.stackLength;
};
