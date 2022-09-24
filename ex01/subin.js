function solution(cacheSize, cities) {
    let runtime = 0;
    let priority = 0;
    let cache = new Map();
    let newCities = cities.map(x => x.toUpperCase()); 
//대소문자 구분하지 않으므로 대문자로
    
    const cacheHit = (val) =>{
        ++priority; 
        cache.set(val,priority); // {key : city value : priority} 형식
        runtime +=1;
    } // hit이라면 > priority만 갱신하면 됨.
    
    const cacheMiss = (val)=>{
        let minkey ='';
        let min = 999999;
        ++priority;
        runtime +=5;
        
        if(cacheSize === 0){
            return;
        }// cacheSize === 0일때
        else if(cache.size<cacheSize){
            cache.set(val,priority);
        } // cache가 덜찼을때 > 추가후 우선순위 갱신
        else{
            for(let [key,value] of cache){
                if(value <min){
                    min = value;
                    minkey =key;
                }
            }//priority가 가장 낮은 값 찾기
            cache.delete(minkey);
            cache.set(val, priority);
        } //캐시가 full일때 > 우선순위 낮은값 제거 + 새로운 값 set
    }
    
    newCities.forEach(city => {
        if(cache.has(city)){
            cacheHit(city);
        }
        else{
            cacheMiss(city);
        }
    })
    
    
    return runtime;
    
}