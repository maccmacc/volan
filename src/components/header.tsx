import Link from 'next/link';
// import SteeringWheelIcon from "../../public/steering-wheel-icon.svg";
import './styles.scss';
import Logo from '../assets/icons/logo';
import { getServerTranslations } from '@/translations/server-translations';
import { FALLBACK_LOCALE } from '@/translations/settings';
import { getRoute } from '../app/[locale]/routes';
import wheeleImg from '../../public/vercel.svg';
import { LocaleProps } from '@/app/[locale]/locale.props';
import Image from 'next/image';
import { useState } from 'react';

const Header = async ({ params: { locale } }: LocaleProps) => {
  const { t } = await getServerTranslations(locale ?? FALLBACK_LOCALE);
  const active = true;

  return (
    <>
      <div className="background">
        <div className="background__navigation-content">
          <Link href={getRoute('home', '')}>{t('firstPageTranslation')}</Link>
          <Link href={getRoute('aboutUs')}>{t('aboutUsTranslation')}</Link>
          <Link href={getRoute('prices', locale)}>{t('pricesTranslation')}</Link>
          <Link href={getRoute('education', locale)}>{t('educationTranslation')}</Link>
          <Link href={getRoute('vehicles', locale)}>{t('carTypeTranslation')}</Link>
          <Link href={getRoute('apply', locale)}>{t('loginTranslation')}</Link>
          <Link href={getRoute('contact', locale)}>{t('contactTranslation')}</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
