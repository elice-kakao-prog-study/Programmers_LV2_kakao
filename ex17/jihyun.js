function solution(s) {
  const len = s.length;
  const halfLen = Math.ceil(len / 2); // 4
  const cutLen = [];

  for (let n = 1; n <= halfLen; n++) {
    const cutStr = [];
    let totalCount = 0;
    let count = 0; // 연속되는 문자열의 개수

    // n개 단위로 자르기
    for (let i = 0; i < len; i += n) {
      const str = s.slice(i, i + n);
      cutStr.push(str);
    }

    for (let j = 0; j < cutStr.length; j++) {
      if (cutStr[j] !== cutStr[j + 1]) {
        if (cutStr[j] === cutStr[j - 1]) count++;

        if (count) totalCount += String(count).length; // 연속된 문자가 10개 이상이면 +2
        totalCount += cutStr[j].length;

        count = 0;
      } else {
        count++;
      }
    }

    cutLen.push(totalCount);
  }

  return Math.min(...cutLen);
}
