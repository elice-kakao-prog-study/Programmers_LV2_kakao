/*- 시간복잡도 고려해야 하는문제 queue의 길이가 300,000개이므로, O(NlogN)안에 설계해야함.
- queue에서  30만일때 > shift 사용불가 rear front로 구현해야함 + 데이터 한번 순회하고 합의 값을 계속해서 update해주는식으로 구현
- shift바꿔서 해봤는데 > 시간초과뜸.
- 로직 : 합이 큰 큐에서 작은큐로 하나를 빼서 넣음 > 이 과정을 반복하는데, 두 큐의 합이 같아지면 종료.
- 3가지 종료조건
- 애초에 합이 홀수일때
- queue가 한쪽이 비었을때 종료(같은값을 만들수가 없다.)
- 아니면 모든 데이터를 순회했는데 target값이 나오지 않을때(전체 case 60만개임) >> 이때는 비슷한값으로 계속 왔다리 갔다리 하는 경우이므로 종료함.
*/

function Queue(arr){
    this.queue = [...arr];
    this.front = 0;
    this.rear = this.queue.length-1;
    
    this.entries = function(){
        return this.queue;
    }
    this.dequeue = function(){
        const cur = this.queue[this.front];
        this.front++;
        return cur;
    }
    this.enqueue = function(item){
        this.queue.push(item);
        this.rear++;
    }
    this.empty = function(){
       return this.front===this.rear ? true : false; 
    }
    this.sum = function(){
        return this.queue.reduce((acc,cur) => acc+=cur,0);
    }
    
}

function solution(queue1, queue2) {
    const queueA = new Queue(queue1);
    const queueB = new Queue(queue2);
    let answer = 0;
    let flag = true;
    
    let [sumA, sumB] = [queueA.sum(), queueB.sum()];
    if((sumA + sumB)%2 !==0) return -1;
    const target = (sumA + sumB)/2;
    
    while(sumA !== target && sumB !== target){
        const smallQueue = sumA < sumB ? queueA : queueB;
        const bigQueue = sumA > sumB ? queueA : queueB;
        const popped = bigQueue.dequeue();
        smallQueue.enqueue(popped);
        
        if(smallQueue === queueA){
            sumA += popped;
            sumB -= popped;
        }
        else{
            sumA -= popped;
            sumB += popped;
        }
        
        if(smallQueue.empty()){
            flag = false;
            break;
        }
        if(answer >= 600000){
            flag =false;
            break;
        }
        
        answer ++; 
    }
    
    

    return flag? answer : -1;
}