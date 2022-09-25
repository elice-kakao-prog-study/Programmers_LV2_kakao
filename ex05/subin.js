function solution(fees, records) {
    const inArray = [];
    const outArray = [];
    const answer = [];
    const lastTime = hourToMin("23:59");
    const map = new Map();
    const calPrice = (time) =>{
        if(time <= fees[0]) return fees[1];
        else{
           const overTime = time - fees[0];
            return fees[1] + Math.ceil(overTime/fees[2])*fees[3];
        }
    }//비용 계산하는 함수
    
    for(let i=0; i<records.length;i++){
        const [time, carNum, type] = records[i].split(' ');
        if(type ==="IN"){
            inArray.push({
                time : hourToMin(time),
                carNum : carNum,
            })
        }
        else{
            outArray.push({
                time : hourToMin(time),
                carNum : carNum,
            })
        }
    }//inArray, outArray만들었음.
    
    inArray.sort((a,b) => parseInt(a.carNum) - parseInt(b.carNum));
    outArray.sort((a,b) => parseInt(a.carNum) - parseInt(b.carNum));               
    
    for(let i=0; i<inArray.length; i++){
        const {time,carNum} = inArray[i];
        const targetIdx = outArray.findIndex(obj => obj.carNum ===carNum);
        if(!map.has(carNum)) map.set(carNum, 0);
        if(targetIdx === -1){
            map.set(carNum, map.get(carNum)+lastTime-time);
        }
        else{
            const outTime = outArray[targetIdx].time;
            map.set(carNum, map.get(carNum)+outTime-time);
            outArray.splice(targetIdx,1);
        }
    }
    
    return [...map.values()].map(x =>calPrice(x));
}


function hourToMin(str){
    const hour = parseInt(str[0]+str[1]);
    const minute = parseInt(str[3]+str[4]);
    return hour*60+minute;
}