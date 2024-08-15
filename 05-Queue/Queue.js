// Build a Queue using LinkedList in JS

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }   
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;  
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const temp = this.first;
        this.first = this.first.next;
        this.length--;
        return temp;
    }

    peek() {
        return this.first.data;
    }
}

// ==============================================================================
// MAIN
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

console.log(myQueue.peek());

myQueue.dequeue();

console.log(myQueue);