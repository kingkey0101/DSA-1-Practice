/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */

// top tech solution, O(n) time, O(1) space
const maxSubArray = (nums) => {
if(nums.length === 0) return 0;
let currentMax = nums[0]
let globalMax = nums[0]

for (let i = 1; i < nums.length; ++i){
  currentMax = Math.max(nums[i], currentMax + nums[i])
  globalMax = Math.max(globalMax, currentMax)
  console.log(currentMax, globalMax)
}
return globalMax
}

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;
