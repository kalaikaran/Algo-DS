function numIslands(grid){
  if(!grid || grid.length === 0){
    return null;
  }
  let noOfIlands = 0;
  const row = grid.length;
  const column = grid[0].length;

  function dsf(grid, i, j){
    if(i<0 || j< 0 || i>=row || j>=column || grid[i][j] === "0") return
    grid[i][j] = "0";

    dsf(grid, i+1, j);
    dsf(grid, i-1, j);
    dsf(grid, i, j+1);
    dsf(grid, i, j-1);
  }

  for (let i=0; i<row; i++){
    for (let j=0; j<column; j++) {
      if(grid[i][j] === "1"){
        noOfIlands++;
        dsf(grid, i, j);
      }
    }
  }

  return noOfIlands;
}

// Example usage
const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];
console.log(numIslands(grid1)); // Output: 1

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];
console.log(numIslands(grid2)); // Output: 3