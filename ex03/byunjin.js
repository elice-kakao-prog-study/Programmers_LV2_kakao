function solution(str1, str2) {
  const eng =  /^[a-z]*$/;
  const [input1, input2] = [str1, str2].map((str) => {
    return str.split('').map((el, idx) => {
      return `${el.toLowerCase()}${str.charAt(idx + 1).toLowerCase()}`
    }).filter((fair) => {
      return !!fair && fair.length === 2 && eng.test(fair);
    })
  })
  
  const intersection = [];
  for (let i = 0; i < input1.length; i++) {
    const elIdx = input2.indexOf(input1[i]);
    if (elIdx >= 0) {
      intersection.push(input1[i]);
      input2[elIdx] = null;
    }
  }
  const union = input1.concat(input2).filter((el) => !!el);

  const jakad = intersection.length === union.length ? 1 : (intersection.length / union.length);
  return Math.floor(jakad * 65536);
}