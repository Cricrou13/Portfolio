import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
    // 1. On définit l'état du formulaire (Envoi, Succès, Erreur)
    const [status, setStatus] = useState(""); 
     const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche de quitter la page
        setStatus("SENDING");

        const form = e.target;
        const formData = new FormData(form);
        
        // On convertit les données en objet simple
        const data = Object.fromEntries(formData.entries());

        try {
            // On envoie les données à l'API gratuite FormSubmit
            const response = await fetch("https://formsubmit.co/ajax/delclos.c13@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset(); // On vide les champs
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            console.log("Erreur lors de l'envoi :", error);
            setStatus("ERROR");
        }
    };

    return (
    <div className="page-content">
        <section id='contact' className='contact'>
            <div className='contact-header'>
                {/* CORRECTION 1 : Ajout d'un H1 pour la structure sémantique */}
                <h1>{t('contact_title')}</h1>
                <h2 className='contact-title'>{t('contact_title_accent')}</h2>
                <p className='contact-subtitle'>{t('contact_subtitle')}</p>
            </div>
        
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className='form-group'>
                        {/* CORRECTION 3 : Ajout des labels (indispensable pour les erreurs rouges) */}
                        <label htmlFor="name">{t('contact_nom')}</label>
                        <input id="name" type="text" name="name" placeholder={t('placeholder_name')}required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">{t('contact_email')}</label>
                        <input id="email" type="email" name="email" placeholder={t('placeholder_email')}required />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor="message">{t('contact_message')}</label>
                    <textarea id="message" name="message" placeholder={t('placeholder_message')} rows="5" required></textarea>
                </div>

                    {/* Affichage des messages selon l'état */}
                    <div className="form-feedback" style={{ marginBottom: '20px', minHeight: '24px' }}>
                        {status === "SENDING" && <p style={{ color: '#3498db' }}>{t('contact_status_sending')}🚀</p>}
                        {status === "SUCCESS" && <p style={{ color: '#2ecc71' }}>✅ {t('contact_status_success')}</p>}
                        {status === "ERROR" && <p style={{ color: '#e74c3c' }}>❌ {t('contact_status_error')}</p>}
                    </div>

                    <button
                        type="submit" 
                        className="btn-submit" 
                        disabled={status === "SENDING"}
                    >
                       {status === "SENDING" ? t('contact_btn_sending') : ` ${t('contact_btn_send')}`}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ContactPage;