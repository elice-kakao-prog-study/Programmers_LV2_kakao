function solution(n, t, m, p) {
  let result = [];
  let str = "";
  let num = 0;
  while (str.length < t * m) {
    str += num.toString(n);
    num++;
  }
  for (let i = 0; i < t; i++) {
    result.push(str[p - 1 + m * i]);
  }
  return result.join("").toUpperCase();
}
