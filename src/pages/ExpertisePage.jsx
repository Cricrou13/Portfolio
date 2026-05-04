import React from 'react';
import { useTranslation } from 'react-i18next';

const ExpertisePage = () => {

  const { t } = useTranslation();
    return (
         <section id="expertise" className='expertise'>
        <div className='container'>
          <div className='section-header'>
            <h1>{t('exp_title')}<span className='accent'> {t('exp_title_accent')}</span></h1>
            <p>{t('exp_subtitle')}</p>
          </div>

          <div className='expertise-grid'>
            <div className='expertise-card'>
              <div className='icon-box blue'>
                <i className="fa-solid fa-code"></i>
              </div>
              <h2>{t('exp_card1_t')}</h2>
              <p>{t('exp_card1_d')}</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box purple">
                <i className="fa-solid fa-database"></i>
              </div>
              <h2>{t('exp_card2_t')}</h2>
              <p>{t('exp_card2_d')}</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box green">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h2>{t('exp_card3_t')}</h2>
              <p>{t('exp_card3_d')}</p>
            </div>

            <div className="expertise-card">
              <div className="icon-box orange">
                <i className="fa-solid fa-gears"></i>
              </div>
              <h2>{t('exp_card4_t')}</h2>
              <p>{t('exp_card4_d')}</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ExpertisePage;