import { InitOptions } from 'i18next';

export const FALLBACK_LOCALE = 'en';
export const SUPPORTED_LANGUAGES = [FALLBACK_LOCALE, 'de'];
export const DEFAULT_NAMESPACE = 'translation';

/* eslint-disable @typescript-eslint/naming-convention */
export function getOptions(language = FALLBACK_LOCALE, ns = DEFAULT_NAMESPACE): InitOptions {
  return {
    supportedLngs: SUPPORTED_LANGUAGES,
    fallbackLng: FALLBACK_LOCALE,
    lng: language,
    fallbackNS: DEFAULT_NAMESPACE,
    defaultNS: DEFAULT_NAMESPACE,
    ns,
  };
}
