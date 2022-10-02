// #이 포함된 음표를 하나의 문자열로 두기 위한 객체 선언
const newNote = {
  'C': 'C', 
  'C#': 'P', 
  'D': 'D',
  'D#': 'O',
  'E': 'E',
  'F': 'F',
  'F#': 'I', 
  'G': 'G', 
  'G#': 'U', 
  'A': 'A', 
  'A#': 'Y', 
  'B': 'B',
};

// 기존 문자열을 새로운 문자열로 만드는 함수
const noteChange = (str) => {
  const input = str.split('');
  const newStr = [];
  for (let idx = 0; idx < input.length; idx++) {
    const letter = input[idx];
    if(letter === '#') {
      newStr[newStr.length - 1] = newNote[`${newStr[newStr.length - 1]}#`];
    } else {
      newStr.push(letter);
    }
  }
  return newStr.join('');
}

// 주어진 두개의 시간의 차이를 구해 재생시간을 구하는 함수
const timeChange = (time1, time2) => {
  const [h1, m1] = time1.split(':').map(Number);
  const [h2, m2] = time2.split(':').map(Number);
  return (h2*60 + m2) - (h1*60 + m1);
}

function solution(m, musicinfos) {
  const input = noteChange(m);
  const infoFiltered =  musicinfos.map((el) => {
    const [time1, time2, name, note] = el.split(',');
    const time = timeChange(time1, time2);
    const noteChanged = noteChange(note);

    // 재생시간 만큼 음표를 붙여서 전체 악보를 만드는 함수
    const noteFullCreate = () => {
      let noteMade = '';
      for (let i = 0; i < time; i++) {
        if (!time) {
          break;
        } else {
      		let repeat = noteChanged.length * Math.floor(noteMade.length / noteChanged.length);
          noteMade = noteMade + (noteChanged.charAt(i) ? noteChanged.charAt(i) : noteChanged.charAt(i - repeat));
        }
      }
      return noteMade;
    }
    
    // 재생시간, 제목, 재생시간만큼의 악보
    return { time, name, note: noteFullCreate()};
  });

  // 주어진 악보가 포함된 요소만 남김
  const rslt = infoFiltered.filter(({ time, name, note }) => note.includes(input));

  // 재생시간이 긴 애들을 부터 내림차순 정렬
  rslt.sort((a, b) => b.time - a.time);

  return rslt.length ? rslt[0].name : '(None)'
};
