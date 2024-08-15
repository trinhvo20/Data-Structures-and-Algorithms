// Build a Doubly Linked List in JS

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;  // for doubly linked list
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
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
            const follower = leader.next;
            leader.next = newNode;
            newNode.prev = leader;
            newNode.next = follower;
            follower.prev = newNode;
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
            const follower = unwantedNode.next;
            leader.next = follower;
            follower.prev = leader;
            this.length--;
        }
    }
}

// ===========================================================================
// Driver Code

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.insertAt(3, 99);
list.printList()

list.deleteAt(3);
list.printList()