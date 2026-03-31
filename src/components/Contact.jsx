import React from 'react';

const Contact = () => {
    return (
         <section id='contact' className='contact'>
          <div className='contact-header'>
            <h2>Me <span className="accent">Contacter</span></h2>
            <p>Un projet en tête ? Écrivez-moi, je réponds rapidement.</p>
            <div className='contact-email'>
              <i className="fa-solid fa-envelope"></i> 
              <a href="mailto:delclos.c13@gmail.com">delclos.c13@gmail.com</a>
            </div>
          </div>
        
          <form className='contact-form'>
            <div className='form-row'>
              <div className='form-group'>
                <input type="text" name="name" placeholder="Votre nom" required />
              </div>
              <div className='form-group'>
                <input type="email" name="email" placeholder="Votre email" required />
              </div>
            </div>
            <div className='form-group'>
              <textarea name="message" placeholder="Votre message..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              <span className="icon">🚀</span> Envoyer le message
            </button>
          </form>
        </section>
    )
}
export default Contact;