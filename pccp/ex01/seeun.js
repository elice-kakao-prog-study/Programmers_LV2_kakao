function solution(input_string) {
  let answer = "";
  let alpha = {};
  let idx = {};
  for (let x of input_string) {
    if (!alpha[x]) alpha[x] = 1;
    else alpha[x]++;
  }
  // console.log(alpha);
  for (const [key, value] of Object.entries(alpha)) {
    if (alpha[key] > 1) {
      for (let i = 0; i < input_string.length; i++) {
        if (input_string[i] === key) {
          if (!idx[key]) idx[key] = [i];
          else idx[key].push(i);
        }
      }
    }
  }
  console.log(idx);
  if (Object.keys(idx).length === 0) return "N";
  for (const [key, value] of Object.entries(idx)) {
    for (let i = 0; i < idx[key].length - 1; i++) {
      //console.log(idx[key][i+1],idx[key][i]);
      if (idx[key][i + 1] - idx[key][i] > 1) {
        answer += key;
      }
    }
  }
  if (answer === "") return "N";
  answer = answer
    .split("")
    .filter((v, i) => answer.indexOf(v) === i)
    .sort()
    .join("");

  return answer;
}
