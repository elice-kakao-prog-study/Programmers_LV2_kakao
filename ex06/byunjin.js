function solution(msg) {
  const dict = 'abcdefghijklmnopqrstuvwxyz'.split('').map((el) => el.toUpperCase());
  const input = msg.split('');
  const rslt = [];
  while (msg !== rslt.join('')) {

    let msgIdx = rslt.join('').length;
    let addLetter = () => input[msgIdx];
    let fullLetter = addLetter();
    let dictIdx = dict.indexOf(fullLetter);
    while (dictIdx >= 0) {
      msgIdx++;
      if (!addLetter()) {
        break;
      }
      fullLetter = fullLetter + addLetter();
      dictIdx = dict.indexOf(fullLetter);
    }

    addLetter() && dict.push(fullLetter);
    rslt.push(addLetter() ? fullLetter.slice(0, fullLetter.length - 1) : fullLetter);
  }
  return rslt.map((letter) => dict.indexOf(letter) + 1);
}