function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log(map);
    const complement = target - nums[i];
    console.log(complement, target, nums[i]);
    if (map.has(complement)) {
      // console.log(complement, i);
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  console.log(map);
  return [];
}

// Example usage
console.log(twoSum([2, 11, 15, 7], 9)); // Output: [0, 1]

const map = new Map();
const objKey = { a: 1 };
map.set(objKey, 'value associated with object key');
console.log(map.get(objKey)); // 'value associated with object key'

