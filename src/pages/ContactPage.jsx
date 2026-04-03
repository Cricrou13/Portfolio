import React, { useState } from 'react';

const ContactPage = () => {
    // 1. On définit l'état du formulaire (Envoi, Succès, Erreur)
    const [status, setStatus] = useState(""); 

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
                    <p className='contact-title'>Un projet en tête ? Discutons-en.</p>
                    <p className='contact-subtitle'>Remplissez ce formulaire, je réponds rapidement</p>
                    <div className='contact-email'>
                        <a href="mailto:delclos.c13@gmail.com">delclos.c13@gmail.com</a>
                        <i className="fa-solid fa-envelope"></i> 
                    </div>
                </div>
            
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-row'>
                        <div className='form-group'>
                            {/* Très important : l'attribut name="name" */}
                            <input type="text" name="name" placeholder="Votre nom" required />
                        </div>
                        <div className='form-group'>
                            {/* Très important : l'attribut name="email" */}
                            <input type="email" name="email" placeholder="Votre email" required />
                        </div>
                    </div>
                    <div className='form-group'>
                        {/* Très important : l'attribut name="message" */}
                        <textarea name="message" placeholder="Votre message..." rows="5" required></textarea>
                    </div>

                    {/* Affichage des messages selon l'état */}
                    <div className="form-feedback" style={{ marginBottom: '20px', minHeight: '24px' }}>
                        {status === "SENDING" && <p style={{ color: '#3498db' }}>Envoi en cours... 🚀</p>}
                        {status === "SUCCESS" && <p style={{ color: '#2ecc71' }}>✅ Message envoyé ! Je vous répondrai vite.</p>}
                        {status === "ERROR" && <p style={{ color: '#e74c3c' }}>❌ Erreur. Vérifiez vos spams (activation requise au 1er envoi).</p>}
                    </div>

                    <button 
                        type="submit" 
                        className="btn-submit" 
                        disabled={status === "SENDING"}
                    >
                        {status === "SENDING" ? "Envoi..." : "Envoyer le message"}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ContactPage;