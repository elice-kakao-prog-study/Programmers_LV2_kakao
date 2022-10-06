function solution(p) {
  if (p.length === 0) return "";
  const idx = isBalance(p);
  let u = p.slice(0, idx + 1);
  let v = p.slice(idx + 1) === undefined ? "" : p.slice(idx + 1);
  if (isRight(u)) return u + solution(v)
  else return '(' + solution(v) + ')' + u.slice(1, -1).split("").map(reverse).join("")


}

function reverse(x) {
  if (x === '(') return ')';
  else return '('
}


function isBalance(str) {
  const stack = [];
  let first = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === first) {
      stack.push(str[i])
    } else {
      stack.pop();
    }
    if (stack.length === 0) return i;
  }
}


function isRight(str) {
  const stack = [];
  if (str[0] !== "(") return false;
  else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') stack.push(str[i])
      else if (stack.pop() === undefined) return false;
    }
  }
  if (stack.length) return false;
  return true;
}

console.log(solution("()))((()"))