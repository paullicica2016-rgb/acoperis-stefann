"use client";

import { motion } from "framer-motion";
import { SERVICES, SITE_CONFIG } from "@/data/constants";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wood-200 to-wood-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Serviciile Noastre"
            subtitle="Descoperă gama completă de servicii de montaj și reparații acoperișuri oferite de echipa noastră"
          />
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 items-center`}
              >
                {/* Image */}
                <motion.div
                  variants={isEven ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-wood-300 via-wood-200 to-wood-300 flex items-center justify-center">
                    <span className="text-wood-500 font-[family-name:var(--font-body)] text-sm px-4 text-center">
                      {service.title}
                    </span>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  variants={isEven ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <span className="inline-block bg-wood-600/10 text-wood-600 px-3 py-1 rounded-full text-xs font-medium font-[family-name:var(--font-body)] mb-3">
                    Serviciu {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-wood-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="font-[family-name:var(--font-body)] text-wood-600 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-wood-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
              Cere Ofertă Gratuită
            </h2>
            <p className="font-[family-name:var(--font-body)] text-wood-200 mb-8">
              Contactează-ne pentru o ofertă personalizată. Trimite poze pe
              WhatsApp pentru evaluare rapidă.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg text-base font-medium transition-colors font-[family-name:var(--font-body)] inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Trimite Mesaj pe WhatsApp
              </a>
              <a
                href={SITE_CONFIG.phoneLink}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg text-base font-medium transition-colors font-[family-name:var(--font-body)]"
              >
                Sună: {SITE_CONFIG.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
