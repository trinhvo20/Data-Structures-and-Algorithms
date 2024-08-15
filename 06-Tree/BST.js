// Build a Binary Search Tree in JS (left < root < right)

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
        return this;
    }

    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }
    // ==============================================================
    search(data) {
        return this._searchNode(this.root, data);
    }

    _searchNode(node, data) {
        if (node === null) {
            return false;
        } else if (node.data === data) {
            return true;
        } else if (data < node.data) {
            return this._searchNode(node.left, data);
        } else {
            return this._searchNode(node.right, data);
        }
    }
    // ==============================================================
    remove(data) {
        this.root = this._removeNode(this.root, data);
        return this;
    }

    _removeNode(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            node.left = this._removeNode(node.left, data);
        } else if (data > node.data) { 
            node.right = this._removeNode(node.right, data);
        } else {
            // We found the node we want to remove!
            
            // Option 1: node has no right child
            if (node.right === null) {
                return node.left;
            
            // Option 2: node has no left child
            } else if (node.left === null) {
                return node.right;
            }

            // Option 3: node has two children.
            // Find the smallest value in the right subtree,
            // copy it to the node, and delete the smallest value in the right subtree.
            const tempNode = this._findMinNode(node.right);
            node.data = tempNode.data;
            node.right = this._removeNode(node.right, tempNode.data);        
        }
        return node;
    }

    _findMinNode(node) {
        // Find the smallest value in the right subtree.
        while (node !== null && node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

function traverse(node) {
    const tree = { data: node.data };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

// ==============================================================================
// MAIN

const bst = new BST();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(JSON.stringify(traverse(bst.root)))
/*
     9
   4   20
1  6  15  170
*/

console.log(bst.search(1432))

console.log(bst.remove(20))
console.log(JSON.stringify(traverse(bst.root)))