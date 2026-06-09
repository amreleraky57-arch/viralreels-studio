import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang, tx } from "@/lib/i18n";

const cases = [
  {
    num: "01",
    brand: "Gabri's Wear",
    stat: tx("113 → 62.8K Followers", "113 → 62.8 ألف متابع"),
    growth: "+55,407",
    label: tx("Growth", "نمو"),
    color: "from-pink/30 to-violet/20",
  },
  {
    num: "02",
    brand: "DTX Digital",
    stat: tx("2.2K → 44.3K Followers", "2.2 ألف → 44.3 ألف متابع"),
    growth: "+42,050",
    label: tx("Growth", "نمو"),
    color: "from-violet/30 to-cyan/20",
  },
  {
    num: "03",
    brand: "TARIOCA",
    stat: tx("Pre-launch → 23.9K Followers", "قبل الإطلاق → 23.9 ألف متابع"),
    growth: "+14,336",
    label: tx("Growth", "نمو"),
    color: "from-cyan/25 to-pink/15",
  },
  {
    num: "04",
    brand: "NovaStack",
    stat: tx("Founder Content → 2.4M Demo Requests", "محتوى المؤسس → 2.4 مليون طلب"),
    growth: "2.4M",
    label: tx("Demo Requests", "طلب تجربة"),
    color: "from-violet/25 to-pink/20",
  },
];

export function Results() {
  const { t } = useLang();

  return (
    <section id="results" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-[20%] h-[320px] w-[320px] rounded-full bg-violet/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-700 text-white">
            {t(tx("Results that", "نتائج"))}
            <br />
            <span className="text-gradient-brand">{t(tx("speak for themselves.", "بتتكلم بنفسها."))}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] glass p-8 transition-all duration-300 hover:border-white/[0.14] hover:-translate-y-0.5 sm:p-10"
            >
              {/* Glow bg */}
              <div className={`absolute -right-8 -top-8 h-48 w-48 rounded-full bg-gradient-to-br ${c.color} opacity-60 blur-3xl`} />

              <div className="relative">
                <div className="mb-8 flex items-start justify-between">
                  <span className="font-display text-[11px] font-600 tracking-[0.35em] text-white/25">
                    {c.num}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.1] text-white/30 transition group-hover:border-white/[0.25] group-hover:text-white/70">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <h3 className="font-display text-2xl font-700 text-white sm:text-3xl">{c.brand}</h3>
                <p className="mt-2 text-[0.9375rem] text-white/45">{t(c.stat)}</p>

                <div className="mt-7 inline-flex items-baseline gap-1.5">
                  <span className="font-display text-[2.25rem] font-700 leading-none text-gradient-brand">
                    {c.growth}
                  </span>
                  <span className="text-sm text-white/40">{t(c.label)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
