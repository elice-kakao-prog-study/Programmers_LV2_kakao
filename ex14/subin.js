/*- input  > 문자열이 최대 15만개이므로, O(NlogN)에 설계해야함 > musicinfos배열을 한번돌면서 데이터를 가공함 
>  노래정보는 총 100개이므로 배열메소드 부담없이 사용가능하다고 판단. >  필요한 정보를 담는 객체배열을 생성하는것을 목표로잡음.
- 작은동작을 하는 함수를  써서 구현함 > 디버깅이 쉬웠다(구조화하는 연습할 것)
- 샾을 없애기 위해 replace메소드로 소문자로 치환했다.*/ 

function solution(m, musicinfos) {
    const musicArray = [];
    m = removeSarp(m);

    musicinfos.forEach((infos,idx) =>{
        const [start,end,title,music] = infos.split(',');
        const runtime =  calRuntime(start,end);
        const newMusic = removeSarp(music);//샾처리한 악보정보
        const [repeat, remain] = [Math.floor(runtime/newMusic.length), runtime%(newMusic.length)];
        const fullStr = makeFullStr(repeat,remain,newMusic);
        
        let count = 0;
        let strIdx = fullStr.indexOf(m);
        while(strIdx !== -1){
            count++;
            strIdx = fullStr.indexOf(m,strIdx+1);
        }//타깃문자열 끝까지 찾는다.
        musicArray.push({
            name : title,
            count : count,
            time  : runtime,
            prior : idx,
        });
    })//객체배열 생성(key값이 여러개라서 map안씀)
    
    const countArray = musicArray.map(x=> x.count);
    const max = Math.max(...countArray);//maxcount찾음
    if(max ===0) return "(None)"; //0이면 종료
    
    const filtered = musicArray.filter(x => x.count === max);
    
    if(filtered.length ===1) return filtered[0].name; //하나면 그냥 return
    else{
        filtered.sort((a,b) =>{
            if(a.time <b.time) return 1;
            else if(a.time > b.time) return -1;
            else{
                return a.prior-b.prior;
            }
        })//여러개면 조건에 따라 sort후 첫번째값 return.
        
        return filtered[0].name;
    }
    
    
}

function removeSarp(str){
    const newStr = str.replace(/[A-Z]#/g, x=>x[0].toLowerCase());
    return newStr;
} //샾없애는 함수 replace두번째 인자값으로 문자열을 return하는 함수가능함.

function calRuntime(start,end){
    const startArr = start.split(':').map(Number);
    const endArr = end.split(':').map(Number);
    const hourToMin = (num1,num2) => num1*60+num2;
    
    return hourToMin(...endArr) - hourToMin(...startArr);
} //시간 -> 분으로 만드는 함수
 
function makeFullStr(repeat,remain,str){
    let fullStr = str.repeat(repeat);
    
    for(let i=0; i<remain;i++){
        fullStr += str[i];
    }
    
    return fullStr;
} //반복횟수,나머지로 fullString만드는 함수.