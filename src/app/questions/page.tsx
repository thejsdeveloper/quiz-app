"use client";
import React from "react";
import { useQuestions } from "../store/QuestionProvider";
import { hasAnsweredAllQuestions } from "@/utils/helpers";
import SummeryPage from "../components/Summery/Summery";
import Playground from "../components/Playground/Playground";
import Loading from "../components/Loading/Loading";

function QuestionsPage() {
  const questions = useQuestions()((state) => state.questions);
  if (questions.length === 0) {
    return <Loading />;
  }
  const attemptedAllQuestions = hasAnsweredAllQuestions(questions);
  return attemptedAllQuestions ? <SummeryPage /> : <Playground />;
}

export default QuestionsPage;
