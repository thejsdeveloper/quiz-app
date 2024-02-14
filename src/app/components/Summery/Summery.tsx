"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";
import { useQuestions } from "@/app/store/QuestionProvider";
import { getCorrectAnswers } from "@/utils/helpers";
import correctIcon from "#/assets/icons/correct-answer-icon.svg";
import incorrectIcon from "#/assets/icons/wrong-answer-icon.svg";
import Image from "next/image";
import Navigation from "@/app/components/Navigation/Navigation";

export default function SummeryPage() {
  const questions = useQuestions()((state) => state.questions);
  const totalQuestions = questions.length;
  const correctAnswers = getCorrectAnswers(questions).length;
  const progressValue = (correctAnswers / totalQuestions) * 100;

  return (
    <>
      <section className="w-auto lg:w-2/3 py-6 mx-5 md:mx-12  ">
        <NextUIProvider>
          <div
            className="flex flex-row items-center gap-6
                      p-4 md:p-6 lg:p-8 
                      rounded-lg text-white bg-blue-gray"
          >
            {/* results bar */}
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-blue-light",
                track: "stroke-blue",
                value: "text-xl font-semibold text-white",
              }}
              aria-label="Loading..."
              value={progressValue}
              size="lg"
              valueLabel={
                <div className="flex flex-row items-baseline gap-1">
                  <span className="text-4xl">{correctAnswers}</span>
                  <span>/</span> <span>{totalQuestions}</span>
                </div>
              }
              color="warning"
              showValueLabel={true}
            />
            <div>
              <h2>You answered</h2>
              <h2>
                {correctAnswers}/{totalQuestions}
              </h2>
            </div>
          </div>

          <div
            className="flex flex-col gap-6
              p-4 md:p-6 lg:p-8  
              rounded-lg text-white bg-blue-gray mt-6 md:mt-8"
          >
            <h2>Your answers</h2>
            {questions.map((question, i) => {
              const isAnswerCorrect =
                question.correct_answer === question.userAnswer;

              return (
                <li
                  className="list-none flex flex-row items-start
                gap-2 md:gap-4 bg-white 
                p-2 md:p-5 rounded-lg"
                  key={i}
                >
                  <div className="rounded-full w-7 h-7 lg:w-10 lg:h-10 bg-blue-light flex items-center justify-center">
                    <h3>{i + 1}</h3>
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-black flex-1">
                        Which player scored the fastest hat-trick in the Premier
                        League?
                      </h3>
                      {isAnswerCorrect ? (
                        <Image
                          src={correctIcon}
                          alt="correct icon"
                          className="icon"
                        />
                      ) : (
                        <Image
                          src={incorrectIcon}
                          alt="correct icon"
                          className="icon"
                        />
                      )}
                    </div>
                    <div className="flex gap-4">
                      {!isAnswerCorrect && (
                        <p className="text-body text-red">
                          {question.userAnswer}
                        </p>
                      )}
                      <p className="text-body text-green">
                        {question.correct_answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </NextUIProvider>
      </section>
      <Navigation />
    </>
  );
}
