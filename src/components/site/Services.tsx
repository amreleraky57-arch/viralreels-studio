import { motion } from "framer-motion";
import { useLang, tx } from "@/lib/i18n";

const services = [
  {
    n: "01",
    title: tx("Content Creation", "صناعة المحتوى"),
    body: tx(
      "Cinematic, scroll-stopping short-form content engineered to perform across Reels, TikTok, and YouTube Shorts.",
      "محتوى قصير سينمائي يوقف السكرول، مصمم خصيصاً ليتفوّق على ريلز وتيك توك ويوتيوب شورتس.",
    ),
  },
  {
    n: "02",
    title: tx("UGC Production", "إنتاج UGC"),
    body: tx(
      "Authentic creator content built to increase trust, engagement, and conversions for your brand.",
      "محتوى أصيل بصوت الصنّاع، مصمم لزيادة الثقة، التفاعل، والتحويلات.",
    ),
  },
  {
    n: "03",
    title: tx("Social Media Growth", "نمو السوشيال ميديا"),
    body: tx(
      "End-to-end channel growth — strategy, posting cadence, hooks, and analytics that compound over time.",
      "نمو شامل لقنواتك — استراتيجية، جدولة نشر، هوكس، وتحليلات تتراكم نتائجها.",
    ),
  },
  {
    n: "04",
    title: tx("Content Strategy", "استراتيجية المحتوى"),
    body: tx(
      "Positioning, pillars, and a 90-day content plan tailored to your audience, niche, and goals.",
      "تحديد الموقف، الأعمدة، وخطة محتوى لـ 90 يوم مصممة لجمهورك ومجالك وأهدافك.",
    ),
  },
];

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="label-tag mb-4">{t(tx("Services", "خدماتنا"))}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-700 text-white">
            {t(tx("What we do,", "كل اللي بنعمله،"))}
            <br />
            <span className="text-white/50">{t(tx("end-to-end.", "من الألف للياء."))}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] glass p-8 transition-all duration-300 hover:border-white/[0.15] hover:-translate-y-0.5 sm:p-10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-7 font-display text-[11px] font-600 tracking-[0.35em] text-white/25">
                  {s.n}
                </div>
                <h3 className="font-display text-[1.625rem] font-700 text-white sm:text-[1.875rem]">
                  {t(s.title)}
                </h3>
                <p className="mt-3.5 text-[0.9375rem] leading-[1.75] text-white/50">
                  {t(s.body)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
