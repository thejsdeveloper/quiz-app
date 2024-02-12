import React, { PropsWithChildren } from "react";
import { getQuestions } from "@/api/questions";
import QuestionProvider from "../store/QuestionProvider";

export default async function QuestionLayout({ children }: PropsWithChildren) {
  const questions = await getQuestions();
  return <QuestionProvider questions={questions}>{children}</QuestionProvider>;
}
