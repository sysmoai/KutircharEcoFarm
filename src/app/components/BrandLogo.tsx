import logoIcon from "../../imports/image.png";

export interface BrandLogoProps {
  iconSize?: number;
  variant?: "horizontal" | "stacked" | "icon-only";
  bilingual?: boolean;
  bengaliFirst?: boolean;
  mode?: "color" | "dark-green" | "black" | "white" | "watermark";
  showTagline?: boolean;
  showShortDesc?: boolean;
  className?: string;
}

// ─── Color maps ───────────────────────────────────────────────────────────────

const FILTERS: Record<string, string> = {
  color:       "none",
  "dark-green":"grayscale(1) sepia(1) saturate(8) hue-rotate(85deg) brightness(0.65)",
  black:       "brightness(0)",
  white:       "brightness(0) invert(1)",
  // Watermark uses NO filter — logo keeps its colours and shape.
  // Opacity is applied via style.opacity below so K, cattle, solar
  // and the circular border remain visible at low opacity.
  watermark:   "none",
};

const TEXT_COLOR: Record<string, string> = {
  color:       "#1F6B3A",
  "dark-green":"#0B4F2A",
  black:       "#000000",
  white:       "#FFFFFF",
  watermark:   "rgba(31,107,58,0.12)",  // faint brand green, not black
};

const ACCENT_COLOR: Record<string, string> = {
  color:       "#4F9A3D",
  "dark-green":"#1F6B3A",
  black:       "#333333",
  white:       "rgba(255,255,255,0.75)",
  watermark:   "rgba(31,107,58,0.08)",  // tagline — even fainter brand green
};

// ─── Component ────────────────────────────────────────────────────────────────

export function BrandLogo({
  iconSize = 64,
  variant = "horizontal",
  bilingual = false,
  bengaliFirst = false,
  mode = "color",
  showTagline = false,
  showShortDesc = false,
  className = "",
}: BrandLogoProps) {
  const filter      = FILTERS[mode];
  const textColor   = TEXT_COLOR[mode];
  const accentColor = ACCENT_COLOR[mode];

  // ── Icon ──────────────────────────────────────────────────────────────────
  const iconEl = (
    <img
      src={logoIcon}
      alt="Kutirchar EcoFarm icon"
      style={{
        width: iconSize,
        height: iconSize,
        objectFit: "contain",
        filter: (filter && filter !== "none") ? filter : undefined,
        // Watermark: opacity 0.10 preserves the logo's shape while
        // making it faint enough to sit behind document content.
        opacity: mode === "watermark" ? 0.10 : undefined,
        flexShrink: 0,
        display: "block",
      }}
    />
  );

  // ── English name ──────────────────────────────────────────────────────────
  // Playfair Display 600 is the authoritative wordmark for English.
  const engEl = (
    <span style={{
      fontFamily:    "'Playfair Display', Georgia, serif",
      fontWeight:    600,
      fontSize:      iconSize * 0.280,   // primary size anchor
      color:         textColor,
      letterSpacing: "0.020em",
      lineHeight:    1.15,
      display:       "block",
    }}>
      Kutirchar EcoFarm
    </span>
  );

  // ── Bengali name ──────────────────────────────────────────────────────────
  // SAME SIZE as English (iconSize * 0.280).
  // True expert bilingual match: identical em-size, natural balance from fonts.
  //   Playfair Display 600  → high-contrast display serif, elegant strokes
  //   Noto Sans Bengali 500 → uniform sans-serif, slightly denser
  // At the same point size these qualities produce equal visual presence.
  // Both cap-heights are ≈ 72–73% of em, so rendered heights match exactly.
  const benEl = (
    <span style={{
      fontFamily:    "'Noto Sans Bengali', 'Noto Serif Bengali', sans-serif",
      fontWeight:    500,
      fontSize:      iconSize * 0.280,   // identical to English — true expert match
      color:         textColor,
      letterSpacing: "0.008em",
      lineHeight:    1.45,               // Bengali needs more room for matras
      display:       "block",
      opacity:       1,
    }}>
      কুটিরচর ইকোফার্ম
    </span>
  );

  // ── Bilingual separator ───────────────────────────────────────────────────
  // A 1px rule between the two names — gives the pair a unified, professional
  // bilingual identity (standard in government, bank, and UN bilingual marks).
  const sep = (
    <div style={{
      height:     "1px",
      background: textColor,
      opacity:    mode === "watermark" ? 0.04 : 0.20,
      margin:     `${iconSize * 0.055}px 0`,
      display:    "block",
      width:      "100%",
    }} />
  );

  // ── Tagline ───────────────────────────────────────────────────────────────
  const taglineEl = showTagline ? (
    <span style={{
      fontFamily:    "'Inter', sans-serif",
      fontWeight:    400,
      fontSize:      iconSize * 0.140,
      color:         accentColor,
      letterSpacing: "0.050em",
      display:       "block",
      marginTop:     iconSize * 0.08,
      textTransform: "uppercase" as const,
    }}>
      Smart Cattle & Circular Energy Ecosystem
    </span>
  ) : null;

  // ── Short descriptor ──────────────────────────────────────────────────────
  const shortDescEl = showShortDesc ? (
    <span style={{
      fontFamily:    "'Inter', sans-serif",
      fontWeight:    400,
      fontSize:      iconSize * 0.155,
      color:         accentColor,
      letterSpacing: "0.060em",
      display:       "block",
      marginTop:     iconSize * 0.06,
    }}>
      Dairy · Biogas · Solar · Silage
    </span>
  ) : null;

  if (variant === "icon-only") {
    return <div className={className}>{iconEl}</div>;
  }

  // ── Name order: bengaliFirst puts Bengali on top ──────────────────────────
  const primaryEl   = bengaliFirst ? benEl   : engEl;
  const secondaryEl = bilingual    ? (bengaliFirst ? engEl : benEl) : null;

  // ── Horizontal ────────────────────────────────────────────────────────────
  if (variant === "horizontal") {
    return (
      <div
        className={className}
        style={{ display: "flex", alignItems: "center", gap: iconSize * 0.20 }}
      >
        {iconEl}
        <div>
          {primaryEl}
          {secondaryEl && sep}
          {secondaryEl}
          {taglineEl}
          {shortDescEl}
        </div>
      </div>
    );
  }

  // ── Stacked ───────────────────────────────────────────────────────────────
  return (
    <div
      className={className}
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        gap:           iconSize * 0.16,
      }}
    >
      {iconEl}
      <div style={{ textAlign: "center" }}>
        {primaryEl}
        {secondaryEl && sep}
        {secondaryEl}
        {taglineEl}
        {shortDescEl}
      </div>
    </div>
  );
}
