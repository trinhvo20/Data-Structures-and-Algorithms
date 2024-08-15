// Build a Stack using Array in JS

class Stack {
    constructor() {
        this.array = [];
    }

    push(item) {
        this.array.push(item);
    }

    pop() {
        return this.array.pop();
    }

    peek() {
        return this.array[this.array.length - 1];
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