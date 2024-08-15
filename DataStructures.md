# Data Structure
 https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/18063259#overview

## Big O
**Big O Cheatsheet**

https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent

https://www.bigocheatsheet.com/


## Good videos to rewatch
57. Exercise: Interview Question
58. Exercise: Interview Question 2
77. Interview Questions: Arrays

## Tips
- **String question** --> turn it into an **Array** ~ split()
- If it's a **sorted array** --> use **Binary tree** to achieve O(log N)
- **Hash Maps** are usually the answer to improve Time Complexity.

## Knowledge about JavaScript
- JavaScript runs on web-browser engine (Chrome V8)
- JavaScript is a synchronous language with non-blockings (tasks are put into a CALL STACK for executing in order).
- JS can be asynchronous with CALLBACK QUEUES and CALLBACK FUNCTION (use `setTimeout()`)


- **Memory Leak** - too many unused variables.
- **Stack-overflow**: (too many items in a stack) happend in recursion without base condition (when a function calls itself nonstop).
- **Synchromous** (tasks run in sequence) 
- **Asynchronous** (tasks run at the same time) --> Deadlock (possible).

## 01 - Array
- **Ordered** and **fixed-size** linear data stucture.
- Fast access using **index**.

| Method | Time Complexity  |
| ------ | ---------------  |
| Lookup | O(1)             |
| Search | O(n)             |
| Insert | O(n)             |
| Delete | O(n)             |
| Append | O(1) for dynamic and O(n) for static


| Pros          | Cons                      |
| ------------- | -------------             |
| Fast Lookup   | Slow Insert/Delete        |
| Fast Push/Pop | Fixed size (static array) |
| Ordered       |  

## 02 - Hash Table
- Data structure in the form of `key-value pair`.
- Use a **hash funtion** to determine the index of the underline array for storing the item.
- Unordered.

| Method | Time Complexity  |
| ------ | ---------------  |
| Lookup | O(1)             |
| Search | O(1)             |
| Insert | O(1)             |
| Delete | O(1)             |

| Pros              | Cons                  |
| ----------------- | -------------         |
| Fast Lookup       | Unordered             |
| Fast Insert/Delete| Slow key iteration    |
| Flexible Keys     |                       |

## 03 - Linked List
- Class `Node(data, next)` as the foundation.
- Take more memory but flexible in memory storage (nodes are stored random in memory).
- Easy to shrink/grow in size.

| Method | Time Complexity  |
| ------ | ---------------  |
| Prepend| O(1)             |
| Append | O(1)             |
| Lookup | O(n)             |
| Insert | O(n)             |
| Delete | O(n)             |

| Pros              | Cons                  
| -------------     | -------------         
| Fast Insert/Delete| Slow Lookup        
| Ordered           | More Memory    
| Flexible Size     |  

## Stacks and Queues
- Linear data structures

### 04 - Stacks
- First In Last Out
- Built with **Array** or **Linked List**

| Method | Time Complexity  |
| ------ | ---------------  |
| Lookup | O(n)             |
| Pop    | O(1)             |
| Push   | O(1)             |
| Peek   | O(1)             |

### 05 - Queues
- First In First Out
- Built with **Linked List** (not Array since dequeue 1st item costly to shift the entire array)

| Method  | Time Complexity  |
| ------- | ---------------  |
| Lookup  | O(n)             |
| Enqueue | O(1)             |
| Dequeue | O(1)             |
| Peek    | O(1)             |


| Pros              | Cons                  
| -------------     | -------------         
| Fast Operations   | Slow lookups          
| Fast Peek         |     
| Ordered           |                       

## 06 - Trees
- Class `Node(data, children[])` as foundation

### Binary Tree
- Each node can only have maximun 2 children.
- Represented as class `Node(data, left, right)`
- The number of node that a specific level can have: **2^level**.
- The total number of node in a binary tree: **2^h - 1** (h: height of the tree)

### Binary Search Tree
- Is a type of binary tree where each node can only have maximun 2 children.
- Represented as class `Node(data, left, right)` where **left < parent < right**.
- All operations perform at **O(log N)**.
- We want a **balanced BST** for O(log N) runtime. **Unbalanced BST** will create a Linked List that perform in O(n).

| Pros              | Cons                  
| -------------     | -------------         
| O(log N)          | No O(1) operations      
| Ordered           |     
| Flexible Size     |                    

### AVL Tree + Red Black Tree
- Those are **balanced BST**. They can self-balance themselves when we perform insert/remove node.
- A balanced tree is a tree that **abs(leftHeight - rightHeight) <= 1**.

### Binary Heap
- Is a type of binary tree where each node can only have maximun 2 children.
- Represented as class `Node(data, left, right)`.
- **Max Heap**: parent is the largest value.
- **Min Heap**: parent is the smallest value.
- Insertion happends from left-to-right (important).
- Heap is very useful in **Priority Queue**.

| Method  | Time Complexity  |
| ------- | ---------------  |
| Lookup  | O(n)             |
| Insert  | O(log N)         |
| Delete  | O(log N)         |

| Pros              | Cons                  
| -------------     | -------------         
| Better than O(n)  | Slow lookup     
| Priority          |     
| Flexible Size     |
| Fast Insert/Delete|           

### Trie
- A tree that use for **searching**, especially with **text**.
- Start with an empty root node, then children will be **letters**.
- Used to **look for a word** in an array.
- **Runtime** usualy be **the length of the word** we are searching for.

## 07 - Graphs
- `Nodes (Vertex) and Edges`.
- PROS: Useful when work with **links** and **relationships**, things that are connected with other things.
- CONS: scaling a graph is hard.
- There are sevaral types of graph: 
    - **Directed Graph** and **Undirected Graph** 
    - **Weighted Graph** and **Unweighted Graph**: useful to find the shortest path to something.
    - **Cyclic Graph** and **Acyclic Graph**
- There are several ways to build a graph:
    - Edge List: `const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]`
    - Adjacent List
    - Adjacent Matrix

```javascript
// Adjacent List
const graph = {
    0: [2], 
    1: [2,3], 
    2: [0,1,3], 
    3: [1,2]
}
```

```javascript    
// Adjacent Matrix
const graph = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}
```