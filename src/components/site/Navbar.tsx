import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useLang, tx } from "@/lib/i18n";

const links = [
  { id: "services", label: tx("Services", "خدماتنا") },
  { id: "work", label: tx("Work", "أعمالنا") },
  { id: "about", label: tx("About", "من نحن") },
  { id: "contact", label: tx("Contact", "تواصل") },
];

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.08] px-5 py-3 transition-all duration-300 sm:px-7 ${
          scrolled
            ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-black/20 backdrop-blur-2xl"
        }`}
      >
        <button onClick={() => scrollTo("top")} className="shrink-0">
          <Logo />
        </button>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="text-[13px] font-medium tracking-wide text-white/60 transition-colors duration-200 hover:text-white"
              >
                {t(l.label)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hidden h-8 w-10 items-center justify-center rounded-full border border-white/[0.12] text-[11px] font-semibold tracking-widest text-white/50 transition hover:border-white/30 hover:text-white/90 sm:flex"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-gradient-brand px-5 py-2 text-[13px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,46,136,0.55)] transition hover:opacity-90 hover:scale-[1.02] sm:inline-flex"
          >
            {t(tx("Become Our Client", "ابقى عميلنا"))}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.12] text-white/70 lg:hidden"
            aria-label="menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/[0.08] glass p-7 lg:hidden"
          >
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="block w-full py-2.5 text-left text-base font-medium text-white/80 transition hover:text-white"
                  >
                    {t(l.label)}
                  </button>
                </li>
              ))}
              <li className="flex items-center gap-3 border-t border-white/[0.07] pt-4 mt-3">
                <button
                  onClick={() => { setLang(lang === "en" ? "ar" : "en"); setOpen(false); }}
                  className="flex h-9 items-center justify-center rounded-full border border-white/[0.12] px-4 text-[11px] font-semibold tracking-widest text-white/60"
                >
                  {lang === "en" ? "العربية" : "English"}
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {t(tx("Become Our Client", "ابقى عميلنا"))}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
