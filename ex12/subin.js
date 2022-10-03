//옛날에 푼 풀이
//문제에서 구현사항 그대로 구현함.
function solution(p) {
    let array = [...p];
    
    const IsValid = (array) => {
        let stack = [];
        array.forEach((val)=>{
            if(val === '(') stack.push('(');
            if(val === ')') stack.pop();
        });
        return stack.length === 0? true: false;
    } //올바른 괄호 문자열 check.
    
    const reverse = (array)=>{
        let temp = [];
        array.forEach((val) =>{
            if(val === '(') temp.push(')');
            if(val === ')') temp.push('(');
        });
        return temp.join('');;
    }; //괄호방향 뒤집는 함수.
    
    const findIndex = (array)=>{
        let leftCount = 0;
        let rightCount = 0;
        let idx;
        for(let i=0; i<array.length; i++){
            if(array[i] === '(') leftCount +=1;
            if(array[i] === ')') rightCount +=1;
            if(leftCount === rightCount && leftCount !== 0){
                idx =i;
                break;
            }
        }
        return idx;
    }; //분리할 idx를 찾는 함수 
    
    const sliceFun = (array)=>{
        
        let temp = '';
        
        if(array.length === 0) return temp; // 빈문자열일때 
        
        let idx = findIndex(array); 
        let left = array.slice(0,idx+1);
        array = array.slice(idx+1,); //2개의 균형잡힌 문자열로 분리
        
        if(IsValid(left)){
            temp += left.join('');
            temp += sliceFun(array);
        } //올바른 괄호 문자열 > 반환
        else{
            temp += '(';
            temp += sliceFun(array); //아니면 다시 재귀콜
            temp += ')';
            left.splice(0,1);
            left.splice(left.length-1,1);
            let reversed = reverse(left);
            temp += reversed;
        }
        
        return temp;
    }

    return sliceFun(array,'');
}