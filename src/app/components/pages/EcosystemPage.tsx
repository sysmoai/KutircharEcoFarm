import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection, SectionHeading, Card, CtaButton } from "../shared/Shared";
import { PhaseChip } from "../shared/PhaseChip";
import { useT } from "../shared/i18n";

const flow = [
  { icon: "🐄", titleKey: "ecosystem.sys1Title", color: COLORS.kutircharGreen, bg: "#f0f9f3",
    inputs: ["ecosystem.sys1Input1","ecosystem.sys1Input2","ecosystem.sys1Input3"],
    outputs: ["ecosystem.sys1Output1","ecosystem.sys1Output2","ecosystem.sys1Output3"],
    phase: "Now" as const, phaseNoteKey: "ecosystem.sys1Note" },
  { icon: "⚗️", titleKey: "ecosystem.sys2Title", color: COLORS.bioOliveDeep, bg: "#f5f6ee",
    inputs: ["ecosystem.sys2Input1","ecosystem.sys2Input2","ecosystem.sys2Input3"],
    outputs: ["ecosystem.sys2Output1","ecosystem.sys2Output2","ecosystem.sys2Output3"],
    phase: "Next" as const, phaseNoteKey: "ecosystem.sys2Note" },
  { icon: "🌿", titleKey: "ecosystem.sys3Title", color: COLORS.kutircharGreen, bg: "#f0f9f3",
    inputs: ["ecosystem.sys3Input1","ecosystem.sys3Input2","ecosystem.sys3Input3"],
    outputs: ["ecosystem.sys3Output1","ecosystem.sys3Output2","ecosystem.sys3Output3"],
    phase: "Next" as const, phaseNoteKey: "ecosystem.sys3Note" },
  { icon: "🌾", titleKey: "ecosystem.sys4Title", color: COLORS.solarGold, bg: "#fffde7",
    inputs: ["ecosystem.sys4Input1","ecosystem.sys4Input2","ecosystem.sys4Input3"],
    outputs: ["ecosystem.sys4Output1","ecosystem.sys4Output2","ecosystem.sys4Output3"],
    phase: "Next" as const, phaseNoteKey: "ecosystem.sys4Note" },
  { icon: "☀️", titleKey: "ecosystem.sys5Title", color: COLORS.solarGold, bg: "#fffde7",
    inputs: ["ecosystem.sys5Input1","ecosystem.sys5Input2","ecosystem.sys5Input3"],
    outputs: ["ecosystem.sys5Output1","ecosystem.sys5Output2","ecosystem.sys5Output3"],
    phase: "Next" as const, phaseNoteKey: "ecosystem.sys5Note" },
  { icon: "📊", titleKey: "ecosystem.sys6Title", color: COLORS.riverBlue, bg: "#eff6fb",
    inputs: ["ecosystem.sys6Input1","ecosystem.sys6Input2","ecosystem.sys6Input3"],
    outputs: ["ecosystem.sys6Output1","ecosystem.sys6Output2","ecosystem.sys6Output3"],
    phase: "Later" as const, phaseNoteKey: "ecosystem.sys6Note" },
];

const circularLogic = [
  { from: "Cattle", arrow: "produces", to: "Manure" },
  { from: "Manure", arrow: "feeds", to: "Biogas Digester" },
  { from: "Biogas", arrow: "generates", to: "Cooking Gas + Bio-Slurry" },
  { from: "Bio-Slurry", arrow: "fertilizes", to: "Napier Grass" },
  { from: "Napier", arrow: "feeds back to", to: "Cattle" },
  { from: "Solar", arrow: "powers", to: "Farm Operations" },
];

