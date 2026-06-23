import logoIcon from "../../imports/image.png";

// ─── Types ──────────────────────────────────────────────────────────────────

interface SealLogoProps {
  size?: number;
  mode?: "color" | "dark-green" | "black" | "white";
  background?: string;
}

// ─── Color schemes ───────────────────────────────────────────────────────────

const SCHEME = {
  color:        { stroke: "#1F6B3A", text: "#1F6B3A", bg: "#FFFFFF" },
  "dark-green": { stroke: "#0B4F2A", text: "#0B4F2A", bg: "#FAF7EF" },
  black:        { stroke: "#1E2420", text: "#1E2420", bg: "#FFFFFF" },
  white:        { stroke: "#FFFFFF", text: "#FFFFFF", bg: "#1F6B3A" },
} as const;

const ICON_FILTER: Record<string, string | undefined> = {
  color:        undefined,
  "dark-green": "grayscale(1) sepia(1) saturate(8) hue-rotate(85deg) brightness(0.65)",
  black:        "brightness(0)",
  white:        "brightness(0) invert(1)",
};

// ─── Component ───────────────────────────────────────────────────────────────

export function SealLogo({ size = 240, mode = "color", background }: SealLogoProps) {
  const sc     = SCHEME[mode];
  const bg     = background ?? sc.bg;
  const filter = ICON_FILTER[mode];

  const cx = size / 2;
  const cy = size / 2;

  // ── Expert Proportions ────────────────────────────────────────────────────
  //
  //  Zone map (from outside in):
  //
  //  [canvas edge]
  //    3px margin
  //  [outerR]      ← thick outer ring stroke
  //  [outerR2]     ← thin inner band line (creates double-ring effect)
  //    text zone
  //  [textR]       ← center of arc text
  //    text zone
  //  [innerRing]   ← inner separator ring + bg fill
  //    icon field  ← logo fills this area edge-to-edge
  //  [center]
  //
  //  Icon PNG: the circular logo occupies ≈ 92% of the PNG width.
  //  We size iconW so that the logo circle fills the inner field:
  //    logo_radius = iconW × 0.46  ≈  innerRing_clip_radius
  //    → iconW = innerRing × 2 / 0.92  (see below)

  const outerR    = size * 0.484;  // outer ring boundary
  const outerR2   = size * 0.460;  // thin inner band (double-ring)
  const textR     = size * 0.400;  // arc text center line
  const innerRing = size * 0.336;  // inner separator ring

  // iconW is calculated so the logo circle fills the clip area:
  //   logo radius ≈ iconW × 0.46
  //   clip radius = innerRing - outerStrokeHalf ≈ innerRing - 0.004 × size
  //   → iconW × 0.46 = innerRing - 0.004 × size
  //   → iconW = (innerRing - 0.004 × size) / 0.46
  const iconClipR = innerRing - size * 0.004;
  // logo circle occupies ≈ 92% of PNG width → logo radius = iconW × 0.46
  // Set logo radius = iconClipR → iconW = iconClipR / 0.46
  const iconW     = iconClipR / 0.46;
  const iconX     = cx - iconW / 2;
  const iconY     = cy - iconW / 2;

  // ── Strokes ───────────────────────────────────────────────────────────────
  const outerStroke  = size * 0.023;  // thick outer ring
  const band2Stroke  = size * 0.004;  // thin inner band line
  const innerStroke  = size * 0.008;  // inner separator ring

  // ── Typography ────────────────────────────────────────────────────────────
  // Text band width: outerR2 – innerRing = 0.460 – 0.336 = 0.124 × size
  // Font needs to sit centred on textR with ≥ 1.5 × fontHeight of clearance.
  // English uppercase ascenders ≈ 72% of cap-height.
  // Bengali characters ≈ comparable height.
  // Both fonts are set so their cap-height ≈ 65% of the text band width.

  const engFontSize  = size * 0.0610;  // cap-height ≈ 0.044 × size
  const benFontSize  = size * 0.0530;  // matches band proportionally
  const engSpacing   = size * 0.0175;  // generous tracked capitals
  const benSpacing   = size * 0.0110;  // Bengali benefits from slightly wider spacing

  // ── Separator dots ────────────────────────────────────────────────────────
  // Placed at 3 o'clock (cx+textR, cy) and 9 o'clock (cx−textR, cy)
  // on the text arc radius, dividing the top arc from the bottom arc.
  const dotR = size * 0.0220;

  // ── SVG IDs (unique per size+mode) ───────────────────────────────────────
  const uid    = `${size}-${mode}`;
  const topId  = `t${uid}`;
  const botId  = `b${uid}`;
  const clipId = `c${uid}`;

  // ── Arc paths ─────────────────────────────────────────────────────────────
  // Top  : clockwise   9→12→3   text reads L→R at the top  ✓
  // Bottom: counter-CW 9→6→3   at 6 o'clock direction is →  text reads L→R ✓
  const topArc = `M ${cx - textR},${cy} A ${textR},${textR} 0 0,1 ${cx + textR},${cy}`;
  const botArc = `M ${cx - textR},${cy} A ${textR},${textR} 0 0,0 ${cx + textR},${cy}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Kutirchar EcoFarm official seal — কুটিরচর ইকোফার্ম"
    >
      <defs>
        <path id={topId} d={topArc} />
        <path id={botId} d={botArc} />
        {/* Clip icon to inner circle — ensures logo never overflows the separator ring */}
        <clipPath id={clipId}>
          <circle cx={cx} cy={cy} r={iconClipR} />
        </clipPath>
      </defs>

      {/* Layer 1 ── Background fill */}
      <circle cx={cx} cy={cy} r={outerR} fill={bg} />

      {/* Layer 2 ── Outer thick ring */}
      <circle
        cx={cx} cy={cy} r={outerR}
        fill="none"
        stroke={sc.stroke}
        strokeWidth={outerStroke}
      />

      {/* Layer 3 ── Inner thin band line (double-ring effect) */}
      <circle
        cx={cx} cy={cy} r={outerR2}
        fill="none"
        stroke={sc.stroke}
        strokeWidth={band2Stroke}
      />

      {/* Layer 4 ── Separator dots at 9 o'clock and 3 o'clock */}
      <circle cx={cx - textR} cy={cy} r={dotR} fill={sc.stroke} />
      <circle cx={cx + textR} cy={cy} r={dotR} fill={sc.stroke} />

      {/* Layer 5 ── English top arc: KUTIRCHAR ECOFARM */}
      <text
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize={engFontSize}
        fontWeight="700"
        fill={sc.text}
        letterSpacing={engSpacing}
      >
        <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
          KUTIRCHAR ECOFARM
        </textPath>
      </text>

      {/* Layer 6 ── Bengali bottom arc: কুটিরচর ইকোফার্ম */}
      <text
        fontFamily="'Noto Sans Bengali', 'Noto Serif Bengali', sans-serif"
        fontSize={benFontSize}
        fontWeight="600"
        fill={sc.text}
        letterSpacing={benSpacing}
      >
        <textPath href={`#${botId}`} startOffset="50%" textAnchor="middle">
          কুটিরচর ইকোফার্ম
        </textPath>
      </text>

      {/* Layer 7 ── Inner separator ring with background fill
           fill={bg} creates a clean white/ivory field behind the icon,
           hiding any text or rings that otherwise bleed into the icon zone */}
      <circle
        cx={cx} cy={cy} r={innerRing}
        fill={bg}
        stroke={sc.stroke}
        strokeWidth={innerStroke}
      />

      {/* Layer 8 ── Center icon (clipped — logo circle fills inner field) */}
      <image
        href={logoIcon}
        x={iconX}
        y={iconY}
        width={iconW}
        height={iconW}
        clipPath={`url(#${clipId})`}
        style={filter ? { filter } : undefined}
      />
    </svg>
  );
}
