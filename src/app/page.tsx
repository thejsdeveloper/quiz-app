import Image from "next/image";
import logo from "#/assets/icons/logo.svg";

export default function Home() {
  return (
    <section
      className="
        flex flex-col items-center justify-center
        gap-8
        p-3
      "
    >
      <Image src={logo} alt="Logo" className="w-1/2" />
      <h1 className="text-center">Test your knowledge!</h1>
      <h2 className="text-center text-white/60">
        Challenge yourself with randomly generated quizzes
      </h2>
      <button className="bg-linear text-white w-full md:w-9/12 p-2 rounded-full">
        Let’s Get Started
      </button>
    </section>
  );
}
