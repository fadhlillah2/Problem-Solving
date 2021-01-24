//!Linked List complete version

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
    console.log("success");
  };

  this.remove = function (el) {
    var currentNode = head;
    previousNode;
    if (currentNode.element === el) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== el) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = function () {
    return this.size > 0 ? true : false;
  };

  this.indexOf = function (el) {
    let currentNode = head,
      index = -1,
      indexFound = false;

    while (!indexFound && currentNode) {
      index++;
      if (currentNode.element === el) {
        indexFound = true;
      }
      currentNode = currentNode.next;
    }
    return indexFound ? index : -1;
  };

  this.elementAt = function (i) {
    let currentNode = head,
      currentElement,
      index = -1,
      indexReached = false;

    while (!indexReached && currentNode) {
      index++;
      currentElement = currentNode.element;
      if (index === i) {
        indexReached = true;
      }
      currentNode = currentNode.next;
    }
    return indexReached ? currentElement : undefined;
  };
}

let ll = new LinkedList();
ll.add(100);
ll.add(200);
ll.add(300);
console.log(ll);
