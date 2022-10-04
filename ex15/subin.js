/*- 그래프탐색문제 > break로 시간복잡도 최대한 줄여줌
- 그래프 탐색 후 사람이  있는 좌표값을 pos배열에 넣음 >  2개씩만들어서 조합돌리는데, distance가 2일경우만 유효성 검사해주면됨.
*/

function solution(places) {
    const answer = [];
    
    for(let i=0; i<places.length; i++){
        const board = places[i].map(x=> x.split(''));
        const sitPos = [];
        let flag = true;
        
        board.forEach((array,idx1) => array.forEach((val,idx2) => {
            if(val === 'P') sitPos.push([idx1,idx2]);
        }))//사람있는곳 좌표배열에 넣음
        
        for(let i=0; i<sitPos.length-1; i++){
            for(let j=i+1; j<sitPos.length; j++){
                const distance = calDistance(sitPos[i],sitPos[j]);
                if(distance > 2)  continue;
                else if(distance <2) flag =false;
                else{
                    flag = isValid(board,sitPos[i],sitPos[j]);
                }
                if(!flag) break;
            }
            if(!flag) break;
        }//조합돌려서 거리값에 따라 유효성 평가
        
        flag? answer.push(1) : answer.push(0);
    }
    
    return answer;
}

function calDistance(idx1,idx2){
    const [r1,c1] = idx1;
    const [r2,c2] = idx2;
    return Math.abs(r1-r2) + Math.abs(c1-c2);
}

function isValid(board,pos1,pos2){
    const [x1,y1] = pos1;
    const [x2,y2] = pos2;
    
    if(Math.abs(x1-x2) === 2 && board[x1+1][y1] === 'X') return true;
    else if(Math.abs(y1-y2) === 2 && board[x1][y1+1] === 'X') return true;
    else if(Math.abs(x1-x2) === 1 && Math.abs(y1-y2) ===1 && board[x1+1][y1]==="X" && board[x1][y1+1]==="X") return true;
    else if(Math.abs(x1-x2) === 1 && Math.abs(y1-y2) ===1 && board[x1+1][y1]==="X" && board[x1][y1-1]==="X") return true;
    else return false;
}//case분류해서품
/*
10     01  > 존재함. 행렬을 순회하면서 넣었기때문에 x1이 앞의 좌표임.
01     10
*/