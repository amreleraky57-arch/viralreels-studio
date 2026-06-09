import { motion } from "framer-motion";
import { useLang, tx } from "@/lib/i18n";

const pillars = [
  tx("Story-first creative direction", "إبداع مبني على القصة"),
  tx("Data-backed hooks & structures", "هوكس مبنية على البيانات"),
  tx("Production that punches above budget", "إنتاج يتفوق على الميزانية"),
  tx("Long-term growth, not one-hit wonders", "نمو طويل المدى، مش نجاح لمرة"),
];

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[8%] top-[15%] h-[360px] w-[360px] rounded-full bg-violet/15 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-tag mb-5"
            >
              {t(tx("About Us", "من نحن"))}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(1.75rem,4.5vw,3rem)] font-700 text-white"
            >
              {t(tx("WHY HIRE", "ليه تختار"))}{" "}
              <span className="text-gradient-brand">
                {t(tx("VIRAL REEL?", "فيرال ريل؟"))}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-[1.125rem] font-500 text-white/60 leading-relaxed"
            >
              {t(tx(
                "BECAUSE WE DON'T JUST CREATE CONTENT. WE CREATE STORIES PEOPLE REMEMBER.",
                "لأننا مش بنعمل محتوى فقط. بنصنع قصص الناس بتفتكرها.",
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-4 text-[0.9375rem] leading-[1.8] text-white/45"
            >
              <p>{t(tx("Anyone can shoot a reel.", "أي حد يقدر يصور ريل."))}</p>
              <p>
                {t(tx(
                  "But turning a brand into a story that captures attention, builds trust, and drives results takes something different.",
                  "لكن تحويل البراند لقصة بتجذب الانتباه وتبني الثقة وتحقق نتائج حقيقية، ده محتاج حاجة مختلفة.",
                ))}
              </p>
              <p>
                {t(tx(
                  "At Viral Reel, we believe that great content starts long before the camera starts recording. It starts with understanding your brand, your audience, and the story that makes you different.",
                  "في فيرال ريل، بنؤمن إن المحتوى العظيم بيبدأ قبل ما الكاميرا تشتغل. بيبدأ بفهم البراند بتاعك، جمهورك، والقصة اللي بتخليك مختلف.",
                ))}
              </p>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] glass p-8 sm:p-10"
          >
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
            <div className="relative">
              <p className="label-tag mb-8 text-white/30">{t(tx("Why it works", "ليه بينجح"))}</p>
              <ul className="space-y-5">
                {pillars.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-brand text-[11px] font-700 text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.9375rem] font-medium text-white/80">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
