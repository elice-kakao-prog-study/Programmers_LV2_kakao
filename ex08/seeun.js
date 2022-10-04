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
    console.log(block_idx);

    // 부셔질 블럭의 값들을 0으로 바꿔준다.

    for (let i = 0; i < block_idx.length; i++) {
      const col = block_idx[i][0];
      const row = block_idx[i][1];
      board[col][row] = 0;
      board[col + 1][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row + 1] = 0;
    }

    console.log(board);
    // 0들을 없애고 블록들을 아래로 내려야한다... 즉 0인거랑 아닌거랑 바꿔준다..
    for (let i = m - 1; i >= 0; i--) {
      // 밑에서 위로 올라가면서
      for (let j = 0; j < n; j++) {
        // 0을 찾으면 해당 열에서 찾는다.
        for (let k = i - 1; k >= 0; k--) {
          if (!board[i][j]) {
            if (board[k][j]) {
              board[i][j] = board[k][j]; // 교환 해줌
              board[k][j] = 0;
              break;
            }
          }
        }
      }
    }

    // 없애야할 블록이 있으면 보드안에 있는 0들을 세주면 된다.
    if (!block_idx.length) return board.flat().filter((v) => !v).length;
  }
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
