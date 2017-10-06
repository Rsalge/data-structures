

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var existing = this._storage.get(index);
  if(existing) {
    for (var i = 0; i < existing.length; i++) {
      if (existing[i][0] === k) {
        existing[i][1] = v;
        this._storage.set(index, existing);
        return;
      }
    }
    existing.push([k,v]);
    this._storage.set(index, existing);
  } else {
    this._storage.set(index, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var existing = this._storage.get(index);
  if(existing) {
    for (var i = 0; i < existing.length; i++) {
      if( existing[i][0] === k ) {
        return existing[i][1];
      }
    }
  } else {
    if ( existing ) {
      return this._storage.get(index);
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
