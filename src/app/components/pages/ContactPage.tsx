import * as React from "react";
import { useState } from "react";
import { COLORS, FONTS, BRAND } from "../../brand";
import { PageHero, PageSection, SectionHeading, Card } from "../shared/Shared";
import { useT } from "../shared/i18n";

type InquiryType = "" | "bank-govt-investor" | "vendor" | "buyer" | "training" | "partnership" | "general";

interface FormState {
  name: string; org: string; inquiryType: InquiryType; phone: string; email: string; message: string; budget: string;
}

const initialForm: FormState = { name: "", org: "", inquiryType: "", phone: "", email: "", message: "", budget: "" };

const inquiryTypes = [
  { value: "bank-govt-investor" as const, labelKey: "contact.type1Label", descKey: "contact.type1Desc" },
  { value: "vendor" as const,             labelKey: "contact.type2Label", descKey: "contact.type2Desc" },
  { value: "buyer" as const,              labelKey: "contact.type3Label", descKey: "contact.type3Desc" },
  { value: "training" as const,           labelKey: "contact.type4Label", descKey: "contact.type4Desc" },
  { value: "partnership" as const,        labelKey: "contact.type5Label", descKey: "contact.type5Desc" },
  { value: "general" as const,            labelKey: "contact.type6Label", descKey: "contact.type6Desc" },
];

