// 올바른 괄호쌍인지 확인
const isRight = (argArr) => {
    const left = argArr.slice();
    const right = [];
    while (left.length > 0) {
      right.push(left.pop());
        let checkStr = `${left[left.length-1]}${right[right.length-1]}`;
      while (checkStr === '()') {
        left.pop();
        right.pop();
        checkStr = `${left[left.length-1]}${right[right.length-1]}`;
      }
    }
    
    return right.length === 0;
  }
  
  // 괄호쌍 뒤집기
  const reveseStr = (argArr) => {
    if (argArr.length < 2) return [];
    const input = argArr.slice(1, argArr.length - 1);
    const rslt = [];
    input.forEach((el) => {
      rslt.push(el === ')'?'(':')');
    });
    return rslt;
  }
  
  // 균형잡힌 괄호 묶음으로 나누기
  const filter = (argArr) => {
    if (!argArr.length) return '';
    let cnt = 0;
    let u = [];
    let v = [];
    for (let i = 0; i < argArr.length; i++) {
      const letter = argArr[i];
      if (letter === '(') cnt++;
      if (letter === ')') cnt--;
      u.push(letter);
      if (i && !cnt) {
        v = argArr.slice(u.length);
        break
      };
    }
    
    if (isRight(u)) {
      return u.join('') + filter(v);
    } else {
      return '(' + filter(v) + ')' + reveseStr(u).join('')
    }
  }
  
  function solution (arg) {
    const inputArr = arg.split('');
    return filter(inputArr);
  }
  