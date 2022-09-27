function solution(msg) {
  let alpha = [
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let res = [];
  let n = msg.length;
  for (let i = 0, j; i < n; i = j) {
    let w = msg[i]; // 시작
    for (j = i + 1; j < n; j++) {
      let c = msg[j];
      if (!alpha.includes(w + c)) {
        alpha.push(w + c);
        break;
      }
      w += msg[j];
    }
    res.push(alpha.indexOf(w));
  }
  return res;
}
