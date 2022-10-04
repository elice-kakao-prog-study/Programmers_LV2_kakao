function solution(m, n, board) {

  board = board.map(row => row.split(""));

  let check = Array.from({ length: m }, () => Array(n).fill(0));
  const dx = [0, 1, 1, 0];
  const dy = [0, 0, 1, 1];

  function square(x, y, value) {
    let count = 0;
    for (let i = 1; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] === value && board[nx][ny] !== 0) {
        ++count;
      }
    }
    if (count === 3) {
      for (let i = 0; i < 4; i++) {
        check[x + dx[i]][y + dy[i]] = 1;
      }
      return true;
    }
  }

  let answer = 0;

  while (true) {
    let None = true;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== 0) {
          if (square(i, j, board[i][j])) {
            None = false;
          }
        }
      }
    }
    if (None) break;


    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (check[i][j] === 1) {
          board[i][j] = 0;
          answer++;
        }
      }
    }


    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        if (check[j][i] === 1 && check[j - 1]) {
          let n = 0;
          while (check[j - n] && check[j - n][i] === 1) {
            n++;
          }
          if (board[j - n]) {
            board[j][i] = board[j - n][i];
            board[j - n][i] = 0;
            check[j - n][i] = 1;
          }
        }
      }
    }
    check = Array.from({ length: m }, () => Array(n).fill(0));

  }

  return answer;
}




















// function solution(m, n, board) {

//   board = board.map(row => row.split(""));

//   let check = Array.from({ length: m }, () => Array(n).fill(0));
//   const dx = [0, 1, 1, 0];
//   const dy = [0, 0, 1, 1];

//   function square(x, y, value) {
//     let count = 0;
//     for (let i = 1; i < 4; i++) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];
//       if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] === value && board[nx][ny] !== 0) {
//         ++count;
//       }
//     }
//     if (count === 3) {
//       for (let i = 0; i < 4; i++) {
//         check[x + dx[i]][y + dy[i]] = 1;
//       }
//       return true;
//     }
//   }

//   let answer = 0;

//   while (true) {
//     let None = true;
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         if (board[i][j] !== 0) {
//           if (square(i, j, board[i][j])) {
//             None = false;
//           }
//         }
//       }
//     }
//     if (None) break;


//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         if (check[i][j] === 1) {
//           board[i][j] = 0;
//           answer++;
//         }
//       }
//     }

//     for (let i = m - 1; i >= 0; i--) {
//       for (let j = n - 1; j >= 0; j--) {
//         if (check[j] && check[j][i] === 1 && check[j - 1] /*&& check[j - 1][i] !== undefined*/) {
//           if (check[j - 1] && check[j - 1][i] === 1) {
//             let n = 0;
//             while (Number.isInteger(check[j - 1 - n] && check[j - 1 - n][i])) {
//               n++;
//             }
//             if (board[j - n] /*&& board[j - n][i] !== undefined*/) {
//               board[j][i] = board[j - n][i];
//               board[j - n][i] = 0;
//             }
//           } else {
//             board[j][i] = board[j - 1][i];
//             board[j - 1][i] = 0;
//           }
//         }
//       }
//     }

//     check = Array.from({ length: m }, () => Array(n).fill(0));

//   }

//   return answer;
// }



console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))