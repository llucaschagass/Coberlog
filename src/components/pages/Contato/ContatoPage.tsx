import React from 'react';
import styles from './ContatoPage.module.css'; 
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContatoPage: React.FC = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log('Formulário enviado (ação desabilitada).');
    alert('Formulário enviado! (Esta ação está desabilitada no momento).');
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.mainTitle}>Entre em Contato</h2>
      
      <div className={styles.contactGrid}>
        
        <div className={styles.infoColumn}>
          <h3>Informações de Contato</h3>
          <p>Preencha o formulário ao lado ou entre em contato direto pelos nossos canais.</p>
          
          <div className={styles.infoItem}>
            <FaPhoneAlt />
            <span>(31) 3131-3131</span>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope />
            <span>contato@coberlog.com.br</span>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt />
            <span>Av. Exemplo, 123 - Belo Horizonte, MG</span>
          </div>
          
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.258380275883!2d-43.9398869855368!3d-19.9133033433618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e03d358827%3A0x3c554f6764d85203!2sPra%C3%A7a%20Sete%20de%20Setembro!5e0!3m2!1spt-BR!2sbr!4v1678886543210!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
        <div className={styles.formColumn}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome Completo</label>
              <input
                id="name"
                type="text" 
                name="name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email" 
                name="email"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                type="tel" 
                name="phone"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ContatoPage;