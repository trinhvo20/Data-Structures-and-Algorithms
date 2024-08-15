// Build a linked list in JS

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    prepend(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
    }
    
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(array)
    }

    insertAt(index, data) {
        if (index === 0) {
            this.prepend(data);
        } else if (index >= this.length) {
            this.append(data);
        } else {
            const newNode = new Node(data);
            const leader = this._traverseToIndex(index - 1);
            const holdingPointer = leader.next;
            leader.next = newNode;
            newNode.next = holdingPointer;
            this.length++;
        }
    }

    _traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    deleteAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        } else if (index >= this.length) {
            return "Index out of bounds";
        } else {
            const leader = this._traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            this.length--;
        }
    }

    // Reverse a linked list
    reverse() {
        if (this.length < 2) {
            return this.head
        }
        let prevNode = null
        let curNode = this.head
        this.tail = this.head
        while (curNode) {
            let nextNode = curNode.next;
            curNode.next = prevNode;
            prevNode = curNode;
            curNode = nextNode;
        } 
        this.head = prevNode
        return this
    }
}

// ===================================================================
// MAIN
myll = new LinkedList();
myll.prepend(1)
myll.prepend(0)
myll.append(2)
myll.append(3)

myll.insertAt(3, 99)
myll.printList()

myll.deleteAt(3)
myll.printList()

console.log(myll.reverse())
