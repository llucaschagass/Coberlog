import React, { useState } from 'react';
import styles from './ServicosPage.module.css';
import { FaCheckCircle } from 'react-icons/fa';

const servicesData = {
  'manutencao-lonados': {
    title: 'Manutenção em Galpões Lonados',
    serviceList: [
      'Troca de lonas',
      'Limpeza técnica em estruturas e lavagem de lonas',
      'Manutenção em portões e acessórios',
    ],
  },
  'manutencao-metalicos': {
    title: 'Manutenção em Galpões Metálicos Industriais',
    serviceList: [
      'Troca de telhas e correção de vazamentos',
      'Instalação e troca de calhas metálicas',
      'Adequações e expansão de estruturas existentes',
    ],
  },
  'movimentacao-galpoes': {
    title: 'Movimentação de Galpões',
    serviceList: [
      'Movimentação de estruturas',
      'Adequação de layout ou plantas',
      'Projetos e Layout de operações',
    ],
  },
};

const serviceKeys = Object.keys(servicesData);

const ServicosPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(serviceKeys[0]);
  const activeService = servicesData[activeTab as keyof typeof servicesData];

  return (
    <div className={styles.servicesPage}>
      
      <section className={styles.introSection}>
        <h1>Manutenção & Serviços</h1>
        <p>
          Pensando na comodidade e satisfação dos nossos clientes, asseguramos a continuidade da 
          relação no pós-venda, oferecendo atendimento para serviços de manutenção dos nossos 
          produtos sempre que necessário. Além disso, realizamos manutenção e adequação de 
          projetos de outros fabricantes do mercado.
        </p>
        <p>
          Dessa forma, seu negócio conta com a segurança de ter alguém para recorrer quando o 
          fornecedor anterior não estiver disponível ou quando houver necessidade de um prazo mais 
          longo para avaliação da demanda e agendamento do atendimento. Conte com a COBERLOG!
        </p>
      </section>

      <div className={styles.tabsNav}>
        {serviceKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={activeTab === key ? styles.active : ''}
          >
            {servicesData[key as keyof typeof servicesData].title}
          </button>
        ))}
      </div>

      <div key={activeTab} className={styles.tabContent}>
        <div className={styles.serviceDetail}>
          <div className={styles.serviceText}>
            <h2>{activeService.title}</h2>
            <ul className={styles.serviceList}>
              {activeService.serviceList.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.listIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;