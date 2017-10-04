var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var placeInQueue = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    if(size === 0) {
      return;
    }
    var result = storage[placeInQueue];
    delete storage[placeInQueue];
    size--;
    if( size !== 0 ) {
      placeInQueue++;
    }
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
