function initialSetting(map) {

  const num = 90;

  for (let i = 65; i <= num; i++) {
    map.set(String.fromCharCode(i), i - 64)
  }

}

function solution(msg) {

  const answer = [];
  const dictionary = new Map();
  initialSetting(dictionary)
  let num = 27;
  const input = msg.split("");

  while (input.length) {
    const checkingForLast = input.slice(0).join("")
    if (dictionary.has(checkingForLast)) {
      answer.push(dictionary.get(checkingForLast))
      break;
    } else {
      let n = 0;

      while (--n) {
        const normalChecking = input.slice(0, n).join("")
        if (dictionary.has(normalChecking)) {
          answer.push(dictionary.get(normalChecking))
          dictionary.set(input.slice(0, n + 1).join(""), num)
          input.splice(0, input.length + n)
          break;
        }
      }

      ++num;
    }
  }

  return answer;
}

solution("KAKAO")