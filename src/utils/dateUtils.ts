export const HomeDate = (): string => {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
  const date = now.getDate();

  // 요일 배열 (한국어)
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[now.getDay()];

  return `${month}월 ${date}일 (${weekday})`;
}; 