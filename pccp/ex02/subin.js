function solution(ability) {
    const student = ability.length;
    const exercise = ability[0].length;
    const graph = new Array(exercise).fill(null).map((x,idx) => ability.map((_,idx2) => ability[idx2][idx]));
    const visited = new Array(student).fill(false);
    let max = 0;
    const stack = [];
    
    const dfs = (cnt,exercise,idx) =>{
        if(cnt === exercise){
            const sum = stack.reduce((acc,cur) => acc+=cur,0);
            max = Math.max(max, sum);
        }
        
        for(let i=idx; i<graph.length; i++){
            for(let j=0; j<graph[i].length; j++){
                if(!visited[j]){
                    visited[j] = true;
                    stack.push(graph[i][j]);
                    dfs(cnt+1, exercise, i+1);
                    stack.pop();
                    visited[j] = false;
                }
            }
        }
    }
    
    dfs(0,exercise,0);
    
    return max;
}