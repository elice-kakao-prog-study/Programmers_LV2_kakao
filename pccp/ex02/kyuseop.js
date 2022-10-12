function solution(ability) {
    
    const checkMap = new Map();
    
    const rowLength = ability.length;
    const columnLength = ability[0].length;
    // const attributes = Array.from({length : columnLength}, (_, i) => i);
    
    for(let i = 0; i < columnLength; i++){
        for(let j = 0; j < rowLength; j++){
            checkMap.has(i) ? checkMap.get(i).push(ability[j][i]) : checkMap.set(i, [ability[j][i]])
        }
    }
    
    
    let max = Number.MIN_SAFE_INTEGER;
    
    const temp = [];
    const check = Array.from({length : rowLength}, () => 0)
    
    function DFS(L){
        if(L === columnLength){
            let total = 0;
            temp.forEach((x, i) => {
                total += checkMap.get(i)[x];
            })
            max = Math.max(max, total)
        } else {
            for(let i = 0; i < rowLength; i++){
                if(check[i] === 0){
                    check[i] = 1;
                    temp[L] = i;
                    DFS(L + 1);
                    check[i] = 0;
                }
            }
        }
    }
    
    DFS(0)
    
    return max;
}