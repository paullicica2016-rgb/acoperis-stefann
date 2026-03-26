"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG, SERVICES } from "@/data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface CountyPageProps {
  county: string;
  city: string;
  description: string;
  cities: string[];
}

export default function CountyLandingPage({ county, city, description, cities }: CountyPageProps) {
  const displayServices = SERVICES.slice(0, 6);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#1a1410] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[#c4a882] mb-4">
              Montaj & Reparații Acoperișuri
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
              Acoperișuri în {county}
              <br />
              <em className="italic text-[#c4a882]">{city} și împrejurimi.</em>
            </h1>
            <p className="font-[family-name:var(--font-body)] text-lg text-[#d4c4b0] max-w-3xl leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center justify-center gap-2 bg-[#c4a882] hover:bg-[#b89972] text-[#1a1410] px-8 py-4 rounded-xl font-[family-name:var(--font-body)] font-bold text-sm tracking-wide transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Sună Acum — {SITE_CONFIG.phone}
              </a>
              <a
                href={SITE_CONFIG.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-[#c4a882] text-[#c4a882] hover:bg-[#c4a882]/10 px-8 py-4 rounded-xl font-[family-name:var(--font-body)] font-bold text-sm tracking-wide transition-colors"
              >
                WhatsApp — Deviz Gratuit
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: `${SITE_CONFIG.experience}+`, label: "Ani Experiență" },
              { val: `${SITE_CONFIG.completedProjects}+`, label: "Lucrări Finalizate" },
              { val: `${SITE_CONFIG.teamSize}`, label: "Meșteri Profesioniști" },
              { val: "5★", label: "Rating Clienți" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center py-4"
              >
                <span className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#c4a882]">
                  {s.val}
                </span>
                <p className="font-[family-name:var(--font-body)] text-sm text-gray-600 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for this county */}
      <section className="bg-[#3a3a3a] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
              Servicii Acoperișuri în {county}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#c4a882] text-lg">
              Toate serviciile disponibile în {city} și localitățile din județul {county}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayServices.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="bg-[#444444] rounded-2xl p-6 border border-[#555555] hover:border-[#c4a882]/50 transition-all duration-300"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#c4a882] mb-3">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-white leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <div className="space-y-2">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882]" />
                      <span className="font-[family-name:var(--font-body)] text-xs text-[#d4c4b0]">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cities covered */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gray-900 mb-3">
              Localități Acoperite în {county}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-gray-600">
              Oferim servicii de montaj și reparații acoperișuri în toate localitățile din județul {county}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {cities.map((c) => (
              <motion.div
                key={c}
                variants={fadeUp}
                className="bg-[#3a3a3a] rounded-xl px-4 py-3 text-center"
              >
                <span className="font-[family-name:var(--font-body)] text-sm text-white">{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c4a882] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#1a1410] mb-4">
            Ai nevoie de un acoperiș nou în {county}?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#1a1410]/70 mb-6">
            Sună acum pentru o ofertă gratuită. Reducere 10-20% la lucrări complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-[#1a1410] hover:bg-[#2a2218] text-white px-8 py-4 rounded-xl font-[family-name:var(--font-body)] font-bold text-sm transition-colors"
            >
              ☎ {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1a1410] text-[#1a1410] hover:bg-[#1a1410]/10 px-8 py-4 rounded-xl font-[family-name:var(--font-body)] font-bold text-sm transition-colors"
            >
              Solicită Ofertă Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
