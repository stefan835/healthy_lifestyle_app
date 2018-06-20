const formatTime = (time) => {
  const newTime = time.split('');
  newTime[1] === 'a' || newTime[1] === 'p' ?
    newTime.splice(1, 0, ':00')
    :
    newTime.splice(2, 0, ':00');
  newTime.join();
  return newTime
};

export default formatTime