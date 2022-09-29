function solution(n, t, m, p) {
  let num = 1;
  let str = '0';
  while (str.length < t*m) {
    str = str + num.toString(n);
    num++;
  }

  let rslt = [];
  for (let idx = p - 1; rslt.length < t; idx = idx + m) {
    rslt.push(str.charAt(idx).toUpperCase());
  }
  
  return rslt.join('');
}