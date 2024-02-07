import { getQuestions } from "@/api/questions";
import QuestionProvider from "../store/QuestionProvider";
import Question from "@/app/components/Question";

export default async function QuestionLayout() {
  const questions = await getQuestions();

  return (
    <QuestionProvider questions={questions}>
      <Question />
    </QuestionProvider>
  );
}
