const isPrime = (arg) => {
  if (arg < 2) return false;
  for (let i = 2; i <= Math.sqrt(arg); i++) {
    if(arg % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  return n.toString(k).split('0').map(Number).filter(el => isPrime(el)).length;
}