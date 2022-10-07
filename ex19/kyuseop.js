// function solution(info, query) {

//   const infos = info.reduce((pre, cur) => {
//     const [lang, field, career, food, score] = cur.split(" ");
//     return [...pre, { lang, field, career, food, score }];
//   }, [])


//   const querys = query.reduce((pre, cur) => {
//     const [lang, field, career, food, score] = cur.split(/\sand\s|(\d+)/).filter(x => Boolean(x)).map(x => x.trim());
//     return [...pre, { lang, field, career, food, score }]
//   }, [])

//   const answer = [];


//   querys.forEach(query => {
//     let temp = 0;
//     const { lang: c1, field: c2, career: c3, food: c4, score } = query;
//     const length = infos.length;
//     console.log(c1, c2, c3, c4, score)

//     for (let i = 0; i < length; i++) {
//       let pass = false;
//       const info = infos[i];
//       if ((c1 === '-' || info.lang === c1) &&
//         (c2 === '-' || info.field === c2) &&
//         (c3 === '-' || info.career === c3) &&
//         (c4 === '-' || info.food === c4) &&
//         (Number(info.score) >= Number(score))) {
//         pass = true;
//       }
//       if (pass) ++temp;
//     }
//     answer.push(temp);
//   })

//   return answer;

// }


console.log("java and backend and junior and pizza 100".split(/\sand\s/))



function solution(info, query) {

  // const infos = info.reduce((pre, cur) => {
  //   const [lang, field, career, food, score] = cur.split(" ");
  //   return [...pre, { lang, field, career, food, score }];
  // }, [])
  const infos = [];
  info.forEach(data => {
    const [lang, field, career, food, score] = data.split(" ");
    infos.push({ lang, field, career, food, score });
  })

  const querys = [];
  query.forEach(data => {
    // const [lang, field, career, food, score] = data.split(/\sand\s|(\s\d+)/).filter(x => Boolean(x));
    // const trimedData = data.split(/\sand\s/);
    // const foodData = trimedData[3].split(" ");
    // trimedData[3] = foodData[0];
    // trimedData.push(foodData[1])
    // const [lang, field, career, food, score] = trimedData
    const [lang, field, career, food, score] = data.split(/\sand\s/).filter(x => Boolean(x)).map(x => x.trim())
    querys.push({ lang, field, career, food, score })
  })



  // const querys = query.reduce((pre, cur) => {
  //   const [lang, field, career, food, score] = cur.split(/\sand\s|(\d+)/).filter(x => Boolean(x)).map(x => x.trim());
  //   return [...pre, { lang, field, career, food, score }]
  // }, [])

  const answer = [];


  querys.forEach(query => {
    let temp = 0;
    const { lang: c1, field: c2, career: c3, food: c4, score } = query;

    infos.forEach(info => {
      // console.log(info.score, score)
      let pass = false;
      if ((c1 === '-' || info.lang === c1) &&
        (c2 === '-' || info.field === c2) &&
        (c3 === '-' || info.career === c3) &&
        (c4 === '-' || info.food === c4) &&
        (parseInt(info.score) >= parseInt(score))) {
        pass = true;
      }
      if (pass) temp += 1;
    })
    answer.push(temp);
  })
  return answer;
}


solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"])