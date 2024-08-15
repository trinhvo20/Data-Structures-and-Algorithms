// Build a Queue using Stack in JS
class Queue {
    constructor() {
        this.stack1 = [];   // enqueue
        this.stack2 = [];   // dequeue
    }

    enqueue(data) {
        this.stack1.push(data);
    }

    dequeue() {
        if (this.stack2.length > 0) {
            return this.stack2.pop();
        }

        if (this.stack1.length > 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
        return null;
    }

    peek() {
        if (this.stack1.length > 0) {
            return this.stack1[0];
        }

        if (this.stack2.length > 0) {
            return this.stack2[this.stack2.length - 1];
        }
        return null;
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

console.log(myQueue.dequeue());

console.log(myQueue);