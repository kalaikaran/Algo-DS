function maxChar(str) {
  if(str && typeof str  !== "string") return "not proper"
  let repChar = {},
    top = str.charAt(0);
  for (let s of str){
    repChar[s] = repChar[s] + 1 || 1;
    if(repChar[top] < repChar[s]){
      top = s;
    }
  }
  return top;
}

// console.log(maxChar("11224444747881000426161312341984641"));
// console.log(maxChar("123132"));
console.log(maxChar(1213));