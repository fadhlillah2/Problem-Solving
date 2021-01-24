//!Remove at LL
// function LinkedList () {
// 	var length = 0;
// 	var head = null;

// 	var Node = function(el) {
// 		this.element = el;
// 		this.next = null;
// }

// this.size() = function () {
// 	return length;
// }

// this.head = function() {
// 	return head;
// }

// this.add = function(el) {
// 	var node = new Node(el);
// 	if(head === null) {
// 		head = node;
// 		} else {

// 			var currentNode = head;
// 			while(currentNode.next) {
// 				currentNode = currentNode.next;
// 			}
// 			currentNode.next = node;
// }
// length ++;
// }

// this.removeAt = function(index) {
// 	if (index >= length || index < 0) { return ‘error’;};
// 	let currentNode = head;
// 	if(index == 0) {
// 		head = null;
// 		length--;
// 		return currentNode.element;
// 	}
// 	let previousNode;
// 	var c = 0;
// 	while(c !== index) {
// 		previousNode = currentNode;
// 		currentNode = currentNode.next;
// 		c++;
// 	}
// 	previousNode.next = currentNode.next;
// 	length--;
// 	return currentNode.element;
// }
// }

//! ADD at LL
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (el) {
    this.element = el;
    this.next = null;
  };

  this.size() = function () {
    return length;
  };

  this.head() = function () {
    return head;
  };

  this.add = function (el) {
    var node = new Node(el);
    if (head === null) {
      head = node;
    } else {
      var currentNode = node;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.addAt = function (i, el) {
    let node = new Node(el);

    if (i < 0 || i > length) return false;

    if (i === length) {
      this.add(el);
    } else {
      let count = 0;
      let previousNode = head;

      if (i === count) {
        head = node;
        node.next = previousNode;
        length++;
        return true;
      }

      while (previousNode) {
        let currentNode = previousNode;
        count++;

        if (currentNode) {
          if (count === i) {
            previousNode.next = node;
            node.next = currentNode;
            length++;
            return true;
          }
        }
        previousNode = currentNode;
      }
    }
  };
}
