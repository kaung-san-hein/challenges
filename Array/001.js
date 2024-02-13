// Using Brute-Force
// function findPair(nums, target) {
//   // Consider each element except the last
//   for (let i = 0; i < nums.length - 1; i++) {
//     // Start from the i'th element until the last element
//     for (let j = i + 1; j < nums.length; j++) {
//       // If the desired sum is found, print it
//       if (nums[i] + nums[j] === target) {
//         console.log(`Pair found (${nums[i]}, ${nums[j]})`);
//         return;
//       }
//     }
//   }

//   // We reach here if the pair is not found
//   console.log("Pair not found");
// }

// const nums = [8, 7, 2, 5, 3, 1];
// const target = 10;

// findPair(nums, target);

// Using Sorting
// function findPair(nums, target) {
//   // Sort the array in ascending order
//   nums.sort((a, b) => a - b);

//   // Maintain two indices pointing to endpoints of the array
//   let low = 0;
//   let high = nums.length - 1;

//   // Loop until the search space is exhausted
//   while (low < high) {
//     // Sum found
//     if (nums[low] + nums[high] === target) {
//       console.log(`Pair found (${nums[low]}, ${nums[high]})`);
//       return;
//     }

//     // Increment `low` index if the total is less than the desired sum;
//     // Decrement `high` index if the total is more than the desired sum
//     if (nums[low] + nums[high] < target) {
//       low++;
//     } else {
//       high--;
//     }
//   }

//   // We reach here if the pair is not found
//   console.log("Pair not found");
// }

// const nums = [8, 7, 2, 5, 3, 1];
// const target = 10;

// findPair(nums, target);

// Using Hashing
// function findPair(nums, target) {
//   // Create an empty object to serve as a hashmap
//   let map = {};

//   // Loop through each element
//   for (let i = 0; i < nums.length; i++) {
//     // Check if pair (nums[i], target-nums[i]) exists

//     // If the difference is seen before, print the pair
//     if (map[target - nums[i]] !== undefined) {
//       console.log(`Pair found (${nums[map[target - nums[i]]]}, ${nums[i]})`);
//       return;
//     }

//     // Store index of the current element in the map
//     map[nums[i]] = i;
//   }

//   // We reach here if the pair is not found
//   console.log("Pair not found");
// }

// const nums = [8, 7, 2, 5, 3, 1];
// const target = 10;

// findPair(nums, target);
