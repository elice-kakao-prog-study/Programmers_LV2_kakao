// 프로그래머스 lv2. 줄서는 연습 짠코드//
let k = 60;
let array = [];
let temp = [];
let totalCase = 1;
let answer;
let cnt = 0;
for(let i=0; i<5; i++){
    array.push(i+1);
    totalCase *= i+1;
}

let visited = new Array(array.length).fill(false);

const dfs = (depth,idx) => {
    if(depth === array.length){
        cnt += 1;
      console.log(temp);
        if(cnt === k){
            answer = JSON.parse(JSON.stringify(temp));
        }
        return;
    } //종료조건 > depth까지 갔을때 + depth에서 어떤 조건일때 처리해줌.
    else{
        for(let i=idx; i<array.length; i++){
            if(!visited[i]){
                temp.push(array[i]);
                visited[i] = true;
                dfs(depth + 1, i);
                visited[i] = false;
                temp.pop();
                }
            } // 여기서 i값을 바꾸면 그만큼 depth가 더해지는 횟수가 작아지기 때문에 바닥까지 도달하지 못한다. 
        }
    }

dfs(0);
console.log(cnt);

// 조합의 코드화
function solution(n, m) {
    let answer = [];
    let res = Array.from({ length: m }, () => 0);
    const DFS = (L, s) => {
        if (L === m) {
            answer.push(res.slice());
        } else {
            for (let i = s; i <= n; i++) {
                res[L] = i;
                // 한번 뻗겠다, 다음 조합의 시작
                DFS(L + 1, i + 1);
            }
        }
    };
    DFS(0, 1);

    return answer;
}

console.log(solution(4, 2));
