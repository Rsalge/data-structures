var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.lineLength = 0;
  someInstance.endOfLine = 0;
  someInstance.frontOfLine = 0;
  _.extend(someInstance,queueMethods);


  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage.endofLine = value;
  console.log(this.size);
  this.size++;
};

queueMethods.dequeue = function() {
  this.size--;
};

queueMethods.size = function() {
  console.log('Made it into the size method')
  return this.lineLength;
};
