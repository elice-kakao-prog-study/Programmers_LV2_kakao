// 조합
const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations
      .map((el) => [fixed, ...el])
      .map((v) => v.join(""));

    results.push(...attached);
  });

  return results;
};

function solution(orders, course) {
  const answer = [];

  for (let i = 0; i < course.length; i++) {
    let obj = {};

    orders.forEach((order) => {
      const menus = getCombinations(order.split("").sort(), course[i]);
      console.log(menus);

      menus.forEach((menu) => {
        obj[menu] ? obj[menu]++ : (obj[menu] = 1);
      });
    });

    const max = Math.max(...Object.values(obj));
    if (max < 2) continue;

    for (const key in obj) {
      if (obj[key] === max) answer.push(key);
    }
  }

  return answer.sort();
}
