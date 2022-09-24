function solution(fees, records) {
  const [h, f, t, addf] = fees;
  const calcFee = (longArg) => longArg <= h ? f : f + Math.ceil((longArg - h)/t)*addf;
  
  const inObj = {};
  const outObj = {};
  
  const calcLong = (inT, outT, carNumArg) => {
      const [inH, inM] = inT.split(':').map(Number);
      const [outH, outM] = outT.split(':').map(Number);
      const long = (outH*60 + outM) - (inH*60 + inM);
      outObj[carNumArg] = outObj[carNumArg] ? outObj[carNumArg] + long : long;
      delete inObj[carNumArg];
  }
  
  records.forEach((record, idx) => {
    const [time, carNum, move] = record.split(' ');
    if (move === 'IN') {
      inObj[carNum] = time;
    } else {
      calcLong(inObj[carNum], time, carNum);
    }
  })

  Object.keys(inObj).forEach((carNum) => calcLong(inObj[carNum], '23:59', carNum));

  const rslt = Object.keys(outObj).map((key) => {
    return {
      num: Number(key),
      fee: calcFee(outObj[key])
    }
  });
  
  return rslt.sort((a, b) => a.num - b.num).map(({fee}) => fee);
}