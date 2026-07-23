import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection, SectionHeading, Card, StopRule, CtaButton } from "../shared/Shared";
import { PhaseChip } from "../shared/PhaseChip";
import { useT } from "../shared/i18n";

const systems = [
  { icon: "📡", titleKey: "digital.sys1Title", phase: "Later" as const, color: COLORS.riverBlue,
    descKey: "digital.sys1Desc", gateKeys: ["digital.sys1Gate1","digital.sys1Gate2","digital.sys1Gate3","digital.sys1Gate4"],
    outputKeys: ["digital.sys1Out1","digital.sys1Out2","digital.sys1Out3","digital.sys1Out4"] },
  { icon: "📷", titleKey: "digital.sys2Title", phase: "Later" as const, color: COLORS.charcoalText,
    descKey: "digital.sys2Desc", gateKeys: ["digital.sys2Gate1","digital.sys2Gate2","digital.sys2Gate3","digital.sys2Gate4"],
    outputKeys: ["digital.sys2Out1","digital.sys2Out2","digital.sys2Out3","digital.sys2Out4"] },
  { icon: "🔋", titleKey: "digital.sys3Title", phase: "Next" as const, color: COLORS.solarGold,
    descKey: "digital.sys3Desc", gateKeys: ["digital.sys3Gate1","digital.sys3Gate2","digital.sys3Gate3"],
    outputKeys: ["digital.sys3Out1","digital.sys3Out2","digital.sys3Out3"] },
  { icon: "🌐", titleKey: "digital.sys4Title", phase: "Next" as const, color: COLORS.bioOliveDeep,
    descKey: "digital.sys4Desc", gateKeys: ["digital.sys4Gate1","digital.sys4Gate2","digital.sys4Gate3"],
    outputKeys: ["digital.sys4Out1","digital.sys4Out2","digital.sys4Out3"] },
];

const modules = [
  { icon: "📡", titleKey: "digital.mod1Title", items: ["digital.mod1Item1","digital.mod1Item2","digital.mod1Item3","digital.mod1Item4"], phase: "Later" as const },
  { icon: "⚡", titleKey: "digital.mod2Title", items: ["digital.mod2Item1","digital.mod2Item2","digital.mod2Item3","digital.mod2Item4"], phase: "Next" as const },
  { icon: "🔒", titleKey: "digital.mod3Title", items: ["digital.mod3Item1","digital.mod3Item2","digital.mod3Item3","digital.mod3Item4"], phase: "Next" as const },
];

const sequenceSteps = [
  { step: "1", titleKey: "digital.seq1Title", noteKey: "digital.seq1Note", phase: "Next" as const },
  { step: "2", titleKey: "digital.seq2Title", noteKey: "digital.seq2Note", phase: "Next" as const },
  { step: "3", titleKey: "digital.seq3Title", noteKey: "digital.seq3Note", phase: "Next" as const },
  { step: "4", titleKey: "digital.seq4Title", noteKey: "digital.seq4Note", phase: "Later" as const },
  { step: "5", titleKey: "digital.seq5Title", noteKey: "digital.seq5Note", phase: "Later" as const },
];

export function DigitalPage() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("digital.heroTitle")}
        titleBn={T("nav.digital")}
        subtitle={T("digital.heroSubtitle")}
      />

      {/* Architecture overview */}
      <PageSection>
        <SectionHeading title={T("digital.archTitle")} subtitle={T("digital.archSubtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 40 }}>
          {modules.map((mod) => (
            <div key={mod.titleKey} style={{ background: COLORS.deepFarmGreen, borderRadius: 12, padding: "24px", color: "white" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <p style={{ fontSize: 28, margin: "0 0 6px" }}>{mod.icon}</p>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 15, fontWeight: 700, color: "white", margin: 0 }}>{T(mod.titleKey)}</p>
                </div>
                <PhaseChip phase={mod.phase} />
              </div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {mod.items.map((item) => <li key={item} style={{ fontFamily: FONTS.sans, fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: 3 }}>{T(item)}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <StopRule>{T("digital.stopRule")}</StopRule>
      </PageSection>

      {/* BD Digital Divide Context */}
      <PageSection>
        <SectionHeading title={T("digital.bdDigitalDivide")} subtitle={T("digital.bdDigitalDivideDesc")} center />
      </PageSection>
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("digital.bdStarlinkBD")} subtitle={T("digital.bdStarlinkBDDesc")} center />
      </PageSection>
      <PageSection>
        <SectionHeading title={T("digital.bdRuralImpact")} subtitle={T("digital.bdRuralImpactDesc")} center />
      </PageSection>

      {/* System detail cards */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("digital.gatesTitle")} subtitle={T("digital.gatesSubtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {systems.map((sys) => (
            <Card key={sys.titleKey}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 24 }}>{sys.icon}</span>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: sys.color, margin: 0 }}>{T(sys.titleKey)}</p>
                </div>
                <PhaseChip phase={sys.phase} />
              </div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", lineHeight: 1.65, margin: "0 0 14px" }}>{T(sys.descKey)}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 6 }}>{T("common.verificationGates")}</p>
              {sys.gateKeys.map((g) => (
                <div key={g} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                  <span style={{ color: COLORS.riskRed, flexShrink: 0, fontSize: 12, marginTop: 1 }}>○</span>
                  <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#555" }}>{T(g)}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #f0f0f0", marginTop: 12, paddingTop: 12 }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 6 }}>{T("common.Outputs")}</p>
                {sys.outputKeys.map((o) => (
                  <div key={o} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                    <span style={{ color: COLORS.kutircharGreen, flexShrink: 0, fontSize: 12 }}>✓</span>
                    <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#555" }}>{T(o)}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Installation sequence */}
      <PageSection>
        <SectionHeading title={T("digital.sequenceTitle")} subtitle={T("digital.sequenceSubtitle")} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
          {sequenceSteps.map((item) => (
            <div key={item.step} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.kutircharGreen, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONTS.sans, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{item.step}</div>
              <div style={{ flex: 1, background: "#fafafa", borderRadius: 10, padding: "14px 18px", border: "1px solid #ebebeb" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: COLORS.charcoalText, margin: 0 }}>{T(item.titleKey)}</p>
                  <PhaseChip phase={item.phase} />
                </div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", margin: 0 }}>{T(item.noteKey)}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <CtaButton to="/contact" variant="primary">{T("digital.ctaLabel")}</CtaButton>
        </div>
      </PageSection>
    </div>
  );
}