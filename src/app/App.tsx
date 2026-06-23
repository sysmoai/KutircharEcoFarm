import { useState, useEffect, type ReactNode } from "react";
import logoIcon from "../imports/image.png";
import { Section00MasterLogo } from "./components/sections/Section00MasterLogo";
import { Section01LogoSystem } from "./components/sections/Section01LogoSystem";
import { Section02LogoLockups } from "./components/sections/Section02LogoLockups";
import { Section03IconSystem } from "./components/sections/Section03IconSystem";
import { Section04SealSystem } from "./components/sections/Section04SealSystem";
import { Section05Monochrome } from "./components/sections/Section05Monochrome";
import { Section06ClearSpace } from "./components/sections/Section06ClearSpace";
import { Section07ColorSystem } from "./components/sections/Section07ColorSystem";
import { Section08Typography } from "./components/sections/Section08Typography";
import { Section09UsageExamples } from "./components/sections/Section09UsageExamples";
import { Section10IncorrectUsage } from "./components/sections/Section10IncorrectUsage";
import { Section11ExportAssets } from "./components/sections/Section11ExportAssets";
import { Section12DeveloperNotes } from "./components/sections/Section12DeveloperNotes";
import { Section13AIAgentTokens } from "./components/sections/Section13AIAgentTokens";

const navItems = [
  { id: 0, num: "00", label: "Master Logo Source" },
  { id: 1, num: "01", label: "Logo System" },
  { id: 2, num: "02", label: "Logo Lockups" },
  { id: 3, num: "03", label: "Icon System" },
  { id: 4, num: "04", label: "Seal + Stamp System" },
  { id: 5, num: "05", label: "Monochrome + Reverse" },
  { id: 6, num: "06", label: "Clear Space & Sizing" },
  { id: 7, num: "07", label: "Color System" },
  { id: 8, num: "08", label: "Typography System" },
  { id: 9, num: "09", label: "Usage Examples" },
  { id: 10, num: "10", label: "Incorrect Usage" },
  { id: 11, num: "11", label: "Export Assets" },
  { id: 12, num: "12", label: "Developer Notes" },
  { id: 13, num: "13", label: "AI Agent Tokens" },
];

const sections: Record<number, ReactNode> = {
  0: <Section00MasterLogo />,
  1: <Section01LogoSystem />,
  2: <Section02LogoLockups />,
  3: <Section03IconSystem />,
  4: <Section04SealSystem />,
  5: <Section05Monochrome />,
  6: <Section06ClearSpace />,
  7: <Section07ColorSystem />,
  8: <Section08Typography />,
  9: <Section09UsageExamples />,
  10: <Section10IncorrectUsage />,
  11: <Section11ExportAssets />,
  12: <Section12DeveloperNotes />,
  13: <Section13AIAgentTokens />,
};

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Update document title when active section changes
  useEffect(() => {
    const nav = navItems[activeSection];
    document.title = `${nav.num} — ${nav.label} | Kutirchar EcoFarm Brand Guide`;
  }, [activeSection]);

  return (
    <div className="size-full flex" style={{ fontFamily: "'Inter', sans-serif", background: "#FAF7EF", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? 260 : 0,
          minWidth: sidebarOpen ? 260 : 0,
          background: "#0B4F2A",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.25s ease, min-width 0.25s ease",
          overflow: "hidden",
          flexShrink: 0,
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        {/* Sidebar header */}
        <div style={{ padding: "24px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logoIcon}
              alt="Logo"
              style={{ width: 36, height: 36, objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 600, color: "white", lineHeight: 1.15 }}>Kutirchar EcoFarm</p>
              <div style={{ height: 1, background: "white", opacity: 0.18, margin: "3px 0" }} />
              <p style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: 13, fontWeight: 500, color: "white", lineHeight: 1.4 }}>কুটিরচর ইকোফার্ম</p>
            </div>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Brand Identity Guide</p>
        </div>

        {/* Nav items */}
        <nav style={{ overflowY: "auto", flex: 1, padding: "12px 0" }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 20px",
                  background: isActive ? "rgba(79,154,61,0.2)" : "transparent",
                  border: "none",
                  borderLeft: isActive ? "3px solid #4F9A3D" : "3px solid transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.15s",
                }}
              >
                <span style={{ fontFamily: "'Inter', monospace", fontSize: 10, color: isActive ? "#4F9A3D" : "rgba(255,255,255,0.35)", fontWeight: 700, minWidth: 22 }}>
                  {item.num}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: isActive ? "white" : "rgba(255,255,255,0.65)", fontWeight: isActive ? 600 : 400, lineHeight: 1.3 }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>
            Smart Cattle & Circular Energy Ecosystem<br />
            Dairy · Biogas · Solar · Silage
          </p>
        </div>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "auto" }}>
        {/* Top bar */}
        <header
          style={{
            background: "white",
            borderBottom: "1px solid #e0eed5",
            padding: "0 28px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "#1F6B3A", display: "flex", alignItems: "center" }}
              title="Toggle sidebar"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect y="3" width="18" height="2" rx="1" fill="currentColor" />
                <rect y="8" width="18" height="2" rx="1" fill="currentColor" />
                <rect y="13" width="18" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
            <div style={{ width: 1, height: 20, background: "#e0eed5" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#999", letterSpacing: "0.06em" }}>
              {navItems[activeSection]?.num} — {navItems[activeSection]?.label}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1F6B3A" }} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 600, color: "#1F6B3A" }}>Kutirchar EcoFarm</span>
              <span style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: 13, fontWeight: 500, color: "#1F6B3A" }}>কুটিরচর ইকোফার্ম</span>
            </div>
            <div style={{ width: 1, height: 20, background: "#e0eed5" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase" }}>Brand Identity Guide</span>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: "36px 36px 60px", maxWidth: 1080, width: "100%" }}>
          {sections[activeSection]}
        </main>

        {/* Footer nav */}
        <footer style={{ borderTop: "1px solid #e0eed5", background: "white", padding: "16px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
            disabled={activeSection === 0}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: activeSection === 0 ? "#ccc" : "#1F6B3A", background: "none", border: "none", cursor: activeSection === 0 ? "default" : "pointer", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}
          >
            ← {activeSection > 0 ? navItems[activeSection - 1].label : ""}
          </button>
          <div className="flex gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{ width: 6, height: 6, borderRadius: "50%", background: activeSection === item.id ? "#1F6B3A" : "#d4e8db", border: "none", cursor: "pointer", padding: 0, transition: "background 0.15s" }}
                title={item.label}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveSection(Math.min(navItems.length - 1, activeSection + 1))}
            disabled={activeSection === navItems.length - 1}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: activeSection === navItems.length - 1 ? "#ccc" : "#1F6B3A", background: "none", border: "none", cursor: activeSection === navItems.length - 1 ? "default" : "pointer", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}
          >
            {activeSection < navItems.length - 1 ? navItems[activeSection + 1].label : ""} →
          </button>
        </footer>
      </div>
    </div>
  );
}
