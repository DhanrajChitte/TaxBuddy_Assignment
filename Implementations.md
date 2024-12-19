# Programming Language Used: JavaScript

## Time and Space Complexity Explanation

### Approach 1:Brute Force
1) The brute force method involves iterating over all possible subarrays, calculating their sums, and keeping track of the maximum sum.
2) Time Complexity O(n²) Implementation:(In My Case)
     Approach:
        Use two nested loops:
            Outer loop selects the starting index of the subarray.
            Inner loop selects the ending index of the subarray.
        Calculate the sum of the subarray in the inner loop.
3) Time Complexity:
    Outer loop: Runs n times.
    Inner loop: On average, runs (n - i) times for each i.
    Total time complexity: O(n^2) maintaining a running sum

4)  Space Complexity:
    No additional data structures are used.
    Space complexity: O(1)
  
5) If we use the third loop calculates the sum of the subarray then time complexity   is O(n^3)

### Approach 2. Kadane's Algorithm
1) Kadane's algorithm uses a dynamic programming approach to efficiently find the maximum subarray sum in linear time.

2)    Approach:
        Maintain:
            currentSum: Tracks the sum of the current subarray.
            maxSum: Tracks the maximum sum encountered so far.
        Iterate through the array:
            For each element, decide whether to include it in the current subarray or start a new subarray.
            Update currentSum and maxSum accordingly.

3) Time Complexity:
   The array is traversed once: O(n)

   Space Complexity:
   Only a few variables (current_sum and max_sum) are used.
   Space complexity: O(1)