import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection, Card, StopRule, CtaButton } from "../shared/Shared";
import { PhaseChip } from "../shared/PhaseChip";
import { useT } from "../shared/i18n";

const nowProducts = [
  { titleKey: "products.now1Title", bodyKey: "products.now1Body", ctaKey: "products.now1Cta" },
  { titleKey: "products.now2Title", bodyKey: "products.now2Body", ctaKey: "products.now2Cta" },
  { titleKey: "products.now3Title", bodyKey: "products.now3Body", ctaKey: "products.now3Cta" },
  { titleKey: "products.now4Title", bodyKey: "products.now4Body", ctaKey: "products.now4Cta" },
];

const nextProducts = [
  { titleKey: "products.next1Title", bodyKey: "products.next1Body", gateKey: "products.next1Gate" },
  { titleKey: "products.next2Title", bodyKey: "products.next2Body", gateKey: "products.next2Gate" },
  { titleKey: "products.next3Title", bodyKey: "products.next3Body", gateKey: "products.next3Gate" },
  { titleKey: "products.next4Title", bodyKey: "products.next4Body", gateKey: "products.next4Gate" },
];

const laterProducts = [
  { titleKey: "products.later1Title", bodyKey: "products.later1Body", gateKey: "products.later1Gate" },
  { titleKey: "products.later2Title", bodyKey: "products.later2Body", gateKey: "products.later2Gate" },
  { titleKey: "products.later3Title", bodyKey: "products.later3Body", gateKey: "products.later3Gate" },
  { titleKey: "products.later4Title", bodyKey: "products.later4Body", gateKey: "products.later4Gate" },
];

export function ProductsPage() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("products.heroTitle")}
        titleBn={T("nav.products")}
        subtitle={T("products.heroSubtitle")}
      />

      {/* Phase policy */}
      <section style={{ background: COLORS.charcoalText, padding: "14px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "center" }}>
          {(["Now", "Next", "Later"] as const).map((p) => (
            <div key={p} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <PhaseChip phase={p} />
              <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                {T(`products.${p.toLowerCase()}Active`)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* NOW */}
      <PageSection>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <PhaseChip phase="Now" size="md" />
          <div>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 24, fontWeight: 600, color: COLORS.charcoalText, margin: 0 }}>{T("products.nowTitle")}</h2>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#666", margin: "4px 0 0" }}>{T("products.nowSubtitle")}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {nowProducts.map((item) => (
            <Card key={item.titleKey}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: COLORS.kutircharGreen, margin: "0 0 8px" }}>{T(item.titleKey)}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", lineHeight: 1.65, margin: "0 0 14px" }}>{T(item.bodyKey)}</p>
              <CtaButton to="/contact" variant="primary" size="sm">{T(item.ctaKey)} →</CtaButton>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* NEXT */}
      <PageSection bg={COLORS.fieldMist}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <PhaseChip phase="Next" size="md" />
          <div>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 24, fontWeight: 600, color: COLORS.charcoalText, margin: 0 }}>{T("products.nextTitle")}</h2>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#666", margin: "4px 0 0" }}>{T("products.nextSubtitle")}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {nextProducts.map((item) => (
            <Card key={item.titleKey} style={{ opacity: 0.9 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: COLORS.charcoalText, margin: "0 0 8px" }}>{T(item.titleKey)}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", lineHeight: 1.65, margin: "0 0 12px" }}>{T(item.bodyKey)}</p>
              <div style={{ background: "#eff6fb", border: "1px solid #b8d4e0", borderRadius: 8, padding: "8px 12px" }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.riverBlue, fontWeight: 600, margin: 0 }}>⏳ {T(item.gateKey)}</p>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* LATER */}
      <PageSection>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <PhaseChip phase="Later" size="md" />
          <div>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 24, fontWeight: 600, color: COLORS.charcoalText, margin: 0 }}>{T("products.laterTitle")}</h2>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#666", margin: "4px 0 0" }}>{T("products.laterSubtitle")}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
          {laterProducts.map((item) => (
            <Card key={item.titleKey} style={{ opacity: 0.75 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: "#6b7280", margin: "0 0 8px" }}>{T(item.titleKey)}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#6b7280", lineHeight: 1.65, margin: "0 0 12px" }}>{T(item.bodyKey)}</p>
              <div style={{ background: "#f5f6ee", border: "1px solid #cdd4a8", borderRadius: 8, padding: "8px 12px" }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.bioOliveDeep, fontWeight: 600, margin: 0 }}>🔒 {T(item.gateKey)}</p>
              </div>
            </Card>
          ))}
        </div>
        <StopRule>{T("products.stopRule")}</StopRule>
      </PageSection>

      {/* BD Market Context */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("products.bdMarketContext")} subtitle={T("products.bdMarketContextDesc")} center />
      </PageSection>

      {/* CTA */}
      <PageSection bg={COLORS.deepFarmGreen} py={48}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 28, color: "white", margin: "0 0 12px" }}>{T("products.ctaTitle")}</h2>
          <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: "rgba(255,255,255,0.72)", maxWidth: 460, margin: "0 auto 24px", lineHeight: 1.65 }}>
            {T("products.ctaBody")}
          </p>
          <CtaButton to="/contact" variant="gold" size="lg">{T("products.ctaLabel")}</CtaButton>
        </div>
      </PageSection>
    </div>
  );
}