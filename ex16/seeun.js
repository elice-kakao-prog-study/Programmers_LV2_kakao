function solution(queue1, queue2) {
  let answer = 0;
  let flag = 0;
  const total_len = queue1.length + queue2.length;
  const arr = [...queue1, ...queue2];
  const sum = arr.reduce((a, b) => a + b);
  const half = sum / 2;
  // 예외
  if (sum % 2 === 1) return -1;

  let start = 0;
  let end = queue1.length;
  let tmp = queue1.reduce((a, b) => a + b);

  // 투포인터
  while (start >= 0 && end < total_len && start < end) {
    if (half > tmp) {
      tmp += arr[end];
      end++;
      answer++;
    } else if (half < tmp) {
      tmp -= arr[start];
      start++;
      answer++;
    } else {
      flag = 1;
      break;
    }
  }

  answer = flag === 1 ? answer : -1;
  return answer;
}
