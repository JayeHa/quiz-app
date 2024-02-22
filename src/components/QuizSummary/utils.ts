/** 정답 개수 계산 */
export function calculateCorrectAnswers(
  correctAnswers: string[],
  userAnswers: string[]
): number {
  return userAnswers.filter((answer, index) => answer === correctAnswers[index])
    .length;
}
