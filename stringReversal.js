// function* iterateString(str) {
//   for (let i = str.length-1; i >= 0; i--) {
//     yield str[i];
//   }
// }
// function reverseString(str) {
//   let reversed="";
//   for (let char of iterateString(str)) {
//     console.log(char);
//     reversed += char;
//   }
//   return reversed;
// }

// console.log(reverseString('hello'));

// function* reverseStringGenerator(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//       yield str[i];
//   }
// }

// function reverseString(str) {
//   let reversedStr = '';
//   console.log(reverseStringGenerator(str));
//   for (let char of  reverseStringGenerator(str)) {
//         console.log(char);
//       reversedStr += char;
//   }
//   return reversedStr;
// }

// // Example usage
// const originalString = "Hello, World!";
// const reversed = reverseString(originalString);
// console.log(reversed); 

// function reverseString(str) {
//   if (str === "") {
//       return "";
//   } else {
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }
// }

// // Example usage
// const originalString = "Hello, World!";
// const reversed = reverseString(originalString);
// console.log(reversed);
// "hel".substring
// function strReversal(str) {
//   if(!str || str==="") return new Error("Passed string is not valid");
//   const charIndex = 0;
//   let start = str.charAt(charIndex);
//   let subSting = str.substring(1);
//   let result = "";
//   while(subSting){
//     result+=start;
//     start = subSting.charAt(charIndex);
//     subSting=subSting.substring(1);
//   }
//   return result;
// }

// console.log(strReversal("hello"));

// const strArr = "hello".split("");
// let end = strArr.pop();
// let result = ""
// while(end){
//   result+=end;
//   end=strArr.pop();
// }
// console.log(result.at(5));


// function swapArray(arr){
//   let leftIndex = 0,
//     lengthOfArr = arr.length,
//     noOfLoop = Math.floor(lengthOfArr/2),
//     rightIndex = lengthOfArr - 1;
//     console.log(lengthOfArr);
//     console.log(noOfLoop);
//   for (let i=0; i<= noOfLoop; i++){
//     let left = arr[leftIndex];
//     let right = arr[rightIndex];
//     console.log(left);
//     console.log(right);
//     arr[leftIndex] = right;
//     arr[rightIndex] = left;
//     leftIndex++;
//     rightIndex--;
//   }
//   return arr.join("");
// }

// console.log(swapArray("hello".split("")));

// let numbers = [10, 5, 2, 40, 1];

// // Custom comparison function for ascending numerical sort
// function compareNumbers(a, b) {
//   console.log(a,b, a-b);
//     return a - b;
// }

// numbers.sort(compareNumbers);
// console.log(numbers);

function strReversal(str){
  const result = [];
  for(const st of str){
    result.unshift(st);
  }
  return result.join("");
}
function strReversalst(str){
  let result = "";
  for(const st of str){
    result = st + result;
  }
  return result;
}
function strReversalReduce(str){
  return str.split('').reduce((rev, char) =>{ 
    console.log(rev, char);
    return char + rev
  }, '');
}
// return str.split('').reduce((rev, char) => char + rev, '');
console.log(strReversalReduce("hello"));