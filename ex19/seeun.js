// https://seees.tistory.com/254?category=927631 참고
// https://velog.io/@young_pallete/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%9C%EC%9C%84-%EA%B2%80%EC%83%89JavaScript
function binSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }
  return mid + 1;
}

function infoHash(arr) {
  let res = {};
  for (let x of arr) {
    const tmp = x.split(" ");
    const score = parseInt(tmp.pop());
    const key = tmp.join("");
    if (res[key]) res[key].push(score);
    else res[key] = [score];
  }
  for (const key in res) {
    res[key].sort((a, b) => a - b);
  }
  return res;
}

function resultCalc(obj, query, score) {
  const infoKey = Object.keys(obj);
  // query에 맞는 키 값 찾기
  const newKey = infoKey.filter((key) => query.every((v) => key.includes(v)));
  console.log(newKey);
  console.log(obj);
  // 키 값의 배열 전체 길이에서 이진탐색으로 찾은 배열의 인덱값를 빼서 누산해줌.
  //
  return newKey.reduce(
    (acc, key) => acc + obj[key].length - binSearch(obj[key], score),
    0
  );
}

function solution(info, query) {
  let answer = [];
  // 키값과 점수 분리
  let obj = infoHash(info);
  query = query.map((q) => q.split(/ and | |-/i).filter((v) => v !== ""));
  //console.log(query);
  query.forEach((q) => {
    const score = q.pop();
    const result = resultCalc(obj, q, score);
    answer.push(result);
  });
  return answer;
}
