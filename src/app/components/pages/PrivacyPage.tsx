import React from "react";
import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection, SectionHeading } from "../shared/Shared";
import { useT } from "../shared/i18n";

export function PrivacyPage() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("privacy.heroTitle")}
        titleBn={T("nav.privacy")}
        subtitle={T("privacy.heroSubtitle")}
      />
      <PageSection>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {[
            { title: T("privacy.collectTitle"), body: T("privacy.collectBody") },
            { title: T("privacy.neverTitle"), body: T("privacy.neverBody") },
            { title: T("privacy.cookiesTitle"), body: T("privacy.cookiesBody") },
            { title: T("privacy.shareTitle"), body: T("privacy.shareBody") },
            { title: T("privacy.rightsTitle"), body: T("privacy.rightsBody") },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: 32, background: "white", border: "1px solid #e5eee9", borderRadius: 12, padding: "24px" }}>
              <h3 style={{ fontFamily: FONTS.sans, fontSize: 16, fontWeight: 700, color: COLORS.kutircharGreen, margin: "0 0 12px" }}>{section.title}</h3>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: "#444", lineHeight: 1.75, margin: 0 }}>{section.body}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}