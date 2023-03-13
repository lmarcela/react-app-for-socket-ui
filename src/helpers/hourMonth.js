import moment from "moment";

export const hourMonth = (date) => {
  const todayMonth = moment(date);

  return todayMonth.format("hh:mm a | MMMM Do");
};
