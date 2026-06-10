import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLang, tx } from "@/lib/i18n";

const WA = "https://wa.me/201098375423";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const logos = [
  "/ALADIEN.png",
  "/ASMAK.png",
  "/qasr elmandy.png",
  "/BIG BELLY.png",
  "/Crazy burger.png",
  "/power burger.png",
  "/wild burger.png",
  "/zaytona.png",
  "/valancia.png",
  "/ELBOKHARY.png",
  "/marhaba.png",
  "/dallah.png",
  "/feat2eat.png",
];

export function Hero() {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";
  
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 45,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-28 pt-40 sm:pt-52 lg:pb-36 lg:pt-60"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[12%] h-[360px] w-[360px] rounded-full bg-pink/20 blur-[130px]" />
        <div className="absolute right-[2%] top-[18%] h-[440px] w-[440px] rounded-full bg-violet/20 blur-[160px]" />
        <div className="absolute bottom-[8%] left-[35%] h-[300px] w-[300px] rounded-full bg-cyan/15 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
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
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/10 glass px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pink animate-pulse" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">
            {t(tx("Content Creation Agency", "وكالة صناعة محتوى"))}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-display text-[clamp(2.8rem,10vw,8rem)] font-bold leading-[0.92] tracking-[-0.03em] text-white"
          style={isRtl ? { fontFamily: "var(--font-arabic)" } : undefined}
        >
          {!isRtl ? (
            <>
              WE DON'T
              <br />
              <span className="text-gradient-brand">SHOOT</span>
              <br />
              REELS
              <br />
              <span className="text-gradient-brand">WE TELL STORIES.</span>
            </>
          ) : (
            <>
              نصنع <span className="text-gradient-brand">محتوى</span>
              <br />
              يتذكره <span className="text-gradient-brand">الناس</span>
            </>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-8 max-w-xl text-[1.0625rem] leading-[1.75] text-white/55 sm:text-lg"
        >
          {t(
            tx(
              "We help brands grow through viral content, storytelling, UGC, and social strategies that drive attention, trust, and sales.",
              "نساعد البراندات على النمو من خلال محتوى فيروسي واستراتيجيات تسويق فعالة."
            )
          )}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-105"
          >
            {t(tx("Become Our Client", "ابقى عميلنا"))}
            <ArrowUpRight size={16} className={`transition group-hover:rotate-45 ${isRtl ? 'rotate-180 group-hover:-rotate-135' : ''}`} />
          </button>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-7 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            <MessageCircle size={15} />
            {t(tx("WhatsApp Us", "واتساب"))}
          </a>
        </motion.div>
      </div>

      {/* CLIENTS MARQUEE - Full Width Edge-to-Edge */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="w-screen border-y border-white/10 bg-white/[0.02] py-10 mt-24 overflow-hidden"
        style={{
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          width: "100vw",
        }}
      >
        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
          {t(tx("CLIENTS IN THE REEL WORLD", "عملاء في عالم الريلز"))}
        </p>

        <div className="flex items-center gap-6 px-8 md:px-14" dir="ltr">
          {/* MARQUEE CONTAINER */}
          <div className="relative overflow-hidden w-full">
            {/* Fade Gradients */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 md:w-40 bg-gradient-to-r from-[#050510] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-24 md:w-40 bg-gradient-to-l from-[#050510] to-transparent pointer-events-none" />

            {/* Animated Marquee */}
            <motion.div
              className="flex w-max items-center"
              animate={controls}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center justify-center shrink-0 pr-28">
                  <img
                    src={logo}
                    alt=""
                    className="h-20 md:h-28 max-w-[280px] object-contain opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 select-none"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}