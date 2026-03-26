"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./Icons";

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<StarIcon key={i} filled />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<StarIcon key={i} filled={false} half />);
    } else {
      stars.push(<StarIcon key={i} filled={false} />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ce Spun Clienții Noștri"
          subtitle="Păreri reale de la clienți mulțumiți din toată Transilvania"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#3a3a3a] rounded-2xl p-7 border-2 border-[#4a4a4a] hover:border-[#c4a882]/50 hover:shadow-lg shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative quote */}
              <span className="absolute top-3 right-4 text-[#c4a882]/15 text-6xl font-serif leading-none select-none">&ldquo;</span>
              <StarRating rating={testimonial.rating} />
              <p className="font-[family-name:var(--font-body)] text-white mt-4 mb-6 text-sm leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-wood-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[#c4a882] text-xs">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
