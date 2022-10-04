/*- input 3~100개의 문자열>  배열의 반복문돌리는것은 시간복잡도가 크게 증가하지 않는다고 판단
- 연산자 우선순위 경우의수 6가지이므로 > 이 우선순위에 따라 완탐하는 문제임.
- arr를 직접 건들때 >> 배열에서 splice할때 for문말고 while문을 사용해서 
lastIdx와 curIdx값을 Index Error발생하지 않도록 제어해줘야함.
*/


function solution(expression) {
    const regex = /\d{1,3}|[*+-]/g
    const parsed = expression.match(regex);
    const operator = ['*', '-', '+'];
    const stack = [];
    const visited = new Array(3).fill(false);
    let max = 0;
    
    const dfs = (cnt,target) =>{
        if(cnt === target){
            max = Math.max(max,countMax(parsed,stack));
            return;
        }
        for(let i=0; i<operator.length; i++){
            if(!visited[i]){
                visited[i] = true;
                stack.push(operator[i]);
                dfs(cnt+1,target);
                stack.pop();
                visited[i] = false;
            }
        }
        
    } //경우의수 6가지 만들고 >> 한가지 경우의수 될때마다 countMax들어감.
//사실6가지라 그냥 직접 써도됨.
    
    dfs(0,3);
    
    return max;
}
//countMax로직 : 연산자를 만났을때 > 앞에꺼 연산자 뒤에꺼 계산후 배열에 넣고 
//Idx 갱신, 연산자 우선순위순으로 계산한다.
function countMax(parsed,stack){
    const copy = [...parsed]; //복사
    const cal = (str1,str2,operator) => {
        const[num1,num2] = [str1,str2].map(Number);
        if(operator === "+") return num1+num2;
        else if(operator === '-') return num1-num2;
        else return num1*num2;
    } //연산자를 받았을때 값 계산하는 함수.
    
    stack.forEach(operator => {
        let curIdx = 0;
        let lastIdx = copy.length-1; //lastIdx
        while(curIdx <=lastIdx){
            if(copy[curIdx] === operator){
                const temp = cal(copy[curIdx-1],copy[curIdx+1],copy[curIdx]);
                copy.splice(curIdx,2); // 2개 자르고
                curIdx -=1; //현재 idx감소
                copy[curIdx] = temp; // 값넣고
                lastIdx = copy.length-1; // lastIdx갱신
            }
            curIdx++;
        }//배열을 직접 자르므로 for문돌리면 안됨(Idx값을 직접 제어해줘야함)
    })
    
    return Math.abs(copy.reduce((acc,cur) => acc+=cur,0));
}