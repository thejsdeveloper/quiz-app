export type QuestionType = "multiple";
export type DifficultyLevel = "easy" | "medium" | "hard";

export type QuestionResponse = {
  type: QuestionType;
  difficulty: DifficultyLevel;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type Question = QuestionResponse & {
  answers: string[];
  userAnswer: string;
  isCorrectAnswer: boolean;
  attempted: boolean;
};
