import React from "react";
import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection } from "../shared/Shared";
import { useT } from "../shared/i18n";

const faqKeys = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12","q13","q14"];

export function FaqPage() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("faq.heroTitle")}
        titleBn={T("nav.faq")}
        subtitle={T("faq.heroSubtitle")}
      />
      <PageSection>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {faqKeys.map((key, i) => (
            <div key={key} style={{ marginBottom: 28, background: "#fff", borderRadius: 12, border: "1px solid #e5eee9", padding: "20px 24px" }}>
              <h3 style={{ fontFamily: FONTS.sans, fontSize: 15, fontWeight: 700, color: COLORS.kutircharGreen, margin: "0 0 10px" }}>{T(`faq.${key}`)}</h3>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: "#444", lineHeight: 1.75, margin: 0 }}>{T(`faq.a${i + 1}`)}</p>
            </div>
          ))}
          <hr style={{ borderColor: "#e5eee9", marginTop: 32 }} />
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#666", textAlign: "center", marginTop: 16 }}>{T("faq.moreQs")}</p>
        </div>
      </PageSection>
    </div>
  );
}