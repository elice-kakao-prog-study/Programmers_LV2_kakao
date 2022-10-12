const RRcnt = (n) => {
  if (n === 2) {
    return 0;
  }
  return (RRcnt(n-1) + 1)*4;
}

const search = (n, p) => {
  if (n === 1) {
    return 'Rr'
  } 
  
  const total = Math.pow(4, n-1);
  const sector = RRcnt(n);
  const rest = p % 4;
  const half = total / 2;
  
  if (p <= sector) {
    return 'RR';
  }
  
  if (p > total - sector) {
    return 'rr';
  }
  
  const isRr = ((p - sector) % 8) ? (Math.floor((p - sector) / 8)) % 2 === 0 : (Math.floor((p - sector) / 8 - 1)) % 2 === 0;
  const str = isRr ? 'RR Rr Rr rr RR Rr Rr rr' : 'rr rr rr rr RR RR RR RR';
  const strArr = str.split(' ');
  const idx = (p - sector) % 8;
  console.log((Math.floor((p - sector) / 8)))
  return idx ? strArr[idx - 1] : strArr[7];
}

function solution(queries) {
  const rslt = [];
  for (let idx = 0; idx < queries.length; idx++) {
    const [n, p] = queries[idx];
    rslt.push(search(n,p));
  }
  return rslt;
}
