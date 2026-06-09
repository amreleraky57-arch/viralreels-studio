import { motion } from "framer-motion";
import { useLang, tx } from "@/lib/i18n";
import { Counter } from "./Counter";

const stats = [
  {
    value: 6,
    suffix: "M+",
    label: tx("Views Generated", "مشاهدة مولّدة"),
    sub: tx("Across all platforms", "على جميع المنصات"),
  },
  {
    value: 50,
    suffix: "+",
    label: tx("Brands Scaled", "براند نما"),
    sub: tx("From startups to giants", "من ستارت أب لشركات كبرى"),
  },
  {
    value: 75,
    suffix: "%",
    label: tx("Client Retention", "ولاء العملاء"),
    sub: tx("Long-term partnerships", "شراكات طويلة المدى"),
  },
];

export function Stats() {
  const { t } = useLang();
  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={`${s.suffix}${s.value}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.07] glass px-8 py-8"
            >
              <div className="absolute -top-12 right-0 h-36 w-36 rounded-full bg-gradient-brand opacity-[0.15] blur-3xl" />
              <div className="relative">
                <div className="font-display text-[2.75rem] font-700 tracking-tight text-gradient-brand sm:text-5xl leading-none">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2.5 text-[0.9375rem] font-medium text-white/90">
                  {t(s.label)}
                </div>
                <div className="mt-0.5 text-xs text-white/40">{t(s.sub)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
