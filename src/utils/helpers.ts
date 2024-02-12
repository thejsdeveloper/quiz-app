import { Question } from "@/api/types";

export const getCorrectAnswers = (questions: Question[]) => {
  return questions.filter(
    (question) => question.correct_answer === question.userAnswer
  );
};

export const hasAnsweredAllQuestions = (questions: Question[]) =>
  questions.every((questions) => !!questions.userAnswer);
