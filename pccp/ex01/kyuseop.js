function solution(input_string) {
    const checkMap = new Map();
    const inputArr = input_string.split("")
    
    for(let str of inputArr){
        const idx = inputArr.indexOf(str)
        checkMap.has(str) ? checkMap.get(str).push(idx) : checkMap.set(str, [idx]);
        inputArr[idx] = 0;
    }
    
    const answer = [];
    for(let [key, value] of checkMap){
        if(value.length === 1) continue;
        const length = value.length;
        let isTrue = false;
        for(let i = 0; i < length; i++){
            if((i !== length - 1) && (value[i + 1] !== value[i] + 1)){
                isTrue = true;
                break;
            }
        }
        if(isTrue) answer.push(key)
    }
    
    return answer.length ? answer.sort().join("") : "N"
    
}