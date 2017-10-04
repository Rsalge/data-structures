


var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.lineLength = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.lineLength]=value;
  this.lineLength++;
}

stackMethods.pop = function() {
  if(this.lineLength === 0){
    return;
  } else{
    var value = this.storage[this.lineLength];
    delete this.storage[this.lineLength];
    this.lineLength--;
    return value;
  }

}

stackMethods.size = function() {
  return this.lineLength;
}
