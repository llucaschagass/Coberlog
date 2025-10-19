"use client";
import React, { useState } from 'react';
import styles from './ContatoPage.module.css'; 
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success';

const ContatoPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '', email: '', phone: '', message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setStatus('submitting');
    setTimeout(() => {
      console.log('Formulário enviado com sucesso!');
      setStatus('success');
    }, 2000);
  };

  return (
    <motion.div 
      className={styles.contactPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.contactContainer}>
        <motion.div 
          className={styles.contactWrapper}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className={styles.infoColumn}>
            <h2 className={styles.mainTitle}>Entre em Contato</h2>
            <p className={styles.subtitle}>Estamos prontos para transformar seus desafios em soluções. Preencha o formulário ou use nossos canais diretos.</p>
            
            <div className={styles.infoList}>
              <a href="tel:+553131816200" className={styles.infoItem}>
                <FaPhoneAlt /> <span>(31) 3181-6200</span>
              </a>
              <a href="mailto:contato@coberlog.com.br" className={styles.infoItem}>
                <FaEnvelope /> <span>contato@coberlog.com.br</span>
              </a>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt /> <span>Funcionários, - Belo Horizonte, MG</span>
              </div>
            </div>
            
            <div className={styles.mapContainer}>
              <iframe 
                src="https://maps.google.com/maps?q=Bairro%20Funcion%C3%A1rios%2C%20Belo%20Horizonte&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          
          <div className={styles.formColumn}>
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <input id="name" type="text" name="name" required placeholder=" " value={formData.name} onChange={handleChange} />
                      <label htmlFor="name">Nome Completo</label>
                    </div>
                    <div className={styles.formGroup}>
                      <input id="email" type="email" name="email" required placeholder=" " value={formData.email} onChange={handleChange} />
                      <label htmlFor="email">E-mail</label>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <input id="phone" type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} />
                    <label htmlFor="phone">Telefone (Opcional)</label>
                  </div>

                  <div className={styles.formGroup}>
                    <textarea id="message" name="message" rows={5} required placeholder=" " value={formData.message} onChange={handleChange} />
                    <label htmlFor="message">Mensagem</label>
                  </div>
                  
                  <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className={styles.successMessage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <FaCheckCircle className={styles.successIcon} />
                  <h2>Mensagem Enviada!</h2>
                  <p>Obrigado por entrar em contato. Retornaremos em breve!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContatoPage;