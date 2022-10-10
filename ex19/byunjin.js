const check = (apply, condition) => {
  const {lang, position, career, food, score} = apply;
  const [langC, positionC, careerC, foodC, scoreC] = condition.split(' ').filter((el) => el !== 'and');
  const isAll = (arg) => arg === '-';
  const condtCheck = (apply, condt) => isAll(condt) || apply === condt;
  const scoreCheck = (apply, condt) => isAll(condt) || Number(apply) >= Number(condt);
  return condtCheck(lang,langC) && condtCheck(position, positionC) && condtCheck(career, careerC) && condtCheck(food, foodC) && scoreCheck(score, scoreC);
}

function solution(info, query) {
  const rslt = [];
  const infoMapped = info.map((el) => {
    const [lang, position, career, food, score] = el.split(' ');
    return  {lang, position, career, food, score};
  });
  
  for (let i = 0; i < query.length; i++) {
    const condition = query[i];
    const cnt = infoMapped.filter((apply) => check(apply, condition)).length;
    rslt.push(cnt);
  }

  return rslt;
}
