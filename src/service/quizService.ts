import { QuizPayload, QuizResponse } from "@model/quiz";
import axios from "axios";

const API_URL = "https://opentdb.com/api.php";

export const QuizService = {
  quizList: async (payload: QuizPayload) => {
    const { data: response } = await axios.get<QuizResponse>(API_URL, {
      params: { type: "multiple", ...payload },
    });

    return response;
  },
};
