//jshint esversion:6
//! Create a Linked List Class Freecodeacmp Version
function LinkedList() {
  this.length = 0;
  this.head = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  this.head = () => this.head;
  this.size = () => this.length;

  this.add = (element) => {
    const node = new Node(element);
    if (this.head) {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.head = node;
    }
    this.length++;
  };

  this.remove = (element) => {
    if (this.head.element === element) {
      this.head = this.head.next;
      return this.length--;
    }
    let previous = this.head;
    while (previous) {
      let current = previous.next;
      if (current) {
        // makes sure we are not at end where current.next would be null
        if (current.element === element) {
          previous.next = current.next;
          return this.length--;
        }
      }
      previous = current;
    }
  };
}

let ll = new LinkedList();
console.log(ll.add(1));
console.log(ll.add(2));
console.log(ll.head.next.element);
