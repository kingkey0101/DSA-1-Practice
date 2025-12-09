/** Contains Duplicate **
 *
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 *
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 *
 */

//my first solo try passed 3/4 tests
// const containsDuplicate = (nums) => {
//   for (let i = 0; i < nums.length - 1; ++i) {
//     for (let j = i; j < nums.length; ++j) {
//       if (i === j) {
//         return true;
//       }
//       return false;
//     }
//   }
// };


//brute force solution:
//time complexity: 0(n^2) -> double for loop | space complexity: 0(1) -> not storing anything

// const containsDuplicate = (nums) => {
//     for(let i = 0; i < nums.length - 1; ++i){
//         for(let j = i + 1; j < nums.length; ++j){
//             if(nums[i] === nums[j]){
//                 return true;
//             }
//         }
//     }
//     return false
// }

//sorting method(quicker algorithm/faster solution):
// 0(n) space | 0(nlog(n)) time

// const containsDuplicate = (nums) => {
//     const sortedArr = nums.sort((a, b) => a - b)
//     for (let i = 0; i < sortedArr.length - 1; ++i){
//         if(sortedArr[i] === sortedArr[i + 1]){
//             return true;
//         }
//     }
//     return false
// }

//optimal solution:

const containsDuplicate = (nums) => {
    
}


module.exports = containsDuplicate;
