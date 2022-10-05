function solution(expression) {

  const pri = [
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];
  let res = [];

  function operate(a, b, oper) {
    if (oper === '*') return a + b;
    else if (oper === "-") return a - b;
    else return a * b;
  }

  for (let pri1 of pri) {

    let arr = expression.split(/(\D)/);

    for (let oper of pri1) {
      while (arr.includes(oper)) {
        let idx = arr.indexOf(oper);
        let a = arr[idx - 1];
        let b = arr[idx + 1]
        arr.splice(idx - 1, 3, operate(Number(a), Number(b), oper));
      }

    }
    res.push(Math.abs(arr[0]));
  }
  return Math.max(...res);
}

console.log(solution("2-990-5+2"))

// function solution(expression) {

//   const reg1 = /[^0-9]+/g;
//   const reg2 = /[0-9]+/g;
//   const operators = expression.match(reg1);
//   const nums = expression.match(reg2).map(Number);
//   const operatorSet = [...new Set(operators)];
//   const l = operatorSet.length

//   const priorities = [];
//   const temp = [];
//   const check = Array.from({ length: l }, () => 0);
//   function DFS(L) {
//     if (L === l) {
//       priorities.push(temp.slice());
//     } else {
//       for (let i = 0; i < operatorSet.length; i++) {
//         if (check[i] === 0) {
//           check[i] = 1;
//           temp[L] = operatorSet[i];
//           DFS(L + 1);
//           check[i] = 0;
//         }
//       }
//     }
//   }
//   DFS(0)

//   let answer = Number.MIN_SAFE_INTEGER;

//   function totalMaker(operator, copy) {
//     return Math.max(answer, Math.abs(copy.reduce((pre, cur) => {
//       switch (operator) {
//         case '*':
//           return pre * cur;
//         case '-':
//           return pre - cur;
//         case '+':
//           return pre + cur;
//       }
//     })))
//   }

//   function add(a, b) {
//     return a + b;
//   }

//   function minus(a, b) {
//     return a - b;
//   }

//   function multi(a, b) {
//     return a * b;
//   }

//   function operate(operator, operatorArr, numsArr) {
//     const m = operatorArr.length;


//     for (let j = 0; j < m; j++) {
//       if (operatorArr[j] === operator) {
//         if (operatorArr[j] === operatorArr[j + 1]) {
//           switch (operator) {
//             case '*':
//               numsArr[j + 1] = multi(numsArr[j], numsArr[j + 1]);
//               break;
//             case '-':
//               numsArr[j + 1] = minus(numsArr[j], numsArr[j + 1])
//               break;
//             case '+':
//               numsArr[j + 1] = add(numsArr[j], numsArr[j + 1])
//               break;
//           }
//           numsArr[j] = null;
//         } else {
//           switch (operator) {
//             case '*':
//               numsArr[j] = multi(numsArr[j], numsArr[j + 1]);
//               break;
//             case '-':
//               numsArr[j] = minus(numsArr[j], numsArr[j + 1])
//               break;
//             case '+':
//               numsArr[j] = add(numsArr[j], numsArr[j + 1])
//               break;
//           }
//           numsArr[j + 1] = null;
//         }
//       }
//     }
//     operatorArr = operatorArr.filter(o => o !== operator)
//     numsArr = numsArr.filter(num => num !== null);
//     return [operatorArr, numsArr]
//   }

//   priorities.forEach(priority => {
//     const n = priority.length;
//     let operatorsCopy = operators.slice();
//     let numsCopy = nums.slice();
//     for (let i = 0; i < n; i++) {
//       if (i === n - 1) answer = totalMaker(priority[i], numsCopy)
//       else {
//         [operatorsCopy, numsCopy] = operate(priority[i], operatorsCopy, numsCopy)
//       }

//     }

//   })


//   return answer;
// }

















// function solution(expression) {

//   const reg1 = /[^0-9]+/g;
//   const reg2 = /[0-9]+/g;
//   const operators = expression.match(reg1);
//   const nums = expression.match(reg2).map(Number);
//   const operatorSet = [...new Set(operators)];
//   const l = operatorSet.length

//   const priorities = [];
//   const temp = [];
//   const check = Array.from({ length: l }, () => 0);
//   function DFS(L) {
//     if (L === l) {
//       priorities.push(temp.slice());
//     } else {
//       for (let i = 0; i < operatorSet.length; i++) {
//         if (check[i] === 0) {
//           check[i] = 1;
//           temp[L] = operatorSet[i];
//           DFS(L + 1);
//           check[i] = 0;
//         }
//       }
//     }
//   }
//   DFS(0)

//   let answer = Number.MIN_SAFE_INTEGER;

//   function totalMaker(operator, copy) {
//     return Math.max(answer, Math.abs(copy.reduce((pre, cur) => {
//       switch (operator) {
//         case '*':
//           return pre * cur;
//         case '-':
//           return pre - cur;
//         case '+':
//           return pre + cur;
//       }
//     })))
//   }

//   priorities.forEach(priority => {
//     const n = priority.length;
//     let operatorsCopy = operators.slice();
//     let numsCopy = nums.slice();
//     for (let i = 0; i < n; i++) {
//       if (i === n - 1) {
//         // if (priority[i] === '*') {
//         //   // answer = Math.max(answer, Math.abs(numsCopy.reduce((pre, cur) => pre * cur)));
//         //   answer = totalMaker('*', numsCopy)
//         // }
//         // else if (priority[i] === '-') {
//         //   // answer = Math.max(answer, Math.abs(numsCopy.reduce((pre, cur) => pre - cur)));
//         //   answer = totalMaker('-', numsCopy)
//         // } else {
//         //   // answer = Math.max(answer, Math.abs(numsCopy.reduce((pre, cur) => pre + cur)));
//         //   answer = totalMaker('+', numsCopy)
//         // }
//         answer = totalMaker(priority[i], numsCopy)

