//  function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/\W/g, '').toLowerCase()) {
//     console.log(charMap[char]);
//     charMap[char] = charMap[char] + 1 || 1;
//     console.log(charMap[char]);
//   }
//   console.log(charMap);
//   return charMap;
// }
function anagrams(stringA, stringB) {
  let justStringA = stringA.replace(/\W/g, '');
  let justStringB = stringB.replace(/\W/g, '');
  if(justStringA.length !== justStringB.length){
      return false;
  }
  for (let char of justStringA) {
    const reg = new RegExp(char, 'g');
    justStringA = justStringA.replace(reg, '');
    justStringB = justStringB.replace(reg, '');
    console.log(justStringA);
    console.log(justStringB);
    if(!(justStringA + justStringB)){
      return true
    }
  }

  if(justStringA || justStringB){
      return false
  }
  // return true;
}

console.log(anagrams("qweaaaarty","ytaaaarewq"))
// console.log("jhadsfiog7hai789i23or4b2t029rei 2oiwjrfhso9dvc0sjf d2e".replace(/[^\w]/g, ''));