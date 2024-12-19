function maxSubArrayKadane(nums) {
  /* Validate the input array such that nums defined as the array[] only not other data types and the array 
  length is equal to 1 or greater than 1 and equal to or smaller than 100000(10^5) mention in constraints 1
  otherwise show error*/
  if (!Array.isArray(nums) || nums.length < 1 || nums.length > 100000) {
    throw new Error(
      "Invalid input nums must be an array with length between 1 and 100000."
    );
  }

  /* Validate the elements of the array between the range -10^4 <= nums[i] <= 10^4 and also check if num[i]
  is number or not if not a number then throw error */
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "number" || nums[i] < -10000 || nums[i] > 10000) {
      throw new Error(
        `Invalid input: nums[${i}] = ${nums[i]} is out of the allowed range (-10000 to 10000).`
      );
    }
  }

  // Initialize maxSum and currentSum to the first element
  let max_sum = nums[0];
  let current_sum = nums[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Include the current element in the subarray or start a new subarray
    current_sum = Math.max(nums[i], current_sum + nums[i]);
    // Update maxSum if the current subarray has a larger sum
    max_sum = Math.max(max_sum, current_sum);
  }

  // Return the maximum sum found
  return max_sum;
}

// Example with validation checks
try {
  const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubArrayKadane(nums1)); // Output: 6

  const nums2 = [1];
  console.log(maxSubArrayKadane(nums2)); // Output: 1

  const nums3 = [10001, -2, 3]; // This will throw an error because num[0]=10001
  console.log(maxSubArrayKadane(nums3));

  const nums4 = []; // This is an empty array
  console.log(maxSubArrayKadane(nums4)); // This will throw an error because empty array
} catch (error) {
  console.error(error.message); // Output the error message
}
