import { create } from "zustand";

import { Question } from "@/types/questions";
import { immer } from "zustand/middleware/immer";

type State = {
  questions: Question[];
  currentQuestion: number;
};

type Actions = {
  initState: (questions: Question[]) => void;
  setCurrentQuestion: (index: number) => void;
  recordAnswer: (answer: string, questionIndex: number) => void;
  reset: () => void;
};

const initialState: State = {
  questions: [],
  currentQuestion: 0,
};

export const useQuestionStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,
    initState: (questions: Question[]) => {
      set((state) => {
        state.questions = questions;
        state.currentQuestion = 0;
      });
    },
    setCurrentQuestion: (index: number) => {
      set((state) => {
        state.currentQuestion = index;
      });
    },
    recordAnswer: (answer: string, questionIndex: number) => {
      set((state) => {
        state.questions[questionIndex].userAnswer = answer;
        state.questions[questionIndex].attempted = true;
        state.questions[questionIndex].isCorrectAnswer =
          !state.questions[questionIndex].incorrect_answers.includes(answer);
      });
    },
    reset: () => {
      set(initialState);
    },
  }))
);