export function EcosystemPage() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("ecosystem.heroTitle")}
        titleBn={T("nav.ecosystem")}
        subtitle={T("ecosystem.heroSubtitle")}
      />

      {/* Circular Logic Flow */}
      <PageSection>
        <SectionHeading title={T("ecosystem.flowTitle")} subtitle={T("ecosystem.flowSubtitle")} center />
        <div style={{ background: COLORS.fieldMist, borderRadius: 16, padding: "32px 24px", marginBottom: 40 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px 0" }}>
            {circularLogic.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap", justifyContent: "center" }}>
                <div style={{ background: COLORS.kutircharGreen, color: "white", borderRadius: 8, padding: "8px 16px", fontFamily: FONTS.sans, fontSize: 13, fontWeight: 700 }}>
                  {step.from}
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 10px" }}>
                  <span style={{ fontFamily: FONTS.sans, fontSize: 10, color: "#6b7280", fontStyle: "italic" }}>{step.arrow}</span>
                  <span style={{ fontSize: 18, color: COLORS.kutircharGreen, lineHeight: 1 }}>→</span>
                </div>
                {i === circularLogic.length - 1 && (
                  <div style={{ background: COLORS.solarGold, color: COLORS.deepFarmGreen, borderRadius: 8, padding: "8px 16px", fontFamily: FONTS.sans, fontSize: 13, fontWeight: 700 }}>
                    {step.to}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(31,107,58,0.1)", borderRadius: 20, padding: "6px 16px" }}>
              <span style={{ fontSize: 14 }}>↺</span>
              <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.kutircharGreen, fontWeight: 600 }}>{T("ecosystem.loopRestart")}</span>
            </div>
          </div>
        </div>

        {/* System components */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {flow.map((item) => (
            <Card key={item.titleKey} style={{ borderTop: `3px solid ${item.color}` }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 28 }}>{item.icon}</span>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 15, fontWeight: 700, color: item.color, margin: 0 }}>{T(item.titleKey)}</p>
                </div>
                <PhaseChip phase={item.phase} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 10, fontWeight: 700, color: "#6b7280", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 6 }}>{T("common.Inputs")}</p>
                  {item.inputs.map((inp) => (
                    <div key={inp} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                      <span style={{ color: "#aaa", fontSize: 12, flexShrink: 0 }}>→</span>
                      <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#555" }}>{T(inp)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 10, fontWeight: 700, color: "#6b7280", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 6 }}>{T("common.Outputs")}</p>
                  {item.outputs.map((out) => (
                    <div key={out} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                      <span style={{ color: item.color, fontSize: 12, flexShrink: 0 }}>✓</span>
                      <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#555" }}>{T(out)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: item.bg, borderRadius: 8, padding: "8px 12px" }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: item.color, fontWeight: 600, margin: 0 }}>📍 {T(item.phaseNoteKey)}</p>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* BD-Specific Sections */}
      <PageSection>
        <SectionHeading title={T("ecosystem.bdBiogasSustainability")} subtitle={T("ecosystem.bdBiogasDesc")} center />
      </PageSection>
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("ecosystem.bdFeedCost")} subtitle={T("ecosystem.bdFeedCostDesc")} center />
      </PageSection>
      <PageSection>
        <SectionHeading title={T("ecosystem.bdCircularPolicy")} subtitle={T("ecosystem.bdCircularPolicyDesc")} center />
      </PageSection>

      {/* Why circular */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("ecosystem.whyTitle")} subtitle={T("ecosystem.whySubtitle")} center />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {[
            { icon: "💸", title: T("ecosystem.why1Title"), body: T("ecosystem.why1Body") },
            { icon: "♻️", title: T("ecosystem.why2Title"), body: T("ecosystem.why2Body") },
            { icon: "🏦", title: T("ecosystem.why3Title"), body: T("ecosystem.why3Body") },
            { icon: "🌱", title: T("ecosystem.why4Title"), body: T("ecosystem.why4Body") },
            { icon: "⚡", title: T("ecosystem.why5Title"), body: T("ecosystem.why5Body") },
            { icon: "📡", title: T("ecosystem.why6Title"), body: T("ecosystem.why6Body") },
          ].map((item) => (
            <div key={item.title} style={{ background: "white", borderRadius: 12, padding: "18px", border: "1px solid #e5eee9", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 700, color: COLORS.kutircharGreen, margin: "0 0 8px" }}>{item.title}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#555", lineHeight: 1.6, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <CtaButton to="/products" size="lg">{T("ecosystem.ctaLabel")}</CtaButton>
        </div>
      </PageSection>
    </div>
  );
}