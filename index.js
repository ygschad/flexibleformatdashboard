function isValidSudoku(board) {
  const rows = new Array(9).fill().map(() => new Array(9).fill(0));
  const cols = new Array(9).fill().map(() => new Array(9).fill(0));
  const boxes = new Array(9).fill().map(() => new Array(9).fill(0));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const num = Number(board[i][j]) - 1;
        const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rows[i][num] || cols[j][num] || boxes[k][num]) return false;
        rows[i][num] = 1;
        cols[j][num] = 1;
        boxes[k][num] = 1;
      }
    }
  }
  return true;
}
