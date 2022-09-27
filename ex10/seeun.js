function solution(files) {
  const reg = /^[a-zA-Z .-]+|\d{1,5}/g;
  return files.sort((a, b) => {
    let [aHead, aNum] = a.match(reg);
    let [bHead, bNum] = b.match(reg);
    //console.log(aHead,aNum);
    //console.log(bHead,bNum);

    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();

    if (aHead < bHead) return -1;
    else if (aHead > bHead) return 1;
    else return aNum - bNum;
  });
}
