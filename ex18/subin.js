/*- 처음푼 풀이(5개테케 안맞음) > 질문하기 참조함
- 유일성과 최소성에 대한 조건을 잘못 해석함.
- 로직 : 유일성을 먼저 판단하고 > 최소성을 판단해야함. 여기서 최소성을 판단할때, 하나의 키가 다른집합의 subset이 된다면,
 최소성판단에서 제거함. (공통된 요소 하나가 있어도 key가 아닌 case도 있기 때문에)
- 처음에 풀때 하나라도 공통된게 있으면 제거하는 방식으로 짰음.
*/ 

function solution(relation) {
    const entireIdx = [];
    let answer = [];
    const dfsStack = [];
    const keyLen = relation[0].length;
    const visited = new Array(keyLen).fill(false);
    
    for(let i=0; i<keyLen; i++){
        entireIdx.push(i);
    }
    
    const dfs = (cnt,target,idx)=>{
        
        if(cnt === target){
            const keyArr = relation.map(arr => dfsStack.reduce((tempArr,cur)=>{
                tempArr.push(arr[cur]);
                return tempArr;
            },[]).join(' '));
            
            const set = new Set(keyArr);
                
            if(keyArr.length === set.size){
                answer.push([...dfsStack]);
             }
            
            return;
        }
        
        for(let i=idx; i<entireIdx.length; i++){
            const curIdx = entireIdx[i];
            if(!visited[i]){
                visited[i] = true;
                dfsStack.push(curIdx);
                dfs(cnt+1,target,i);
                dfsStack.pop();
                visited[i] = false;
            }
        }
    }
    
    for(let i=1; i<=keyLen; i++){
        dfs(0,i,0);
    } //전체 유일성 만족하는 경우의수 구했음.

    let keyIdx = 0;
    while(true){
        const stack = []
        for(let i=keyIdx+1; i<answer.length; i++){
            const cur = answer[i];
            if(answer[keyIdx].every(item => cur.includes(item))){
                stack.push(answer[i]);
            }
        }
        answer = answer.filter(x => !stack.includes(x));
        ++keyIdx;
        
        if(keyIdx > answer.length-1) break;
    }//투포인터로 부분집합 제거함.
//key값을 기반으로 부분집합인 요소들을 구해서 제거한다음 keyIdx증가
//index초과된다면 끝냄.
  
    return answer.length;
}


/* 처음푼 풀이
function solution(relation) {
    const entireIdx = [];
    const answer = [];
    const dfsStack = [];
    const answerSet = new Set();
    const keyLen = relation[0].length;
    let targetLen = 2;
    
    const dfs = (cnt,target,idx,array,visited)=>{
        if(cnt === target){
            
            const keyArr = relation.map(arr => dfsStack.reduce((tempArr,cur)=>{
                tempArr.push(arr[cur]);
                return tempArr;
            },[]).join(' '));

            const set = new Set(keyArr);
            
            if(keyArr.length === set.size){
                answer.push([...dfsStack]);
                dfsStack.forEach(idx =>{
                    answerSet.add(idx);
                })
             }
            return;
        }
        
        for(let i=idx; i<array.length; i++){
            const curIdx = array[i]
            if(!visited[i]){
                visited[i] = true;
                dfsStack.push(curIdx);
                dfs(cnt+1,target,i,array,visited);
                dfsStack.pop();
                visited[i] = false;
            }
        }
	    }
    
    for(let i=0; i<keyLen; i++){
        entireIdx.push(i);
        const keyArr = relation.map(arr => arr[i]);
        const set = new Set(keyArr);
        if(keyArr.length === set.size){
            answer.push(i);
            answerSet.add(i);
        }
    }//key len === 1일때 set check.
    
    if(answer.length === entireIdx.length) return answer.length;
    
    while(true){
        const filtered = entireIdx.filter(x => !answerSet.has(x));
        
        if(targetLen > filtered.length) break;
        
        const visited = new Array(filtered.length).fill(false);
        
        dfs(0,targetLen,0,filtered,visited);
        targetLen++;
    }
    
  
    
    return answer.length;
    
}*/