function solution(info, query) {
  const infoList = {};
  const infoDict = {
    cpp: "c",
    java: "j",
    python: "p",
    backend: "b",
    frontend: "f",
    junior: "j",
    senior: "s",
    chicken: "c",
    pizza: "p",
    "-": "-",
  };

  info.forEach((v) => {
    const arr = v.split(" "); // ['java', 'backend', 'junior', 'pizza' ]
    const score = +arr.pop(); // 150
    const word = arr.map((v) => infoDict[v]).join(""); // jbjp

    infoList[word] ? infoList[word].push(score) : (infoList[word] = [score]);
  });

  // infoList = {
  //   'jbjp': [150]
  //   'pfsc': [210, 150]
  //   'cbsp': [260]
  //   'jbjc': [80]
  //   'pbsc': [50]
  // }

  const infoArray = Object.entries(infoList).map((v) => [
    v[0],
    v[1].sort((a, b) => a - b),
  ]); // score 오름차순 정렬

  // infoArray = [
  //   [ 'jbjp', [ 150 ] ],
  //   [ 'pfsc', [ 150, 210 ] ],
  //   [ 'cbsp', [ 260 ] ],
  //   [ 'jbjc', [ 80 ] ],
  //   [ 'pbsc', [ 50 ] ]
  // ]

  return query.map((v) => {
    const arr = v.replace(/and /g, "").split(" ");
    const qScore = +arr.pop(); // 100
    const qWord = arr.map((v) => infoDict[v]).join(""); // jbjp ... ----

    return infoArray.reduce((acc, cur) => {
      const iWord = cur[0]; // jbjp
      const iScore = cur[1]; // [150]

      // 1. 일치하는 사람 없는 경우
      // 1-1. 제일 높은 점수가 기준 점수 낮은 경우
      if (iScore[iScore.length - 1] < qScore) return acc;

      // 1-2. 일치하는 항목 없는 경우
      for (let i = 0; i < qWord.length; i++) {
        if (qWord.charAt(i) !== iWord.charAt(i) && qWord.charAt(i) !== "-") {
          return acc;
        }
      }

      // 2. 일치하는 사람 있는 경우 -> 이분 탐색
      // query의 점수 이상의 점수 중 가장 작은 점수의 index 찾기
      let start = 0;
      let end = iScore.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (iScore[mid] >= qScore) {
          end = mid;
        } else {
          start = mid + 1;
        }
      }

      return acc + (iScore.length - start);
    }, 0);
  });
}
