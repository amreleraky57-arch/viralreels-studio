type Props = {
  className?: string;
  size?: number;
};

export function Logo({ className = "", size = 36 }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF2E88" />
            <stop offset="55%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>

          <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="13"
          fill="url(#logoGradient)"
        />

        <rect
          x="2"
          y="2"
          width="44"
          height="22"
          rx="13"
          fill="url(#shine)"
        />

        <path
          d="M17 15V33L32 24L17 15Z"
          fill="#0A0A0A"
        />
      </svg>

      <span
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}
      >
        Viral Reel
      </span>
    </div>
  );
}