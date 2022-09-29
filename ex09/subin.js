function solution(n, t, m, p) {
    const arr = [];
    const answer = [];
    for(let i=0; i<=100000; i++){
        arr.push(i);
    } // 1000 *100 =100000(완탐으로해결);
    const string = arr.map(x => x.toString(n)).join('').toUpperCase();
    let [start,end] = [0,m]
    while(answer.length !==t){
        const temp = string.slice(start,end);
        answer.push(temp[p-1]);
        start += m;
        end += m;
    }
    
    return answer.join('');
    
}