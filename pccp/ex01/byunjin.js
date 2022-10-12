function solution(input_string) {
  // 들어온 문자열을 배열로. 그냥 for 돌리기 편해서
  const input = input_string.split('');

  const front = [];

  const rslt = [];

  for (let idx = 0; idx < input.length; idx++) {
    // 문자열
    const letter = input[idx];

    if (idx) {
      const isSeries = letter === input[idx - 1];
      const isAgain = front.includes(letter);
      if (!isSeries && isAgain && !rslt.includes(letter)) {
       rslt.push(letter); 
      }
    }

    front.push(letter);
  }

  return rslt.length ? rslt.sort().join('') : 'N';
}
