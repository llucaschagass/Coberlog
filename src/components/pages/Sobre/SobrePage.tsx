import React from 'react';
import styles from './SobrePage.module.css';

const SobrePage: React.FC = () => {
  return (
    <section className={styles.sobreSection}>
      <div className={styles.container}>
        
        <h2 className={styles.mainTitle}>Institucional</h2>

        <div className={styles.missaoGrid}>
          
          <article className={styles.missaoCard}>
            <h3 className={styles.cardTitle}>MISSÃO</h3>
            <p>
              Apresentar soluções logísticas inovadoras e sustentáveis com 
              segurança e funcionalidade por meio de produtos e serviços de 
              excelência, proporcionando uma infraestrutura eficiente para as 
              necessidades de cada cliente.
            </p>
          </article>
          
          <article className={styles.missaoCard}>
            <h3 className={styles.cardTitle}>VISÃO</h3>
            <p>
              Ser a melhor empresa em serviços e produtos no mercado 
              logístico, reconhecida pelos clientes pelo atendimento, 
              qualidade e eficiência.
            </p>
          </article>
          
          <article className={styles.missaoCard}>
            <h3 className={styles.cardTitle}>VALORES</h3>
            <ul className={styles.valuesList}>
              <li>Segurança</li>
              <li>Qualidade</li>
              <li>Sustentabilidade</li>
              <li>Responsabilidade</li>
              <li>Inovação</li>
            </ul>
          </article>
          
        </div>
      </div>
    </section>
  );
};

export default SobrePage;