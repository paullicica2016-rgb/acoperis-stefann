"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { SITE_CONFIG } from "@/data/constants";

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-wood-700">
        {count}
        {suffix}
      </span>
    </div>
  );
}

const stats = [
  { value: SITE_CONFIG.experience, suffix: "+", label: "Ani Experiență" },
  { value: SITE_CONFIG.completedProjects, suffix: "+", label: "Lucrări Finalizate" },
  { value: SITE_CONFIG.teamSize, suffix: "", label: "Profesioniști" },
  { value: SITE_CONFIG.counties, suffix: "", label: "Județe Acoperite" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Photo collage — shows FIRST on mobile, second on desktop */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 grid grid-cols-2 gap-2.5 sm:gap-3 h-[350px] sm:h-[400px] lg:h-[500px]"
          >
            {/* Left — tall image spanning full height */}
            <div className="row-span-2 overflow-hidden rounded-xl">
              <img
                src="/images/gallery/lucrare-03.jpg"
                alt="Acoperiș finalizat"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Right top */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/gallery/lucrare-04.jpg"
                alt="Montaj țiglă metalică"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Right bottom */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/gallery/lucrare-05.jpg"
                alt="Echipa la lucru"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text side — shows SECOND on mobile, first on desktop */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="font-[family-name:var(--font-body)] text-sm tracking-[0.25em] uppercase text-[#c4a882] mb-4">
              Despre Noi
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-wood-900 leading-[1.1] mb-6">
              Peste {SITE_CONFIG.experience} ani de{" "}
              <em className="italic">excelență.</em>
            </h2>

            <div className="bg-[#3a3a3a] border-2 border-[#4a4a4a] rounded-2xl p-6 space-y-3 font-[family-name:var(--font-body)] text-white leading-relaxed text-[15px]">
              <p>
                Avem experiența necesară pentru a crea și repara orice tip de
                lucrare legată de acoperișuri, de la montaj de țiglă metalică și
                ceramică până la construcții complete din lemn.
              </p>
              <p>
                Lucrăm cu materiale furnizate de către noi (Lemn, Tablă, Țiglă)
                sau de către beneficiar — flexibilitatea este cheia colaborării
                noastre de succes.
              </p>
              <p>
                Ne puteți lăsa poze cu acoperișul existent sau proiectul pe
                WhatsApp — cerem și oferim seriozitate în fiecare proiect.
              </p>
            </div>

            <a
              href={SITE_CONFIG.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-wood-800 hover:bg-wood-900 text-white px-7 py-3.5 rounded-xl text-sm tracking-[0.1em] uppercase font-[family-name:var(--font-body)] font-medium transition-colors"
            >
              Trimite poze pe WhatsApp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-sm border border-wood-200/50"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
