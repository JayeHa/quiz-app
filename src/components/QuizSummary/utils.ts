import { getDateDistance, getDateDistanceText, isValidDate } from "@utils/date";

/** 소요 시간 계산을 위한 함수 */
export function calculateTimeDistance(
  startDate: string,
  endDate: string
): string {
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return "유효하지 않은 날짜";
  }

  return getDateDistanceText(
    getDateDistance(new Date(startDate), new Date(endDate))
  );
}

/** 정답 개수 계산 */
export function calculateCorrectAnswers(
  correctAnswers: string[],
  userAnswers: string[]
): number {
  return userAnswers.filter((answer, index) => answer === correctAnswers[index])
    .length;
}
