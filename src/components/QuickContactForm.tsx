"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SITE_CONFIG, EMAILJS_CONFIG } from "@/data/constants";

type FormStatus = "idle" | "sending" | "success" | "error";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function QuickContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const errs: Record<string, string> = {};
    if (!data.get("name")?.toString().trim()) errs.name = "Numele este obligatoriu";
    if (!data.get("phone")?.toString().trim()) errs.phone = "Telefonul este obligatoriu";
    if (!data.get("message")?.toString().trim()) errs.message = "Mesajul este obligatoriu";
    const email = data.get("email")?.toString().trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Email invalid";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form,
        EMAILJS_CONFIG.publicKey
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-[#231c14] border border-[#c4a882]/20 rounded-xl px-4 py-3.5 text-white placeholder-[#a89880]/50 font-[family-name:var(--font-body)] text-sm focus:outline-none focus:border-[#c4a882] focus:ring-1 focus:ring-[#c4a882]/30 transition-colors";

  return (
    <section className="py-16 bg-[#3a3a3a]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#c4a882]" />
              <p className="font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[#c4a882] font-medium">
                Contact Rapid
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold leading-[1.15] mb-5"
            >
              <span className="text-white">Trimite-ne un </span>
              <em className="italic text-[#c4a882]">mesaj</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-[family-name:var(--font-body)] text-sm text-[#a89880] leading-relaxed mb-8"
            >
              Completează formularul și te contactăm noi în cel mai scurt timp.
              Sau sună-ne direct pentru o discuție rapidă.
            </motion.p>

            {/* Contact info */}
            <motion.div variants={fadeUp} className="space-y-4">
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center gap-3 text-[#d4c4b0] hover:text-[#c4a882] transition-colors"
              >
                <div className="w-10 h-10 bg-[#c4a882]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c4a882]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-[family-name:var(--font-body)] text-sm font-medium">
                  {SITE_CONFIG.phone}
                </span>
              </a>
              <a
                href={SITE_CONFIG.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#d4c4b0] hover:text-green-400 transition-colors"
              >
                <div className="w-10 h-10 bg-green-600/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="font-[family-name:var(--font-body)] text-sm font-medium">
                  WhatsApp
                </span>
              </a>
              <div className="flex items-center gap-3 text-[#a89880]">
                <div className="w-10 h-10 bg-[#c4a882]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c4a882]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-[family-name:var(--font-body)] text-sm">
                  {SITE_CONFIG.workSchedule}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {status === "success" ? (
              <div className="bg-[#231c14] rounded-2xl p-8 text-center border border-green-500/30">
                <div className="w-14 h-14 mx-auto mb-4 bg-green-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
                  Mesaj trimis!
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#a89880]">
                  Te vom contacta în cel mai scurt timp.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-[#231c14] rounded-2xl p-6 sm:p-8 border border-[#c4a882]/10 space-y-4"
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nume complet *"
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 font-[family-name:var(--font-body)]">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon *"
                    className={inputClasses}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 font-[family-name:var(--font-body)]">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (opțional)"
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 font-[family-name:var(--font-body)]">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descrie pe scurt ce lucrare ai nevoie *"
                    className={`${inputClasses} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-[family-name:var(--font-body)]">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#c4a882] hover:bg-[#b89972] disabled:opacity-60 text-[#1a1410] py-4 rounded-xl text-base font-[family-name:var(--font-body)] font-bold tracking-wide transition-colors"
                >
                  {status === "sending" ? "Se trimite..." : "Trimite Mesajul"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center font-[family-name:var(--font-body)]">
                    Eroare la trimitere. Încearcă din nou sau sună-ne direct.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
