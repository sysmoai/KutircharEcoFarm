import React from "react";
import { COLORS, FONTS } from "../../brand";
import { PageHero, PageSection, CtaButton } from "../shared/Shared";
import { useT } from "../shared/i18n";

export function NotFound() {
  const T = useT();
  return (
    <div>
      <PageHero
        title={T("notFound.title")}
        subtitle={T("notFound.body")}
      />
      <PageSection>
        <div style={{ textAlign: "center" }}>
          <CtaButton to="/" variant="primary" size="lg">{T("notFound.cta")} →</CtaButton>
        </div>
      </PageSection>
    </div>
  );
}