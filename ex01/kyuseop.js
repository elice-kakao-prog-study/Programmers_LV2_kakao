function solution(cacheSize, cities) {
  const cache = [];
  let answer = 0;
  cities.forEach(city => {
    const cityName = city.toLowerCase();
    const cacheIndex = cache.indexOf(cityName);
    if (cacheIndex >= 0) {
      answer += 1;
      cache.push(cache.splice(cacheIndex, 1)[0]) // splice는 배열을 반환한다는 것. cache.splice(cacheIndex, 1)
    } else {                                     // push해서 오류 발생했었음.
      cache.length === cacheSize && cache.shift();
      cacheSize !== 0 && cache.push(cityName);   // cacheSize가 0임에 유의해야 한다.
      answer += 5;
    }
  })
  return answer;
}