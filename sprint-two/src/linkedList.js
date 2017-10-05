var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      var newNode = new Node(value);
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = new Node(value);
      list.tail = new Node(value);
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    } else {
      var headValue = list.head.value;
      list.head = list.head.next;
      return headValue;
    }
  };

  list.contains = function(target) {
    if ( list.value === target ) {
      return true;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
