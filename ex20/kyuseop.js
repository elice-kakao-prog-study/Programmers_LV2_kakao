
function specialSort(a, b) {
  let sample1 = a.slice().reverse();
  let sample2 = b.slice().reverse();
  let idx1 = sample1.findIndex(x => x !== 0);
  let idx2 = sample2.findIndex(x => x !== 0);
  while (true) {
    if (idx1 > idx2) return 1;
    else if (idx1 < idx2) return -1;
    else {
      if (sample1[idx1] < sample2[idx2]) return 1;
      else if (sample1[idx1] > sample2[idx2]) return -1;
      else {
        sample1 = sample1.slice(idx1 + 1)
        idx1 = sample1.findIndex(x => x !== 0);
        sample2 = sample2.slice(idx2 + 1)
        idx2 = sample2.findIndex(x => x !== 0);
      }
    }
  }
}

function solution(n, info) {

  const temp = [];

  const checkMap = new Map();

  function DFS(L, s) {
    if (L === n) {
      const sample = Array.from({ length: 11 }, () => 0);
      temp.forEach(x => { sample[x] += 1 })
      let apeach = 0;
      let lion = 0;
      info.forEach((x, i) => {
        const score = 10 - i;
        if (!(x === 0 && sample[i] === 0)) {
          if (x >= sample[i]) {
            apeach += score;
          } else {
            lion += score;
          }
        }
      })

      if (lion > apeach) {
        const number = lion - apeach;
        checkMap.has(number) ? checkMap.get(number).push(sample) : checkMap.set(number, [sample])
      }

    } else {
      for (let i = s; i < 11; i++) {
        temp[L] = i;
        DFS(L + 1, i)
      }
    }
  }


  DFS(0, 0)

  if (checkMap.size === 0) return [-1]
  // console.log(checkMap)
  const max = Math.max(...checkMap.keys())

  // return checkMap.get(max)[checkMap.get(max).length - 1]
  return checkMap.get(max).sort(specialSort)[0]

}

console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]))


// console.log([[0, 0, 2, 3, 4, 1, 0, 0, 0, 0, 0], [9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]].sort(specialSort))