Dynamic Programming is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems.

-Identifying a problem that can be solved using dynamic programming:

A problem needs to be broken down into smaller subproblems.
Problem demads for optimal solution.

Difference between DP and the greedy technique:

![Solution](../Images/sol.png)

![DP vs greedy](../Images/dpvsgreedy.png)

Problem 01: Staircase Problem
- There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.

- Given N, write a function that returns the number of unique ways you can climb the staircase.
The order of the steps matters.

Solution

![staircase solution](../Images/staircase.png)
Recursion:

Time Complexity: O(3**n) time
Space Complexity: O(n) space

Top-down:

Time Complexity: O(n) time
Space Complexity: O(n) space

Bottom-up:

Time Complexity: O(n) time
Space Complexity: O(n) space

Problem 02: Knapsack Problem
- Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

Solution

![Knapsack solution](../Images/knapsackdp.png)

Recursion:

Time Complexity: O(2**n) time
Space Complexity: O(n) space

Top-down:

Time Complexity: O(nw) time
Space Complexity: O(nw) space


Bottom-up:

Time Complexity: O(nw) time
Space Complexity: O(nw) space