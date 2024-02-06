"use client";

import { type Question } from "@/api/types";
import React from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  questions: Question[];
  currentQuestion: number;
};

type Actions = {
  setQuestions: (questions: Question[]) => void;
  // setCurrentQuestion: (index: number) => void;
  // recordAnswer: (answer: string, questionIndex: number) => void;
  // reset: () => void;
};

const initialState: State = {
  questions: [],
  currentQuestion: 0,
};

const createStore = (questions: Question[]) =>
  create<State & Actions>()(
    immer((set) => ({
      ...initialState,
      questions: questions,
      setQuestions(questions: Question[]) {
        set({ questions });
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
