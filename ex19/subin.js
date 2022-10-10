/*
- 첫번째 효율성 고려안하고 짬 > 시간복잡도 줄이는 방법 ?
- 아이디어가 안떠올라서 > 질문하기 참조함.
- hashMap + 이진탐색을 써야 통과함. (모든 경우의수를 키로, 값을 배열로하는 객체생성 > score값을 밀어넣음)
- 아이디어가 안떠올라서 > 질문하기 참조함.(좀 노가다로 구현)
*/ 

function solution(info, query) {
    const hashMap = {};
    const answer = [];
    initMap(hashMap,info);
    
    query.forEach(string =>{
        const [language, job, career, food, score] = string.replace(/ and/g, "").split(' ');
        const scoreToNum = parseInt(score);
        const key = `${language} ${job} ${career} ${food}`;
        const array = hashMap[key]
        const number = binarySearch(array, scoreToNum)
        answer.push(number);
    })//query 이진탐색후 정답에 일치하는 가짓수 pushs
    
    return answer;
}
function binarySearch(array, target){
    if(array.length ===0) return 0;
    let [left,right] = [0, array.length-1];
    let mid = 0;
    while(left<=right){
        mid = Math.floor((left+right)/2);
        array[mid] >= target? right = mid-1 : left=mid+1;
    }//left는 target보다 큰 첫 원소가 됨.
    // 이진탐색에서 mid-1, mid+1이런식으로 mid값과 다르게 탐색범위를 좁혀줘야함.
    
    return array.length-left;
}

function initMap(map,info){
    const languages = ['cpp','java', 'python', '-'];
    const jobs = ['backend', 'frontend', '-'];
    const careers = ['junior', 'senior', '-'];
    const foods = ['chicken', 'pizza', '-'];
    
    for(const language of languages){
        for(const job of jobs){
            for(const career of careers){
                for(const food of foods){
                    const key = `${language} ${job} ${career} ${food}`;
                    map[key] = [];
                }
            }
        }
    }//모든 key경우의수를 만들어 hashMap의 value를 배열로 초기화
    
    info.forEach(val =>{
        const [language, job, career, food, score] = val.split(' ');
        for(const key1 of [language, '-']){
            for(const key2 of [job, '-']){
                for(const key3 of [career, '-']){
                    for(const key4 of[food, '-']){
                        const keyString = `${key1} ${key2} ${key3} ${key4}`;
                        map[keyString].push(+score);
                    }
                }
            }
        }
    }); // -처리 포함해서 배열에 score들을 밀어넣음
    
     for(const key in map){
        map[key].sort((a,b) => a-b);
    } //score 값 sort함.(이진탐색쓰려고)
    
    return map;
}