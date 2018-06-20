import {getObjectKeys} from "../getObjectKeys";

const getDayActivities = day => {
  let arr = getObjectKeys(day.diet);
  let obj = {};
  arr.map(time => {
    return obj[time] = day.diet[time].done
  });
  return obj
};

export default getDayActivities