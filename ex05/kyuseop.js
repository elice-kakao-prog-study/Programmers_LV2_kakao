function solution(fees, records) {

  const [baseTime, baseFee, unit, unitPrice] = fees;

  const recordMap = new Map();

  records.forEach(record => {
    let [time, carNumber, cursor] = record.split(" ")
    const filteredTime = time.split(":").map(Number)
    const calculatedTime = filteredTime[0] * 60 + filteredTime[1];
    carNumber = Number(carNumber)
    if (recordMap.has(carNumber)) {
      const recordValue = recordMap.get(carNumber)
      if (cursor === 'IN') {
        recordValue[0] = calculatedTime;
        recordValue[2] = 'IN';
      } else {
        recordValue[1] += calculatedTime - recordValue[0];
        recordValue[2] = 'OUT';
      }

    } else {
      recordMap.set(carNumber, [calculatedTime, 0, cursor])
    }
  })

  let answer = [];
  const lastTime = 23 * 60 + 59;
  for (let [carNumber, records] of recordMap) {
    if (records[2] === 'IN') {
      records[1] += lastTime - records[0];
    }
    const totalFee = records[1] <= baseTime ? baseFee : baseFee + Math.ceil((records[1] - baseTime) / unit) * unitPrice
    answer.push([carNumber, totalFee])
  }

  // 작은 차량 번호순으로 정렬 후 배열 안 배열의 1이 비용이기 때문에 map으로 각각 arr[1]로 바꿈.
  return answer.sort((a, b) => a[0] - b[0]).map(arr => arr[1]);
}


