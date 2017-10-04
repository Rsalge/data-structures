var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.lineLength = 0;
  someInstance.end = 0;
  someInstance.front = 0;
  _.extend(someInstance, queueMethods);


  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
  this.lineLength++;
};

queueMethods.dequeue = function() {
  if (this.lineLength === 0) {
    return;
  }
  var leaveLine = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.lineLength--;
  return leaveLine;
};

queueMethods.size = function() {
  return this.lineLength;
};
