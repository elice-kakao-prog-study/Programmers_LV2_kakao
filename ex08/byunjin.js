
// 2차원 배열 요소 개수 리턴 함수
const elementCnt = (board) => board.reduce((acc, curr) => acc + (curr.length ? curr.length : 0), 0);

// 2차원 배열 요소 중복 체크 및 필터링 함수
const boardCheckFilter = (board) => {
  const check = (str1, str2, str3, str4) => str1 && str1 === str2 && str1 === str3 && str1 === str4;
  const boardChecked = board.map(v => v.slice());

  // 중복된 요소는 # 문자열을 붙임
  for (let i = 0; i < boardChecked.length - 1; i++) {
    const row = boardChecked[i];
    const below = boardChecked[i + 1];
    for (let e = 0; e < row.length - 1; e++) {
      const origin = row[e]?.charAt(0);
      const right = row[e + 1]?.charAt(0);
      const down = below[e]?.charAt(0);
      const rightDown = below[e + 1]?.charAt(0);
      if (check(origin, right, down, rightDown)) {
        boardChecked[i][e] = `${origin}#`;
        boardChecked[i][e + 1] = `${right}#`;
        boardChecked[i + 1][e] = `${down}#`;
        boardChecked[i + 1][e + 1] = `${rightDown}#`;
      };
    };
  };
  
  // # 문자열 붙은 요소를 제거
  const boardFiltered = boardChecked.map((row) => row.filter((el) => !el.includes('#')));

  // 매개변수 배열과 필터링된 배열의 요소 개수가 같으면 더이상 필터링이 안된 것이므로 배열을 리턴하고, 다르면 재귀함수 실행
  return elementCnt(board) === elementCnt(boardFiltered) ? board : boardCheckFilter(boardFiltered);
};

function solution(m, n, board) {
  const boardTurn = Array.from(Array(n), () => new Array(m));

  // 타일 90도 돌리기
  board.reverse().forEach((el, rowIdx) => {
    const row = el.split('');
    row.forEach((letter, colIdx) => {
      boardTurn[colIdx][rowIdx] = letter;
    });
  });

  // 전체 개수에서 현재 개수를 뺀 값 =  없애진 요소 개수
  return m*n - elementCnt(boardCheckFilter(boardTurn));
}
