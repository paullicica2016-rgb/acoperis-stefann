"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/data/constants";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  // On homepage: white text when not scrolled (dark hero bg), dark text when scrolled
  // On other pages: always dark text
  const useDarkText = isHome ? scrolled : true;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wood-100/95 backdrop-blur-md shadow-lg py-2"
          : isHome
            ? "bg-transparent py-4"
            : "bg-wood-100/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex flex-col">
              <span
                className={`font-[family-name:var(--font-heading)] italic font-bold transition-all duration-300 ${
                  useDarkText ? "text-lg text-wood-800 group-hover:text-wood-600" : "text-xl text-white group-hover:text-white/80"
                }`}
              >
                Acoperișuri Ștefan
              </span>
              <span className={`h-px w-full transition-all duration-300 ${useDarkText ? "bg-wood-400" : "bg-[#c4a882]/50"}`} />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-[family-name:var(--font-body)] text-sm font-medium transition-colors duration-200 ${
                  useDarkText
                    ? pathname === link.href
                      ? "text-wood-700"
                      : "text-wood-800/70 hover:text-wood-700"
                    : pathname === link.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${useDarkText ? "bg-wood-600" : "bg-white"}`}
                  />
                )}
              </Link>
            ))}

            <a
              href={SITE_CONFIG.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 font-[family-name:var(--font-body)] ${
                useDarkText
                  ? "bg-wood-700 hover:bg-wood-800 text-white"
                  : "bg-[#c4a882] hover:bg-[#b89972] text-[#1a1410]"
              }`}
            >
              Cere Ofertă
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Meniu"
          >
            <span
              className={`block w-6 h-0.5 ${useDarkText ? "bg-wood-800" : "bg-white"} transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 ${useDarkText ? "bg-wood-800" : "bg-white"} transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 ${useDarkText ? "bg-wood-800" : "bg-white"} transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-wood-100/98 backdrop-blur-md border-t border-wood-300/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-base font-[family-name:var(--font-body)] transition-colors ${
                    pathname === link.href
                      ? "bg-wood-200 text-wood-800 font-medium"
                      : "text-wood-700 hover:bg-wood-200/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 bg-wood-700 hover:bg-wood-800 text-white text-center px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-body)]"
              >
                Cere Ofertă
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
