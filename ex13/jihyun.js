function solution(expression) {
  const answer = [];
  const operator = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];

  // "100-200*300-500+20" -> [100, '-', 200, '*', 300, '-', 500, '+', 20]
  const arr = [];
  let num = "";

  for (let i = 0; i < expression.length; i++) {
    const value = Number(expression[i]);

    if (isNaN(value)) {
      arr.push(Number(num));
      arr.push(expression[i]);
      num = "";
    } else {
      num += expression[i];
    }
  }
  arr.push(Number(num));

  // 연산한 값 반환하는 함수
  const calc = (a, b, operator) => {
    if (operator === "*") return a * b;
    else if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
  };

  operator.forEach((v) => {
    let temp = [...arr];
    let stack = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] === v[i]) {
          stack.push(calc(stack.pop(), temp[++j], v[i]));
        } else {
          stack.push(temp[j]);
        }
      }

      temp = [...stack];
      stack = [];
    }

    answer.push(Math.abs(temp[0]));
  });

  return Math.max(...answer);
}
