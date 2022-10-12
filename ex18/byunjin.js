// 조합 공식
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    const combinations = getCombinations(rest, selectNumber - 1); 
    const attached = combinations.map((el) => [fixed, ...el]); 
    results.push(...attached); 
  });

  return results;
}

function solution(relation) {
const column = relation[0].length;
const candidate = [];
for (let keyLength = 1; keyLength <= column; keyLength++) {
  const combi = getCombinations(Array.from({length: column}, (_,i) => i), keyLength);
  for(let idx = 0; idx < combi.length; idx++) {
    // 모든 키 경우의수
    const keyArr = combi[idx];
    
    // 최소성 검증
    let isMin = true;
    for (let i = 0; i < candidate.length; i++) {
      if (!candidate.length) break;
      const candiKey = candidate[i];
      const fullKey = keyArr.concat(candiKey);
      const fullKeySet = new Set(fullKey);
      if (fullKey.length - candiKey.length === fullKeySet.size) {
        isMin = false;
      }
    }
    
    // 유일성 검증
    if (isMin) {
      const elArr = [];
      for(let rowIdx = 0; rowIdx < relation.length; rowIdx++) {
        const row = relation[rowIdx];
        elArr.push(row.filter((_,idx) => keyArr.includes(idx)).join(''));
      }
      
      const set = new Set(elArr);
      if (elArr.length === set.size) {
        candidate.push(keyArr);
      }
    }
  }
}

return candidate.length;
}
