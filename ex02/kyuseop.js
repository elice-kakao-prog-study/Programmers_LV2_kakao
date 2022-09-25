// 배열 껍질 벗기기 방법에 대해 생각해봐야 함.

function solution(s) {
  let filtered = s.slice(2, -2).split('},{').map(x => x.split(',').map(Number)).sort((a, b) => a.length - b.length)

  if (filtered.length <= 1) {
    return filtered[0];
  }


  // filtered = [].concat(...filtered) // 제일 빠름

  // filtered = filtered.flatMap(x => x) // 그 다음 빠름

  // 제일 느림...
  filtered = filtered.reduce((pre, cur) => {
    return [...pre, ...cur]
  }, [])

  // filtered = new Set(filtered.flatMap(x => x))
  // return new Array(...filtered)

  return Array(...(new Set(filtered)));
}


console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'))





// set 요소가 한 개일 때 spread 연산자 ... 사용 시 오류 발생!
// function solution(s) {
//   let filtered = s.slice(2, -2).split('},{').map(x => x.split(',').map(Number)).sort((a, b) => a.length - b.length)


//   console.log(filtered)
//   filtered = [].concat(...filtered)
//   console.log(filtered)
//   console.log(new Set(filtered))
//   // filtered = filtered.flatMap(x => x)

//   // filtered = filtered.reduce((pre, cur) => {
//   //   return [...pre, ...cur]
//   // }, [])

//   // filtered = new Set(filtered.flatMap(x => x))

//   //배열 안에 set 요소 한 개가 배열의 요소로서 통째로 들어감...
//   // return new Array(...filtered)

//   // return new Array((new Set(filtered)));

//   // set의 요소 하나하나 배열로 넣어주려면 ... 연산자 사용해야함.
//   return new Array(...(new Set(filtered)));
// }

// console.log(solution('{{123}}'))