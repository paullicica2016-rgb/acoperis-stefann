"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const PROJECTS = [
  "/images/gallery/lucrare-01.jpg",
  "/images/gallery/lucrare-02.jpg",
  "/images/gallery/lucrare-03.jpg",
  "/images/gallery/lucrare-04.jpg",
  "/images/gallery/lucrare-05.jpg",
  "/images/gallery/lucrare-06.jpg",
  "/images/gallery/lucrare-07.jpg",
  "/images/gallery/lucrare-08.jpg",
  "/images/gallery/lucrare-09.jpg",
  "/images/gallery/lucrare-10.jpg",
  "/images/gallery/lucrare-11.jpg",
  "/images/gallery/lucrare-12.jpg",
  "/images/gallery/lucrare-13.jpg",
];

export default function RecentProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[#c4a882] font-medium mb-3">
            Proiecte Recente
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-wood-900 leading-[1.15]">
            Lucrările noastre{" "}
            <em className="italic text-[#c4a882]">vorbesc.</em>
          </h2>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
        >
          {PROJECTS.map((src, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={src}
                alt={`Lucrare acoperiș ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 bg-wood-700 hover:bg-wood-800 text-white px-8 py-3.5 rounded-xl text-sm font-[family-name:var(--font-body)] font-medium tracking-wide transition-colors"
          >
            Vezi Toate Lucrările
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
