"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/constants";

const SLIDES = [
  {
    image: "/images/hero/slide1.jpg",
    label: "Montaj Acoperișuri · Transilvania",
    heading: "Montaj acoperișuri",
    headingAccent: "și reparații.",
    description:
      "Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie și mansardări. Garanție scrisă pe lucrare.",
  },
  {
    image: "/images/hero/slide2.jpg",
    label: `Economisești ${SITE_CONFIG.discountMin}–${SITE_CONFIG.discountMax}%`,
    heading: "Preț corect,",
    headingAccent: "calitate garantată.",
    description:
      "Reducere între 10% și 20% la lucrări complete de acoperiș. Deviz gratuit, fără obligații.",
  },
  {
    image: "/images/hero/slide3.jpg",
    label: `${SITE_CONFIG.experience}+ Ani · ${SITE_CONFIG.completedProjects}+ Lucrări`,
    heading: "Acoperișuri în",
    headingAccent: "6 județe din Transilvania.",
    description:
      `Hunedoara, Cluj, Mureș, Alba, Sibiu, Bistrița-Năsăud. Echipă proprie de ${SITE_CONFIG.teamSize} meșteri.`,
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  const slide = SLIDES[activeIndex];

  return (
    <section className="relative bg-[#1a1410] overflow-hidden">
      {/* ── Background image slider ── */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((s, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 relative h-full">
              <img
                src={s.image}
                alt={`Slide ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/70 via-[#1a1410]/50 to-[#1a1410]/90" />

      {/* Decorative gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#c4a882]/[0.08] rounded-full blur-[100px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-end px-5 sm:px-8 pb-8 pt-[28vh] sm:pt-[25vh] max-w-3xl mx-auto">
        {/* Dot navigation — top area */}
        <div className="absolute top-24 right-5 sm:right-8 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-400 ${
                activeIndex === i
                  ? "w-7 h-2 bg-[#c4a882]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Animated text content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="mb-8"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#c4a882]" />
              <p className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.25em] uppercase text-[#c4a882] font-medium">
                {slide.label}
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-[family-name:var(--font-heading)] text-[2.2rem] sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4">
              <span className="text-white">{slide.heading}</span>
              <br />
              <em className="italic text-[#c4a882]">{slide.headingAccent}</em>
            </h1>

            {/* Description */}
            <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-white/60 leading-relaxed max-w-md">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Buttons — stay static */}
        <div className="flex gap-3 mb-8">
          <a
            href={SITE_CONFIG.phoneLink}
            className="flex items-center justify-center gap-2 flex-1 sm:flex-none bg-[#c4a882] hover:bg-[#b89972] text-[#1a1410] px-6 py-3.5 rounded-xl text-sm font-[family-name:var(--font-body)] font-bold tracking-wide transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Sună Acum
          </a>
          <a
            href={SITE_CONFIG.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 sm:flex-none border border-white/20 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl text-sm font-[family-name:var(--font-body)] font-medium tracking-wide transition-colors"
          >
            Ofertă
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <div className="text-center flex-1">
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#c4a882]">
              {SITE_CONFIG.experience}+
            </p>
            <p className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.15em] uppercase text-white/40 mt-0.5">
              Ani
            </p>
          </div>
          <div className="text-center flex-1">
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#c4a882]">
              {SITE_CONFIG.completedProjects}+
            </p>
            <p className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.15em] uppercase text-white/40 mt-0.5">
              Lucrări
            </p>
          </div>
          <div className="text-center flex-1">
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white">
              5<span className="text-[#c4a882]">&#9733;</span>
            </p>
            <p className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.15em] uppercase text-white/40 mt-0.5">
              Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
