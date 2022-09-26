function solution(cacheSize, cities) {
  cities = cities.map((v) => v.toLowerCase());
  if (cacheSize === 0) return cities.length * 5;
  let res = 0;
  let cache = [];
  cities.map((v) => {
    let idx = cache.findIndex((x) => x === v);
    if (idx !== -1) {
      cache.splice(idx, 1);
      res += 1;
    } else if (cache.length === cacheSize) {
      cache.shift();
      res += 5;
    } else {
      res += 5;
    }
    cache.push(v);
  });
  return res;
}
