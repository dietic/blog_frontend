"use client";
import { createContext, useContext, useState } from "react";

enum Locale {
  EN = "en",
  ES = "es",
}

type LocaleContext = {
  toggle: () => void;
  currentLocale: string;
};

const LocaleContext = createContext<LocaleContext>(null!);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState(Locale.EN);
  const toggle = () => setLocale(locale === Locale.EN ? Locale.ES : Locale.EN);

  return (
    <LocaleContext.Provider value={{ toggle, currentLocale: locale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
