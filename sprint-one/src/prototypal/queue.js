var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueLength = 0;
  newQueue.storage = {};
  newQueue.front = 0;
  newQueue.back = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.dequeue = function() {
  if (this.queueLength === 0) {
    return;
  } else {
    var value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    this.queueLength--;
    return value;
  }
};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.queueLength++;
  this.back++;
};

queueMethods.size = function() {
  return this.queueLength;
};
