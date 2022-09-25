function solution(record) {
    let recordArray = [];
    let map = new Map();
    let stack = [];
    let answer = [];
    record.forEach((val) => {
        const [type, id, name] = val.split(' ');
        if(type==='Enter'){
            map.set(id,name);
            stack.push([id,"님이 들어왔습니다."]);
        }
         if(type==='Leave'){
             if(map.has(id)){
                 stack.push([id,"님이 나갔습니다."]);
             }
        }
         if(type==='Change'){
             if(map.has(id)){
                 map.set(id,name);
             }
        }
    }); // O(n)
    
    stack.forEach((val) => {
        const [id, string] = val
        const name = map.get(id);
        const answerString = name + string;
        answer.push(answerString);
    });
    
    
    

    return answer;  
}