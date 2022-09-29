function solution(record) {
  const answer = [];
  const obj = {};

  record.forEach((info) => {
    const [state, id, name] = info.split(" ");

    if (state === "Enter") {
      obj[id] = name;
      answer.push([id, "님이 들어왔습니다."]);
    } else if (state === "Leave") {
      answer.push([id, "님이 나갔습니다."]);
    } else {
      obj[id] = name;
    }
  });

  return answer.map((info) => obj[info[0]] + info[1]);
}
