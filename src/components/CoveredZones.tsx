"use client";

import { motion } from "framer-motion";
import { COUNTIES } from "@/data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function CoveredZones() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-wood-900 mb-3">
            Zonele Acoperite
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-wood-500">
            Acoperim întreaga regiune a Transilvaniei
          </p>
        </motion.div>

        {/* Counties — stacked on mobile, grid on desktop */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {COUNTIES.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-center gap-4 px-5 py-4 rounded-xl bg-wood-50 border border-wood-200/50 hover:border-[#c4a882] hover:shadow-sm transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#c4a882]/15 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#c4a882]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-wood-800 leading-tight">
                  {item.county}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-wood-500">
                  {item.city}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
