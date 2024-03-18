import { SAMPLE_SHUFFLED_QUIZ_LIST } from "@/data/quizSampleData";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useQuizStore } from "./quizStore";

const START_DATE = "2024-01-01T09:00:00.000+09:00";
const END_DATE = "2024-01-02T09:00:00.000+09:00";

describe("useQuizStore", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("퀴즈 목록을 설정할 때 시작 날짜를 업데이트 해야 한다", () => {
    const { result } = renderHook(() => useQuizStore());
    act(() => {
      result.current.initQuizList(
        SAMPLE_SHUFFLED_QUIZ_LIST,
        new Date(START_DATE)
      );
    });
    expect(result.current.quizList).toEqual(SAMPLE_SHUFFLED_QUIZ_LIST);
    expect(result.current.startDate).toEqual(START_DATE);
  });

  it("유저 답변을 추가하면 userAnswerList가 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useQuizStore());
    const testAnswer = "Test Answer";

    act(() => {
      result.current.addUserAnswer(testAnswer);
    });

    expect(result.current.userAnswerList).toContain(testAnswer);
  });

  it("종료 날짜를 설정하면 endDate가 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useQuizStore());

    act(() => {
      result.current.setEndDate(new Date(END_DATE));
    });

    expect(result.current.endDate).toEqual(END_DATE);
  });

  it("스토어를 초기화하면 모든 데이터가 초기 상태로 복구되어야 한다", () => {
    const SECOND_DATE = "2024-01-03T09:00:00.000+09:00";
    const { result } = renderHook(() => useQuizStore());
    act(() => {
      result.current.initQuizList(
        SAMPLE_SHUFFLED_QUIZ_LIST,
        new Date(START_DATE)
      );
      result.current.addUserAnswer("Test Answer");
      result.current.setEndDate(new Date(END_DATE));
    });

    // 상태를 초기화
    act(() => {
      result.current.initQuizList([], new Date(SECOND_DATE));
    });

    // 모든 상태가 초기화되었는지 확인
    expect(result.current.quizList).toEqual([]);
    expect(result.current.userAnswerList).toEqual([]);
    expect(result.current.startDate).toEqual(SECOND_DATE);
    expect(result.current.endDate).toBeNull();
  });
});
