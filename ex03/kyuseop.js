

// ㅠㅠ 너무 하드코딩해서 풀은 것 같습니다... 좀 더 잘 풀 수 있는 방법을 찾아봐야겠네요.


// only 문자열인지 check. 정규표현식 사용 안 함(공부 예정)
function onlyStr(str) {

  for (let i = 0; i < 2; i++) {
    if (str[i].charCodeAt() < 97 ||
      str[i].charCodeAt() > 122) {
      return false;
    }
  }

  return true;

}


// 각 배열에 filter하는 함수
function filter(str, arr) {

  for (let i = 0; i < str.length - 1; i++) {

    const dividedStr = str.slice(i, i + 2)

    if (onlyStr(dividedStr)) {
      arr.push(dividedStr)
    }
  }
}

function solution(str1, str2) {

  let answer;

  const filteredA = [];
  const filteredB = [];
  filter(str1.toLowerCase(), filteredA);
  filter(str2.toLowerCase(), filteredB);

  const checkMap = new Map();;

  filteredA.forEach(str => {
    checkMap.has(str) ? checkMap.set(str, checkMap.get(str) + 1) : checkMap.set(str, 1);
  })

  let kyo = 0;
  let hap = 0;

  filteredB.forEach(str => {

    if (checkMap.has(str)) {

      checkMap.get(str) > 1 ?
        checkMap.set(str, checkMap.get(str) - 1) :
        checkMap.delete(str)

      kyo++;
      hap++;

    } else {
      hap++;
    }

  })

  for (let [key, value] of checkMap) {
    hap += value;
  }

  hap === 0 ? answer = 1 : answer = kyo / hap;


  return parseInt((answer * 65536))

}




































