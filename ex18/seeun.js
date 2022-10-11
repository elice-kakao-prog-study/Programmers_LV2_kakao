function solution(relation) {
  let len = relation[0].length; // 컬럼수
  let maxN = 1 << len; // 컬럼수 만큼 나오는 경우의수
  let answer = new Set();

  for (let i = 1; i < maxN; i++) {
    let temp = relation.map((cur) =>
      cur.filter((_, idx) => i & (1 << idx)).join("")
    );

    const arr = new Set(temp);
    // 유일성
    if (temp.length === arr.size) answer.add(i);
    //console.log(temp,arr);
  }
  //console.log('answer: ',answer);
  // 최소성
  // 유일성이 검증된 애가 다른 애를 부분 집합으로 갖고 있다면 최소성 불합
  for (let x of answer) {
    for (let y of answer) {
      if (x >= y) continue;
      if ((x & y) === x) answer.delete(y);
      console.log(answer);
    }
  }
  //console.log(answer);
  return [...answer].length;
}
