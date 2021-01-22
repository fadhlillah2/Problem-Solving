//! Create a Linked List Class

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let coba = new LinkedList();
coba.insertFirst(1);
coba.insertFirst(2);
coba.insertLast(3);
coba.insertLast(4);
coba.printListData();
console.log(coba);
