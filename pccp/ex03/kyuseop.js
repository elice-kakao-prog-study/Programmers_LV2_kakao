function solution(queries) {

    const mendelArr = [['Rr']];
  
    function mendel(a) {
      // if (mendelArr[a - 1] && mendelArr[a - 1][b - 1]) return mendelArr[a - 1][b - 1];
      let origin = 0;
      while (true) {
        if (origin === a - 1) return;
        const length = mendelArr[origin].length;
        mendelArr[origin + 1] = [];
        for (let i = 0; i < length; i++) {
          if (mendelArr[origin][i] === 'Rr') mendelArr[origin + 1].push('RR', 'Rr', 'Rr', 'rr')
          else if (mendelArr[origin][i] === 'RR') mendelArr[origin + 1].push('RR', 'RR', 'RR', 'RR')
          else mendelArr[origin + 1].push('rr', 'rr', 'rr', 'rr')
        }
        origin++;
      }
    }
  
    const [a, b] = queries.slice().sort((a, b) => {
      if (a[0] < b[0]) return 1;
      else if (a[0] > b[0]) return -1;
      else return b[1] - a[1];
    })[0]
    mendel(a);
  
    const answer = [];
    queries.forEach(x => {
      answer.push(mendelArr[x[0] - 1][x[1] - 1])
    })
  
    return answer;
  
  }