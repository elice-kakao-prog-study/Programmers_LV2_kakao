function transform(k, num) {
  return num.toString(k);
}


function solution(n, t, m, p) {

  const limit = t * m - 1;
  let cursor = 0;
  let transformedData = "";

  while (true) {

    if (transformedData.length > limit) break;
    transformedData += transform(n, cursor)
    ++cursor;

  }

  let answer = '';
  let start = p - 1;

  while (true) {

    if (start > limit) break;
    answer += transformedData[start].toUpperCase()
    start += m;

  }

  return answer;
}


// console.log(solution(16, 16, 2, 1))



































// function solution() {
//   var answer = '';
//   const startIdx = p - 1;
//   const interval = m;
//   const count = t - 1;
//   const lastIdx = startIdx + count * interval;
//   let numArr = [];
//   let counter = 0;
//   while (true) {
//     if (numArr.length - 1 >= lastIdx) break;
//     const num = counter.toString(n).toUpperCase().split("");
//     numArr = numArr.concat(num);
//     counter++;
//   }
//   for (let i = 0; i <= count; i++) {
//     answer += numArr[startIdx + interval * i]
//   }
//   return answer;
// }