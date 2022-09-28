// 문제 번호 헷갈림...
function solution(n, k) {
  let answer = 0;
  let arr = [];
  while (n) {
    arr.push(String(n % k));
    n = parseInt(n / k);
  }
  arr = arr.reverse().join("").split("0");
  console.log(arr);

  const isPrime = (n) => {
    if (n === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let k of arr) {
    if (k !== "" && isPrime(Number(k))) answer++;
  }
  return answer;
}
