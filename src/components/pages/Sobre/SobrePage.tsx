import React from 'react';
import styles from './SobrePage.module.css';
import Carousel3D from '../../shared/Carousel3D/Carousel3D';
import missao from '../../../assets/images/icons/missao.png';
import visao from '../../../assets/images/icons/visao.png';
import valor from '../../../assets/images/icons/valor.png';

const SobrePage: React.FC = () => {
    return (
        <section className={styles.sobreSection}>

            <Carousel3D></Carousel3D>

            <div className={styles.container}>
            
                <h2 className={styles.mainTitle}>Conheça nossos pilares institucionais</h2>

                <div className={styles.missaoGrid}>
                    <article className={styles.missaoCard}>
                        <img src={missao} alt="Ícone de Missão" className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>MISSÃO</h3>
                        <p>
                            Apresentar soluções logísticas inovadoras e sustentáveis, 
                            entregando uma infraestrutura eficiente e personalizada que, 
                            com máxima segurança e funcionalidade, transforma os desafios 
                            de cada cliente em crescimento.
                        </p>
                    </article>

                    <article className={styles.missaoCard}>
                        <img src={visao} alt="Ícone de Visão" className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>VISÃO</h3>
                        <p>
                            Ser a referência em serviços e produtos no mercado logístico, 
                            construindo o reconhecimento de nossos clientes por meio de um 
                            atendimento, qualidade e eficiência que geram confiança e 
                            impulsionam o sucesso a longo prazo.
                        </p>
                    </article>

                    <article className={styles.missaoCard}>
                        <img src={valor} alt="Ícone de Valor" className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>VALORES</h3>
                        <ul className={styles.valuesList}>
                            <li>Segurança: <span>Nossa prioridade inegociável em cada operação.</span></li>
                            <li>Qualidade: <span>A busca pela excelência em cada detalhe do processo.</span></li>
                            <li>Sustentabilidade: <span>Operar no presente com total responsabilidade pelo futuro.</span></li>
                            <li>Responsabilidade: <span>A transparência e a integridade em cada compromisso firmado.</span></li>
                            <li>Inovação: <span>O motor que nos move para solucionar desafios e antecipar tendências.</span></li>
                        </ul>
                    </article>
                </div>

                <section className={styles.aboutSection}>
                    <div className={styles.aboutText}>
                        <h2>Excelência em Estruturas Metálicas e Lonadas</h2>
                        <p>
                            Fundada com o propósito de oferecer soluções inteligentes em coberturas industriais e logísticas, 
                            a <strong>COBERLOG</strong> se destaca pela fabricação e montagem de 
                            <strong> galpões lonados, metálicos, mezaninos e tendas piramidais</strong>. 
                            Sua reputação é resultado de um trabalho pautado em 
                            <strong> qualidade, segurança e inovação contínua</strong>.
                        </p>
                        <p>
                            Com uma equipe de profissionais que acumulam mais de duas décadas de experiência no setor, 
                            a COBERLOG alia conhecimento técnico e processos de engenharia otimizados para desenvolver 
                            projetos sob medida, atendendo com eficiência às necessidades de clientes dos mais diversos 
                            segmentos — da indústria e agronegócio a eventos e centros logísticos.
                        </p>
                        <p>
                            Nosso compromisso vai além da entrega de uma estrutura. Trabalhamos para proporcionar 
                            <strong> soluções completas</strong>, que unem robustez, durabilidade e montagem ágil, 
                            sempre em conformidade com as normas técnicas vigentes e com foco em sustentabilidade 
                            e aproveitamento de recursos.
                        </p>
                        <p>
                            Impulsionada pela confiança de seus parceiros e pela busca constante por 
                            <strong> tecnologia e excelência construtiva</strong>, a COBERLOG segue expandindo sua atuação 
                            e consolidando sua presença no mercado nacional.
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default SobrePage;