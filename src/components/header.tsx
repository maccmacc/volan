import Link from 'next/link';
// import SteeringWheelIcon from "../../public/steering-wheel-icon.svg";
import './styles.scss';
import Logo from '../assets/icons/logo';
import { getServerTranslations } from '@/translations/server-translations';
import { FALLBACK_LOCALE } from '@/translations/settings';
import { getRoute } from '../app/routes';

const Header = async ({ params: { locale } }: LocaleProps) => {
  const { t } = await getServerTranslations(locale ?? FALLBACK_LOCALE);

  return (
    <header>
      <div className="background">
        <div className="background__header-info-container">
          <div>Radno Vreme: 08-15h</div>
          <div>Telefon: 021 662 27 32</div>
          <div>Lokacija: Žitni trg broj 9</div>
        </div>
        <div className="background__navigation-content">
          <Logo />

          <Link href={getRoute('home', locale)}> {t('firstPageTranslation')}</Link>
          <Link href={getRoute('aboutUs', locale)}>{t('aboutUsTranslation')}</Link>
          <Link href={getRoute('prices', locale)}>{t('pricesTranslation')}</Link>
          <Link href={getRoute('education', locale)}>EDUKACIJA</Link>
          <Link href={getRoute('vehicles', locale)}>{t('carTypeTranslation')}</Link>
          <Link href={getRoute('apply', locale)}>{t('loginTranslation')}</Link>
          <Link href={getRoute('contact', locale)}>{t('contactTranslation')}</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
