function solution(orders, course){

  const recordMap = new Map();
  const countMap = new Map();

  orders.forEach(order => {
    const temp = [];

    function DFS(L, s, m){
      if(L === m){
        const cursor = temp.slice().sort().join("");

        recordMap.has(cursor) ? recordMap.set(cursor, recordMap.get(cursor) + 1) : recordMap.set(cursor, 1)
        const l = cursor.length;
        countMap.has(l) ? countMap.set(l, Math.max(countMap.get(l), recordMap.get(cursor))) : countMap.set(l, 1)
        
      }else{
        for(let i = s; i < order.length; i++){
          temp[L] = order[i];
          DFS(L + 1, i + 1, m);
        }
      }
    }

    course.forEach(x => {
      DFS(0, 0, x)
    })
  })


  const answer = [];
  for(let [key, value] of recordMap){
    if(value >= 2 && value === countMap.get(key.length)){
      answer.push(key)
    }
  }
  return answer.sort();

}


console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4]))

// function solution(orders, course) {
    
//   const recordMap = new Map();
  
  
//   orders.forEach(order => {
      
//       const temp = [];
      
//       function DFS(L, s, x){
//         if(L === x){
//           const cursor = temp.sort().join("")
//           recordMap.has(cursor) ? recordMap.set(cursor, recordMap.get(cursor) + 1) : recordMap.set(cursor, 1)
//       }else{
//         for(let i = s; i < order.length; i++){
//           temp[i] = order[i];
//           DFS(L + 1, i + 1, x)
//         }
//       }
//       }
//       course.forEach(x => {
          
//           DFS(0, 0, x)
//       })
      
//   })
//   const answer = [];
//   for(let [key, value] of recordMap){
//       if(value >= 2){
//           answer.push(key);
//       }
//   }
//   return answer.sort()
  
// }

































// function solution(orders, course) {
//   var answer = [];
//   const countMap = new Map();
//   const courseMap = new Map();
//   for(let x of course){
//       courseMap.set(x, 0);
//   }
//   function DFS(v, start, finish, temp, arr){
//       if(v === finish){
//           const sample = temp.join("");
//           if(countMap.has(sample)) countMap.set(sample, countMap.get(sample) + 1);
//           else countMap.set(sample, 1)
//       }else{
//           for(let i = start; i < arr.length; i++){
//               temp[v] = arr[i];
//               DFS(v + 1, i + 1, finish, temp, arr);
//           }
//       }
//   }
//   for(let order of orders){
//       order = order.split("").sort();
//       for(let i of course){
//           const temp = [];
//           DFS(0, 0, i, temp, order)
//       }
//   }
//   for(let [a, b] of countMap){
//       if(courseMap.get(a.length) < b){
//           courseMap.set(a.length, b);
//       }
//   }
  
//   for(let [a, b] of countMap){
//       if(b === courseMap.get(a.length) && b >= 2){
//           answer.push(a)
//       }
//   }
  
//   answer.sort();
//   return answer;
// }
