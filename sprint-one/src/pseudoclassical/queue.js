var Queue = function() {
  this.front = 0;
  this.back = 0;
  this.distance = 0;
  this.storage = {};
};

Queue.prototype.dequeue = function() {
  if (this.distance === 0) {
    return;
  } else {
    var leaveLine = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    this.distance--;
    return leaveLine;
  }
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
  this.distance++;
};

Queue.prototype.size = function() {
  return this.distance;
};
