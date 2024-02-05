import { OPEN_TDB_URL } from "@/constants/api";
import Link from "next/link";

const getQuestions = async () => {
  const res = await fetch(OPEN_TDB_URL);
  return res.json();
};

export default async function QuestionPage() {
  const questions = await getQuestions();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-white">
      This is Question Page
      <Link href="/">Home Page</Link>
      {JSON.stringify(questions)}
    </main>
  );
}
