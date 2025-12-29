// Given a Binary Search Tree in JS (left < root < right)
// Implement BFS (level order traversal)

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

    // ========================== INSERT ====================================
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
    // ========================== SEARCH ====================================
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
    // ========================= REMOVE =====================================
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
            const minNode = this._findMinNode(node.right);
            node.data = minNode.data;
            node.right = this._removeNode(node.right, minNode.data);        
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

    // ============================== BFS ================================
    bfs() {
        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift(); // dequeue
            result.push(node.data);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return result;
    }

    bfsRec() {
        const result = [];
        this._bfsRec([this.root], result);
        return result;
    }

    _bfsRec(queue, result) {
        if (queue.length === 0) {
            return;
        }
        const node = queue.shift();
        result.push(node.data);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
        return this._bfsRec(queue, result);
    }

    // ============================== DFS ================================
    inorder() {
        const result = [];
        this._inorder(this.root, result);
        return result;
    }

    _inorder(node, result) {
        if (node !== null) {
            this._inorder(node.left, result);
            result.push(node.data);
            this._inorder(node.right, result);
        }
        return result;
    }

    preorder() {
        const result = []; 
        this._preorder(this.root, result);
        return result;
    }

    _preorder(node, result) {
        if (node !== null) {
            result.push(node.data);
            this._preorder(node.left, result);
            this._preorder(node.right, result);
        }
        return result;
    }   

    postorder() {
        const result = [];
        this._postorder(this.root, result);
        return result;
    }   

    _postorder(node, result) {  
        if (node !== null) {
            this._postorder(node.left, result);
            this._postorder(node.right, result);
            result.push(node.data);
        }   
        return result;
    }
}

function traverse(node) {
    const tree = { data: node.data };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

// =============================== MAIN =============================================

const bst = new BST();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

/*
     9
   4   20
1  6  15  170
*/

// BFS - [9, 4, 20, 1, 6, 15, 170]
console.log(bst.bfs()); 
console.log(bst.bfsRec());  

// DFS
// Inorder - 1, 4, 6, 9, 15, 20, 170
// Preorder - 9, 4, 1, 6, 20, 15, 170
// Postorder - 1, 6, 4, 15, 170, 20, 9
console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());