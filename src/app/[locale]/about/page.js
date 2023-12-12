import translate from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import AboutContent from "./content";

const page = ["about", "component"];

export default async function About({ params: { locale } }) {
  const { t, resources } = await translate(locale, page);

  return (
    <TranslationsProvider page={page} locale={locale} resources={resources}>
      <AboutContent />
    </TranslationsProvider>
  );
}
