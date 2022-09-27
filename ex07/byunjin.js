const solution = (record) => {
  const nickName = {};
  const msg = [];
  record.forEach((elArr) => {
    const [active, uid, nick] = elArr.split(' ');
    if (active !== 'Leave') {
	    nickName[uid] = nick;
    }
    if (active !== 'Change') {
      msg.push({ uid, active });
    }
  })
  return msg.map(({uid, active}) => `${nickName[uid]}님이 ${active === 'Enter' ? '들어왔습니다' : '나갔습니다'}.`);
}
