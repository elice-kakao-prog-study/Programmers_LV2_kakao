// 조합
const getCombination = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
};

// 유일성
const checkUniqueness = (relation, combinations) => {
  // combinations = [
  //   [ 0 ],          [ 1 ],
  //   [ 2 ],          [ 3 ],
  //   [ 0, 1 ],       [ 0, 2 ],
  //   [ 0, 3 ],       [ 1, 2 ],
  //   [ 1, 3 ],       [ 2, 3 ],
  //   [ 0, 1, 2 ],    [ 0, 1, 3 ],
  //   [ 0, 2, 3 ],    [ 1, 2, 3 ],
  //   [ 0, 1, 2, 3 ]
  // ]

  const results = [];

  combinations.forEach((combination) => {
    const combi = [];

    relation.forEach((rel) => {
      combi.push(combination.map((combi) => rel[combi]).join(""));
    });

    if ([...new Set(combi)].length == relation.length)
      results.push(combination);
  });

  return results;
};

// 최소성
function checkMinimality(combinations) {
  // combinations = [
  //   [ 0 ],       [ 0, 1 ],
  //   [ 0, 2 ],    [ 0, 3 ],
  //   [ 1, 2 ],    [ 0, 1, 2 ],
  //   [ 0, 1, 3 ], [ 0, 2, 3 ],
  //   [ 1, 2, 3 ], [ 0, 1, 2, 3 ]
  // ]

  const results = [];

  while (combinations.length) {
    results.push(combinations[0]); // [ [0] ]

    combinations = combinations.reduce((acc, cur) => {
      const isMinimality = !combinations[0].every((combination) =>
        cur.includes(combination)
      );

      if (isMinimality) acc.push(cur);

      return acc; // [ [1, 2], [1, 2, 3] ]
    }, []);
  }

  return results.length; // [ [ 0 ], [ 1, 2 ] ]
}

function solution(relation) {
  const idxArr = Array.from(Array(relation[0].length), (v, i) => i); // [0, 1, 2, 3]

  let combinations = [];

  for (let i = 0; i < idxArr.length; i++) {
    combinations.push(...getCombination(idxArr, i + 1)); // 조합의 index 구하기
  }

  combinations = checkUniqueness(relation, combinations); // 유일성 체크
  return checkMinimality(combinations); // 최소성 체크
}
