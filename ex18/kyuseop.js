function solution(relation) {

  const length = relation.length;
  const attributes = Array.from({ length: relation[0].length }, (_, i) => i);
  const checkMap = new Map();

  attributes.forEach(attribute => {
    for (let i = 0; i < length; i++) {
      checkMap.has(attribute) ? checkMap.get(attribute).push(relation[i][attribute]) : checkMap.set(attribute, [relation[i][attribute]])
    }
  })

  let answer = 0;

  const check = [];
  const temp = [];

  function DFS(L, s, m) {

    if (L === m) {
      for (let i = 0; i < check.length; i++) {
        const str = check[i]
        const length = str.length;
        const test = temp.join("")
        let count = 0;
        for (let j = 0; j < length; j++) {
          if (test.includes(str[j])) {
            count++;
          }
        }
        if (count === length) return;
      }

      const arr = [];

      for (let i = 0; i < length; i++) {
        let sample = '';
        for (let j = 0; j < m; j++) {
          sample += checkMap.get(temp[j])[i]
        }
        arr.push(sample);
      }

      if (arr.length === [...new Set(arr)].length) {
        answer++;
        check.push(temp.join(""));
      }

    } else {
      for (let i = s; i < attributes.length; i++) {
        temp[L] = attributes[i];
        DFS(L + 1, i + 1, m)

      }
    }
  }

  for (let i = 1; i <= attributes.length; i++) {
    DFS(0, 0, i);
  }

  return answer;
}

console.log(solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]))




// function solution(relation) {

//   const length = relation.length;
//   const attributes = Array.from({ length: relation[0].length }, (_, i) => i);
//   const checkMap = new Map();
//   attributes.forEach(attribute => {
//     for (let i = 0; i < length; i++) {
//       checkMap.has(attribute) ? checkMap.get(attribute).push(relation[i][attribute]) : checkMap.set(attribute, [relation[i][attribute]])
//     }
//   })

//   let answer = 0;

//   const check = [];
//   const temp = [];
//   function DFS(L, s, m) {

//     if (L === m) {
//       // for (let i = 0; i < check.length; i++) {
//       //   if (temp.join("").includes(check[i])) return;
//       // }
//       const arr = [];
//       for (let i = 0; i < length; i++) {
//         let sample = '';
//         for (let j = 0; j < m; j++) {
//           sample += checkMap.get(temp[j])[i]
//         }
//         arr.push(sample);
//       }
//       if (arr.length === [...new Set(arr)].length) {
//         answer++;
//         check.push(temp.join(""));
//       }
//     } else {
//       for (let i = s; i < attributes.length; i++) {

//         temp[L] = attributes[i];
//         DFS(L + 1, i + 1, m)

//       }
//     }
//   }

//   for (let i = 1; i <= attributes.length; i++) {

//     DFS(0, 0, i);

//   }
//   console.log(check)
//   return answer;
// }

// console.log(solution([
//   ["a", "1", "aaa", "c", "ng"],
//   ["a", "1", "bbb", "e", "g"],
//   ["c", "1", "aaa", "d", "ng"],
//   ["d", "2", "bbb", "d", "ng"]
// ]))

//023은 제거가 되지만 012는 제거가 안됨.



// function solution(relation) {

//   const length = relation.length;
//   const attributes = Array.from({ length: relation[0].length }, (_, i) => i);
//   const checkMap = new Map();
//   attributes.forEach(attribute => {
//     for (let i = 0; i < length; i++) {
//       checkMap.has(attribute) ? checkMap.get(attribute).push(relation[i][attribute]) : checkMap.set(attribute, [relation[i][attribute]])
//     }
//   })

//   let answer = 0;


//   function DFS(L, s, m, temp, check) {
//     if (L === m) {
//       const arr = [];
//       for (let i = 0; i < length; i++) {
//         let sample = '';
//         for (let j = 0; j < m; j++) {
//           sample += checkMap.get(temp[j])[i]
//         }
//         arr.push(sample);
//       }
//       if (arr.length === [...new Set(arr)].length) {
//         answer++;
//         temp.forEach(x => {
//           check[x] = 1;
//         })
//       }
//     } else {
//       for (let i = s; i < attributes.length; i++) {
//         if (attributes[i] !== null) {
//           temp[L] = attributes[i];
//           DFS(L + 1, i + 1, m, temp, check)
//         }
//       }
//     }
//   }

//   for (let i = 1; i <= attributes.length; i++) {
//     console.log(attributes)
//     if (attributes.every(x => x === null)) break;
//     const temp = [];
//     const check = [];
//     DFS(0, 0, i, temp, check);
//     check.forEach((x, i) => {
//       if (x === 1) {
//         attributes[i] = null;
//       }
//     })
//   }


//   return answer;
// }


// solution([['a', 1, 'aaa', 'c', 'ng'], ['b', 1, 'bbb', 'c', 'g'], ['c', 1, 'aaa', 'd', 'ng'], ['d', 2, 'bbb', 'd', 'ng']])

// 정답: 3
// 코드의 답: 2

// 위 테스트 케이스로 실행하면 (0),(2,3),(1,3,4)가 후보키가 되야 하는데 저의 경우는 (2,3)을 처리 할 때 3을 앞으로 배제시켜서 (1,3,4)를 후보키로 카운트하지 못하는 문제가 있었습니다.