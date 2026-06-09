import { motion } from "framer-motion";
import { useLang, tx } from "@/lib/i18n";

const creators = [
  { handle: "@sarah_creates", niche: tx("Beauty & Skincare", "بيوتي وسكين كير"), rate: "98%", rateLabel: tx("Conversion Rate", "معدل التحويل") },
  { handle: "@alex_reviews", niche: tx("Tech & Gadgets", "تك وأدوات"), rate: "94%", rateLabel: tx("Conversion Rate", "معدل التحويل") },
  { handle: "@mia.lifestyle", niche: tx("Lifestyle & Fitness", "لايف ستايل وفتنس"), rate: "96%", rateLabel: tx("Conversion Rate", "معدل التحويل") },
  { handle: "@nour_foodie", niche: tx("Food & Beverage", "أكل ومشروبات"), rate: "92%", rateLabel: tx("Conversion Rate", "معدل التحويل") },
  { handle: "@zaid.builds", niche: tx("B2B & SaaS", "B2B وسوفت وير"), rate: "91%", rateLabel: tx("Conversion Rate", "معدل التحويل") },
  { handle: "@layla_fashion", niche: tx("Fashion & Style", "موضة وستايل"), rate: "97%", rateLabel: tx("Conversion Rate", "معدل التحويل") },
];

export function UGC() {
  const { t } = useLang();

  return (
    <section id="ugc" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[10%] bottom-[15%] h-[380px] w-[380px] rounded-full bg-pink/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="label-tag mb-4">{t(tx("UGC Creators", "صنّاع المحتوى"))}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-700 text-white">
            {t(tx("Hire creators that", "وظّف صنّاعاً"))}
            <br />
            <span className="text-gradient-brand">{t(tx("actually sell.", "بيبيعوا فعلاً."))}</span>
          </h2>
          <p className="mt-5 text-[0.9375rem] leading-[1.75] text-white/45 max-w-xl">
            {t(
              tx(
                "We connect brands with creators who know how to convert attention into customers.",
                "بنربط البراندات بصنّاع محتوى يعرفوا يحوّلوا الاهتمام لعملاء حقيقيين.",
              ),
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((c, i) => (
            <motion.div
              key={c.handle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] glass p-7 transition-all duration-300 hover:border-white/[0.14] hover:-translate-y-0.5"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
              <div className="relative">
                {/* Avatar placeholder */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand opacity-80" />
                  <div>
                    <div className="text-[0.875rem] font-semibold text-white">{c.handle}</div>
                    <div className="text-xs text-white/40">{t(c.niche)}</div>
                  </div>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-700 text-gradient-brand">{c.rate}</span>
                  <span className="text-xs text-white/35">{t(c.rateLabel)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
