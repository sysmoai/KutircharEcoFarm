import React from "react";
import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection } from "../shared/Shared";
import { useT } from "../shared/i18n";

export function ExecSummaryPage() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("execSummary.heroTitle")}
        titleBn={T("nav.executiveSummary")}
        subtitle={T("execSummary.heroSubtitle")}
      />
      <PageSection>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: "#444", lineHeight: 1.8, margin: "0 0 20px" }}>
            {T("execSummary.body1")}
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: "#444", lineHeight: 1.8, margin: "0 0 20px" }}>
            {T("execSummary.body2")}
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
            {T("execSummary.body3")}
          </p>
        </div>
      </PageSection>
    </div>
  );
}