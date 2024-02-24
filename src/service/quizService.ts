import { QuizPayload, QuizResponse } from "@models/quiz";
import axios from "axios";
import axiosRetry from "axios-retry";

// TODO: 네트워크 에러 발생 유도
const API_URL = "https://opentdb.com/api.php" + "error";
const TIMEOUT_MILLISECOND = 6 * 1000; // 6초

const axiosInstance = axios.create();
axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
  retryCondition: (error) => {
    return error.code === "ECONNABORTED";
  },
});

axiosInstance.defaults.timeout = TIMEOUT_MILLISECOND;

export const QuizService = {
  quizList: async (payload: QuizPayload) => {
    try {
      const { data: response } = await axiosInstance.get<QuizResponse>(
        API_URL,
        { params: { type: "multiple", ...payload } },
      );

      return response;
    } catch (error) {
      throw error;
    }
  },
};
