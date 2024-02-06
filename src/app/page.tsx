import Image from "next/image";
import logo from "#/assets/icons/logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="
        flex flex-col items-center justify-center
        gap-8
        p-3
      "
    >
      <Image src={logo} alt="Logo" className="w-1/2" priority />
      <h1 className="text-center">Test your knowledge!</h1>
      <h2 className="text-center text-white/60">
        Challenge yourself with randomly generated quizzes
      </h2>

      <Link
        className="btn bg-linear text-white w-full md:w-9/12 p-2 rounded-full"
        href={"/questions"}
      >
        Let’s Get Started
      </Link>
    </section>
  );
}
