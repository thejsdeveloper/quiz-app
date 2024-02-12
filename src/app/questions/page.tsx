"use client";
import React from "react";
import { useQuestions } from "../store/QuestionProvider";
import { hasAnsweredAllQuestions } from "@/utils/helpers";
import SummeryPage from "./summery";
import Playground from "./playground";

function QuestionsPage() {
  const questions = useQuestions()((state) => state.questions);
  const attemptedAllQuestions = hasAnsweredAllQuestions(questions);
  return attemptedAllQuestions ? <SummeryPage /> : <Playground />;
}

export default QuestionsPage;
