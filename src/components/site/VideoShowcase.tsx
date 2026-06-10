import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { useLang, tx } from "@/lib/i18n";

type Reel = { id: string; title: { en: string; ar: string } };

const sections = [
  {
    key: "",
    label: tx("", ""),
    desc: tx(
      "",
      "",
    ),
    reels: [
      { id: "1lMGZnmawwRq174ckUSO-OI9KZ89wB7gk", title: tx("  ", " ") },
      { id: "1MxDNKGrGTtmDotw-nRVV2fbGUgocBUsh", title: tx(" ", " ") },
      { id: "1sQ4N1ONn7UfqhKjMsDDqlGsp8UfZkdg-", title: tx("", "") },
    ],
  },
  {
    key: "",
    label: tx("", ""),
    desc: tx(
      "",
      " ",
    ),
    reels: [
      { id: "1WDmAXQrEq7EHzwps6RPxY2hMR0rxP2kt", title: tx(" ", "") },
      { id: "1ARpYLbeeZzID3REPQHtwLt7raJ0S8eV8", title: tx("", " ") },
      { id: "1Bqcffm903fiKJ13nHbmDEwF-BfBf0rtN", title: tx(" ", " ") },
    ],
  },
  {
    key: "",
    label: tx(" ", " "),
    desc: tx(
      "",
      "أصوات حقيقية، ناس حقيقيين، ردود فعل حقيقية.",
    ),
    reels: [
      { id: "1HfMuvcV-pZKFb_LCIvGPH_BYQZnpIZol", title: tx(" ", "") },
      { id: "19TlSjDOXeAvlg7zJlFI88ntSdxW7W-V1", title: tx("", "") },
      { id: "1SLrviaJvAnrq8WH-HQOhTtzLVvMMoWeh", title: tx(" ", " ") },
    ],
  },
];

const thumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w640`;

function ReelCard({ reel, index, onPlay }: { reel: Reel; index: number; onPlay: (r: Reel) => void }) {
  const { t } = useLang();
  const [ok, setOk] = useState(true);
  return (
    <motion.button
      type="button"
      onClick={() => onPlay(reel)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-2 text-left shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:shadow-[0_24px_64px_-16px_rgba(255,46,136,0.35)]"
    >
      {ok ? (
        <img
          src={thumb(reel.id)}
          alt={t(reel.title)}
          loading="lazy"
          decoding="async"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-brand opacity-50" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="relative grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-white/[0.08] backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-pink/50 group-hover:bg-white/[0.14]">
          <Play size={17} className="translate-x-[1px] fill-white text-white" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="text-[0.8125rem] font-medium text-white/90">{t(reel.title)}</div>
      </div>
    </motion.button>
  );
}

function VideoModal({ reel, onClose }: { reel: Reel | null; onClose: () => void }) {
  const { t } = useLang();
  useEffect(() => {
    if (!reel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [reel, onClose]);

  return (
    <AnimatePresence>
      {reel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-2xl"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="close"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-white/[0.08] text-white backdrop-blur-md hover:bg-white/[0.16]"
          >
            <X size={17} />
          </button>
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[9/16] h-[86vh] max-h-[840px] w-auto max-w-[95vw] overflow-hidden rounded-3xl border border-white/[0.12] bg-black shadow-[0_32px_96px_-24px_rgba(255,46,136,0.5)]"
          >
            <iframe
              src={`https://drive.google.com/file/d/${reel.id}/preview`}
              title={t(reel.title)}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function VideoShowcase() {
  const { t } = useLang();
  const [active, setActive] = useState<Reel | null>(null);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <p className="label-tag mb-4">{t(tx("Our Work", "أعمالنا"))}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-700 text-white">
            {t(tx("Content that", "محتوى"))}
            <br />
            <span className="text-gradient-brand">{t(tx("performs.", "يصنع الفرق."))}</span>
          </h2>
        </div>

        <div className="space-y-28">
          {sections.map((sec) => (
            <div key={sec.key} className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <p className="label-tag mb-3 text-white/30">{t(tx("", ""))}</p>
                  <h3 className="font-display text-[clamp(2rem,4vw,3rem)] font-700 leading-none">
                    <span className="text-gradient-brand">{t(sec.label)}</span>
                  </h3>
                  <p className="mt-4 max-w-sm text-[0.9375rem] leading-[1.75] text-white/45">
                    {t(sec.desc)}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sec.reels.map((r, i) => (
                    <ReelCard key={r.id} reel={r} index={i} onPlay={setActive} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoModal reel={active} onClose={() => setActive(null)} />
    </section>
  );
}
