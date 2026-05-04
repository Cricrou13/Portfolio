import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
     const { t } = useTranslation();
    return (
        <section id="about" className="about container">
                <div className="about-grid">
                <div className="about-text">
                    <h1 className="section-title">{t('about_t1')} <span className="accent">{t('about_t2')}</span></h1>
                    <p>
                        {t('about_p1_part1')} <strong> {t('about_p1_bold')} </strong> {t('about_p1_part2')}
                    </p>
                    <p>
                    {t('about_p2')}
                    </p>
                    
                    <div className="about-highlights">
                    <div className="highlight-item">
                        <i className="fa-solid fa-check"></i> {t('about_h1')}
                    </div>
                    <div className="highlight-item">
                        <i className="fa-solid fa-check"></i> {t('about_h2')}
                    </div>
                    <div className="highlight-item">
                        <i className="fa-solid fa-check"></i> {t('about_h3')}
                    </div>
                    </div>
                </div>

                <div className="about-stats">
                    <div className="stat-card">
                    <h2>20</h2>
                    <p>{t('about_s1')}</p>
                    </div>
                    <div className="stat-card accent-card">
                    <h2>100%</h2>
                    <p>{t('about_s2')}</p>
                    </div>
                    <div className="stat-card">
                    <h2>31</h2>
                    <p>{t('about_s3')}</p>
                    </div>
                </div>
                </div>
            </section>
    );
};
export default AboutPage;