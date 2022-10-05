function solution(m, musicinfos) {
  const result = [];
  const regExp = (s) => {
    return s
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a");
  };

  // 재생 시간 계산
  const calcTime = (start, end) => {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    return endHour * 60 + endMinute - (startHour * 60 + startMinute);
  };

  musicinfos.forEach((info) => {
    const arr = info.split(",");
    const [playTime, title, melodyInfo] = [
      calcTime(arr[0], arr[1]),
      arr[2],
      regExp(arr[3]),
    ];
    const melodyLen = regExp(arr[3]).length;
    const melody =
      melodyLen >= playTime
        ? melodyInfo.slice(0, playTime)
        : melodyInfo.repeat(parseInt(playTime / melodyLen)) +
          melodyInfo.slice(0, playTime % melodyLen);

    if (melody.includes(regExp(m))) {
      result.push([playTime, title]);
    }
  });

  return result.length ? result.sort((a, b) => b[0] - a[0])[0][1] : "(None)";
}
