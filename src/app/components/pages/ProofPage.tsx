import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection, SectionHeading, Card, StopRule, CtaButton, ProofCard } from "../shared/Shared";
import { useT } from "../shared/i18n";

const auditRowKeys = ["ar1","ar2","ar3","ar4","ar5","ar6","ar7"];
const stopRuleKeys = ["stopRule1","stopRule2","stopRule3","stopRule4","stopRule5","stopRule6","stopRule7"];

const statusMap: Record<string, "verified" | "pending" | "missing"> = {
  "ev1": "pending",
  "ev2": "missing",
  "ev3": "missing",
  "ev4": "missing",
  "ev5": "pending",
  "ev6": "verified",
};

export function ProofPage() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("proof.heroTitle")}
        titleBn={T("nav.proof")}
        subtitle={T("proof.heroSubtitle")}
        dark
      />

      {/* Privacy notice */}
      <section style={{ background: COLORS.solarGold, padding: "10px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.deepFarmGreen, margin: 0, textAlign: "center", fontWeight: 600 }}>
            {T("proof.privacyNotice")}
          </p>
        </div>
      </section>

      {/* Audit Ledger */}
      <PageSection>
        <SectionHeading title={T("proof.auditTitle")} subtitle={T("proof.auditSubtitle")} />
        <div style={{ overflowX: "auto", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FONTS.sans, fontSize: 13 }}>
            <thead>
              <tr style={{ background: COLORS.deepFarmGreen }}>
                {[T("proof.thGap"), T("proof.thStatus"), T("proof.thEvidence"), T("proof.thStopRule")].map((h) => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "white", fontWeight: 600, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {auditRowKeys.map((rowKey, i) => {
                const statusStr = T(`auditRows.${rowKey}Status`);
                const statusColor = statusStr === T("common.statusOpen") ? COLORS.riskRed : statusStr === T("common.statusInProgress") ? COLORS.riverBlue : statusStr === T("common.statusCompleted") ? COLORS.kutircharGreen : "#888";
                return (
                  <tr key={rowKey} style={{ background: i % 2 === 0 ? "#fafafa" : "white", borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600, color: COLORS.charcoalText }}>{T(`auditRows.${rowKey}Gap`)}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{ color: statusColor, fontWeight: 700, fontSize: 12 }}>● {statusStr}</span>
                    </td>
                    <td style={{ padding: "12px 16px", color: "#555" }}>{T(`auditRows.${rowKey}Evidence`)}</td>
                    <td style={{ padding: "12px 16px", color: COLORS.riskRed, fontSize: 12 }}>{T(`auditRows.${rowKey}StopRule`)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Stop rules callout */}
        <div style={{ background: "#fff5f5", border: `2px solid #fecdca`, borderRadius: 12, padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 20 }}>🛑</span>
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, fontWeight: 700, color: "#7f1d1d", margin: 0 }}>{T("proof.stopRulesTitle")}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 8 }}>
            {stopRuleKeys.map((ruleKey) => (
              <div key={ruleKey} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: COLORS.riskRed, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✕</span>
                <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#7f1d1d", lineHeight: 1.55 }}>{T(`proof.${ruleKey}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Evidence Status */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("proof.evidenceTitle")} subtitle={T("proof.evidenceSubtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 28 }}>
          {["ev1","ev2","ev3","ev4","ev5","ev6"].map((evKey) => (
            <ProofCard key={evKey} label={T(`proof.${evKey}Label`)} status={statusMap[evKey]} note={T(`proof.${evKey}Note`)} />
          ))}
        </div>
        <div style={{ background: "white", borderRadius: 12, border: "1px solid #e5eee9", padding: "20px 24px" }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: COLORS.charcoalText }}>{T("proof.evidenceHowTo")}</strong>
          </p>
        </div>
      </PageSection>

      {/* BD-Specific: Biogas Risk, AI Challenges, Climate Risk, Policy Alignment */}
      <PageSection>
        <SectionHeading title={T("proof.bdBiogasRisk")} subtitle={T("proof.bdBiogasDesc")} />
      </PageSection>
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("proof.bdAIChallenge")} subtitle={T("proof.bdAIDesc")} />
      </PageSection>
      <PageSection>
        <SectionHeading title={T("proof.bdClimateRisk")} subtitle={T("proof.bdClimateRiskDesc")} />
      </PageSection>
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("proof.bdPolicyAlign")} subtitle={T("proof.bdPolicyAlignDesc")} />
      </PageSection>

      {/* Zone system */}
      <PageSection>
        <SectionHeading title={T("proof.zoneTitle")} subtitle={T("proof.zoneSubtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 28 }}>
          <Card style={{ borderLeft: `4px solid ${COLORS.kutircharGreen}` }}>
            <p style={{ fontFamily: FONTS.serif, fontSize: 18, fontWeight: 600, color: COLORS.kutircharGreen, margin: "0 0 6px" }}>{T("proof.zoneATitle")}</p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: "#333", margin: "0 0 12px" }}>{T("proof.zoneASubtitle")}</p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", lineHeight: 1.65, margin: "0 0 14px" }}>{T("proof.zoneADesc")}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {[T("proof.zoneAUse1"), T("proof.zoneAUse2"), T("proof.zoneAUse3"), T("proof.zoneAUse4")].map((u) => (
                <span key={u} style={{ fontFamily: FONTS.sans, fontSize: 11, background: "#f0f9f3", color: COLORS.kutircharGreen, border: "1px solid #c0ddc8", padding: "2px 8px", borderRadius: 10 }}>{u}</span>
              ))}
            </div>
          </Card>
          <Card style={{ borderLeft: `4px solid ${COLORS.riverBlue}` }}>
            <p style={{ fontFamily: FONTS.serif, fontSize: 18, fontWeight: 600, color: COLORS.riverBlue, margin: "0 0 6px" }}>{T("proof.zoneBTitle")}</p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: "#333", margin: "0 0 12px" }}>{T("proof.zoneBSubtitle")}</p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", lineHeight: 1.65, margin: "0 0 14px" }}>{T("proof.zoneBDesc")}</p>
            <StopRule>{T("proof.zoneBStopRule")}</StopRule>
            <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {[T("proof.zoneBUse1"), T("proof.zoneBUse2"), T("proof.zoneBUse3"), T("proof.zoneBUse4"), T("proof.zoneBUse5")].map((u) => (
                <span key={u} style={{ fontFamily: FONTS.sans, fontSize: 11, background: "#eff6fb", color: COLORS.riverBlue, border: "1px solid #b8d4e0", padding: "2px 8px", borderRadius: 10 }}>✓ {u}</span>
              ))}
            </div>
          </Card>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bg={COLORS.deepFarmGreen} py={48}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 28, color: "white", margin: "0 0 12px" }}>{T("proof.ctaTitle")}</h2>
          <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: "rgba(255,255,255,0.72)", maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.65 }}>
            {T("proof.ctaBody")}
          </p>
          <CtaButton to="/contact" variant="gold" size="lg">{T("proof.ctaLabel")}</CtaButton>
        </div>
      </PageSection>
    </div>
  );
}