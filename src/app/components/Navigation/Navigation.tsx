import { getQuestions } from "@/api/questions";
import { useQuestions } from "@/app/store/QuestionProvider";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  const resetQuestions = useQuestions()((state) => state.resetQuestions);
  const resetStore = useQuestions()((state) => state.resetStore);

  const handleReset = async () => {
    resetStore();
    try {
      const questions = await getQuestions();
      resetQuestions(questions);
    } catch (e) {
      console.error("Error while fetching questions");
      throw e;
    }
  };

  return (
    <div className="isolate sticky bottom-0 z-50 w-full bg-white">
      <div
        className="flex justify-center gap-6 w-full lg:w-2/3 
                  px-4 md:px-6 lg:px-8 
                  py-5 mx-auto"
      >
        <Link
          href={"/"}
          className="btn btn-default btn-secondary text-white rounded-full py-4 flex-1"
        >
          Back to Home Page
        </Link>
        <button
          onClick={handleReset}
          className="btn btn-primary text-white rounded-full py-4 flex-1 hover:bg-blue"
        >
          Start new Quiz
        </button>
      </div>
    </div>
  );
}
