// 统计字数
export const countWord = (text: string) => {
  // 移除 Markdown 标记
  const cleanText = text.replace(/[#*_`[\]()!-]/g, "").replace(/\n/g, " ");
  // 按空格分割文本并过滤掉空字符串，然后统计单词数量
  const words = cleanText.split(/\s+/).filter((word) => word.trim() !== "");
  return words.length;
};

// 计算阅读时间(分钟)
export const calcReadTime = (wordCount: number) => {
  return Math.ceil(wordCount / 300) + "分钟";
};

// 格式化日期
export const formatDateStr = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};