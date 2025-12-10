/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

//my first try failed
// function threeSum(nums) {
//   let l = nums + 1;
//   let r = nums.length - 1;
//   for (let i = 0; i < nums.length; ++i){
//     while (r < nums.length){
//         const sum = nums[l] + nums[r]
//         if(l < r){
//             return sum[l, r]
//         }
//         else if(l > r){
//             r--
//         }
//     }
//     l++
//   }
// }

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      }
      if (sum < 0) {
        l++;
      }
      if (sum === 0) {
        results.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return results;
}

//DO NOT EDIT BELOW THIS LINE
module.exports = threeSum;
