function solution(s) {
  // 문자열 길이가 1일때 1 리턴.
  if (s.length === 1) {
    return 1;
  }
  
  // 경우의 수 별로 나오는 문자열 길이 결과 값 모으는 배열
  const answerArr = [];

  // 자르는 단위 경우의 수 범위: 1부터 절반까지
  for (let long = 1; long <= Math.floor(s.length/2); long++) {
    const splitArr = [];
    let idx = 0;

    // 경우의 수 별로 문자열 자르기
    while (splitArr.join('') !== s) {
      splitArr.push(s.substr(idx, long));
      idx += long;
    }
    
    // 압축하는 문자열
    const press = [];
    
    // 겹치는 개수
    const overlap = [];
    
    // 연속으로 겹치는 중인지 확인
    let isContinue = false;
    
    // 잘린 문자열을 돌아가면서 press에 넣고 마지막 요소가 같으면 겹치는 숫자 배열을 업데이트
    for (let i = 0; i < splitArr.length; i++) {
      const letter = splitArr[i];
      if (press[press.length - 1] === letter) {
        // 연속되는 경우 마지막 숫자를 업데이트하고 아닌 경우 다음 인덱스로 넘아가게끔
        if (isContinue) {
          overlap[overlap.length - 1] = overlap[overlap.length - 1] + 1;
        } else {
          // 왜냐하면 겹친다는것은 최소 2번 반복이라는 뜻이기 때문에 2를 넣어줍니다
          // 이게 중요한 이유는 10, 100 이런식으로 숫자자체의 자릿수가 늘어나는 시점 때문입니다.
          // abcabc = 2abc -> 4
          // abcabc...abc = 10abc -> 5
          overlap.push(2);
      		isContinue = true;
        }
      } else {
        isContinue = false;
        press.push(letter);
      }
    }
    
    // 겹치는 숫자를 문자로 바꾸어 길이 산출
    // 압축된 문자열 길이 산출
    const num = overlap.length ? overlap.join('').length : 0;
    answerArr.push(press.join('').length + num);
  }

  // 결과값중 최소 값 리턴
  return Math.min.apply(null, answerArr);
}