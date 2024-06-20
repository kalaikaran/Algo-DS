function arrayChunk(array, size) {
  let noOfChunks = Math.ceil(array.length/size),
    result = [], pos = 0;
  while(noOfChunks > 0) {
    result.push(array.splice(pos, size));
    noOfChunks--;
  }
  return result;
}

var ar = [1,2,3,4,5,6,7,8,9],
  pos=0,
  chunk=2;
var [a,b] = ar;
console.log(a,b);
// console.log(ar.splice(pos, chunk));
// console.log(ar.splice(pos, chunk));
// console.log(ar.splice(pos, chunk));
// pos+=chunk;
// chunk+=chunk;
// console.log(ar.slice(pos, chunk));
// pos+=chunk;
// chunk+=chunk;
// console.log(ar.slice(pos, chunk));
// console.log(arrayChunk(ar, 5));