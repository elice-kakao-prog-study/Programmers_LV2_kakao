function solution(files) {
    const regex = /[^0-9]+|\d{1,5}/g;
    files.sort((a,b) => {
        let [aHead, aNum] = a.match(regex);
        let [bHead, bNum] = b.match(regex); //문자열 파싱
        
        aHead = aHead.toUpperCase();
        bHead = bHead.toUpperCase(); //대소문자 구분
        
        if(aHead < bHead) return -1; 
        else if(aHead > bHead) return 1; //head따라 먼저 분류
        else{
            if(parseInt(aNum) - parseInt(bNum) >0) return 1;
            else if(parseInt(aNum) - parseInt(bNum)<0 ) return -1; //Num으로 분류
            else{
                return 0; // 다같다면 순서유지
            }
        }
        
    })
    return files;
}