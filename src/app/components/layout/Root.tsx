import { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useLocation, useNavigate } from "react-router";
import logoIcon from "../../../imports/image.webp";
import { BRAND, COLORS, FONTS } from "../../brand";
import { useLocale, useT } from "../shared/i18n";

const navItems = [
  { to: "/",           labelKey: "nav.home" },
  { to: "/project",    labelKey: "nav.project" },
  { to: "/proof",      labelKey: "nav.proof" },
  { to: "/ecosystem",  labelKey: "nav.ecosystem" },
  { to: "/products",   labelKey: "nav.products" },
  { to: "/digital",    labelKey: "nav.digital" },
  { to: "/updates",    labelKey: "nav.updates" },
  { to: "/contact",    labelKey: "nav.contact" },
];

export function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { locale, toggleLocale } = useLocale();
  const T = useT();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // GitHub Pages SPA fallback: restore route from 404.html redirect
  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      const url = new URL(redirect);
      if (url.pathname !== '/KutircharEcoFarm/' && url.pathname !== '/KutircharEcoFarm') {
        const route = url.pathname.replace('/KutircharEcoFarm', '') || '/';
        navigate(route, { replace: true });
      }
    }
  }, [navigate]);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Dynamic page titles
  useEffect(() => {
    const titles: Record<string, string> = {
      "/":           "Home | Kutirchar EcoFarm",
      "/project":    "The Project | Kutirchar EcoFarm",
      "/proof":      "Proof & Governance | Kutirchar EcoFarm",
      "/ecosystem":  "Circular Ecosystem | Kutirchar EcoFarm",
      "/products":   "Products & Services | Kutirchar EcoFarm",
      "/digital":    "Digital Infrastructure | Kutirchar EcoFarm",
      "/updates":    "Updates & Reports | Kutirchar EcoFarm",
      "/contact":    "Contact & Partnership | Kutirchar EcoFarm",
      "/faq":        "FAQ | Kutirchar EcoFarm",
      "/privacy":    "Privacy Policy | Kutirchar EcoFarm",
      "/executive-summary": "Executive Summary | Kutirchar EcoFarm",
    };
    if (!pathname.startsWith("/brand-guide")) {
      document.title = titles[pathname] || "Kutirchar EcoFarm";
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div style={{ minHeight: "100vh", background: COLORS.documentIvory, fontFamily: FONTS.sans }}>

      {/* ── Skip to content ── */}
      <a href="#main-content" className="skip-link">{T("nav.skipToContent")}</a>

      {/* ── Top phase banner ── */}
      <div style={{ background: COLORS.kutircharGreen, padding: "6px 0", textAlign: "center" }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: "rgba(255,255,255,0.85)", letterSpacing: "0.08em", margin: 0 }}>
          <span style={{ fontFamily: FONTS.bengali, fontSize: 12, marginRight: 8 }}>{T("brand.phaseBn")}</span>
          {T("brand.phaseBanner")}
        </p>
      </div>

      {/* ── Navbar ── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          background: COLORS.deepFarmGreen,
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.3)" : "none",
          transition: "box-shadow 0.2s",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", height: 60, gap: 24 }}>

          {/* Logo */}
          <Link to="/" aria-label="Kutirchar EcoFarm — Home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <img src={logoIcon} alt="Kutirchar EcoFarm logo" style={{ width: 36, height: 36, objectFit: "contain", filter: "brightness(0) invert(1)" }} />
            <div style={{ lineHeight: 1 }}>
              <p style={{ fontFamily: FONTS.serif, fontSize: 13, fontWeight: 600, color: "white", margin: 0, lineHeight: 1.2 }}>{T("brand.nameEn")}</p>
              <p style={{ fontFamily: FONTS.serifBengali, fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.3 }}>{T("brand.nameBn")}</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "flex-end" }}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                style={({ isActive }) => ({
                  fontFamily: FONTS.sans,
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? COLORS.solarGold : "rgba(255,255,255,0.82)",
                  textDecoration: "none",
                  padding: "6px 10px",
                  borderRadius: 6,
                  background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                  borderBottom: isActive ? `2px solid ${COLORS.solarGold}` : "2px solid transparent",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap" as const,
                })}
              >
                {T(item.labelKey)}
              </NavLink>
            ))}
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              aria-label={locale === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
              style={{
                fontFamily: FONTS.sans,
                fontSize: 11,
                fontWeight: 700,
                color: "white",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 6,
                padding: "5px 10px",
                cursor: "pointer",
                marginLeft: 4,
                transition: "all 0.2s",
                letterSpacing: "0.03em",
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
            >
              {locale === "bn" ? "বাংলা ⇄ EN" : "EN ⇄ বাংলা"}
            </button>
            {/* Brand Guide link */}
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)", marginLeft: 6 }} />
            <NavLink
              to="/brand-guide"
              style={({ isActive }) => ({
                fontFamily: FONTS.sans, fontSize: 12, fontWeight: isActive ? 700 : 500,
                color: isActive ? COLORS.solarGold : "rgba(255,255,255,0.65)",
                textDecoration: "none", padding: "6px 10px", borderRadius: 6,
                background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                border: `1px solid ${isActive ? COLORS.solarGold : "rgba(255,255,255,0.2)"}`,
                display: "flex", alignItems: "center", gap: 5,
                whiteSpace: "nowrap" as const,
              })}
            >
              🎨 {T("nav.brandGuide")}
            </NavLink>
            <Link
              to="/contact"
              style={{ marginLeft: 6, background: COLORS.solarGold, color: COLORS.deepFarmGreen, fontFamily: FONTS.sans, fontSize: 12, fontWeight: 700, padding: "7px 16px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap" as const }}
            >
              {T("nav.partnership")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? T("nav.closeMenu") : T("nav.openMenu")}
            className="show-mobile"
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "none",
              flexDirection: "column" as const,
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: 22, height: 2, background: "white", borderRadius: 2,
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "scale(0)") : "none",
                transition: "all 0.2s" }} />
            ))}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div
            style={{ background: COLORS.deepFarmGreen, borderTop: "1px solid rgba(255,255,255,0.1)", padding: "12px 20px 20px" }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: FONTS.sans,
                  fontSize: 14,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? COLORS.solarGold : "rgba(255,255,255,0.88)",
                  textDecoration: "none",
                  padding: "11px 12px",
                  borderRadius: 8,
                  background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                })}
              >
                <span>{T(item.labelKey)}</span>
                <span style={{ fontFamily: FONTS.bengali, fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{locale === "bn" ? "" : "কুটিরচর ইকোফার্ম"}</span>
              </NavLink>
            ))}
            {/* Language toggle in mobile */}
            <button
              onClick={toggleLocale}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                width: "100%", marginTop: 8,
                fontFamily: FONTS.sans, fontSize: 13, fontWeight: 700,
                color: "white", background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8, padding: "10px",
                cursor: "pointer",
              }}
            >
              {locale === "bn" ? "বাংলা ⇄ English" : "English ⇄ বাংলা"}
            </button>
            <Link
              to="/brand-guide"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: FONTS.sans, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.88)", textDecoration: "none", padding: "11px 12px", borderRadius: 8, background: "rgba(242,181,68,0.08)", border: "1px solid rgba(242,181,68,0.2)", marginTop: 4 }}
            >
              <span>🎨 {T("nav.brandGuide")}</span>
              <span style={{ fontFamily: FONTS.bengali, fontSize: 12, color: "rgba(255,255,255,0.62)" }}>ব্র্যান্ড গাইড</span>
            </Link>
            <Link
              to="/contact"
              style={{ display: "block", marginTop: 10, textAlign: "center", background: COLORS.solarGold, color: COLORS.deepFarmGreen, fontFamily: FONTS.sans, fontSize: 14, fontWeight: 700, padding: "12px", borderRadius: 10, textDecoration: "none" }}
            >
              {T("nav.partnership")}
            </Link>
          </div>
        )}
      </nav>

      {/* ── Page content ── */}
      <main id="main-content" tabIndex={-1} style={{ outline: "none" }}>
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: COLORS.deepFarmGreen, paddingTop: 48, paddingBottom: 24 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>

            {/* Brand column */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <img src={logoIcon} alt="" style={{ width: 36, height: 36, filter: "brightness(0) invert(1)" }} />
                <div>
                  <p style={{ fontFamily: FONTS.serif, fontSize: 14, fontWeight: 600, color: "white", margin: 0, lineHeight: 1.2 }}>{T("brand.nameEn")}</p>
                  <p style={{ fontFamily: FONTS.serifBengali, fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.68)", margin: 0, lineHeight: 1.3 }}>{T("brand.nameBn")}</p>
                </div>
              </div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: "0 0 12px" }}>
                {T("brand.tagline")}
              </p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: "rgba(255,255,255,0.62)", lineHeight: 1.6, margin: 0 }}>
                {BRAND.location.village}, {BRAND.location.union}, {BRAND.location.upazila}<br />{BRAND.location.district}, {BRAND.location.country}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.62)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Navigate</p>
              {navItems.map((item) => (
                <Link key={item.to} to={item.to}
                  style={{ display: "block", fontFamily: FONTS.sans, fontSize: 13, color: "rgba(255,255,255,0.72)", textDecoration: "none", padding: "4px 0" }}>
                  {T(item.labelKey)}
                </Link>
              ))}
              <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "10px 0" }} />
              <Link to="/brand-guide"
                style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: FONTS.sans, fontSize: 13, color: COLORS.solarGold, textDecoration: "none", padding: "4px 0", fontWeight: 600 }}>
                🎨 {T("nav.brandGuide")} →
              </Link>
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.62)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Contact</p>
              <a href={`mailto:${BRAND.contact.email}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.72)", textDecoration: "none", fontFamily: FONTS.sans, fontSize: 13, padding: "4px 0" }}>
                ✉ {BRAND.contact.email}
              </a>
              {BRAND.contact.phone && (
                <a href={`tel:${BRAND.contact.phone}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.72)", textDecoration: "none", fontFamily: FONTS.sans, fontSize: 13, padding: "4px 0" }}>
                  📞 {BRAND.contact.phone}
                </a>
              )}
              {BRAND.contact.whatsapp && (
                <a href={`https://wa.me/${BRAND.contact.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.72)", textDecoration: "none", fontFamily: FONTS.sans, fontSize: 13, padding: "4px 0" }}>
                  💬 WhatsApp
                </a>
              )}
              <Link to="/contact" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.72)", textDecoration: "none", fontFamily: FONTS.sans, fontSize: 13, padding: "4px 0" }}>
                ✍ Inquiry form
              </Link>
              <a href={`https://${BRAND.contact.website}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.72)", textDecoration: "none", fontFamily: FONTS.sans, fontSize: 13, padding: "4px 0" }}>
                🌐 {BRAND.contact.website}
              </a>
            </div>

            {/* Trust & Legal */}
            <div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.62)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Trust Policy</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 8px" }}>
                {T("brand.trustPolicy")}
              </p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: 0 }}>
                {T("brand.zoneBPolicy")}
              </p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: "rgba(255,255,255,0.62)", margin: 0 }}>
              {T("brand.copyright")}
            </p>
            <p style={{ fontFamily: FONTS.bengali, fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>
              {T("brand.copyrightBn")}
            </p>
          </div>
        </div>
      </footer>

      {/* ── Responsive CSS ── */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        a:focus-visible, button:focus-visible {
          outline: 2px solid ${COLORS.solarGold};
          outline-offset: 2px;
          border-radius: 4px;
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}