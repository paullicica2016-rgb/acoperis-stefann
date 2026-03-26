"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesPreview() {
  return (
    <section className="bg-[#3a3a3a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Serviciile Noastre
          </h2>
          <p className="font-[family-name:var(--font-body)] text-lg text-[#c4a882] max-w-2xl mx-auto">
            Oferim o gamă completă de servicii pentru acoperișuri, de la montaj la reparații de urgență
          </p>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-[#c4a882]" />
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group"
            >
              {/* Image with number badge */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Number badge */}
                <div className="absolute top-3 left-3 w-10 h-10 bg-[#3a3a3a]/80 backdrop-blur-sm flex items-center justify-center rounded-md">
                  <span className="font-[family-name:var(--font-heading)] text-[#c4a882] text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#444444] rounded-b-xl p-6">
                {/* Label */}
                <p className="font-[family-name:var(--font-body)] text-xs tracking-[0.2em] uppercase text-[#c4a882] mb-3">
                  Serviciu {String(index + 1).padStart(2, "0")}
                </p>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#c4a882] mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-body)] text-sm text-white leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-5 h-px bg-[#c4a882]" />
                      <span className="font-[family-name:var(--font-body)] text-sm text-[#d4c4b0]">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/servicii"
            className="inline-flex items-center gap-2 border-2 border-[#c4a882] text-[#c4a882] hover:bg-[#c4a882] hover:text-[#1a1410] px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-[family-name:var(--font-body)] font-medium transition-colors"
          >
            Vezi Toate Serviciile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
