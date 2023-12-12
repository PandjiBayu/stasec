export function link(i18n, path) {
  const locales = {
    en: "",
    id: "/id",
  };

  return `${locales[i18n.language]}${path}`;
}
