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
                            Oferecer soluções logísticas inovadoras e sustentáveis, entregando uma 
                            infraestrutura eficiente e personalizada que, com máxima segurança 
                            e funcionalidade, transforme os desafios de cada cliente em soluções.
                        </p>
                    </article>

                    <article className={styles.missaoCard}>
                        <img src={visao} alt="Ícone de Visão" className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>VISÃO</h3>
                        <p>
                            Ser a referência em serviços e produtos no mercado logístico, 
                            conquistando o reconhecimento dos clientes por meio de um 
                            atendimento de excelência, qualidade e eficiência que gerem confiança e 
                            impulsionem o sucesso a longo prazo.
                        </p>
                    </article>

                    <article className={styles.missaoCard}>
                        <img src={valor} alt="Ícone de Valor" className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>VALORES</h3>
                        <ul className={styles.valuesList}>
                            <li>Segurança: <span>Nossa prioridade inegociável em cada operação.</span></li>
                            <li>Qualidade: <span>A busca constante pela excelência em cada detalhe do processo.</span></li>
                            <li>Sustentabilidade: <span>Atuar no presente com total responsabilidade pelo futuro.</span></li>
                            <li>Responsabilidade: <span>Transparência e integridade em cada compromisso assumido.</span></li>
                            <li>Inovação: <span>O motor que nos impulsiona para solucionar desafios e antecipar tendências.</span></li>
                        </ul>
                    </article>
                </div>

                <section className={styles.aboutSection}>
                    <div className={styles.aboutText}>
                        <h2>Excelência em Estruturas Metálicas e Lonadas</h2>
                        <p>
                            Fundada com o propósito de oferecer <strong>soluções inteligentes</strong> em coberturas industriais e logísticas, 
                            a <strong>COBERLOG</strong> destaca-se pela fabricação e montagem de galpões lonados, metálicos, mezaninos e tendas 
                            piramidais. 
                            Sua reputação é fruto de um trabalho pautado na 
                            <strong> qualidade, segurança e inovação contínua</strong>.
                        </p>
                        <p>
                            Com uma equipe de profissionais que acumulam mais de <strong>duas décadas de experiência</strong> no setor, 
                            a COBERLOG alia conhecimento técnico a processos de engenharia otimizados para desenvolver 
                            <strong> projetos sob medida</strong>, atendendo com eficiência às necessidades de clientes dos mais diversos 
                            segmentos — da indústria e agronegócio a eventos e centros logísticos.
                        </p>
                        <p>
                            Nosso compromisso vai além da entrega de uma estrutura: trabalhamos para proporcionar 
                            <strong> soluções completas</strong>, que unem <strong>robustez, durabilidade e montagem ágil</strong>, 
                            sempre em conformidade com as normas técnicas vigentes e com foco em <strong>sustentabilidade </strong> 
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