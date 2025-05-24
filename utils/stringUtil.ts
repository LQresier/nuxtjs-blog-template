// 判断字符串是否为空
export const isEmpty = (str: string) => {
  return str === undefined || str === null || str === "";
};

// 判断字符串是否为空
export const isBank = (str: string) => {
  return str === undefined || str === null || str.trim() === "";
};
