function solution(p) {
  let answer = "";
  let u = "";
  let v = "";
  // 이미 올바른 괄호 혹은 공백이면 그대로 반환
  if (isRight(p) || p.length === 0) return p;

  for (let i = 2; i <= p.length; i += 2) {
    let s = p.substr(0, i);
    console.log(s);
    if (isBalance(s)) {
      u += s;
      v += p.substr(i);
      break;
    }
  }
  console.log(u, v);
  if (isRight(u)) answer += u + solution(v);
  else {
    answer += "(" + solution(v) + ")";
    u = u.substring(1);
    u = u.slice(0, -1);
    for (let x of u) {
      if (x === "(") answer += ")";
      else answer += "(";
    }
  }
  return answer;
}

// 올바른 괄호인지
const isRight = (str) => {
  let tmp = [];
  for (let x of str) {
    if (x === "(") tmp.push("(");
    else {
      if (tmp.length > 0) tmp.pop();
    }
  }
  if (tmp.length === 0) return true;
  else return false;
};

// 균형이 맞는 괄호인지
const isBalance = (str) => {
  let cnt = 0;
  for (let x of str) {
    if (x === "(") cnt += 1;
    else cnt -= 1;
  }
  if (cnt === 0) return true;
  else return false;
};

console.log(solution("()))((()"));
