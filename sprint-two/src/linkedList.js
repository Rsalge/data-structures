var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //time complexity of O(1)
    var newNode = new Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode ;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //time complexity of O(1)
    if (list.head === null) {
      return;
    } else {
      var headValue = list.head.value;
      list.head = list.head.next;
      return headValue;
    }
  };

  list.contains = function(target) {
    //time complexity of O(N)
    if ( !list.head ) {
      return false;
    }
    var currentValue = list.head.value;
    while (currentValue) {
      if ( currentValue === target ) {
        return true;
      } else if ( list.head.next ) {
        currentValue = list.head.next.value;
        list.removeHead();
      } else {
        break;
      }
    }
    return false;
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
