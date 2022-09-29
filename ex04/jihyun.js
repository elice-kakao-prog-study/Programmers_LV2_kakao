function solution(n, k) {
  const arr = n.toString(k).split("0");
  let sum = 0;

  const isPrime = (num) => {
    if (num === 1 || num === 0) return;

    const sqrt = Math.sqrt(num);

    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return;
    }
    return ++sum;
  };

  arr.forEach((n) => isPrime(Number(n)));

  return sum;
}
