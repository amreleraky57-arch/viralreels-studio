import { Instagram, Music2, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { useLang, tx } from "@/lib/i18n";

const WA = "https://wa.me/201098375423";

export function Footer() {
  const { t } = useLang();
  const links = [
    { id: "services", label: tx("Services", "خدماتنا") },
    { id: "work", label: tx("Work", "أعمالنا") },
    { id: "about", label: tx("About", "من نحن") },
    { id: "contact", label: tx("Contact", "تواصل") },
  ];
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.05] py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3 md:items-center">
        <Logo />
        <ul className="flex flex-wrap items-center gap-5 md:justify-center">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="text-[13px] text-white/40 transition hover:text-white"
              >
                {t(l.label)}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2.5 md:justify-end">
          {[
            { href: WA, icon: <MessageCircle size={15} />, label: "WhatsApp" },
            { href: "https://www.instagram.com/reelscretors?igsh=MXZ4ZXVxcGllZjBrbw==", icon: <Instagram size={15} />, label: "Instagram" },
            { href: "https://vm.tiktok.com/ZS92Qqx8MPAQt-S73er/", icon: <Music2 size={15} />, label: "TikTok" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.08] text-white/40 transition hover:border-white/25 hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/[0.04] px-6 pt-5 text-[11px] text-white/25">
        © {new Date().getFullYear()} Viral Reel.{" "}
        {t(tx("All rights reserved.", "كل الحقوق محفوظة."))}
      </div>
    </footer>
  );
}
