"use client";
import Image from "next/image";
import logo from "#/assets/icons/logo.svg";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const variant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function Home() {
  const router = useRouter();
  return (
    <motion.section
      variants={variant}
      initial="initial"
      animate="animate"
      className="
        flex flex-col items-center justify-center
        gap-8
        p-3
        mx-5 md:mx-12
      "
    >
      <Image src={logo} alt="Logo" className="w-1/2" priority />
      <h1 className="text-center">Test your knowledge!</h1>
      <h2 className="text-center text-white/60">
        Challenge yourself with randomly generated quizzes
      </h2>

      <button
        className="btn bg-linear text-white w-full md:w-9/12 p-2 rounded-full"
        onClick={() => router.push("/questions")}
      >
        Let’s Get Started
      </button>
    </motion.section>
  );
}
