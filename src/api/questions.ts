import { OPEN_TDB_URL } from "@/api/constants/api";
import { Question, QuestionBase, QuestionResponse } from "./types";
import { randomize } from "./util/randomise";

export const getQuestions = async () => {
  try {
    const response = await fetch(OPEN_TDB_URL);
    if (!response.ok) {
      throw new Error(response.status.toString());
    }
    const json = (await response.json()) as QuestionResponse;
    return getRandomizeQuestions(json.results);
  } catch (e: unknown) {
    throw e as Error;
  }
};

const getRandomizeQuestions = (questions: QuestionBase[]): Question[] => {
  return questions.map((question) => {
    return {
      ...question,
      question: question.question
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'"),
      options: randomize([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    };
  });
};
