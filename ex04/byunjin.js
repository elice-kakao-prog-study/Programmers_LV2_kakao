// 소수 판별 함수
const isPrime = (arg) => {
  if (arg < 2) return false;
  // Math.sqrt() 범위를 제곱근까지로 설정
  for (let i = 2; i <= Math.sqrt(arg); i++) {
    if(arg % i === 0) return false;
  }
  return true;
}

// 0을 기준으로 구분하고 소수 요소만 남기는 배열을 구하여 그 길이를 리턴
function solution(n, k) {
  return n.toString(k).split('0').map(Number).filter(el => isPrime(el)).length;
}