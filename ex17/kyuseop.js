function solution(s) {


  let initial = Number.MAX_SAFE_INTEGER;
  const length = s.length;
  let n = 1;
  let start = "";

  while (n <= Math.ceil(length)) {
    let arr;
    if (n === 1) {
      arr = s.split("");
    } else {
      const regex = new RegExp(`[a-z]{${n}}|[a-z]{1,${n - 1}}`, 'g')
      // const regex = /[a-z]{n}|[a-z]{1,n-1}/g랑 동일하나, 일반적으로 이렇게는 변수를 넣을 수 없다. 
      // n이라는 문자로 처리함.. 동적으로 하려면 위처럼 new 연산자와 RegExp 생성자 함수를 사용해야 함.
      arr = s.match(regex)
    }
    while (arr.length) {
      const first = arr[0];
      let idx = 1;
      while (first === arr[idx]) {
        idx++;
      }
      start += (idx === 1 ? "" : idx) + first;

      arr = arr.slice(idx)
    }
    initial = Math.min(initial, start.length)
    start = "";
    n++;
  }

  return initial;
}

console.log(solution("ababcdcdababcdcd"))

// const message = "ababcdcdababcdcd";
// const reg = /[a-z]{3}|[a-z]{0,2}$/g;

// console.log(message.match(reg))


// function solution(s) {
//   const strStack = s.split("");
//   let answer = Number.MAX_SAFE_INTEGER;
//   for(let i = 1; i <= strStack.length + 1; i++){
//       let len = '';
//       let repeat = 1;
//       const copy = strStack.slice();
//       while(copy.length){
//           if(copy.slice(0, i).join("") === copy.slice(i, i * 2).join("")){
//               repeat++;
//           }else{
//               len += (repeat === 1 ? '' : repeat) + copy.slice(0, i).join("");
//               repeat = 1;
//           }
//           copy.splice(0, i);
//       }
//       answer = Math.min(answer, len.length)
//   }
//   return answer;
// }