/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = null; //fixme

  // SETUP BOARD ~~ is there really no helper that does this for us?
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  const boardObj = new Board(matrix);
  const board = boardObj.attributes;
  // console.log(board); // WHY DOES THIS ALWAYS...
  // board[0][3] = 1;
  // board[2][1] = 1;
  // console.log(board); // ...LOG THE SAME AS THIS ?


  // create var to store number of rooks placed
  numRooksPlaced = 0;
  // place a rook at 0,0
  board[0][0] = 1;
  // iterate over rows

  // iterate over rows
  for (let rowIdx = 0; rowIdx < n; rowIdx++) {
    // if no row conflict
    if (!boardObj.hasRowConflictAt(rowIdx)) {
      // iterate over columns
      for (let colIdx = 0; colIdx < n; colIdx++) {
        // if not col conflicts
        if (!boardObj.hasColConflictAt(colIdx)) {
          // place the rook
          board[rowIdx][colIdx] = 1;
          // increment number of rooks placed
          numRooksPlaced++;
          // if number of rooks placed = n
          if (numRooksPlaced === n) {
            // return current matrix
            solution = board;
            return solution;
          }
        }
      }
    }
  }

  // FUNCTIONAL SOLUTION BELOW DOESN'T WORK AT ALL
  // BOARD IS NOT AN ARRAY SO FOREACH DOESNT WORK FML
  // board.forEach(function(row, rowIdx) {
  //   // if no row conflict
  //   if (!boardObj.hasRowConflictAt(i)) {
  //     // iterate over columns
  //     row.forEach(function(col, colIdx) {
  //       // if no col conflict
  //       if (!boardObj.hasColConflictAt(colIdx)) {
  //         // place the rook
  //         board[rowIdx][colIdx] = 1;
  //         // increment number of rooks placed
  //         numRooksPlaced++;
  //         // if number of rooks placed = n
  //         if (numRooksPlaced === n) {
  //           // return current matrix
  //           solution = board;
  //           return solution;
  //         }

  //       }
  //     });
  //   }

  // });




  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
