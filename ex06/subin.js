function solution(msg) {
    const map = new Map();
    let mapIdx = 26;
    initMap(map);
    const answer = [];
    const stack = [];
    let loopIdx = 0; // 바깥쪽 루프인덱스
    while(loopIdx <msg.length){
        let curIdx = loopIdx; // 안쪽루프인덱스
        stack.push(msg[curIdx]); //일단 스택에 하나 넣음
        
        while(map.has(stack.join(''))){
              curIdx++;
              if(curIdx >= msg.length) break; // 마지막 도달했을때 예외처리
              stack.push(msg[curIdx]);
        } // map이 문자열을 key로 갖지 않을때까지 반복함.
        const str = stack.join('');
        if(map.has(str)){
            answer.push(map.get(str));
            break;
        } // 예외처리 마지막 idx에서 스택에 남아있을때
        else{
            map.set(str,++mapIdx);
            stack.pop();
            answer.push(map.get(stack.join('')));
            loopIdx += stack.length;
            stack.length=0;
        } // map에 문자열을 set, 하나를 제거하고 answer에 value값을 push.
    }
      
    
    return answer;
}


function initMap(map){
    const alpha = new Array(26).fill().map((_, i) => String.fromCharCode(i + 65));
    let idx= 1;
    alpha.forEach(val =>{
        map.set(val,idx++);
    })
} //사전 초기화하는 함수