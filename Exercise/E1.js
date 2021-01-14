class CircularQueue {
  constructor(size) {
    this.collection = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    for (let i = 0; i < size; i++) {
      this.collection.push(null);
    }
  }

  enqueue(val) {
    //collection = [null, null, null, null, null]

    if (this.collection[this.write] == null) {
      this.collection[this.write++] = val;

      if (this.write > this.max) this.write = 0;
      return `succeed add ${val}`;
    }
    return `fail add ${val}`;
  }

  dequeue() {
    if (this.collection[this.read] != null) {
      this.collection[this.read++] = null;

      if (this.read > this.max) this.read = 0;
      return true;
    }
    return false;
  }
  print() {
    console.log(this.collection);
  }
}

let coba = new CircularQueue(5);
console.log(coba.enqueue("a"));
coba.enqueue("b");
coba.enqueue("c");
coba.print();
coba.dequeue();
coba.print();

// succeed add a
// [ 'a', 'b', 'c', null, null ]
// [ null, 'b', 'c', null, null ]
