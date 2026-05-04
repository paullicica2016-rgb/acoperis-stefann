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
  visible: { transition: { staggerChildren: 0.05 } },
};

// Grupăm județele pe regiuni și eliminăm duplicatele
const uniqueCounties = COUNTIES.filter(
  (c, idx, arr) => arr.findIndex((x) => x.county === c.county) === idx
);

const regions = Array.from(new Set(uniqueCounties.map((c) => c.region)));

export default function CoveredZones() {
  return (
    <section className="py-16 bg-[#3a3a3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#c4a882] text-sm font-semibold tracking-widest uppercase mb-2">
            Acoperire Națională
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-3">
            Lucrăm în Toată România
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-gray-300 max-w-xl mx-auto">
            Echipa noastră se deplasează în toate cele 41 de județe. Contactează-ne pentru un deviz gratuit oriunde în țară.
          </p>
        </motion.div>

        {/* Regiuni */}
        <div className="space-y-8">
          {regions.map((region) => {
            const countiesInRegion = uniqueCounties.filter((c) => c.region === region);
            return (
              <div key={region}>
                {/* Titlu regiune */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px flex-1 bg-[#c4a882]/20" />
                  <span className="text-[#c4a882] text-xs font-bold tracking-widest uppercase">
                    {region}
                  </span>
                  <div className="h-px flex-1 bg-[#c4a882]/20" />
                </div>

                {/* Județe din regiune */}
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
                >
                  {countiesInRegion.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[#444444] border border-[#555555] hover:border-[#c4a882] hover:bg-[#4a4a4a] transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5 text-[#c4a882] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-white leading-tight">
                          {item.county}
                        </p>
                        <p className="font-[family-name:var(--font-body)] text-xs text-[#c4a882]/80">
                          {item.city}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 text-sm mb-4">
            Nu găsești județul tău? Sună-ne — ne deplasăm oriunde în România.
          </p>
          <a
            href="tel:+40749651436"
            className="inline-flex items-center gap-2 bg-[#c4a882] text-[#1a1410] font-bold px-6 py-3 rounded-full hover:bg-[#d4b892] transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            Sună Acum · 0749 651 436
          </a>
        </motion.div>
      </div>
    </section>
  );
}
