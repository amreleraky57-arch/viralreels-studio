import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLang, tx } from "@/lib/i18n";

const WA = "https://wa.me/201098375423";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t, lang } = useLang();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-28 pt-40 sm:pt-52 lg:pb-36 lg:pt-60"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[12%] h-[360px] w-[360px] rounded-full bg-pink/20 blur-[130px]" />
        <div className="absolute right-[2%] top-[18%] h-[440px] w-[440px] rounded-full bg-violet/20 blur-[160px]" />
        <div className="absolute bottom-[8%] left-[35%] h-[300px] w-[300px] rounded-full bg-cyan/15 blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] glass px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pink animate-pulse" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">
            {t(tx("Content Creation Agency", "وكالة صناعة محتوى"))}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.8rem,10vw,8rem)] font-700 leading-[0.92] tracking-[-0.03em] text-white"
          style={lang === "ar" ? { fontFamily: "var(--font-arabic)" } : undefined}
        >
          {lang === "en" ? (
            <>
              WE Don't
              <br />
              <span className="text-gradient-brand">Shoot</span>
              <br />
              Reels
              <br />
              <span className="text-gradient-brand">WE TELL
                WE TELL
                STORIES
              </span>
            </>
          ) : (
            <>
              نصنع <span className="text-gradient-brand">محتوى</span>
              <br />
              يتذكره <span className="text-gradient-brand">الناس</span>
            </>
          )}
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-8 max-w-xl text-[1.0625rem] font-[350] leading-[1.75] text-white/55 sm:text-lg"
        >
          {t(
            tx(
              "We help brands grow through viral content, storytelling, UGC, and social strategies that drive attention, trust, and sales.",
              "نساعد البراندات على النمو من خلال محتوى فيروسي، قصص ملهمة، UGC، واستراتيجيات سوشيال ميديا.",
            ),
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_16px_48px_-12px_rgba(255,46,136,0.5)] transition hover:scale-[1.03] hover:shadow-[0_20px_60px_-12px_rgba(255,46,136,0.65)]"
          >
            {t(tx("Become Our Client", "ابقى عميلنا"))}
            <ArrowUpRight size={16} className="transition group-hover:rotate-45" />
          </button>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] glass px-7 py-3.5 text-[14px] font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            <MessageCircle size={15} />
            {t(tx("WhatsApp Us", "واتساب"))}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
