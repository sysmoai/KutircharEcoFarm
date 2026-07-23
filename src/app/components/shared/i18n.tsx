import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import bn from "../../../i18n/bn.json";
import en from "../../../i18n/en.json";

export type Locale = "bn" | "en";
export type LocaleData = typeof bn;

const LOCALE_STORAGE_KEY = "kutirchar-locale";

const locales: Record<Locale, LocaleData> = { bn, en };

const LocaleCtx = createContext<{
  locale: Locale;
  t: LocaleData;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}>({
  locale: "bn",
  t: bn,
  setLocale: () => {},
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("bn");
  const [ready, setReady] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored === "en" || stored === "bn") {
        setLocaleState(stored);
      }
    } catch {}
    setReady(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {}
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "bn" ? "en" : "bn");
  }, [locale, setLocale]);

  // Set html lang attribute
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  if (!ready) {
    // Prevent flash of wrong language
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return React.createElement(
    LocaleCtx.Provider,
    { value: { locale, t: locales[locale], setLocale, toggleLocale } },
    children
  );
}

export function useLocale() {
  return useContext(LocaleCtx);
}

// Deep key lookup: t("home.heroTitle") returns the translated string
export function t(path: string, locale: Locale): string {
  const keys = path.split(".");
  let val: any = locales[locale];
  for (const k of keys) {
    if (val == null) return path;
    val = val[k];
  }
  return val ?? path;
}

// Use inside components: useT()("home.heroTitle")
export function useT() {
  const { locale, t: data } = useLocale();
  return (path: string): string => {
    const keys = path.split(".");
    let val: any = data;
    for (const k of keys) {
      if (val == null) return path;
      val = (val as Record<string, unknown>)[k];
    }
    return (val as string) ?? path;
  };
}