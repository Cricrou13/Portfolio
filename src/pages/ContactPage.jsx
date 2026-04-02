import React from 'react';

const ContactPage = () => {
    return (
        <div className="page-content">
            <section id='contact' className='contact'>
          <div className='contact-header'>
            <p>Un projet en tête ? Écrivez-moi, je réponds rapidement.</p>
            <div className='contact-email'>
                <a href="mailto:delclos.c13@gmail.com">delclos.c13@gmail.com</a>
                  <i className="fa-solid fa-envelope"></i> 
            </div>
          </div>
        
          <form className='contact-form'>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor="name" className="sr-only">Votre nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" required />
              </div>
              <div className='form-group'>
                <label htmlFor="email" className="sr-only">Votre e-mail</label>
                <input type="email" id="email" name="email" placeholder="Votre email" required />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="message" className="sr-only">Votre nom</label>
              <textarea id="message" name="message" placeholder="Votre message..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              <span className="icon">🚀</span> Envoyer le message
            </button>
          </form>
        </section>
        </div>
    );
};

export default ContactPage;