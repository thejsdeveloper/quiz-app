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
  const currentQuestionIndex = useQuestions()(
    (state) => state.currentQuestionIndex
  );

  const currentQuestion = questions[currentQuestionIndex];

  const currentStep = currentQuestionIndex + 1;
  const totalQuestions = questions.length;

  return (
    <section
      className="flex flex-col 
        px-4 md:px-6 lg:px-8 
        py-6 md:py-12 rounded-lg text-white bg-blue-gray"
    >
      <p className="text-sub uppercase">
        Question {currentStep} of {totalQuestions}
      </p>
      <h2 className="mt-3 mb-12">{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, i) => (
        <button key={`${option}`} className="btn-default my-6">
          {option}
        </button>
      ))}
    </section>
  );
}

export default Question;
