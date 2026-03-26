"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function DiscountCTA() {
  return (
    <section className="py-16 bg-wood-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* White card — heading */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-t-2xl px-6 sm:px-8 pt-8 pb-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#c4a882]" />
              <p className="font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[#c4a882] font-medium">
                Ofertă Actuală
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-wood-900 leading-[1.15] mb-3">
              Reducere la{" "}
              <br />
              <em className="italic text-[#c4a882]">lucrări complete</em>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-wood-500 leading-relaxed">
              Contactează-ne pentru un deviz gratuit și află exact cât economisești.
            </p>
          </motion.div>

          {/* Dark card — percentage + checklist + buttons */}
          <motion.div
            variants={fadeUp}
            className="bg-[#1a1410] rounded-b-2xl px-6 sm:px-8 pt-8 pb-8"
          >
            {/* Percentage display */}
            <div className="mb-6">
              <p className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.25em] uppercase text-[#c4a882] font-medium mb-3">
                Economisești
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold text-[#c4a882]">
                    {SITE_CONFIG.discountMin}
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-3xl text-[#a89880]">–</span>
                  <span className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold text-[#c4a882]">
                    {SITE_CONFIG.discountMax}
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#c4a882]">
                    %
                  </span>
                </div>
                <div className="border-l border-[#c4a882]/30 pl-4">
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#a89880] leading-snug">
                    La toate tipurile de<br />lucrări de acoperiș
                  </p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-[#c4a882]/20 mb-6" />

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              {[
                "Montaj nou sau renovare completă",
                "Reparații și hidroizolații",
                "Deviz gratuit, fără obligații",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#c4a882] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-[family-name:var(--font-body)] text-sm text-[#d4c4b0]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-sm sm:text-base font-[family-name:var(--font-body)] font-semibold text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex-1 border border-[#c4a882]/40 text-[#c4a882] hover:bg-[#c4a882]/10 py-4 rounded-xl text-sm sm:text-base font-[family-name:var(--font-body)] font-semibold text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Sună
              </a>
            </div>

            {/* Small print */}
            <p className="font-[family-name:var(--font-body)] text-[11px] text-[#a89880]/60 text-center mt-5">
              * Oferta este valabilă pentru contracte semnate în luna curentă
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
