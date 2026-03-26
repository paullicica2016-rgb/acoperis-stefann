"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12"
    >
      <h2
        className={`font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-wood-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-[family-name:var(--font-body)] text-lg max-w-2xl mx-auto ${
            light ? "text-wood-200" : "text-wood-600"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 mx-auto w-20 h-1 rounded-full ${
          light ? "bg-gold-400" : "bg-wood-500"
        }`}
      />
    </motion.div>
  );
}
