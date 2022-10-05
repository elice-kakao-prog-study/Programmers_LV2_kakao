//전체 case 20000(이항정리) > 배열메소드 그냥 써도 무방
// dfs 조합으로 map을 만든뒤, course별로 filter해서 풀었음. 

function solution(orders, course) {
    let map = new Map();
    const visited = new Array(11).fill(false); //방문처리(0~10문자열 크기 11)
    const answer = []; 
    const stack = []; // dfs stack
    
    const dfs = (cnt,target,idx,string) =>{
        if(cnt === target){
            const menuKey = stack.join('');
            map.has(menuKey) ? map.set(menuKey, map.get(menuKey)+1) : map.set(menuKey,1);
	        }// cnt ===target이면 map에 set함.
        for(let i=idx; i<string.length; i++){
            if(!visited[i]){
                visited[i] = true;
                stack.push(string[i]);
                dfs(cnt+1,target,i,string);
                stack.pop();
                visited[i] = false;
            }//조합 + 백트래킹
        }
    }// dfs 재귀함수 조합구현 2~10까지 문자열을 key로 map에 저장
    
    orders.forEach(menuString => {
        const sortedMenu = [...menuString].sort().join('') 
	    // sort한 채로 들어가야함. 안그럼 틀림
       for(let i=2; i<=sortedMenu.length;i++){
           dfs(0,i,0,sortedMenu);
       }
    }); //문자길이별로 조합돌림 > map에 set함.
    
    for(let i=0; i<course.length; i++){
        const len =course[i];
        const filtered = [...map.keys()].filter(x => x.length ===len);//len별로 filter후
        const valueArray = filtered.map(key => map.get(key)); 
        let max = Math.max(...valueArray);//max값찾기
        if(max<2) continue; //2보다작으면 continue
        filtered.filter(key => map.get(key) === max).forEach(val => answer.push(val))   
    }//max값과 같은 key들을 정답처리
    

    return answer.sort(); //마지막 sort
    
}
const quest1 = {
    orders : ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
    course: [2,3,4],
}

console.log(solution(quest1.orders, quest1.course));
