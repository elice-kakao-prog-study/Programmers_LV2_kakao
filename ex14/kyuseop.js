function solution(m, musicinfos) {


  const allData = [];

  musicinfos.forEach(x => {
    const arr = x.split(',');
    const time1 = arr[0].split(":");
    const time2 = arr[1].split(":");
    const calculatedTime = (time2[0] - time1[0]) * 60 + (time2[1] - time1[1]);
    const temp = [];
    for (let i = 0; i < arr[3].length; i++) {
      if (arr[3][i] === '#') continue;
      if (arr[3][i + 1] === '#') {
        temp.push(arr[3].substr(i, 2));
      } else {
        temp.push(arr[3][i])
      }
    }
    let data = ""
    let count = 0;
    for (let i = 0; i < calculatedTime; i++) {
      data += temp[i % temp.length];
    }
    console.log(data)
    allData.push([data, arr[2], calculatedTime, count++]);

  })
  const answerArray = [];
  allData.forEach(data => {
    let isTrue = false;
    const sampling = data[0].split(m)
    const length = sampling.length;
    for (let i = 0; i < length - 1; i++) {
      if (i === 0 && sampling[i] === "" && sampling[i + 1][0] !== "#") {
        isTrue = true;
        break;
      }
      else {
        if (sampling[i + 1][0] !== '#') {
          isTrue = true;
          break;
        }
      }

    }
    // if (sampling[length - 1] === "") isTrue = true;
    if (isTrue) answerArray.push(data)

  })

  if (answerArray.length === 0) return '(None)';

  answerArray.sort((a, b) => {
    if (a[2] === b[2]) return a[3] - b[3];
    else if (a[2] < b[2]) return 1;
    else return -1;
  })
  return answerArray[0][1];

}

solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB"])

// replace('정규표현식/g', callback가능) map처럼

// function removeSarp(str){
//   const newStr = str.replace(/[A-Z]#/g, x=>x[0].toLowerCase());
//   return newStr;
// } //샾없애는 함수 replace두번째 인자값으로 문자열을 return하는 함수가능함.

// m = m
//     .replace(/(C#)/g, "c")
//     .replace(/(D#)/g, "d")
//     .replace(/(F#)/g, "f")
//     .replace(/(G#)/g, "g")
//     .replace(/(A#)/g, "a");