const getObjectKeys = (obj) => {
  let arr = [];
  for (const key in obj)
    arr.push(key)
  return arr
};

export default getObjectKeys