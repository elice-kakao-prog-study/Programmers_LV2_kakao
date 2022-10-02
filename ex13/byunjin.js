// 주어진 연산기호 및 계산 함수 선언
const CALCTYPE = ['+', '-', '*'];
const calculator = (num1, num2, str) => {
  const check = CALCTYPE.indexOf(str);
  if (check === 0) return num1 + num2;
  if (check === 1) return num1 - num2;
  if (check === 2) return num1 * num2;
}

// 필터링된 숫자 및 연산기호 배열 리턴 함수
const clacsFilterFunc = (nums, calcs, calcArg) => {
  let numsFiltered = [];
  let calcsFiltered = [];

  for (let calcIdx = 0; calcIdx < calcs.length; calcIdx++) {
    const calc = calcs[calcIdx];

    // 첫번째 숫자 원소만 미리 필터링 배열에 넣는다.
    !calcIdx && numsFiltered.push(nums[calcIdx]);
    if (calc === calcArg) {
      // 주어진 연산기호와 같을 경우, 이전 회귀에서 넣었던 숫자 필터링 배열의 마지막 요소를 계산된 요소로 수정한다.
  		const num1 = numsFiltered[numsFiltered.length - 1];
      const num2 = nums[calcIdx + 1];
      numsFiltered[numsFiltered.length - 1] = calculator(num1, num2, calcArg);
    } else {
      // 주어진 연산기호와 다를 경우, 숫자 및 연산기호 배열의 모두 요소를 추가한다.
      numsFiltered.push(nums[calcIdx + 1]);
      calcsFiltered.push(calc);
    }
  }
  return {numsFiltered, calcsFiltered};
}

function solution(expression) {
  const input = expression.split('')
  let nums = [];
  const calcs = [];
  let numsIdx = 0;

  // 숫자와 연산기호를 각각의 배열로 나누는 작업
  input.forEach((el) => {
    if(CALCTYPE.includes(el)) {
      calcs.push(el);
      numsIdx += 1;
    } else {
      nums[numsIdx] = nums[numsIdx] ? nums[numsIdx] + el : el;
    }
  });
  nums = nums.map(Number);
  
  let rsltArr = [];
  // 경우의 수는 6가지만 나온다
  const caseArr = [ '*+-', '*-+', '+*-', '+-*', '-*+', '-+*' ];
  
  caseArr.forEach((el) => {
    const caseSplit = el.split('');
    let filterdRslt = {
      numsFiltered: nums,
      calcsFiltered: calcs,
    };
    // 각 경우의 수 마다 3번씩 필터링 함수를 실행하여 결과값 배열에 넣어준다
    for (let e = 0; e <= 2; e++) {
      filterdRslt = clacsFilterFunc(filterdRslt.numsFiltered, filterdRslt.calcsFiltered, caseSplit[e]);
    }
    rsltArr.push(filterdRslt.numsFiltered[0]);
  });


  // 결과 배열의 절대값 중에서 가장 큰 숫자를 리턴한다
  rsltArr = rsltArr.map((el) => el ? Math.abs(el) : 0);
  return Math.max.apply(null, rsltArr);
}
