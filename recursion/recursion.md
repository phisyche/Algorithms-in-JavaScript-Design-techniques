Recursion uses a call stack to solve a problem. A base condition needs to be defined to prevent infinite recursion. A problem needs to be broken down into subproblems. Use the value from the previous subproblem to construct solution of the original problem. 

Problem 01: Tower of Hanoi

Algorithm solution

![tower of hanoi](../Images/toh.png)

Time Complexity: O(2**n) time
Space Complexity: O(n) space

Problem 02: Finding Substrings

Algorithm solution

![finding substrings](../Images/findsubstring.png)

Time Complexity: O(2**n) time
Space Complexity: O(n) space

Problem 03: Array Product Sum

Algorithm solution

![array product sum](../Images/arrayproductsum.png)

Time Complexity: O(N) time
Space Complexity: O(d) space where d is the depth

Problem 04: Binary Subtree

Algorithm solution

![Binary subtree](../Images/binarysubtree.png)

Time Complexity: O(n+m) time
Space Complexity: O(n+m) space

Types of Recursion

- Direct Recursion (method directly call itself)

- Indirect/Mutual Recursion (it is when a function say a function a calls another function function b and function b again calls function a this is called)

- Multi-Recursion (calling the same function twice in the same function)

- Head Recursion (when there is some operation left to be performed after the recursive step)

- Tail Recursion (there is no operation to be performed after the recursive step)

Categories of recursive functions

- linear recursive functions 

- tree recursive functions or binary recursive functions 

- exponential recursive functions 

- nested recursive functions


Tail-call optimization is where you are able to avoid allocating a new stack frame for a function because the calling function will simply return the value that it gets from the called function.