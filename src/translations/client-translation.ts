'use client';

import 'client-only';

import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect } from 'react';
import { initReactI18next, useTranslation as useTranslationOrg, UseTranslationOptions } from 'react-i18next';

import { getOptions } from './settings';

i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init(getOptions());

export function useClientTranslation(lng = 'en', ns = 'translation', options: UseTranslationOptions = {}) {
  useEffect(() => {
    if (i18next.resolvedLanguage === lng) {
      return;
    }

    i18next.changeLanguage(lng);
  }, [lng]);

  return useTranslationOrg(ns, options);
}
