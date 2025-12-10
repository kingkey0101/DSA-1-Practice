const nums = [1, 2, 3, 4];

const leftProducts = [];

leftProducts[0] = 1;

for (let i = 1; i < nums.length; ++i) {
  leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
}
console.log(leftProducts);

const rightProducts = [];
rightProducts[nums.length - 1] = 1;
for (let j = nums.length - 2; j >= 0; --j) {
  rightProducts[j] = nums[j + 1] * rightProducts[j + 1];
}
console.log(rightProducts);

