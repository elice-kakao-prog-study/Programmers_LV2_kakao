function solution(m, musicinfos) {
  let answer = [];
  m = m
    .replace(/(C#)/g, "c")
    .replace(/(D#)/g, "d")
    .replace(/(F#)/g, "f")
    .replace(/(G#)/g, "g")
    .replace(/(A#)/g, "a");
  for (let x of musicinfos) {
    let [time1, time2, title, info] = x.split(",");
    const [h1, m1] = time1.split(":");
    const [h2, m2] = time2.split(":");

    let time = (h2 - h1) * 60 + (m2 - m1);
    console.log(time);
    info = info
      .replace(/(C#)/g, "c")
      .replace(/(D#)/g, "d")
      .replace(/(F#)/g, "f")
      .replace(/(G#)/g, "g")
      .replace(/(A#)/g, "a");

    let str = "";
    for (let i = 0; i < time; i++) {
      str += info[i % info.length];
    }
    console.log(str, m);
    if (str.includes(m)) answer.push([title, time]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.length ? answer[0][0] : "(None)";
}

console.log(
  solution("ABCDEFG", ["11:50,12:04,HELLO,CDEFGAB", "12:57,13:11,BYE,CDEFGAB"])
);
