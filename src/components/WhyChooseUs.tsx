"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/constants";

const REASONS = [
  {
    label: "Experiență",
    title: `${SITE_CONFIG.experience} de Ani în Domeniu`,
    description: `Din 2004, am finalizat peste ${SITE_CONFIG.completedProjects} de proiecte în Transilvania și împrejurimi. Fiecare acoperiș — o lucrare la care suntem mândri.`,
  },
  {
    label: "Materiale",
    title: "BILKA & Lindab Certificate",
    description:
      "Folosim exclusiv materiale premium, importate și certificate European. Rezistente la orice condiție climatică din Transilvania.",
  },
  {
    label: "Garanție",
    title: "Garanție Scrisă pe Lucrare",
    description:
      "Fiecare proiect vine cu garanție documentată. Dacă apare orice problemă, revenim fără costuri suplimentare.",
  },
  {
    label: "Preț",
    title: "Ofertă Gratuită & Corectă",
    description:
      "Vizită gratuită la șantier, ofertă detaliată fără costuri ascunse. Știi exact ce plătești înainte de a semna.",
  },
];

const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#1a1410]">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#c4a882]" />
            <p className="font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[#c4a882] font-medium">
              Motivele Noastre
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold leading-[1.15]">
            <span className="text-white">De ce </span>
            <br />
            <em className="italic text-[#c4a882]">Ștefan Acoperișuri?</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#c4a882]/30" />

          <div className="space-y-10">
            {REASONS.map((reason, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-[#c4a882] shadow-[0_0_10px_#c4a882]/40" />

                {/* Number + Label */}
                <p className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.2em] uppercase text-[#c4a882] font-medium mb-1.5">
                  {String(index + 1).padStart(2, "0")} — {reason.label}
                </p>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-body)] text-sm text-[#a89880] leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href={SITE_CONFIG.phoneLink}
            className="flex items-center justify-center gap-3 w-full bg-[#c4a882] hover:bg-[#b89972] text-[#1a1410] px-8 py-4 rounded-xl text-base font-[family-name:var(--font-body)] font-bold tracking-wide transition-colors shadow-lg shadow-[#c4a882]/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Sună — {SITE_CONFIG.phone}
          </a>

          {/* Scroll down hint */}
          <div className="flex justify-center mt-6">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as const }}
            >
              <svg className="w-5 h-5 text-[#c4a882]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
