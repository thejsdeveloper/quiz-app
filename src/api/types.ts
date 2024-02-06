export type QuestionType = "multiple";
export type DifficultyLevel = "easy" | "medium" | "hard";

export type QuestionBase = {
  type: QuestionType;
  difficulty: DifficultyLevel;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionResponse = {
  response_code: number;
  results: QuestionBase[];
};

export type Question = QuestionBase & {
  options: string[];
  userAnswer?: string;
};
