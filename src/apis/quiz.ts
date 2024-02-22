import axios from "axios";
import { QuizPayload, QuizResponse } from "../model/quiz";

const API_URL = "https://opentdb.com/api.php";

export const getQuizzes = async (payload: QuizPayload) => {
  const { data: response } = await axios.get<QuizResponse>(API_URL, {
    params: { type: "multiple", ...payload },
  });

  return response;
};
