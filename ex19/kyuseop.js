function binarySearch(arr, num) {

  const length = arr.length;
  let left = 0;
  let right = length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    arr[mid] >= num ? right = mid : left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  return mid;

}

function solution(info, query) {

  const infos = {};

  info.forEach(data => {
    const [lang, field, career, food, score] = data.split(" ");
    const key = lang + field + career + food;
    infos[key] ? infos[key].push(score) : infos[key] = [score];
  })

  Object.values(infos).forEach(value => value.sort((a, b) => a - b).map(Number))

  const querys = [];

  query.forEach(data => {
    const [lang, field, career, food, score] = data.split(/\sand\s|\s/);
    querys.push({ lang, field, career, food, score })
  })

  const answer = [];

  querys.forEach(query => {
    let temp = 0;

    const { lang: c1, field: c2, career: c3, food: c4, score } = query;

    Object.keys(infos).forEach(key => {
      if ((c1 === '-' || key.includes(c1)) &&
        (c2 === '-' || key.includes(c2)) &&
        (c3 === '-' || key.includes(c3)) &&
        (c4 === '-' || key.includes(c4))
      ) {
        const idx = binarySearch(infos[key], Number(score));
        if (infos[key][idx] >= Number(score)) {
          temp += infos[key].length - idx;
        }
        // const idx = infos[key].findIndex(x => Number(x) >= Number(score))
        // if (idx > -1) {
        //   temp += infos[key].length - idx;
        // }
      }
    })
    answer.push(temp);
  })

  return answer;
}

function solution(info, query) {

  const infosMap = new Map();

  info.forEach(data => {
    const [lang, field, career, food, score] = data.split(" ");
    const key = lang + field + career + food;
    infosMap.has(key) ? infosMap.get(key).push(score) : infosMap.set(key, [score]);
  })

  for (let [key, value] of infosMap) {
    value.sort((a, b) => a - b).map(Number)
  }

  const querys = [];

  query.forEach(data => {
    const [lang, field, career, food, score] = data.split(/\sand\s|\s/);
    querys.push({ lang, field, career, food, score })
  })

  const answer = [];

  querys.forEach(query => {
    let temp = 0;
    const { lang: c1, field: c2, career: c3, food: c4, score } = query;

    for (let [infoKey, info] of infosMap) {
      if ((c1 === '-' || infoKey.includes(c1)) &&
        (c2 === '-' || infoKey.includes(c2)) &&
        (c3 === '-' || infoKey.includes(c3)) &&
        (c4 === '-' || infoKey.includes(c4))
      ) {
        const idx = binarySearch(info, Number(score))

        if (info[idx] >= Number(score)) {
          temp += info.length - idx;
        }
        // const idx = info.findIndex(x => x >= Number(score))
        // if (idx > -1) {
        //   temp += info.length - idx;
        // }
      }
    }
    answer.push(temp);
  })

  return answer;

}

function solution(info, query) {

  const infosMap = new Map();

  info.forEach(data => {
    const [lang, field, career, food, score] = data.split(" ");
    const key = lang + field + career + food;
    infosMap.has(key) ? infosMap.get(key).push(score) : infosMap.set(key, [score]);
  })

  for (let [key, value] of infosMap) {
    value.sort((a, b) => a - b).map(Number)
  }


  const querys = [];

  query.forEach(data => {
    const [lang, field, career, food, score] = data.split(/\sand\s|\s/);

    querys.push({ lang, field, career, food, score })

  })

  const answer = [];

  // const storage = {};
  const storage = new Map();

  for (let i = 0; i < querys.length; i++) {
    let temp = 0;

    const { lang: c1, field: c2, career: c3, food: c4, score } = querys[i];

    const str = c1 + c2 + c3 + c4 + score;

    if (/*storage[str] !== undefined*/storage.has(str)) {
      // answer.push(storage[str]);
      answer.push(storage.get(str));
      continue;
    }

    for (let [infoKey, info] of infosMap) {

      if ((c1 === '-' || infoKey.includes(c1)) &&
        (c2 === '-' || infoKey.includes(c2)) &&
        (c3 === '-' || infoKey.includes(c3)) &&
        (c4 === '-' || infoKey.includes(c4))
      ) {
        const idx = binarySearch(info, Number(score))

        if (info[idx] >= Number(score)) {
          temp += info.length - idx;
        }
        // const idx = info.findIndex(x => parseInt(x) >= parseInt(score))
        // if (idx > -1) {
        //   temp += info.length - idx;
        // }
      }
    }
    // storage[str] = temp;
    storage.set(str, temp);
    answer.push(temp);
  }
  return answer;
}


console.log(solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]))
