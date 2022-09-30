function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  let intersection = 0;
  let union = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    const sliceStr = str1.slice(i, i + 2);
    if (sliceStr.match(/[A-Za-z]{2}/)) arr1.push(sliceStr.toUpperCase());
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const sliceStr = str2.slice(i, i + 2).toUpperCase();
    if (sliceStr.match(/[A-Za-z]{2}/)) arr2.push(sliceStr.toUpperCase());
  }

  if (!arr1.length && !arr2.length) return 65536;

  const set = new Set([...arr1, ...arr2]);

  set.forEach((s) => {
    const a = arr1.filter((v) => v === s).length;
    const b = arr2.filter((v) => v === s).length;

    intersection += Math.min(a, b);
    union += Math.max(a, b);
  });

  return Math.floor((intersection / union) * 65536);
}
