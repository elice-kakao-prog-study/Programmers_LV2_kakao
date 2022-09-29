function solution(n, t, m, p) {
  let answer = "";
  let num = "";

  // n진수 문자열
  for (let i = 0; num.length < t * m; i++) {
    num += i.toString(n).toUpperCase();
  }

  // result 구하기
  for (let i = p; answer.length < t; i += m) {
    answer += num[i - 1];
  }

  return answer;
}
