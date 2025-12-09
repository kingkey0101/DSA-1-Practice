// const nums = [0, 1, 2, 3, 4];
// //find all subarrays in given array:
// for (i = 0; i < nums.length; ++i) {
//   console.log(`iteration ${i}`)
//   for (let j = i + 1; j <= nums.length; ++j) { // use <= so the final index is included(4 in this case.)
//     console.log(nums.slice(i, j));
//   }
// }

// const maxSubArray = (nums) => {
  let nums = ([5, 4, -1, 7, 8])
if(nums.length === 0) return 0;
let currentMax = nums[0]
let globalMax = nums[0]

for (let i = 1; i < nums.length; ++i){
  currentMax = Math.max(nums[i], currentMax + nums[i])
  globalMax = Math.max(globalMax, currentMax)
  console.log(currentMax, globalMax)
}
return globalMax
// }