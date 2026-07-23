import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection, SectionHeading, Card, CtaButton } from "../shared/Shared";
import { useT } from "../shared/i18n";

export function HomePage() {
  const T = useT();
  return (
    <div>
      {/* Hero */}
      <PageHero
        title={T("home.heroTitle")}
        titleBn={T("brand.nameBn")}
        subtitle={T("home.heroTagline")}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
          <CtaButton to="/proof" variant="gold">{T("home.heroCtaBank")} →</CtaButton>
          <CtaButton to="/products">{T("home.heroCtaProducts")} →</CtaButton>
          <CtaButton to="/contact" variant="outline">{T("home.heroCtaPartner")} →</CtaButton>
        </div>
      </PageHero>

      {/* Bangladesh Context Banner */}
      <section style={{ background: COLORS.solarGold, padding: "12px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontFamily: FONTS.bengali, fontSize: 14, color: COLORS.deepFarmGreen, fontWeight: 600, margin: 0 }}>
            {T("brand.bdContextBanner")}
          </p>
        </div>
      </section>

      {/* National Alignment Strip */}
      <section style={{ background: COLORS.charcoalText, padding: "10px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontFamily: FONTS.mono, fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em", margin: 0 }}>
            {T("brand.nationalAlignment")}
          </p>
        </div>
      </section>

      {/* What is */}
      <PageSection>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <SectionHeading title={T("home.whatIsTitle")} center />
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: "#444", lineHeight: 1.8, margin: "0 0 16px" }}>
            {T("home.whatIsDesc1")}
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: "#555", lineHeight: 1.75, margin: "0 0 24px" }}>
            {T("home.whatIsDesc2")}
          </p>
          <CtaButton to="/project" variant="outline">{T("home.readOverview")} →</CtaButton>
        </div>
      </PageSection>

      {/* How It Works — Phase Overview */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("home.howItWorks")} subtitle={T("home.howItWorksDesc")} center />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {[
            { phase: T("home.phase0"), desc: T("home.phase0Desc"), color: COLORS.riskRed },
            { phase: T("home.phase1"), desc: T("home.phase1Desc"), color: COLORS.riverBlue },
            { phase: T("home.phase2"), desc: T("home.phase2Desc"), color: COLORS.kutircharGreen },
            { phase: T("home.phase3"), desc: T("home.phase3Desc"), color: COLORS.solarGold },
            { phase: T("home.phase45"), desc: T("home.phase45Desc"), color: COLORS.bioOliveDeep },
          ].map((item) => (
            <div key={item.phase} style={{ background: "white", borderRadius: 12, padding: "20px", border: `1px solid #e5eee9`, borderTop: `3px solid ${item.color}` }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: item.color, margin: "0 0 8px" }}>{item.phase}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#555", lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Ecosystem Preview */}
      <PageSection>
        <SectionHeading title={T("home.ecosystemTitle")} subtitle={T("home.ecosystemDesc")} center />
        <div style={{ textAlign: "center" }}>
          <CtaButton to="/ecosystem" variant="outline">{T("readOverview")} →</CtaButton>
        </div>
      </PageSection>

      {/* Proof Preview */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("home.proofTitle")} subtitle={T("home.proofDesc")} center />
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <CtaButton to="/proof" variant="primary">{T("home.viewProofPack")} →</CtaButton>
        </div>
      </PageSection>

      {/* Climate Resilience */}
      <section style={{ background: COLORS.deepFarmGreen, padding: "32px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: "rgba(255,255,255,0.85)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            {T("home.climateResilience")}
          </p>
        </div>
      </section>

      {/* Digital Divide Bridge */}
      <section style={{ background: COLORS.riverBlue, padding: "12px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: "white", margin: 0, fontWeight: 600 }}>
            📡 {T("brand.digitalDivide")}
          </p>
        </div>
      </section>

      {/* Updates */}
      <PageSection>
        <SectionHeading title={T("home.updatesTitle")} center />
        <div style={{ textAlign: "center" }}>
          <CtaButton to="/updates" variant="outline">{T("home.viewAllUpdates")} →</CtaButton>
        </div>
      </PageSection>

      {/* Partnership CTA */}
      <PageSection bg={COLORS.charcoalText} py={48}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 28, color: "white", margin: "0 0 12px" }}>{T("home.startPartnership")}</h2>
          <CtaButton to="/contact" variant="gold" size="lg">{T("home.heroCtaPartner")} →</CtaButton>
        </div>
      </PageSection>
    </div>
  );
}