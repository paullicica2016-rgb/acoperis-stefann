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
    <section className="py-20 bg-wood-50">
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
              className="bg-white rounded-xl p-6 shadow-sm border border-wood-200/30 hover:shadow-md transition-shadow duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <p className="font-[family-name:var(--font-body)] text-wood-700 mt-4 mb-6 text-sm leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-wood-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] font-semibold text-wood-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-wood-500 text-xs">
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
