var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
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
    if (list.head === null) {
      return;
    } else {
      var headValue = list.head.value;
      list.head = list.head.next;
      return headValue;
    }
  };

  list.contains = function(target) {
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
    //below is an attempt at a reursive solution for .contains
    // else if ( list.head.value === target ) {
    //   return true;
    // } else if ( list.head.next === null ) {
    //   return false;
    // } else {
    //   list.head.next.contains(target);
    // }
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
