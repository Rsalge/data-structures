

// Instantiate a new graph
var Graph = function() {
  this.node = [];
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //time complexity of O(1)
  this.node.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //time complexity of O(n)
  for( var i = 0; i < this.node.length; i++) {
    if ( node === this.node[i] ) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // time complexity of O(n)
  for( var i = 0; i < this.node.length; i++) {
    if ( node === this.node[i] ) {
      this.node.splice(i,1);
    }
  }
  for ( var i = 0; i < this.edge.length; i++) {
    if ( this.edge[i][0] === node || this.edge[i][1] === node ) {
       this.edge.splice(i,1);
    } else if ( this.edge[i][0] === node || this.edge[i][1] === node ) {
      this.edge.splice(i,1);
    }
  }
};



// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // time complexity of O(n)
  for ( var i = 0; i < this.edge.length; i++) {
    if ( this.edge[i][0] === fromNode && this.edge[i][1] === toNode ) {
      return true;
    } else if ( this.edge[i][0] === toNode && this.edge[i][1] === fromNode ) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // time complexity of O(1)
  var edge = [fromNode, toNode];
  this.edge.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // time complexity of O(n)
  for ( var i = 0; i < this.edge.length; i++) {
    if ( this.edge[i][0] === fromNode && this.edge[i][1] === toNode ) {
       this.edge.splice(i,1);
      return;
    } else if ( this.edge[i][0] === toNode && this.edge[i][1] === fromNode ) {
      this.edge.splice(i,1);
      return;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // time complexity of O(n)
  for ( var i = 0; i < this.node.length; i++ ) {
    cb(this.node[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
