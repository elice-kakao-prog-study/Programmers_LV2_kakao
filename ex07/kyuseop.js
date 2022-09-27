function mapping(map, input) {

  if (input[0] === 'Change' ||
    (input[0] === 'Enter' && map.get(input[1]) !== input[2])) {
    map.set(input[1], input[2]);
  }

}

function solution(record) {

  const answer = [];

  const recordMap = new Map();

  const filtered = record.map(str => {

    const division = str.split(" ");
    mapping(recordMap, division)

    return ({
      cursor: division[0],
      id: division[1],
    })

  })

  filtered.forEach(data => {

    if (data.cursor === 'Enter') {
      answer.push(`${recordMap.get(data.id)}님이 들어왔습니다.`)
    }

    else if (data.cursor === 'Leave') {
      answer.push(`${recordMap.get(data.id)}님이 나갔습니다.`)
    }

  })

  return answer;
}