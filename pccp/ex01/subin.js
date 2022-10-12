function solution(input_string) {
    const countMap = new Map();
    const answerSet = new Set();
    const checkedSet = new Set();
    initMap(countMap,input_string);
    for(let i=0; i<input_string.length; i++){
        const alpha = input_string[i];
        const count = countMap.get(alpha);
        if(answerSet.has(alpha) || count === 1 || checkedSet.has(alpha)) continue;
        
        const stack = [];
        let startIdx = i;
        while(alpha === input_string[startIdx]){
            stack.push(input_string[startIdx]);
            startIdx++;
        }

        if(stack.length !== count) answerSet.add(alpha);
        else{
            checkedSet.add(alpha);
        }
         
    }
    return answerSet.size ===0? "N" : [...answerSet].sort().join('')
}


function initMap(map, input){
    
    for(let i=0; i<input.length; i++){
        const alpha = input[i];
        if(!map.has(alpha)){
            map.set(alpha, 1);
        }
        else{
            map.set(alpha, map.get(alpha)+1);
        }
    }
    
}