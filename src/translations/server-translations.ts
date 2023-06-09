import 'server-only';

import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { getOptions } from './settings';

type Options = {
  keyPrefix?: string;
};

const initI18next = async (language: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, ns: string) => import(`./locales/${language}/${ns}.json`)))
    .init(getOptions(language, ns));

  return i18nInstance;
};

export async function getServerTranslations(language: string, ns: string = 'translation', options: Options = {}) {
  const i18nextInstance = await initI18next(language, ns);

  return {
    t: i18nextInstance.getFixedT(language, ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
}
