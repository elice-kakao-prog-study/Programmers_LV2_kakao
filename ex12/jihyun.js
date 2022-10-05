function solution(p) {
  let answer = "";
  let left = 0;
  let right = 0;

  // 올바른 괄호인지 확인
  const isRight = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        stack.push("(");
      } else {
        if (stack.length) stack.pop();
        else {
          return false;
        }
      }
    }

    return true;
  };

  // 1. 입력이 빈 문자열 || 올바른 괄호 문자열 -> 입력 값 반환
  if (!p || isRight(p)) return p;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") left++;
    else right++;

    // 2. u -> 균형잡힌 문자열로 분리
    if (left === right) {
      let u = p.slice(0, i + 1);
      let v = p.slice(i + 1);
      // 3. u -> 올바른 괄호 문자열
      if (isRight(u)) {
        answer = u + solution(v);
        return answer;
      }
      // 4. u -> 올바른 괄호 문자열 X
      else {
        answer = "(" + solution(v) + ")";
        for (let j = 1; j < i; j++) {
          if (p[j] === "(") {
            answer += ")";
          } else {
            answer += "(";
          }
        }

        return answer;
      }
    }
  }
}
