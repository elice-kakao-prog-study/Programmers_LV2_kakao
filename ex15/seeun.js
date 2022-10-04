function solution(places) {
  let answer = [];
  places = places.map((array) => array.map((v) => v.split("")));
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  //console.log(places);
  for (let board of places) {
    let arr = Array.from(Array(5), () => Array(5).fill(0));
    let flag = 0;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (board[i][j] === "P") {
          // 사람이라면 상하좌우 -1로 해준다. 주변까지 해줌.
          arr[i][j] -= 1;
          for (let k = 0; k < 4; k++) {
            let nx = i + dx[k];
            let ny = j + dy[k];
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) arr[nx][ny] -= 1;
          }
        } else if (board[i][j] === "X") arr[i][j] += 10; // 파티션이 있다면 거리두기 충족이므로 숫자 암거나 큰걸루 준다.
      }
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i][j] <= -2) flag = 1; // 만약 값이 -2 이하라면 거리두기 충족 못했으므로 플래그 값 수정
      }
    }
    if (flag === 1) answer.push(0);
    else answer.push(1);
  }
  return answer;
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
