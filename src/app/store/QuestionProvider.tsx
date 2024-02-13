"use client";

import { type Question } from "@/api/types";
import React from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  questions: Question[];
  currentQuestionIndex: number;
};

type Actions = {
  goToNextQuestion: () => void;
  recordAnswer: (answer: string) => void;
  resetQuestions: (questions: Question[]) => void;
  resetStore: () => void;
};

const initialState: State = {
  questions: [],
  currentQuestionIndex: 0,
};

const createStore = (questions: Question[]) =>
  create<State & Actions>()(
    immer((set) => ({
      ...initialState,
      questions: questions,
      recordAnswer: (answer: string) => {
        set((state) => {
          state.questions[state.currentQuestionIndex].userAnswer = answer;
        });
      },
      goToNextQuestion: () => {
        set(({ currentQuestionIndex }) => ({
          currentQuestionIndex:
            currentQuestionIndex < 9
              ? currentQuestionIndex + 1
              : currentQuestionIndex,
        }));
      },
      resetQuestions: (questions: Question[]) => {
        set({
          ...initialState,
          questions: questions,
        });
      },
      resetStore: () => {
        set(initialState);
      },
    }))
  );

const QuestionContext = React.createContext<ReturnType<
  typeof createStore
> | null>(null);

export const useQuestions = () => {
  if (!QuestionContext) {
    throw new Error("use cart must be used within QuestionProvider");
  }

  return React.useContext(QuestionContext)!;
};

const QuestionProvider = ({
  questions,
  children,
}: {
  questions: Question[];
  children: React.ReactNode;
}) => {
  const [store] = React.useState(() => createStore(questions));
  return (
    <QuestionContext.Provider value={store}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
