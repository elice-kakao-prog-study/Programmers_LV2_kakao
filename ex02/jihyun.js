// solution_1) Object
function solution(s) {
  const answer = [];
  const obj = {};

  const arr = s.replace(/[{}]/g, "").split(",");
  arr.forEach((num) => (obj[num] ? obj[num]++ : (obj[num] = 1)));

  for (const num in obj) {
    answer.push([num, obj[num]]);
  }

  return answer.sort((a, b) => b[1] - a[1]).map((v) => +v[0]);
}

// solution_2) JSON.parse()
function solution(s) {
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));

  arr.sort((a, b) => a.length - b.length);
  return [...new Set(arr.flat())];
}
