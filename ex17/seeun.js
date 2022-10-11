function solution(s) {
  let answer = 1001;
  let len = s.length;

  if (len === 1) answer = 1;
  // 반으로 나누나 그냥 하나 답은 맞는데 시간이 오래걸림
  for (let i = 1; i <= parseInt(len / 2); i++) {
    let str = "";
    let tmpstr = s.substr(0, i);
    let cnt = 1;

    for (let idx = i; idx <= len; idx += i) {
      let tmp = s.substr(idx, i); // 현재 인덱스부터 반복 구간까지
      if (tmp === tmpstr) {
        cnt += 1;
      } else {
        if (cnt === 1) str = str + tmpstr; // 반복없이 하나라면
        else str = str + cnt + tmpstr;
        cnt = 1;
        tmpstr = tmp;
      }
    }
    //console.log(str,cnt);
    if (cnt === 1) str = str + tmpstr;
    else str = str + cnt + tmpstr;
    answer = Math.min(answer, str.length);
  }

  return answer;
}
