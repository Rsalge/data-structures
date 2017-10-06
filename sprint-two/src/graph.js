

// Instantiate a new graph
var Graph = function() {
  this.node = [];
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.node.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for( var i = 0; i < this.node.length; i++) {
    if ( node === this.node[i] ) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for( var i = 0; i < this.node.length; i++) {
    if ( node === this.node[i] ) {
      delete this.node[i];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for ( var i = 0; i < this.edge.length; i++) {
    if ( this.edge[i][0] === fromNode && this.edge[i][1] === toNode ) {
      return true;
    } else if ( this.edge[i][0] === toNode && this.edge[i][1] === fromNode ) {
      return true;
    } else {
      return false;
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
