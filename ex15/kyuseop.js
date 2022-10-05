function solution(places) {


  places = places.map(x => x.map(y => y.split("")))

  const dx = [0, -1, -1, -1, 0, 1, 1, 1];
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  function search(x, y, place) {
    let isOkay = true;
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        if (
          (i === 0 || i === 2 || i === 4 || i === 6)
          && place[nx][ny] === 'P'
        ) {
          isOkay = false;
          break;
        }
        else if (place[nx][ny] === 'O') {
          if (
            (i === 0 && place[nx][ny - 1] === 'P') ||
            (i === 2 && place[nx - 1] && place[nx - 1][ny] === 'P') ||
            (i === 4 && place[nx][ny + 1] === 'P') ||
            (i === 6 && place[nx + 1] && place[nx + 1][ny] === 'P')
          ) {
            isOkay = false;
            break;
          }
        }
        else if (place[nx][ny] === 'P') {
          if (
            (i === 1 && (place[nx + 1][ny] !== 'X' || place[nx][ny + 1] !== 'X')) ||
            (i === 3 && (place[nx][ny - 1] !== 'X' || place[nx + 1][ny] !== 'X')) ||
            (i === 5 && (place[nx - 1][ny] !== 'X' || place[nx][ny - 1] !== 'X')) ||
            (i === 7 && (place[nx][ny + 1] !== 'X' || place[nx - 1][ny] !== 'X'))
          ) {
            isOkay = false;
            break;
          }
        }
      }
    }
    return isOkay;
  }

  const answer = [];

  places.forEach(place => {
    let none = true;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') {
          if (!search(i, j, place)) {
            none = false;
            break;
          }
        }
      }
    }
    answer.push(none ? 1 : 0);
  })



  return answer;
}




console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))