const getNumber = (str) => {
  let rslt = [];
  let isFirst = true;
  for (let i = 0; i < str.length; i++) {
      if (!isNaN(Number(str.charAt(i))) && isFirst) {
          rslt.push(str.charAt(i));
      } else if (rslt.length > 0) {
          isFirst = false;
      }
  }

  return rslt.join('');
}

function solution(files) {
  const numArr = files.map((el) => getNumber(el));
  const filesParsed = files.map((el, idx) => {
      const newEl = el.split(numArr[idx]);
      newEl.splice(1, 0 ,numArr[idx]);
      return newEl;
  })

  filesParsed.sort((front, back) => {
      const [headF, numF, tailF] = front.map((el) => el.toLowerCase());
      const [headB, numB, tailB] = back.map((el) => el.toLowerCase());
      if(headF < headB) return -1;
      if(headF > headB) return 1;
      if(headF === headB) {
          return Number(numF) - Number(numB)
      };
  })

  return filesParsed.map((el) => el.join(''));

}