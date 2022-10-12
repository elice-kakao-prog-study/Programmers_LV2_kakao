// 문제를 못풀겠어서 다른 사람 풀이를 봤습니다
function solution(queue1, queue2) {
    // 원소의 전체 합을 구하는 함수
    const getSum = arr => arr.reduce((a, c) => a + c, 0);
  
    // 원소의 전체 합이 홀수라면 -1
    if (getSum([...queue1, ...queue2]) % 2 !== 0) return -1;
  
    // 주어진 원소를 하나의 배열에 나열하여 복사한다
    // 큐 데이터 처리 과정에서의 모든 경우의 수를 확인하기 위해 앞선 큐1을 한번더 반복하여 복사한다
    const queue = [...queue1, ...queue2, ...queue1];

    // 주어진 두개의 큐에서 확인되어야 하는 값을 구한다
    const average = getSum([...queue1, ...queue2]) / 2;

    // 둘 중의 하나의 큐만 기준으로 작업하여도 최소한의 횟수를 구할 수 있으니 queue1 을 기준으로
    // 현재 원소의 합, 작업 횟수, 시작idx, 끝idx : 변수를 선언.
    let [currentSum, count, start, end] = [getSum(queue1), 0, 0, queue1.length];
  
    // 현재 원소의 합이 구해야하는 값보다 클때 하는 pop 작업
    const pop = () => {
      currentSum -= queue[start];
      start += 1;
      count += 1;
    };

    // 현재 원소의 합이 구해야하는 값보다 작을때 하는 insert 작업
    const insert = () => {
      currentSum += queue[end];
      end += 1;
      count += 1;
    };

    // 미리 복사해둔 큐 경우의 수를 모두 살피며 원소의 합이 구해야 하는 값과 일치할때 작업 횟수를 리턴 한다
    const maxCount = queue.length;

    while (count <= maxCount) {
      if (currentSum < average) insert();
      if (currentSum > average) pop();
      if (currentSum === average) return count;
    }
    return -1;
  }
  