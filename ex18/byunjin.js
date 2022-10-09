
// 조합 공식
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); 
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]); 
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
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
