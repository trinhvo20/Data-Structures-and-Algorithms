// Build a Stack using Linked List in JS

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(data) {
        const newNode = new Node(data);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp;
    }

    peek() {
        return this.top;
    }
}

// ========================================================================
// MAIN
const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');

console.log(myStack.peek());

myStack.pop();

console.log(myStack)