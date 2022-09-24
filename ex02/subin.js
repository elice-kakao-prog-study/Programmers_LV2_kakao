function solution(s) {
    const stringArr = s.split(',{');
    const tupleSet = stringArr.map(x => x.replace(/[^0-9,]/gi,"").split(',').map(Number));
    const tuple = new Set();
    tupleSet.sort((a,b) => a.length- b.length); //순서가있으므로 sort
    
    tupleSet.forEach(val => {
        val.forEach(el =>{
            tuple.add(el);
        })
    }) // set 추가후 배열로 반환.
    return [...tuple]
}