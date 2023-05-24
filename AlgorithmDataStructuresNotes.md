# Frontend Masters Notes
## Algorithms & Data Structures

<hr>

###  Key Ideas To Take Home
1. It is best to use arrays by setting a fixed length and using them accordingly rather than using them in a way that allows for dynamic expansion or contraction of the array length.
2. Important rules
    * growth is with respect to the input.
    * constants are dropped.
    * worst case is usually the way we measure.

### Important Questions to Ask
1. Is the input ordered?  If so, there are advantages you can take such as Binary Search.
    * You don't have to go through linear walk at O(n).
    * You can jump by fixed amount and ask if item is larger or smaller than the target.
    * This allows for a binary search O(log n) by jumping half way and evaluating if larger/smaller and skipping the half.  Keep halfing until locating target.
    * If you had to scan the entire set O(n) and then halved to get to the item, the ending Big O would be O(n log n).

### Array 
1. Accessing array using index = O(1)
2. JavaScript const a = []; is not an array.
    * Delete (you can't really delete, you can zero out)
    * Insertion (you can't really insert, you can write)
    * Ungrowable (arrays are fixed spaces in memory, you can link another array but you can't add space to fixed array size)
    * To empirically test if JavaScript a = [] is an array, use the array-test.ts file.
        * This is a performance test.
            * Unshift const a X number of times. In JavaScript this is adding to the list.
            * Shift const a X number of times. In JavaSCript this is removing from the list.
            * Push/Pop into const a X number of times. This is the exact same as ArrayList. 
            * Get from const a, just in case it is a Linked List under the hood, if we were to get progressively larger indices, we should see a linear slowdown.
            * Push_arr and Pop_arr are higher order functions, call push/pop with the same count every time, so it can be called over and over again.
            * Unshift_arr and Shift_arr are higher order functions, call unshift/shift with the same count every time, so it can be called over and over again.
            * Next, a stepladder approach is used to performance test (10, 100, 1000, 10000, 1000000, 10000000) to see how it grows.  A linear regression can be utilized to predict the outcome with n number of values.
            * So for every test, a certain number of items are pushed, growing array at (10, 100, 1000, 10000, 100000, 1000000, 1000000) and get at the last element, and if indexing is linear than we should see a linear slow down as the array gets bigger.  Each test should get 10x ( * constant) slower if linear slow down occurs.
            * So for every test, a certain number of items are pushed, growing array at (10, 100, 1000, 10000, 100000, 1000000, 1000000) and then push_arr 1000 items, and so we are pushing 1000 items after growing a certain length. If push is based on the number of items in the array, a linear slow down should occur.
            * So for every test, a certain number of items are pushed, growing array at (10, 100, 1000, 10000, 100000, 1000000, 1000000) and then pop_arr 1000 items, and so we are popping 1000 items after growing a certain length. If popping is based on the number of items in the array, a linear slow down should occur.
            * So for every test, a certain number of items are pushed, growing array at (10, 100, 1000, 10000, 100000, 1000000, 1000000) and then unshift_arr 1000 items, and so we are unshifting 1000 items after growing a certain length. If unshifting is based on the number of items in the array, a linear slow down should occur.
            * So for every test, a certain number of items are pushed, growing array at (10, 100, 1000, 10000, 100000, 1000000, 1000000) and then shifting_arr 1000 items, and so we are shifting 1000 items after growing a certain length. If shifting is based on the number of items in the array, a linear slow down should occur.
    * To run use:
    ```bash
    npx ts-node array-test.ts

    Results - 
    Testing get
    10 0
    100 0
    1000 0
    10000 0
    100000 0
    1000000 0
    10000000 0
    push
    10 0
    100 0
    1000 0
    10000 0
    100000 0
    1000000 0
    10000000 1
    pop
    10 0
    100 0
    1000 0
    10000 0
    100000 0
    1000000 0
    10000000 0
    unshift
    10 0
    100 0
    1000 0
    10000 2
    100000 24
    1000000 394
    10000000 7811
    shift
    10 0
    100 0
    1000 0
    10000 0
    100000 30
    1000000 409
    10000000 7759
    ```
    * Results indicate that Get, Pop, and Push are are linear indicated by 0 or constant time of O(1).  While, unshift and Shift are 30x indicated by the massive increase every 10x items.  This suggests the JavaScript const a = [] is an ArrayList under the hood.  Since 30x is just O(3n) time we could simplify to O(n) or linear growth.
    * This run time could be smoothed our by using a double ended Ring Buffer, described below.
    * The question was, was that an array or not, right? 
        * Its not an array because its growable, you can push and pop, and has a notion of an ending and a beginning. Those are all very different from what you would get with an array.  An array does not have a capacity versus a length, an array is contiguous spot of memory, or a static array is what people often refer to them as.  They refer to a length or ArrayList as dynamic arrays; things in which you have these extra operations on top of it to be able to expand or contract according to what is needed.  Therefore, it is an ArrayList.
    * Slice can be linear if copied, and can be constant if its literally just pointing to new spots
    * An Array Buffer (Buffer.allocate(8)) is effectively an ArrayList
    * You will see these type of data structures when making libraries on the frontend (React) because keeping track of state is very memory intensive (Trees, Linked Lists, and Maps).  Everything needed to be O(1) to not interrupt the UI.
    * You will also see this on the backend such as when writing a caching layer for Netflix TV  (Trees, Linked Lists, and Maps).  Everything needed to be O(1) to not interrupt the UI.
    

### Bubble Sort
* 1st iteration swaps the largest item to the end.
* 2nd iteration does not need to go to the last item because it is sorted
* continue until the items are all sorted.

### Linked Lists
* Node based data structure (type of container that wraps data)
* They help with queues, tress and graphs

### SinglyLinkedList
* All of the below are in constant time
    1. Insertion - reassigning next
    2. Deletion - reassigning next
    3. Getting Head/Tail - finding head/tail
    4. Getting in general 
    5. Prepend/Append - adding front and end

### Doubly Linked List
* All of the below are in constant time
    1. Insertion - reassigning next and prev
    2. Deletion - reassigning next and prev
    3. Getting Head/Tail - finding head/tail
    4. Getting in general 
    5. Prepend/Append - adding front and end

### Queue
* Data Structure implemented with Linked List
* FIFO (First in first out)
* Both reassigning this.tail.next = newNode and this.tail = newNode are constant time
* Runtime = O(1)
* peak() = if there is head, return head.value.  If not, return undefined.
* Add item to queue = enqueue
* Remove item from queue = deque

```
// To add a node

point newNode to A  (newNode) ->   A -> B -> C -> D (tail)

point head to newNode    ^------- (head) 
```

### Stack
* Data structure implemented with Link List
* LIFO (Last in first out)
* Both reassigning this.tail.next = newNode and this.tail = newNode are constant time
* Runtime = O(1)
* peak() = if there is head, return head.value.  If not, return undefined.
* Add item to push = enqueue
* Remove item from pop = deque

```
// To add a node

(tail) A <- B <- C <- D    <-  (newNode)  point newNode to D

                     (head) ------^  point head to newNode
```

### Array vs Linked List (Usability, Space, Time)
1. Array:
    * Space: Allocate memory and type up front and the space is calculated. This causes wasted space potentially.  
    * Time: Time wise, O(1) for all methods. 
    * Usability: You can only write/zero out. This forces a shift over to add/delete so that you can write. The usage of Binary Search is possible. 
    * Rule: If you need to scan a list or hop into a list with random access, use a array.
2. Linked List:
    * Space: Memory is not allocated up front so the memory usage is more optimal.  
    * Time: Runtime however is the give as it cost more memory to traverse list using Linear Search.  
    * Usability: If you add one item, the only 1 space is used. 
    * Rule: If you want to push and pop from either the head or tail, use a Linked List.

* Example - Async/Await is an example, lets say you only wanted to have 5 Async/Await operations at one time.  This means you will have to pull off the front and push on the back every time a promise is completed and new is initiated. Use a queue.
    

### ArrayList
* In JavaScript you can choose between a LinkedList and an ArrayList
    
    * An array is initially created with fixed length.
        * Head = index 0 
        * Tail = length
    * Instead of having an underlying container (of memory space), an ArrayList is an array of generic T.
    * This ArrayList can be utilized and then when need to grow the we have to grow it.
    * Basis for many algorithms, Maps and Ring Buffers utilize these ArrayLists.
    * An ArrayList utilizes an array rather than a node based structure and then adds push, pop, get methods for example on top to augment size.
    * Pushing is O(1) because we utilize an index to push and then increment length.
    * Pop is O(1), because we use length - 1 to get the index and pop, and then decrement length by 1.
    * Since we are adjusting the length, it is not entirely necessary to zero out the popped numbers.  We adjust the pointers and will not have that space (value) in range.  In JavaScript, it may be best to set popped space to null as that will release the pointer and thus it can be garbage collected.
    * Insertion: must shift everything over to the right. O(n) time complexity.
    * Delete: must shift everything to the right of the item to the left. O(n) time complexity.
* What happend when we push past the capacity of the list? 
    
    * A new array can be created, and then a "copy" can be performed to transpose the previous array into the beginning of the new array.

* Rule: Use the least amount of memory to start out, yet do the least amount of growing.  Find that optimal zone to maximize time/space complexity.
* What about Queue like operations such as enqueue and deque. 
    * Since you can't write over the head (left of array) in queue:
        * For enqueue, all values must shift to the right by 1 at least.
        * For deque, the same is true, where all values would be shifted to the left by 1 at least.
    * Due to this fact, enqueue and push are O(n) operations.  Many prefer to us Node based data structures as seen previously because the time complexity of looping through an entire list to shift to the left is costly.

* It depends on the situation as to which one you want to use.  If asked, almost always say depends and then explain:
    * If pushing and popping from the ends (head/tail), either ArrayList or LInked list will work quite well.
    * ArrayLists have square bracket accessing where LinkedLists do not.
    * ArrayLists have random access given a index where LinkedLists do not.
    * LinkedLists do have a remove from front.

    *** Getting is bad on Linked Lists because you have to traverse the list in O(n) time.
    
    *** Remove from front is bad on ArrayList because you have to shift everything to left in O(n) time.

### Ring Buffer or Array Buffer.
* There are used in Rust for VecDeque or DequeVec, i.e. double-ended ring buffer.
* Exact same things as an ArrayList with array-like storage.
* The only difference is that we are not using 0 as our head, and length as our tail.
* Instead we have indexed based head and index based tail. 
    * This means head is not at index 0 and everything to the left is null.
    * This also means tail is not at .length and everything to the right is null. 
    * Everything between head and tail are the items that you have.
* If you want to remove from the front, you just make head + 1. You can clean it up (zero out) and return out.
* Similarly, if you want to remove from the end, just make tail - 1.  You can clean it up (zero out) and return out.
* What happens if you go off the end of the array?
    * Using the modulo operator: 
        * this.tail % length = the index into the array so you can ring around it.
    * In this case, the head can be on the right of the array and tail can be on the left, and you still have the same thing as it is ringing around.
* If you need to resize, that is when things get a little bit confusing.
* Example - if you have a array length 10, head is 24, and tail is 12.

```
this.tail (12) % 10 = 2 index
this.head (24) % 10 = 4 index

Ring Buffer would look like this
[null, null, {this.tail}, item, {this.head}, null, null, null, null, null]
```

* Problem happens when your tail exceeds your head then you need to resize.
    * Inherent to Ring Buffers, is that they maintain order.
    * So, when you shift or unshift, you can't just get any element, you have to get the last item that was added to the front or the first element added.
    * So, if you are just adding to the tail and pushing the head to the right, you have effectively created a queue that runs around the queue.
    * if you have a situation where the tail is at the head, then needing to resize, then start at the head, and go the length, and write that into a new larger capacity buffer.  Now it is re-written in proper order, and the head is near 0 and the tail is near length.  So then, you can just add one as needed.
* Ring Buffers can be used in log batchers.  You have a service which needs to batch logs and then write logs. The problem is that logs need to maintain order, and while you are writting logs, and while you are writting logs, new logs can come in. So, at some interval, you would just flush the logs (remove from right side) and then add the capacity to the front (left side).
* You can make this process super fast as you don't need to worry about the read/write problems.
* Can be used for performance in object pooling.
    * Example - if you had a service that was creating 10,000 users every few minutes, then you could just use a pool of User objects and when one was finished being created, you could pass it back to the front of the Ring Buffer.  That way memory does not spike like an EKG and remains stable.
    * This can help garbage collection from destroying your service.

### Recursion
1. Introduction
    * A function that calls itself until the base case is reached and then the problem is solved.
    * Example - 
    ```ts

    // Sum all integers of a given number.
    // constraints:
    // n >= 1

    function foo(n: number): number {
        // Base Case
        if (n===1) {
            return 1;
        }

        // Recurse
        return n + foo(n - 1);
    }
    ```
    * Steps to recurssion
        1. Pre: (example "n +" in the above example)
        2. Recurse: pass arguments into the function (if logic states) and re-run function
        3. Post: (example "n + resultPreviousRecursion" in the above example)
2. Path Finding: Base Case
* MazeSolver
    * "#" = Wall
    * "S" = Start
    * "E" = End
     * At each cell, you can go up, down left, or right
    * Base Cases:
        1. its a wall
        2. off the map
        3. its the end
        4. if we have seen it
    * Time complexity is O(n) due to needing to check every possible space.
```bash

// How to get from S to E without going up and right and up.

[
    "######E#",
    "#      #",
    "#S######"
]
```
```ts

// Directions
const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

// Walking base cases and 3 recurse functions (pre, recurse, post)
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

    // Base Cases
    // 1. off the map
    if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length ) {
        return false;
    }

    // 2. On a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. Found the end of maze!
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // 4. Seen cell before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3 recurse functions

    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        if (walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y,
        }, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i=0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
```

# Divide & Conquer

## QuickSort Algorithms

* Split the input into n chunks and solve the smaller chunks first.
* Does not require additional memory and is preformed in place
* Moves through the entire array 1 time and then divides in half
* Therefore, runtime is O(n log n) in best cases
* However, QuickSort does not always sort quickly
* Worse case is when Runner #1 is on the far right of array and the array is reverse sorted.  Therefore, Runner #1 will travel the entire array.  In this case, this would be O(n^2).
* Picking the middle as pivot can lead to perfect bisection and reduce the likelihood of the worst case scenerio.
* The probability to pick all the right conditions to get O(n^2) is exceptionally low.

Variables
1. P = pivot
    * index = arr.length - 1
2. Runner #1 or idx
    * idx = -1
3. Runner #2
    * Starts at index 0 and compares if that value is less than or equal to pivot
    * If no, then the Runner # 2 keeps moving to the right incremented by 1.
    * If yes, then Runner #1 gets incremented by 1, and item that was smaller than pivot gets swapped for the item in Runner #1 location.
    * When finished, then increment Runner #1 and swap the pivot into the Runner #1 location

Example: 

Phase 1: Quick_Sort
* Check if base case occurs where lo >= hi, and if return.
* Call partition(arr, lo, hi) and assign to pivotIdx

Phase 2: Partitioning
* Assign pivot = arr[hi].
* Assign idx = lo = 1. 
* Weak Sort
    * Create a for loop starting a lo and iterate by 1 until i < hi
        * Inside for loop, check if arr[i] <= pivot
            * If so, increment idx++
            *Swap arr[i] with arr[idx] using temp variable
                * This swap moves the lower value to the left of the idx.
* When weak sort is finished
    * Increment idx++
    * Assign arr[hi] = arr[idx]
    * Assign arr[idx] = pivot
        * This swap resets the pivot to the right of the lower number.
    * return idx which is the pivotIdx.

Phase 3: Recurse quick_sort
* Call the quick_sort algorithm first on left side array of pivot, not including pivot.
* Call the quick_sort algorithm second on the right side of the pivot, not including pivot.
        
Implementation:

Two functions
1. Partition
    * Selects the pivot
    * Moves the items greater than Pivot to the right and smaller on the left of the Runner #1.
2. QuickSort
    * Calls the Partition to get the pivot
    * Performs the recursive step
    * Performs the base case step
    * Performs bookkeeping
3. Variables
    * [lo, hi] is inclusive with square brackets on both sides 
        * [0, arr.length -1]


## MergeSort
* Always does the sort in O(n log n) time but the constant in front that is dropped off is often very large.  This is due to array copying and moving items around which is not conducive to high speed, low memory algorithms.  This is why QuickSort is often the one you choose although if all the right conditions are met, it can be slower.

## Greedy 

Run until finding the first occurrence and then were done.

## Dynamic Programming

For a stock chart, which day is the best day to invest?

## Tree Terminology
1. Root = the most parent node. The First. Adam.
2. Height = the longest path from the root to the most child node.
3. Binary tree = a tree in which has at most 2 childre, at least 0 children.
4. General tree = a tree with 0 or more children.
5. Binary search tree = a tree in which has a specific ordering to the nodes and at most 2 children.
6. Leaves = a node without children.
7. Balanced tree = a tree is perfectly balanced when any node's left and right children have the same height.
8. Branch factor - the amount of children a tree has.

## Depth First Search (DFS) Tree Traversals

#### A Stack is used implicitly to push nodes in each segment of traversal

* Depth First preserves the shape of the traversal

### Pre-order traversal
1. Visit root node
2. Starting at root, recurse the left side
3. Go back to root and recurse down right side

Order: 7, 23, 5, 4, 3, 18, 21

```
       7
    /     \   
   23      3
 /   \    /  \
5     4 18    21
```

```ts
function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if(!curr) {
        return path;
    }

    // recurse has 3 steps

    // pre
    path.push(curr.value);

    // recurse
    walk(curr.left, path);
    walk(curr.right, path)

    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}
```

### In-order traversal
1. Visit root node
2. Recurse left until reaching far left leaf
3. Then print values all the way up to root
4. Recurse right until reaching far left leaf
5. Then print values until reaching bottom right of tree

Order: 5, 23, 4, 7, 18, 3, 21

```
       7
    /     \   
   23      3
 /   \    /  \
5     4 18    21
```

```ts
function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if(!curr) {
        return path;
    }

    // recurse has 3 steps

    // pre
    
    // recurse
    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path)
    
    // post
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}
```

### Post-order traversal (Freeing Memory)
1. Visit root node
2. Recurse left until reaching far left leaf
3. Then print values on the same level
4. Then print the values on the level above and so on until root
5. Don't print root yet, and recurse right
6. Recurse right to far left leaf
7. Then print values on the same leaf
8. Then print the values on the level above and son on until root.
9. Then print root

Order: 5, 4, 23, 18, 21, 3, 7

```
       7
    /     \   
   23      3
 /   \    /  \
5     4 18    21
```

```ts
function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if(!curr) {
        return path;
    }

    // recurse has 3 steps

    // pre
    
    // recurse
    walk(curr.left, path);
    walk(curr.right, path)
    
    // post
    path.push(curr.value);
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}
```

## Breadth First Search (BFS) Tree Traversals

#### A Queue is used implicitly to push, pop, unshift, shift nodes in each segment of traversal

Traditionally, time complexity is O(n).  However, with JavaScript ArrayList the time complexity is O(n^2).
Reason, while ArrayList in JavaScript has O(1) for push/pop, unshift/shift is O(n^2).
A balanced binary tree has approximately half of the tree above each level of the tree. 
So, if we had to do half the tree shifting off, we would have to do n amount of work n times.

* Breadth First does not preserve the shape of the traversal
* A queue should be used to perform BFS
* No need to use recursion

Order: 7, 23, 3, 5, 4, 18, 21

```
       7
    /     \   
   23      3
 /   \    /  \
5     4 18    21
```

```ts
export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    // use an ArrayList queue to perform this search
    const queue: (BinaryNode<number> | null)[] = [head];

    while (queue.length) {

        // empty list === undefined, nothing at all would result in null
        const curr = queue.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }
        //search 
        if (curr.value === needle) {
            return true;
        }
        queue.push(curr.left);
        queue.push(curr.right);
    }

    return false;

}
```

## Comparing Binary Trees

Structural Checks
1. Check if nodes a and b are null
2. Check if node a or b is null

Value Check
3. Check if a.value is equal to b.value

Recurse
4. Recurse by giving compare(a.left, b.left) && compare(a.right, b.right)

```ts
export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    // structural check
    if (a === null && b === null) {
        return true;
    }

    // structural check
    if ( a === null || b === null) {
        return false;
    }

    // value check
    if (a?.value !== b?.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
```

## Binary Search Tree (Depth First)

1. Only rule for Binary Search Tree
    * The left side must be less than or equal to current node
    * The right side must be greater than (can be equal in some cases) to current node
2. Kind of like Quicksort but more like breadth first search on ArrayList or binary search on array
3. This is used for QuickFind
4. Steps to perform binary search
    * Check if !n
    * If node value is equal to value then return true
    * If node value is greater than value then recurse right
    * If node value is less than value then recurse left
5. Time complexity varies just like QuickSort in that it depends on the structure of the data
    * O(h) is typically the time complexity:
        * This accounts for a one long string of nodes down one side at O(n)
        * This also accounts for a balanced tree where it would be O(log n)
6. Methods to balance a tree after insertion
    * AVL
        * For finding alot and inserting rarely
        * The AVL process requires rotating to balance which is costly
    * Red-Black Trees
        * For finding rarely and inserting alot
7. Depth-First Find
    * if !n then return false
    * if node.value is equal to value then return true
    * if node.value is greater than value
        * return find(node.right, value)
    * else find(node.left, v)
8. Depth-First Insert
    * if node.value is great than value then
        * if there is no node.right
            * insert node
        * else if there is node.right
            * continue to traverse by calling insertion function again
    * else if the node.value is less than value then
        * if there is no node.left
            * insert node
        else if there is node.left
            * continue to traverse bv calling insertion function again
9. Depth-First Delete
    * if no child of node to delete, just delete
    * if one child of node to delete, set parent to child
    * When deleting an item with two children
        * find either the largest value on the small side or the smallest value on the right side
        * this replacement node must have either no child or one child
        * then swap the one selected with the deleted node and connect the remaining node to the one above.
    * Depending on height, you would work to reposition the largest (left or right)
    of the deleted node to shrink and hopefully make more balanced

## Heap
### AKA Priority Queue

* Heap Condition Statement
    1. MinHeap
        * Where every child and grandchild is larger than the current node.
    2. MaxHeap
        * Where every child and grandchild is smaller than the current node.
* Data structure is similar to a Binary Tree where every node can have either 0, 1, or 2 children.
* Maintain a weak ordering like breadth first ordering or level ordering in Breadth-First Binary Tree.
    * meaning there is an order, there is a rule at every single node, but its not in numerical order breadth first or depth first.
* Whenever a node is added or deleted, the tree must be adjusted
    1. Adding
        * The new node is placed in level order similar to the breadth first search
    2. Deleting
        * The most recent node is replaced with the deleted node and bubble/heapify up or down to the correct level.
    3. Update (Typically not used in priority queue)
        * If you want to update a heap you have to keep track of an index/value (key/value) pair hash map so that you can locate at O(1) complexity
        * With the index and value, you can then bubble/heapify up or down.
* There is no traversing the tree.
    * However, it would be simple to traverse the tree in breadth first order
* A heap is always full or complete
    * Self balancing
    * meaning the heap is always filled from left to right in level order so there are no unbalanced trees.
* Calculating the left and right children from current node index
    * Left Child: 2 * index + 1
    * Right Child: 2 * index + 2
* Calculate the parent node for the left and right children index
    * Left & Right Child: Math.floor((child index - 1) / 2)
* Locate the last node index by keeping track of the length of the array (Heap)

Indices: [0,   1,  2,  3,   4,  5,  6]
Order:   [50, 71, 80, 101, 80, 90, 101]

```
        50
    /      \   
   71       80
 /   \     /  \
101  80  90    101
```