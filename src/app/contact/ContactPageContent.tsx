"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SITE_CONFIG, EMAILJS_CONFIG, COUNTIES } from "@/data/constants";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPageContent() {
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
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Email invalid";
    }

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
      // ====================================================
      // EMAILJS — Înlocuiește valorile din EMAILJS_CONFIG
      // din src/data/constants.ts cu cele reale
      // ====================================================
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

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wood-200 to-wood-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contactează-ne"
            subtitle="Suntem aici să te ajutăm cu orice proiect legat de acoperișuri"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-wood-800 mb-6">
                Trimite-ne un Mesaj
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-wood-700 mb-1 font-[family-name:var(--font-body)]">
                    Nume *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-400" : "border-wood-300"
                    } bg-wood-50 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent font-[family-name:var(--font-body)] text-wood-800`}
                    placeholder="Numele dumneavoastră"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-wood-700 mb-1 font-[family-name:var(--font-body)]">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? "border-red-400" : "border-wood-300"
                    } bg-wood-50 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent font-[family-name:var(--font-body)] text-wood-800`}
                    placeholder="07xx xxx xxx"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-wood-700 mb-1 font-[family-name:var(--font-body)]">
                    Email (opțional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-400" : "border-wood-300"
                    } bg-wood-50 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent font-[family-name:var(--font-body)] text-wood-800`}
                    placeholder="email@exemplu.ro"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* County */}
                <div>
                  <label htmlFor="county" className="block text-sm font-medium text-wood-700 mb-1 font-[family-name:var(--font-body)]">
                    Județ
                  </label>
                  <select
                    id="county"
                    name="county"
                    className="w-full px-4 py-3 rounded-lg border border-wood-300 bg-wood-50 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent font-[family-name:var(--font-body)] text-wood-800"
                  >
                    <option value="">Selectează județul</option>
                    {COUNTIES.map((c) => (
                      <option key={c.county} value={c.county}>
                        {c.county} — {c.city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wood-700 mb-1 font-[family-name:var(--font-body)]">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-400" : "border-wood-300"
                    } bg-wood-50 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent font-[family-name:var(--font-body)] text-wood-800 resize-none`}
                    placeholder="Descrieți pe scurt lucrarea dorită..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-wood-700 hover:bg-wood-800 disabled:bg-wood-400 text-white px-8 py-3.5 rounded-lg text-base font-medium transition-colors font-[family-name:var(--font-body)]"
                >
                  {status === "sending" ? "Se trimite..." : "Trimite Mesajul"}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-sm text-center font-[family-name:var(--font-body)]">
                    Mesajul a fost trimis cu succes! Vă vom contacta în curând.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center font-[family-name:var(--font-body)]">
                    A apărut o eroare. Vă rugăm să ne contactați direct pe WhatsApp sau telefon.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-wood-800 mb-6">
                Informații de Contact
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-wood-50 rounded-xl border border-wood-200/50">
                <div className="w-12 h-12 bg-wood-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-wood-800 mb-1">
                    Telefon
                  </h4>
                  <a
                    href={SITE_CONFIG.phoneLink}
                    className="font-[family-name:var(--font-body)] text-wood-600 hover:text-wood-800 text-lg font-medium transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-5 bg-wood-50 rounded-xl border border-wood-200/50">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-wood-800 mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href={SITE_CONFIG.whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-body)] text-wood-600 hover:text-wood-800 transition-colors"
                  >
                    Trimite mesaj direct
                  </a>
                  <p className="font-[family-name:var(--font-body)] text-sm text-wood-500 mt-1">
                    Puteți trimite poze cu acoperișul pe WhatsApp pentru o evaluare rapidă
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-4 p-5 bg-wood-50 rounded-xl border border-wood-200/50">
                <div className="w-12 h-12 bg-wood-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-wood-800 mb-1">
                    Program de Lucru
                  </h4>
                  <p className="font-[family-name:var(--font-body)] text-wood-600">
                    {SITE_CONFIG.workSchedule}
                  </p>
                </div>
              </div>

              {/* Covered zones */}
              <div className="flex items-start gap-4 p-5 bg-wood-50 rounded-xl border border-wood-200/50">
                <div className="w-12 h-12 bg-wood-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-wood-800 mb-2">
                    Județe Acoperite
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {COUNTIES.map((c) => (
                      <span
                        key={c.county}
                        className="bg-wood-200 text-wood-700 px-3 py-1 rounded-full text-xs font-medium font-[family-name:var(--font-body)]"
                      >
                        {c.county}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
