"use client";
import React from "react";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
  },
};
function Loading() {
  return (
    <section
      className="flex flex-col
        min-h-[80vh]
        px-4 md:px-6 lg:px-8 
        py-6 md:py-12 
        mx-5 md:mx-12
        rounded-lg text-white bg-blue-gray w-11/12 lg:w-2/3"
    >
      <p className="text-sub">
        Question <span className="redacted">1</span> of
        <span className="redacted">10</span>
      </p>
      <motion.h2
        className="mt-3 mb-12 redacted"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        This is a sample question.
      </motion.h2>
      {[1, 2, 3, 4].map((_, i) => (
        <button key={i} className="btn-default btn-option my-6 redacted">
          <motion.span variants={variants} initial="initial" animate="animate">
            This is a sample question
          </motion.span>
        </button>
      ))}
    </section>
  );
}

export default Loading;
