# Algorithms
In this lesson, we will learn about 4 most ppopular algorithms in Tech Interview.
- Reccursion
- Sorting
- BFS + DFS (Searching)
- Dynamic Programming

## 08 - Recursion
- A recursion function is **a function that calls itself**.
- Recursion can cause STACK OVERFLOW (the stack of funtions waiting to execute is out of space)
- Always contains at least 2 return values for: **base case** and **recursive case**.
- Recursion has a **high runtime O(2^N)**. Then why we want to use recursion?
    - PROS: Shorter to write and easier to read.
    - CONS: High runtime and large memory stack.
- When to use recursion?
    - Tree problem.
    - Divide and Conquer problem.

## 09 - Sorting
- Some popular sorting algorithm:
    - **Bubble Sort** - O(n) - no use.
    - **Insertion Sort** - O(n) - best for small amout of data or almost sorted data.
    - **Selection Sort** - O(n) - no use.
    - **Merge Sort** - O(n log n) - all scenerios will be O(n log n) but take more space O(n).
    - **Quick Sort** - O(n log n) - worst case runtime can be O(n^2) but take less space O(log n).
- Sorting: fastest take **O(N log N)**

## 10 - BFS + DFS (Searching)
- Some popular search algorithm:
    - **Linear Search** - O(n)
    - **Binary Search** - O(log n) - only work on sorted array.
    - **Depth First Search (DFS)** - O(n) - use for traversing Tree/Graph.
        - Preorder/ Inorder/ Postorder
        - Use **Stack**
        - Less memory.
        - Can get slow.
        - When to use:
            - If the tree is very wide (many children under one node)
            - If the solutions are frequent but located deep in the tree.
            - To determine whether a path exists between 2 nodes.
    - **Breadth First Search (BFS)** - O(n) - use for traversing Tree/Graph.
        - Level-by-level
        - Use **Queue**
        - Shortest Path
        - Take more memory space because keeping track of the nodes in current level.
        - When to use:
            - If the solution is not far from the root of the tree.
            - If the tree is very deep and solutions are rare (DFS takes long time).
            - To find the shortest path.