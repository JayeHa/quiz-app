/**
 * "Fisher-Yates shuffle" 알고리즘을 사용하여 배열의 순서를 랜덤으로 섞는 함수입니다.
 *
 * 참고: https://ko.wikipedia.org/wiki/%ED%94%BC%EC%85%94-%EC%98%88%EC%9D%B4%EC%B8%A0_%EC%85%94%ED%94%8C
 */
export function shuffleArray<T>(array: T[]) {
  const result = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
