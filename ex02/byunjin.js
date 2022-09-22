function solution(arg) {
  const result = [];

  const input = arg.slice(1, arg.length - 1).split('},{');
  input[0] = input[0].slice(1);
  input[input.length - 1] = input[input.length - 1].slice(0, input[input.length - 1].length - 1);
  input.sort((a, b) => a.length - b.length);

  for (let e = 0; e < input.length; e++) {
    const elArr = input[e].split(',');
    for (let i = 0; i < elArr.length; i++) {
      const el = elArr[i];
      if(result.includes(el)) {
        continue;
      } else {
        result.push(el);
        break;
      }
    }
  }
  return result.map(Number);
}