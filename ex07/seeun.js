function solution(record) {
  let answer = [];
  let log = [];
  let usermap = new Map();
  for (let x of record) {
    let tmp = x.split(" ");
    if (tmp[0] === "Enter") {
      log.push([tmp[1], "님이 들어왔습니다."]);
      usermap.set(tmp[1], tmp[2]);
    } else if (tmp[0] === "Leave") {
      log.push([tmp[1], "님이 나갔습니다."]);
    } else if (tmp[0] === "Change") {
      usermap.set(tmp[1], tmp[2]);
    }
  }

  for (let x of log) {
    answer.push(usermap.get(x[0]) + x[1]);
  }
  return answer;
}