function validate(form: FormState, T: (s: string) => string): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!form.name.trim()) errors.name = T("contact.errorName");
  if (!form.inquiryType) errors.inquiryType = T("contact.errorInquiryType");
  if (!form.phone.trim() && !form.email.trim()) errors.contact = T("contact.errorContact");
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = T("contact.errorEmail");
  if (!form.message.trim() || form.message.trim().length < 20) errors.message = T("contact.errorMessage");
  return errors;
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const T = useT();

  function handleChange(key: keyof FormState, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form, T);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      const subject = encodeURIComponent(`[Kutirchar EcoFarm] ${form.inquiryType} — ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nOrganisation: ${form.org || "—"}\nInquiry Type: ${form.inquiryType}\nPhone: ${form.phone || "—"}\nEmail: ${form.email || "—"}\nBudget: ${form.budget || "—"}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:info@kutircharecofarm.com?subject=${subject}&body=${body}`;
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() { setForm(initialForm); setErrors({}); setStatus("idle"); }

  const inputStyle: React.CSSProperties = {
    width: "100%", fontFamily: FONTS.sans, fontSize: 13, padding: "10px 14px",
    border: "1px solid #ddd", borderRadius: 8, background: "white", boxSizing: "border-box" as const,
  };

  return (
    <div>
      <PageHero
        title={T("contact.heroTitle")}
        titleBn={T("nav.contact")}
        subtitle={T("contact.heroSubtitle")}
      />

      <PageSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          {/* Left: contact channels */}
          <div>
            <SectionHeading title={T("contact.directTitle")} />
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              <Card>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, color: COLORS.kutircharGreen, margin: "0 0 4px" }}>Email</p>
                <a href={`mailto:${BRAND.contact.email}`} style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.riverBlue, textDecoration: "none" }}>{BRAND.contact.email}</a>
              </Card>
              <Card>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, color: COLORS.kutircharGreen, margin: "0 0 4px" }}>WhatsApp</p>
                <a href={`https://wa.me/${BRAND.contact.phone?.replace(/\D/g, "") || "880"}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.riverBlue, textDecoration: "none" }}>Chat on WhatsApp</a>
              </Card>
              <Card>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, color: COLORS.kutircharGreen, margin: "0 0 4px" }}>Location</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#555", margin: 0 }}>{BRAND.location.village}, {BRAND.location.union}, {BRAND.location.upazila}, {BRAND.location.district}, {BRAND.location.country}</p>
              </Card>
            </div>

            {/* Bangla note */}
            <div style={{ background: "#f0f9f3", border: "1px solid #c0ddc8", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
              <p style={{ fontFamily: FONTS.bengali, fontSize: 14, color: COLORS.kutircharGreen, fontWeight: 600, margin: 0, lineHeight: 1.65 }}>
                {T("contact.bnNote")}
              </p>
            </div>

            {/* Visit protocol */}
            <div style={{ background: "#eff6fb", border: "1px solid #b8d4e0", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.riverBlue, fontWeight: 600, margin: 0, lineHeight: 1.65 }}>
                {T("contact.visitProtocol")}
              </p>
            </div>

            {/* Response commitment */}
            <div style={{ background: "white", border: "1px solid #e5eee9", borderRadius: 12, padding: "16px 20px" }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: "#555", lineHeight: 1.65, margin: 0 }}>
                {T("contact.responseCommitment")}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <SectionHeading title={T("contact.formTitle")} />

            {status === "success" ? (
              <div style={{ background: "#f0f9f3", border: "1px solid #c0ddc8", borderRadius: 12, padding: "32px", textAlign: "center" }}>
                <p style={{ fontSize: 40, marginBottom: 12 }}>✓</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 18, fontWeight: 700, color: COLORS.kutircharGreen, margin: "0 0 8px" }}>{T("contact.successTitle")}</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: "#555", lineHeight: 1.65, margin: "0 0 20px" }}>{T("contact.successBody")}</p>
                <button onClick={handleReset} style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.kutircharGreen, background: "white", border: `1.5px solid ${COLORS.kutircharGreen}`, borderRadius: 8, padding: "10px 24px", cursor: "pointer" }}>{T("contact.resetBtn")}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 4, display: "block" }}>{T("contact.nameLabel")}</label>
                  <input style={inputStyle} value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder={T("contact.namePlaceholder")} />
                  {errors.name && <p style={{ color: COLORS.riskRed, fontSize: 11, margin: "4px 0 0" }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 4, display: "block" }}>{T("contact.orgLabel")}</label>
                  <input style={inputStyle} value={form.org} onChange={(e) => handleChange("org", e.target.value)} placeholder={T("contact.orgPlaceholder")} />
                </div>
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 4, display: "block" }}>{T("contact.inquiryLabel")}</label>
                  <select style={inputStyle} value={form.inquiryType} onChange={(e) => handleChange("inquiryType", e.target.value)}>
                    <option value="">{T("contact.inquiryPlaceholder")}</option>
                    {inquiryTypes.map((t) => (
                      <optgroup key={t.value} label={T(t.labelKey)}>
                        <option value={t.value}>{T(t.descKey)}</option>
                      </optgroup>
                    ))}
                  </select>
                  {errors.inquiryType && <p style={{ color: COLORS.riskRed, fontSize: 11, margin: "4px 0 0" }}>{errors.inquiryType}</p>}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 4, display: "block" }}>{T("contact.phoneLabel")}</label>
                    <input style={inputStyle} value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder={T("contact.phonePlaceholder")} />
                  </div>
                  <div>
                    <label style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 4, display: "block" }}>{T("contact.emailLabel")}</label>
                    <input style={inputStyle} value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder={T("contact.emailPlaceholder")} />
                  </div>
                </div>
                {errors.contact && <p style={{ color: COLORS.riskRed, fontSize: 11, margin: 0 }}>{errors.contact}</p>}
                {errors.email && <p style={{ color: COLORS.riskRed, fontSize: 11, margin: 0 }}>{errors.email}</p>}
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 4, display: "block" }}>{T("contact.budgetLabel")}</label>
                  <input style={inputStyle} value={form.budget} onChange={(e) => handleChange("budget", e.target.value)} placeholder={T("contact.budgetPlaceholder")} />
                </div>
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 4, display: "block" }}>{T("contact.messageLabel")}</label>
                  <textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" as const }} value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder={T("contact.messagePlaceholder")} />
                  {errors.message && <p style={{ color: COLORS.riskRed, fontSize: 11, margin: "4px 0 0" }}>{errors.message}</p>}
                </div>
                <button type="submit" disabled={status === "submitting"} style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, color: "white", background: COLORS.kutircharGreen, border: "none", borderRadius: 10, padding: "14px", cursor: "pointer" }}>
                  {status === "submitting" ? T("contact.submitting") : T("contact.submitBtn")}
                </button>
                {status === "error" && (
                  <div style={{ background: "#fff5f5", border: "1px solid #fecdca", borderRadius: 10, padding: "14px" }}>
                    <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: "#7f1d1d", margin: 0 }}>{T("contact.errorBody")}</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </PageSection>
    </div>
  );
}