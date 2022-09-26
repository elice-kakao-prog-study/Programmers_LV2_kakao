function solution(s) {
  let answer = [];
  let arr = [];
  s = s.slice(2, -2).split("},{");
  for (let x of s) {
    arr.push(x.split(",").map((i) => parseInt(i)));
  }
  arr = arr.sort((a, b) => a.length - b.length);
  arr.forEach((x) => {
    x.forEach((n) => {
      if (!answer.includes(n)) answer.push(n);
    });
  });
  return answer;
}
