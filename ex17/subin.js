/*- 문제에서 요구사항 그대로 구현 input 1000이니까 완탐해도 시간복잡도 크게 안증가함.
- cutLength가 1부터 문자열을 계속 자른다. > 앞에 자른것과 똑같다면 stack값의 횟수값을 update아니라면, stack에 새로운 값을 밀어넣음.
- cutLength기준 한번 자르고 난 후 stack을 순회하면서 값을 이어붙힌다. > 1인 case는 제거해줘야함.
*/ 

function solution(s) {
    let answer = [];
    let cutLength = 1;
    
    while(cutLength <= s.length){
        let stack = [];
        let string ='';
        let top = -1;
        let start = 0;
        while(start <= s.length){
            let cutted = s.slice(start, start+cutLength);
            if(stack.length === 0){
                top +=1;
                stack.push([1, cutted]); //[횟수, 자른문자열] 형식임
            }
            else{
                if(stack[top][1] === cutted){
                    stack[top][0] +=1;
                }
                else{
                    top +=1;
                    stack.push([1,cutted]);
                }
            }
            start += cutLength;
        }
        stack.forEach(val => {
            val[0] === 1 ? string += val[1] : string += (val[0]+val[1])
        });//횟수 1은 제거함.
        answer.push(string.length);
        cutLength += 1;
    }

    return Math.min(...answer); //모두 자른 후 최솟값길이 찾음.
}