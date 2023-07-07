import React from 'react';
import chooseWheelImg from '../../../../public/choose-wheel.svg';
import dividerImg from '../../../../public/divider.svg';
import inspectorsImg from '../../../../public/instructors.svg';
import successfulYearsImg from '../../../../public/yearsOfExperience.svg';
import studentsImg from '../../../../public/students.svg';
import { getServerTranslations } from '@/translations/server-translations';
import { FALLBACK_LOCALE } from '@/translations/settings';
import { LocaleProps } from '@/app/[locale]/locale.props';
import './styles.scss';
import Image from 'next/image';

const homePageText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at justo congue, vestibulum mauris sed, mattis ante. Mauris varius neque nec aliquet tristique. Nam vitae convallis odio. Cras nec leo sit amet mi semper cursus. In hac habitasse platea dictumst. Vivamus consectetur ex nibh, quis porttitor lorem viverra vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum arcu urna, maximus eget odio sed, gravida auctor risus. Curabitur ultricies malesuada cursus. Vivamus posuere nisi tristique dui vestibulum, vitae tincidunt leo semper.';
const Home = async ({ params: { locale } }: LocaleProps) => {
  const { t } = await getServerTranslations(locale ?? FALLBACK_LOCALE);

  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100%',
        }}
      >
        <video
          width="100%"
          height="700"
          controls
          autoPlay={true}
          src={'http://media.w3.org/2010/05/sintel/trailer.mp4'}
          style={{ backgroundColor: 'black' }}
        >
          <button>PRIJAVA</button>
        </video>
        <div className="choose-wheel">
          <div className="choose-wheel__image-container">
            <Image src={chooseWheelImg} alt="" />
          </div>
          <div className="choose-wheel__text-container">
            <div className="choose-wheel__text-container__box">
              <p className="choose-wheel__text-container__box__text-style">{t('whyChooseDrivingSchool')}</p>
              <p className="choose-wheel__text-container__box__text-style" style={{ color: 'red', marginLeft: '10px' }}>
                VO
              </p>
              <p className="choose-wheel__text-container__box__text-style">L</p>
              <p className="choose-wheel__text-container__box__text-style" style={{ color: 'red' }}>
                AN
              </p>
              <p className="choose-wheel__text-container__box__text-style">?</p>
            </div>
            <div className="choose-wheel__text-container__divider">
              <Image src={dividerImg} alt={'../../../../public/divider.svg'} />
            </div>
            <div className="choose-wheel__text-container__text">{homePageText}</div>
            <div className="choose-wheel__text-container__groups">
              <div>
                <div style={{ width: '150px' }}>Broj iskusnih instruktora</div>
                <Image
                  src={inspectorsImg}
                  alt={'../../../../public/instructors.svg'}
                  style={{ marginTop: '20px' }}
                  height={70}
                />
              </div>
              <div>
                <div style={{ width: '150px' }}>Godina iskustva</div>
                <Image
                  src={successfulYearsImg}
                  alt={'../../../../public/yearsOfExperience.svg'}
                  style={{ marginTop: '20px' }}
                  height={80}
                />
              </div>
              <div>
                <div style={{ width: '150px' }}>Broj vozaca polozilo</div>
                <Image
                  src={studentsImg}
                  alt={'../../../../public/students.svg'}
                  style={{ marginTop: '20px' }}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
