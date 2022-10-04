function solution(expression) {
  // 각각의 우선순위가 담긴 배열
  const pri = [
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];
  let res = []; // 결과값
  // pri를 이중으로 돈다
  for (let pri1 of pri) {
    // 표현식을 구분한다.
    let arr = expression.split(/(\D)/);
    //console.log(arr);
    for (let oper of pri1) {
      while (arr.includes(oper)) {
        let idx = arr.indexOf(oper); // 연산자
        arr.splice(idx - 1, 3, eval(arr.slice(idx - 1, idx + 2).join(""))); // eval() 연산한 값으로 바꿔줌
      }
      //console.log(arr);
    }
    res.push(Math.abs(arr[0]));
  }
  return Math.max(...res);
}

console.log(solution("100-200*300-500+20"));
