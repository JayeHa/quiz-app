import { shuffleArray } from "./shuffleArray";

describe("shuffleArray", () => {
  it("반환된 배열의 길이가 원본 배열의 길이와 동일해야 한다", () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffleArray(array);
    expect(result.length).toBe(array.length);
  });

  it("반환된 배열은 원본 배열의 모든 요소를 포함해야 한다", () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffleArray(array);
    array.forEach((item) => expect(result).toContain(item));
  });

  it("충분한 샘플에서 반환된 배열이 원본 배열과 다른 순서를 가질 확률이 높다", () => {
    const array = [1, 2, 3, 4, 5];
    let differentOrderCount = 0;
    const trials = 1000;

    for (let i = 0; i < trials; i++) {
      const result = shuffleArray(array);
      if (JSON.stringify(array) !== JSON.stringify(result)) {
        differentOrderCount++;
      }
    }

    expect(differentOrderCount).toBeGreaterThan(trials * 0.9);
  });
});
