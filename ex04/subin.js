//옛날에 푼 풀이 : 문자열 handle을 위해 stack사용
function solution(n, k) {
    
    let array = [...n.toString(k)].map(x => parseInt(x));
    let stack = [];
    let cnt = 0;

    const isPrime = (num)=>{
    if(num === 0|| num === 1){
        return false;
    }
    for(let i=2; i*i<=num; i++){
        if(num%i===0) return false;
    }
        return true;
    }
    
    array.forEach((val)=>{
        if(val !== 0) stack.push(val);
        else{
            if(stack.length !==0){
                let num = parseInt(stack.join(''));
                if(isPrime(num)){
                    cnt += 1;
                }
                stack = [];  
            } 
        }
    }); //문자열 handling하기 위해 stack이용.
    
    if(stack.length !== 0){
        isPrime(parseInt(stack.join(''))) ? cnt++ : null;
    }

    
    return cnt;
}

// 다시푼 풀이 split('0')으로 나눠줌
function solution(n, k) {
    
    const isPrime = (num)=>{
    if(num === 0|| num === 1){
        return false;
    }
    for(let i=2; i*i<=num; i++){
        if(num%i===0) return false;
    }
        return true;
    }
    
    let answer = 0;
    const array = n.toString(k).split('0').map(Number).forEach(val =>{
        isPrime(val) && answer++;
    })
    
    return answer;
}