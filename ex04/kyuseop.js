function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  const transform = n.toString(k);
  const transformArr = transform.split("0").filter(x => x !== '').map(Number);
  if (transform.length === transformArr.length && isPrime((transformArr[0]))) {
    return 1;
  }
  for (let i = 0; i < transformArr.length; i++) {
    if (isPrime(transformArr[i])) answer++;
  }

  return answer;
}


