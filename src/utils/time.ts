export const getTime = (): string => {
  const hours = new Date().getHours();
  let message;
  if (hours >= 6 && hours < 11) {
    message = "早上";
  } else if (hours >= 11 && hours <= 13) {
    message = "中午";
  } else if (hours > 13 && hours <= 19) {
    message = "下午";
  } else {
    message = "晚上";
  }
  return message;
};
