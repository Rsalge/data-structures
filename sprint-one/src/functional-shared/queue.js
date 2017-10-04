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
  this.lineLength++;
};

queueMethods.dequeue = function() {
  if(this.lineLength === 0) {
    return;
  } else{
    this.lineLength--;
  }
};

queueMethods.size = function() {
  return this.lineLength;
};
