/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {

  // Helper function to check if a string has unique characters
  const isUnique = (s) => new Set(s).size === s.length;

  // Backtracking function to explore all possible subsequences
  const backtrack = (start, path) => {
    console.log("backtrack", start, path);
      if (isUnique(path)) {
          // Update maxLength with the maximum length found so far
          // console.log(maxLength, path );
          maxLength = Math.max(maxLength, path.length);
      }
      for (let i = start; i < arr.length; i++) {
          // Explore the next element in the array to build the subsequence
          console.log("for", i, path , arr[i]);
          backtrack(i + 1, path + arr[i])
      }
  }

  // Initialize maxLength to 0 and start exploration with an empty string
  let maxLength = 0;
  backtrack(0, "");
  
  return maxLength;
};
const isUnique = (s) => {
  console.log(new Set(s));
  new Set(s).size === s.length
};
// console.log(isUnique("eqweq"))

console.log(maxLength(["un","iq","ue","rr"]));;
let ar = ["un","iq","ue"];
console.log(ar.shift());
console.log(ar.shift());
console.log(ar.shift());
console.log(ar.shift());
