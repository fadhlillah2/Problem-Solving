class Stack {

    constructor(collection) {
        this.collection = collection || []
    }

    push(input) {
        this.collection = this.collection.concat([input])
    }

    pop() {
        this.collection = this.collection.slice(0, this.collection.length - 1)
    }

    increase(nLastElement, inc) {
        for(let i = this.collection.length - 1; i >= nLastElement; i--) {
            this.collection[i] += inc
        }
    }
}

// let stack = new Stack()
// stack.push(1)
// console.log(stack)
// stack.push(1)
// console.log(stack)

class Queue{

    constructor(collection){
        this.collection = collection || []
    }

    push(input){
        this.collection.push(input)
    }

    shift(){
        this.collection.shift()
    }

}

let queue = new Queue()
queue.push(1)
console.log(queue)
queue.push(2)
console.log(queue)
queue.push(3)
console.log(queue)
queue.shift()
console.log(queue)
queue.shift()
console.log(queue)
queue.shift()
console.log(queue)

console.log("b".charCodeAt())