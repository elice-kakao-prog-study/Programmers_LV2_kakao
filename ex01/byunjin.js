function solution(cacheSize, cities) {
  let cnt = 0;
  const caches = [];
  const idxList = new Array(cacheSize).fill(-1);
  [...cities] = cities.map((el) => el.toLowerCase());

  for (let idx = 0; idx < cities.length; idx++) {
    const city = cities[idx];
    const hitIdx = caches.indexOf(city);
    if (hitIdx >= 0) {
      cnt += 1;
      idxList[hitIdx] = idx;
    } else if (caches.length < cacheSize) {
      cnt += 5;
      idxList[caches.length] = idx;
      caches.push(city);
    } else {
      cnt += 5;
      const lru = idxList.indexOf(Math.min(...idxList));
      caches[lru] = city;
      idxList[lru] = idx;
    }
  }
  return cnt;
}
