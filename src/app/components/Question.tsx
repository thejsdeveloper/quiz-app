"use client";
import { type Question } from "@/api/types";
import React from "react";
import { useQuestions } from "../store/QuestionProvider";

// type QuestionProps = {
//   question: Question;
//   onNextClick: () => void;
//   onOptionClick: (answer: string) => void;
// };

function Question() {
  const questions = useQuestions()((state) => state.questions);

  return <div className="text-white">Question</div>;
}

export default Question;
