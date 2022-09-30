function solution(files) {
  const strRegex = /[^0-9]+/;
  const numRegex = /[0-9]+/;

  return files.sort((a, b) => {
    const headA = a.match(strRegex)[0].toLowerCase();
    const headB = b.match(strRegex)[0].toLowerCase();

    if (headA < headB) return -1;
    if (headA > headB) return 1;

    // head 값이 같을 경우
    const numberA = a.match(numRegex)[0].replace(/^0+/, "");
    const numberB = b.match(numRegex)[0].replace(/^0+/, "");

    return numberA - numberB;
  });
}
