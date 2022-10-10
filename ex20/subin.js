/*- 전체 max값 11^10개 데이터 > 완탐불가 > 1초 > 1억 > 10^9개임.
- case분류로 예외처리해주기에는 너무 예외가 많음
- 아예완탐은 불가한데, 조건을 줘서 시간복잡도를 줄여줄 수 있지 않을까?..라고 생각함
- info보다 1큰경우만 탐색하면됨. 나머지는 어차피 최적의 case가 아니기 때문에 pass함.
- dfs로 2가지 경우 돌림 > info+1보다 여유있을때 아닐때, 아닐때는 그냥 마지막에 붙혀주고 백트래킹함.
- 처음에 중복순열로 짰는데, console 찍어보니 중복 데이터가 많아짐 > 중복조합으로 구현
- 중복조합으로 배열 찾은 후 map에 key : 점수 value 배열형식으로 넣음 
- max값 찾아서 > case에 따라 데이터 처리함.
- max값이 많을 때 데이터 처리하는 부분은 stack사용해서 index가 max값과 일치하지 않으면 하나씩 제거함.
- max값이 여러개가 나올 수 있기 때문에 하나가 나올때까지 계속 작업.
- 시간복잡도가 잘나온다.
*/ 

function solution(n, info) {
    const lion = new Array(11).fill(0);
    const scoreMap = new Map();
    
    const dfs = (cnt,idx) => {
        if(cnt === n){
            const [apeachScore, lionScore] = calScore(info, lion);
            const diff = lionScore - apeachScore;
            if(diff > 0){
                if(!scoreMap.has(diff)){
                    scoreMap.set(diff, []);
                }
                scoreMap.get(diff).push([...lion]);
            }
            return;
        }
        for(let i=idx; i<lion.length; i++){
            const infoValue = info[i]+1; 
            const left = n-cnt;
            if(lion[i] >= infoValue) continue; //이미 더해져있는 경우 pass
            if(left >= infoValue){
                lion[i] += infoValue;
                dfs(cnt+infoValue,i);
                lion[i] -= infoValue;
            }//infoValue만큼 더할 수 있을때 더하고 백트래킹
            else{
                lion[i] += left;
                dfs(cnt+left,i);
                lion[i] -= left;
            }//나머지처리
        }
    }//중복조합구현 + runtime 개선
    //2개의 dfs case 
    
    dfs(0,0);
    
    if(scoreMap.size === 0) return [-1];
    else{
        const keyArray = [...scoreMap.keys()];
        const max = Math.max(...keyArray);
        if(scoreMap.get(max).size === 1) return scoreMap.get(max).flatMap(x=>x);//2차원배열형태이므로 flatMap으로 평탄화해줌.
        else{
            const maxArray = scoreMap.get(max);
            const answer = findLeastMost(maxArray);
            
            return answer.flatMap(x=>x);

        }
    }
        
}

function findLeastMost(array){
    let copyArray = array.map(arr => [...arr]); //일단 복사
    let endIdx = 10; //10부터 시작
    let stack = []; 
    while(copyArray.length !== 1){
        stack.length = 0; //stack초기화
        const max = Math.max(...copyArray.map(x => x[endIdx])); // 해당 endIdx들에서 최댓값 찾음
        copyArray.forEach(val =>{
            if(val[endIdx] === max){
                stack.push(val);
            }
        }); //max값과 일치하면 스택에 넣고
        endIdx--;
        copyArray = [...stack]; // copyArray에 stack을 복사
    }//copyArray의 길이가 1이라면 종료
    //배열에서 직접 제거하는 형식으로 구현하면 예외상황 발생.

    return copyArray; 
}//가장 낮은 점수가 최대인 배열 찾는 함수 


function calScore(apeach, lion){
    let apeachScore = 0;
    let lionScore = 0;
    
    for(let i=0; i<apeach.length; i++){
        if(apeach[i]===lion[i] && apeach[i]===0) continue;
        else if(apeach[i] > lion[i]){
            apeachScore += 10-i;
        }
        else if(apeach[i] < lion[i]){
            lionScore += 10-i;
        }
        else{
            apeachScore += 10-i;
        }
    }
    
    return [apeachScore, lionScore];
}//로직에 따라 점수계산하는 함수