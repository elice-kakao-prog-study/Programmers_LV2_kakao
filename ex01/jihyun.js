function solution(cacheSize, cities) {
  let totalTime = 0;
  const cache = [];

  if (!cacheSize) return cities.length * 5;

  cities.forEach((city) => {
    city = city.toLowerCase(); // 대소문자 구분 X
    const index = cache.indexOf(city);

    // 1. city가 cache에 있는 경우
    if (index >= 0) {
      cache.splice(index, 1);
      totalTime += 1;
    }
    // 2. city가 cache에 없는 경우
    else {
      if (cache.length >= cacheSize) {
        cache.shift();
      }
      totalTime += 5;
    }

    cache.push(city);
  });

  return totalTime;
}
