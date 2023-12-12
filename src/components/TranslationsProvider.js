"use client";

import { I18nextProvider } from "react-i18next";
import translate from "@/app/i18n";
import { createInstance } from "i18next";

export default function TranslationsProvider({
  children,
  locale,
  page,
  resources,
}) {
  const i18n = createInstance();

  translate(locale, page, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
