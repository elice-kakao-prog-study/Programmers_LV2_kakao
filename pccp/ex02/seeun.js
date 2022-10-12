function solution(ability) {
    let answer = Number.MIN_SAFE_INTEGER;
    let i = ability.length - 1;
    let j = ability[0].length;
    let board = Array.from(Array(j), () => new Array(i + 1).fill(0));
  
    for (let n = 0; n < j; n++) {
      for (let m = 0; m < i + 1; m++) {
        board[n][m] = ability[m][n];
      }
    }
    // console.log(board);
    let visited = Array.from({ length: i + 1 }, () => 0);
  
    const dfs = (L, sum) => {
      if (L === j) {
        answer = Math.max(answer, sum);
      } else {
        for (let k = 0; k <= i; k++) {
          if (!visited[k]) {
            visited[k] = 1;
            dfs(L + 1, sum + board[L][k]);
            visited[k] = 0;
          }
        }
      }
    };
    dfs(0, 0);
    // console.log(answer);
    return answer;
  }
  