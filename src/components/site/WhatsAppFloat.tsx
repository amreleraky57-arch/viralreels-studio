import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/201098375423";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 grid h-13 w-13 place-items-center rounded-full bg-gradient-brand text-white shadow-[0_16px_48px_-12px_rgba(255,46,136,0.65)]"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-pink/35" />
      <MessageCircle size={20} />
    </motion.a>
  );
}
