function solution(input_string) {
  const set = new Set(input_string);
    
  if ([...set].length === input_string.length) return 'N';  

  for (let i of set) {
    const regex = new RegExp(`[${i}]{2,}`, "g");
    input_string = input_string.replace(regex, `${i}`);
  }

  const result = input_string
    .split("")
    .filter((v, i) => input_string.indexOf(v) !== i);

  return result.length ? [...new Set(result)].sort().join("") : 'N';
}