//       } else {
//         const m = operatorsCopy.length;
//         if (priority[i] === '*') {
//           for (let j = 0; j < m; j++) {
//             if (operatorsCopy[j] === '*') {
//               if (operatorsCopy[j] === operatorsCopy[j + 1]) {
//                 numsCopy[j + 1] = numsCopy[j] * numsCopy[j + 1];
//                 numsCopy[j] = null;
//               } else {
//                 numsCopy[j] = numsCopy[j] * numsCopy[j + 1];
//                 numsCopy[j + 1] = null;
//               }
//             }
//           }
//           operatorsCopy = operatorsCopy.filter(operator => operator !== '*')
//           numsCopy = numsCopy.filter(num => num !== null);
//         }
//         else if (priority[i] === '-') {
//           for (let j = 0; j < m; j++) {
//             if (operatorsCopy[j] === '-') {
//               if (operatorsCopy[j] === operatorsCopy[j + 1]) {
//                 numsCopy[j + 1] = numsCopy[j] - numsCopy[j + 1];
//                 numsCopy[j] = null;
//               } else {
//                 numsCopy[j] = numsCopy[j] - numsCopy[j + 1];
//                 numsCopy[j + 1] = null;
//               }
//             }
//           }
//           operatorsCopy = operatorsCopy.filter(operator => operator !== '-')
//           numsCopy = numsCopy.filter(num => num !== null);
//         } else {
//           for (let j = 0; j < m; j++) {
//             if (operatorsCopy[j] === '+') {
//               if (operatorsCopy[j] === operatorsCopy[j + 1]) {
//                 numsCopy[j + 1] = numsCopy[j] + numsCopy[j + 1];
//                 numsCopy[j] = null;
//               } else {
//                 numsCopy[j] = numsCopy[j] + numsCopy[j + 1];
//                 numsCopy[j + 1] = null;
//               }
//             }
//           }
//           operatorsCopy = operatorsCopy.filter(operator => operator !== '+')
//           numsCopy = numsCopy.filter(num => num !== null);
//         }
//       }

//     }

//   })


//   return answer;
// }






// function solution(expression) {

//   const reg1 = /[^0-9]+/g;
//   const reg2 = /[0-9]+/g;
//   const operators = expression.match(reg1);
//   const nums = expression.match(reg2).map(Number);
//   const operatorSet = [...new Set(operators)];
//   const l = operatorSet.length

//   const priorities = [];
//   const temp = [];
//   const check = Array.from({ length: l }, () => 0);
//   function DFS(L) {
//     if (L === l) {
//       priorities.push(temp.slice());
//     } else {
//       for (let i = 0; i < operatorSet.length; i++) {
//         if (check[i] === 0) {
//           check[i] = 1;
//           temp[L] = operatorSet[i];
//           DFS(L + 1);
//           check[i] = 0;
//         }
//       }
//     }
//   }
//   DFS(0)

//   let answer = Number.MIN_SAFE_INTEGER;

//   priorities.forEach(priority => {
//     const n = priority.length;
//     let operatorsCopy = operators.slice();
//     let numsCopy = nums.slice();
//     for (let i = 0; i < n; i++) {
//       if (i === n - 1) {
//         if (priority[i] === '*') {
//           answer = Math.max(answer, Math.abs(numsCopy.reduce((pre, cur) => pre * cur)));
//         }
//         else if (priority[i] === '-') {
//           answer = Math.max(answer, Math.abs(numsCopy.reduce((pre, cur) => pre - cur)));
//         } else {
//           answer = Math.max(answer, Math.abs(numsCopy.reduce((pre, cur) => pre + cur)));
//         }
//       } else {
//         const m = operatorsCopy.length;
//         if (priority[i] === '*') {
//           for (let i = 0; i < m; i++) {
//             if (operatorsCopy[i] === '*') {
//               numsCopy[i] = numsCopy[i] * numsCopy[i + 1];
//               numsCopy[i + 1] = null;
//             }
//           }
//           operatorsCopy = operatorsCopy.filter(operator => operator !== '*')
//           numsCopy = numsCopy.filter(num => num !== null);
//         }
//         else if (priority[i] === '-') {
//           for (let i = 0; i < m; i++) {
//             if (operatorsCopy[i] === '-') {
//               numsCopy[i] = numsCopy[i] - numsCopy[i + 1];
//               numsCopy[i + 1] = null;
//             }
//           }
//           operatorsCopy = operatorsCopy.filter(operator => operator !== '-')
//           numsCopy = numsCopy.filter(num => num !== null);
//         } else {
//           for (let i = 0; i < m; i++) {
//             if (operatorsCopy[i] === '+') {
//               numsCopy[i] = numsCopy[i] + numsCopy[i + 1];
//               numsCopy[i + 1] = null;
//             }
//           }
//           operatorsCopy = operatorsCopy.filter(operator => operator !== '+')
//           numsCopy = numsCopy.filter(num => num !== null);
//         }
//       }
//     }


//   })

//   return answer;
// }