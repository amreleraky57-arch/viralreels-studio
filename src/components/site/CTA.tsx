import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLang, tx } from "@/lib/i18n";

const WA = "https://wa.me/201098375423";

export function CTA() {
  const { t } = useLang();
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] glass px-10 py-16 text-center sm:px-20 sm:py-24"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-pink/25 blur-[110px]" />
            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-violet/25 blur-[110px]" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-[100px]" />
          </div>
          <div className="relative">
            <p className="label-tag mb-6 text-white/40">{t(tx("Ready?", "جاهز؟"))}</p>
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,5.5vw,3.75rem)] font-700 text-white">
              {t(tx("READY TO GROW", "جاهز تكبّر"))}{" "}
              <span className="text-gradient-brand">{t(tx("YOUR BRAND?", "براندك؟"))}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[0.9375rem] leading-[1.75] text-white/45">
              {t(
                tx(
                  "Let's create content your audience actually remembers.",
                  "خلينا نصنع محتوى جمهورك فعلاً هيفتكره.",
                ),
              )}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_16px_48px_-12px_rgba(255,46,136,0.5)] transition hover:scale-[1.03]"
              >
                {t(tx("Become Our Client", "ابقى عميلنا"))}
                <ArrowUpRight size={16} className="transition group-hover:rotate-45" />
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] glass px-7 py-3.5 text-[14px] font-semibold text-white/75 transition hover:border-white/30 hover:text-white"
              >
                <MessageCircle size={15} />
                {t(tx("WhatsApp Us", "واتساب"))}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
