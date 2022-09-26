function solution(str1, str2) {
  let answer = 0;
  let s1 = [];
  let s2 = [];
  const reg = /[^a-zA-Z]+/;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) s1.push(str1.substr(i, 2));
  for (let j = 0; j < str2.length; j++) s2.push(str2.substr(j, 2));

  s1.pop();
  s2.pop();

  s1 = s1.filter((e) => !reg.test(e));
  s2 = s2.filter((e) => !reg.test(e));

  console.log(s1, s2);
  const union = new Set([...s1], [...s2]);
  let u_len = 0;
  let i_len = 0;
  for (let x of union) {
    const i1 = s1.filter((e) => e === x).length;
    const i2 = s2.filter((e) => e === x).length;
    i_len += Math.min(i1, i2);
  }
  u_len = s1.length + s2.length - i_len;

  console.log(i_len, u_len);

  if (i_len === 0 && u_len === 0) return 1 * 65536;
  answer = Math.floor((i_len / u_len) * 65536);
  return answer;
}
