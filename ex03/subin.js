function solution(str1, str2){
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    const str1Arr = makePair(str1).map(x => x.replace(/[^A-Z]/gi,'')).filter(x =>x.length===2);
    const str2Arr = makePair(str2).map(x => x.replace(/[^A-Z]/gi,'')).filter(x =>x.length===2); //다른문자 제거후 2보다작게 filter
    const copy = JSON.parse(JSON.stringify(str2Arr)); //복사
    const intersection = str1Arr.filter(cur => {
        if(copy.includes(cur)){
            let idx = copy.findIndex(item => item===cur); 
            copy.splice(idx,1);//원소가 있으면, 배열에서 지워줘야함.
            return true;
        }
        else return false;
    })  // 중복교집합 구현
    
    let JNum;
    if(str1Arr.length===0 && str2Arr.length===0) JNum=1;
    else{
        JNum = (intersection.length) / (str1Arr.length+str2Arr.length-intersection.length);
    }
    
    return Math.floor(JNum*65536);
    
}

function makePair(str){
    const strArr = [];
    for(let i=0; i<str.length-1; i++){
        const temp = str[i]+str[i+1];
        strArr.push(temp);
    }
    return strArr;
}//pair만드는 함수