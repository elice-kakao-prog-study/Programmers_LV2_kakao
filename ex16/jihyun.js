function solution(queue1, queue2) {
  const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

  let start = 0;
  let end = queue1.length - 1;
  let count = 0;
  const queue = [...queue1, ...queue2];
  const sumTotal = sum(queue);
  const half = sumTotal / 2;

  if (sumTotal % 2 !== 0) return -1;

  let sumQueue1 = sum(queue1);

  while (sumQueue1 !== half) {
    if (sumQueue1 < half) {
      sumQueue1 += queue[++end];
    } else {
      sumQueue1 -= queue[start++];
    }

    count++;

    if (end === queue.length - 1) return -1;
  }

  return count;
}
