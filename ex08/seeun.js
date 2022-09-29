function solution(m, n, board) {
  let answer = 0;
  board = board.map((v) => v.split(""));

  while (true) {
    // 부술 블럭의 인덱스를 구해준다.
    let block_idx = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          block_idx.push([i, j]);
        }
      }
    }

    // 부셔질 블럭의 값들을 0으로 바꿔준다.
    for (let i = 0; i < arr.length; i++) {
      const col = arr[i][0];
      const row = arr[i][1];
      board[col][row] = 0;
      board[col + 1][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row + 1] = 0;
    }

    // 부셔지고 남은 블럭들의 인덱스들을 옮겨준다.
    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((v) => !v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
    if (!arr.length) return [].concat(...board).filter((v) => !v).length;
  }
}
