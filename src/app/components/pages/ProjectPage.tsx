import { COLORS, FONTS, BRAND } from "../../brand";
import { PageHero, PageSection, SectionHeading, PhaseItem, InfoRow, CtaButton, StopRule } from "../shared/Shared";
import { useT } from "../shared/i18n";

const phases = [
  { phase: "phaseLabels.phase0", label: "phaseLabels.current", titleKey: "phaseLabels.phase0Title", active: true, items: ["phaseLabels.p0i1","phaseLabels.p0i2","phaseLabels.p0i3","phaseLabels.p0i4","phaseLabels.p0i5","phaseLabels.p0i6"] },
  { phase: "phaseLabels.phase1", label: "phaseLabels.next", titleKey: "phaseLabels.phase1Title", active: false, items: ["phaseLabels.p1i1","phaseLabels.p1i2","phaseLabels.p1i3","phaseLabels.p1i4","phaseLabels.p1i5"] },
  { phase: "phaseLabels.phase2", label: "phaseLabels.next", titleKey: "phaseLabels.phase2Title", active: false, items: ["phaseLabels.p2i1","phaseLabels.p2i2","phaseLabels.p2i3","phaseLabels.p2i4"] },
  { phase: "phaseLabels.phase3", label: "phaseLabels.later", titleKey: "phaseLabels.phase3Title", active: false, items: ["phaseLabels.p3i1","phaseLabels.p3i2","phaseLabels.p3i3","phaseLabels.p3i4","phaseLabels.p3i5"] },
  { phase: "phaseLabels.phase4", label: "phaseLabels.later", titleKey: "phaseLabels.phase4Title", active: false, items: ["phaseLabels.p4i1","phaseLabels.p4i2","phaseLabels.p4i3","phaseLabels.p4i4"] },
  { phase: "phaseLabels.phase5", label: "phaseLabels.later", titleKey: "phaseLabels.phase5Title", active: false, items: ["phaseLabels.p5i1","phaseLabels.p5i2","phaseLabels.p5i3","phaseLabels.p5i4"] },
];

export function ProjectPage() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("project.heroTitle")}
        titleBn={T("brand.nameBn")}
        subtitle={T("project.heroSubtitle")}
      />

      {/* What & Why */}
      <PageSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          <div>
            <SectionHeading title={T("project.whatIsTitle")} />
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: "#444", lineHeight: 1.75, margin: "0 0 14px" }}>
              {T("project.whatIsDesc1")}
            </p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: "#444", lineHeight: 1.75, margin: "0 0 14px" }}>
              {T("project.whatIsDesc2")}
            </p>
            <StopRule>
              {T("project.zoneBRule")}
            </StopRule>
          </div>
          <div>
            <SectionHeading title={T("project.whyTitle")} />
            {[
              { heading: T("project.why1Heading"), body: T("project.why1Body") },
              { heading: T("project.why2Heading"), body: T("project.why2Body") },
              { heading: T("project.why3Heading"), body: T("project.why3Body") },
              { heading: T("project.why4Heading"), body: T("project.why4Body") },
            ].map((item) => (
              <div key={item.heading} style={{ marginBottom: 18 }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: COLORS.kutircharGreen, margin: "0 0 4px" }}>{item.heading}</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Bangladesh Dairy Context */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("project.bdDairyContext")} subtitle={T("project.bdDairyDesc")} />
      </PageSection>

      {/* Climate Adaptation Plan */}
      <PageSection>
        <SectionHeading title={T("project.bdClimatePlan")} subtitle={T("project.bdClimatePlanDesc")} />
      </PageSection>

      {/* Community Impact */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("project.bdCommunityImpact")} subtitle={T("project.bdCommunityImpactDesc")} />
      </PageSection>

      {/* Food Security */}
      <PageSection>
        <SectionHeading title={T("project.bdFoodSecurity")} subtitle={T("project.bdFoodSecurityDesc")} />
      </PageSection>

      {/* Location */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("project.locationTitle")} subtitle={T("project.locationSubtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          <div style={{ background: "white", borderRadius: 12, padding: "24px", border: "1px solid #e5eee9" }}>
            {[
              { label: T("common.village"), value: BRAND.location.village },
              { label: T("common.union"), value: BRAND.location.union },
              { label: T("common.upazila"), value: BRAND.location.upazila },
              { label: T("common.district"), value: BRAND.location.district },
              { label: T("common.country"), value: BRAND.location.country },
              { label: T("common.zoneA"), value: BRAND.zoneA },
              { label: T("common.zoneB"), value: BRAND.zoneB },
            ].map((row) => <InfoRow key={row.label} label={row.label} value={row.value} />)}
          </div>
          <div style={{ background: COLORS.deepFarmGreen, borderRadius: 12, padding: "24px", color: "white" }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: "rgba(255,255,255,0.72)", marginBottom: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
              {T("project.landStatusTitle")}
            </p>
            {[
              { item: T("project.landStatus1"), done: false },
              { item: T("project.landStatus2"), done: false },
              { item: T("project.landStatus3"), done: false },
              { item: T("project.landStatus4"), done: false },
              { item: T("project.landStatus5"), done: false },
              { item: T("project.landStatus6"), done: false },
            ].map((s) => (
              <div key={s.item} style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ color: s.done ? "#4ade80" : "#f87171", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{s.done ? "✓" : "○"}</span>
                <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{s.item}</span>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Phase Roadmap */}
      <PageSection>
        <SectionHeading
          title={T("project.roadmapTitle")}
          subtitle={T("project.roadmapSubtitle")}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
          {phases.map((p) => <PhaseItem key={p.phase} phase={T(p.phase)} label={T(p.label)} title={T(p.titleKey)} items={p.items.map((i) => T(i))} active={p.active} />)}
        </div>
        <StopRule>
          {T("project.roadmapStopRule")}
        </StopRule>
      </PageSection>

      {/* Positioning */}
      <PageSection bg={COLORS.fieldMist}>
        <SectionHeading title={T("project.positioningTitle")} subtitle={T("project.positioningSubtitle")} center />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { title: T("project.pos1Title"), body: T("project.pos1Body"), icon: "🏦" },
            { title: T("project.pos2Title"), body: T("project.pos2Body"), icon: "🏛️" },
            { title: T("project.pos3Title"), body: T("project.pos3Body"), icon: "🌍" },
            { title: T("project.pos4Title"), body: T("project.pos4Body"), icon: "📊" },
          ].map((item) => (
            <div key={item.title} style={{ background: "white", border: "1px solid #e5eee9", borderRadius: 12, padding: "20px" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: COLORS.kutircharGreen, margin: "0 0 8px" }}>{item.title}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <CtaButton to="/proof" size="lg">{T("project.ctaProof")}</CtaButton>
        </div>
      </PageSection>
    </div>
  );
}