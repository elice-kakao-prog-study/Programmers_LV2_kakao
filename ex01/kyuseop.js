function solution(cacheSize, cities) {
  const cache = [];
  let answer = 0;
  cities.forEach(city => {
    const cityName = city.toLowerCase();
    const cacheIndex = cache.indexOf(cityName);
    if (cacheIndex >= 0) {
      answer += 1;
      cache.push(cache.splice(cacheIndex, 1)[0])
    } else {
      cache.length === cacheSize && cache.shift();
      cacheSize !== 0 && cache.push(cityName);
      answer += 5;
    }
  })
  return answer;
}