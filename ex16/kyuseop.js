class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    const current = this.first;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) this.last = null;
    return current.value;
  }
}

function solution(queue1, queue2) {
  // const totalOrigin1 = queue1.reduce((pre, cur) => pre + cur);
  // const totalOrigin2 = queue2.reduce((pre, cur) => pre + cur);

  const classQueue1 = new Queue();
  const classQueue2 = new Queue();

  let totalOrigin1 = 0;
  let totalOrigin2 = 0;

  queue1.forEach(x => {
    classQueue1.enqueue(x);
    totalOrigin1 += x;
  })

  queue2.forEach(x => {
    classQueue2.enqueue(x);
    totalOrigin2 += x;
  })

  let total1 = totalOrigin1;
  let total2 = totalOrigin2;
  const sum = (total1 + total2) / 2;

  let n = 0;
  while (true) {

    if (n !== 0 && total1 !== sum && total1 === totalOrigin1 && total2 === totalOrigin2) {
      return -1;
    }
    if (total1 > total2) {
      const dequeue = classQueue1.dequeue();
      classQueue2.enqueue(dequeue);
      total1 -= dequeue;
      total2 += dequeue;
    }
    else if (total1 < total2) {
      const dequeue = classQueue2.dequeue();
      classQueue1.enqueue(dequeue);
      total2 -= dequeue;
      total1 += dequeue;
    }
    else {
      return n;
    }
    n++;
  }

}

console.log(solution([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 10 ], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))


// function solution(queue1, queue2) {
//   const totalOrigin1 = queue1.reduce((pre, cur) => pre + cur);
//   const totalOrigin2 = queue2.reduce((pre, cur) => pre + cur);
  
//   let total1 = totalOrigin1;
//   let total2 = totalOrigin2;
//   const sum = (total1 + total2) / 2;
  
//   let n = 0;
//   while(true){
      
//       if(n !== 0 && total1 !== sum && total1 === totalOrigin1 && total2 === totalOrigin2){
//           return -1;
//       }
//       if(total1 > total2){
//           const dequeue = queue1.shift();
//           queue2.push(dequeue);
//           total1 -= dequeue;
//           total2 += dequeue;
//       }
//       else if(total1 < total2){
//           const dequeue = queue2.shift();
//           queue1.push(dequeue);
//           total2 -= dequeue;
//           total1 += dequeue;
//       }
//       else{
//           return n;
//       }
//       n++;
//   }

// }