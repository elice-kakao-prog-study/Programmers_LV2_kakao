function solution(files) {

  const transformed = files.map(file => {
    let headFinishIndex, NumberFinishIndex;
    const n = file.length;
    for (let i = 0; i < n; i++) {
      if (file[i] !== " " && !(Number.isNaN(+file[i]))) {
        headFinishIndex = i;
        break;
      }
    }
    for (let i = headFinishIndex; i < n; i++) {
      if (Number.isNaN(+file[i])) {
        NumberFinishIndex = i;
        break;
      }
    }
    let tail;
    if (!NumberFinishIndex) {
      NumberFinishIndex = n;
      tail = ''
    } else {
      tail = file.slice(NumberFinishIndex)
    }
    return [file.slice(0, headFinishIndex), file.slice(headFinishIndex, NumberFinishIndex), tail]
  })

  console.log(transformed)

  transformed.sort((a, b) => {
    const head1 = a[0].toLowerCase();
    const head2 = b[0].toLowerCase();
    const number1 = a[1];
    const number2 = b[1];
    if (head1 === head2) {
      return number1 - number2
    } else {
      if (head1 > head2) return 1;
      else if (head1 < head2) return -1;
    }
  })


  return transformed.map(x => x.join(""));
}


function solution(files) {

  const reg = /^[a-zA-Z .-]+|\d{1,5}/g
  return (
    files.sort((a, b) => {

      let [head1, number1] = a.match(reg);
      let [head2, number2] = b.match(reg);

      head1 = head1.toLowerCase();
      head2 = head2.toLowerCase();

      if (head1 > head2) return 1;
      else if (head1 < head2) return -1;
      else return number1 - number2;
    })
  )
}


console.log(solution(["F-15"]))



// function solution(files) {
//   files = files.sort((a, b) => specialSort(a, b));
//   return files;
// }
// function numIdxFinder(str) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       counter++;
//       continue;
//     }
//     if (Number.isInteger(+str[i])) break;
//     counter++;
//   }
//   return counter;
// }
// function numFinishIdxFinder(str) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') break;
//     if (!Number.isInteger(+str[i])) break;
//     counter++;
//   }
//   return counter;
// }
// function specialSort(str1, str2) {
//   const str1Num = numIdxFinder(str1);
//   const str2Num = numIdxFinder(str2);
//   const str1FinishNum = numFinishIdxFinder(str1.slice(str1Num)) + str1Num;
//   const str2FinishNum = numFinishIdxFinder(str2.slice(str2Num)) + str2Num;
//   const head1 = str1.slice(0, str1Num).toLowerCase();
//   const head2 = str2.slice(0, str2Num).toLowerCase();
//   const number1 = str1.slice(str1Num, str1FinishNum);
//   const number2 = str2.slice(str2Num, str2FinishNum);
//   if (head1 > head2) return 1;
//   else if (head1 < head2) return -1;
//   else return number1 - number2;
// }