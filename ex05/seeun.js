function solution(fees, records) {
  const parkTime = {};
  records.forEach((r) => {
    let [time, num, type] = r.split(" ");
    let [h, m] = time.split(":");
    time = h * 60 + m * 1;
    if (!parkTime[num]) parkTime[num] = 0;
    if (type === "IN") parkTime[num] += 1439 - time; // 23:59 => 1439
    if (type === "OUT") parkTime[num] -= 1439 - time;
  });

  let answer = [];
  for (let [car, time] of Object.entries(parkTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
