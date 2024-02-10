"use client";
import { type Question } from "@/api/types";
import React from "react";
import { useQuestions } from "../store/QuestionProvider";
import Image from "next/image";
import correctIcon from "#/assets/icons/correct-answer-icon.svg";
import incorrectIcon from "#/assets/icons/wrong-answer-icon.svg";
import { useRouter } from "next/navigation";

function Question() {
  const router = useRouter();

  const questions = useQuestions()((state) => state.questions);
  const currentQuestionIndex = useQuestions()(
    (state) => state.currentQuestionIndex
  );
  const goToNextQuestion = useQuestions()((state) => state.goToNextQuestion);
  const recordAnswer = useQuestions()((state) => state.recordAnswer);

  const currentQuestion = questions[currentQuestionIndex];
  const currentStep = currentQuestionIndex + 1;
  const totalQuestions = questions.length;
  const hasAttemptedQuestion = !!currentQuestion.userAnswer;
  const isLastQuestion = currentQuestionIndex + 1 === totalQuestions;
  const showNextButton = hasAttemptedQuestion && !isLastQuestion;
  const showResultButton = hasAttemptedQuestion && isLastQuestion;

  const handleAnswer = (option: string) => {
    if (hasAttemptedQuestion) {
      return;
    }
    recordAnswer(option);
  };

  const getButtonClass = (option: string) => {
    if (!hasAttemptedQuestion) {
      return "btn-default";
    }

    if (option === currentQuestion.correct_answer) {
      return "btn-correct";
    }

    if (
      option === currentQuestion.userAnswer &&
      option !== currentQuestion.correct_answer
    ) {
      return "btn-incorrect";
    }

    return "btn-default";
  };

  const checkResults = () => {
    router.push("/summery");
  };

  return (
    <section
      className="flex flex-col 
        px-4 md:px-6 lg:px-8 
        py-6 md:py-12 rounded-lg text-white bg-blue-gray w-full md:w-2/3"
    >
      <p className="text-sub uppercase">
        Question {currentStep} of {totalQuestions}
      </p>
      <h2 className="mt-3 mb-12">{currentQuestion.question}</h2>
      {currentQuestion.options.map((option) => (
        <button
          key={`${option}`}
          className={["group btn-option my-6", getButtonClass(option)].join(
            " "
          )}
          data-attempted={hasAttemptedQuestion}
          onClick={() => handleAnswer(option)}
        >
          {option}
          <Image
            src={correctIcon}
            alt=""
            className="hidden group-[.btn-correct]:block icon"
          />
          <Image
            src={incorrectIcon}
            alt=""
            className="hidden group-[.btn-incorrect]:block icon"
          />
        </button>
      ))}
      <div className="flex flex-col items-center mt-10">
        {showNextButton && (
          <button
            className="btn btn-primary rounded-full p-4 md:w-1/3"
            onClick={goToNextQuestion}
          >
            Next Question
          </button>
        )}
        {showResultButton && (
          <button
            className="btn btn-primary rounded-full p-4 md:w-1/3"
            onClick={checkResults}
          >
            Check your result
          </button>
        )}
      </div>
    </section>
  );
}

export default Question;
