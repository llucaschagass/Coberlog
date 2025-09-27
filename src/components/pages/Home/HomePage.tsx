import React from 'react';
import Carousel from '../../shared/Carousel/Carousel';
import styles from './HomePage.module.css';
import { FaBolt, FaCogs, FaShieldAlt, FaDollarSign } from 'react-icons/fa';
import WarehouseDrawing from '../../shared/WarehouseDrawing/WarehouseDrawing';
import PreFooter from '../../shared/PreFooter/PreFooter';


const HomePage: React.FC = () => {
    return (
        <div className={styles.homePage}>
            
            <Carousel />

            <div className={styles.welcomeSection}>
                <h1>Bem-vindo à COBERLOG</h1>
            </div>

            <section className={styles.aboutSection}>
                <div className={styles.aboutImage}>
                    <WarehouseDrawing />
                </div>
                <div className={styles.aboutText}>
                    <h2>20 Anos de Experiência e Inovação</h2>
                    <p>
                        Somos a COBERLOG, uma empresa especializada em fabricação e montagem de Galpões Lonados e Metálicos, bem como estruturas flexíveis ou definitivas para atendimento a demandas industriais, voltadas a áreas produtivas e de armazenagem.
                    </p>
                    <p>
                        Com experiência de 20 anos de mercado, nossos profissionais estão aptos a entender as necessidades de nossos clientes e apresentar soluções ágeis e inovadoras em coberturas para aumento de capacidade de armazenamento e produção, de forma rápida, segura e com custo inferior aos projetos convencionais.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className={styles.featureItem}>
                    <FaCogs className={styles.featureIcon} />
                    <h3>Tecnologia de Ponta</h3>
                    <p>Nossos Galpões são treliçados, fabricados em Aço Carbono Galvanizado e desenvolvidos por nosso time de Engenharia.</p>
                </div>
                <div className={styles.featureItem}>
                    <FaBolt className={styles.featureIcon} />
                    <h3>Projetos Flexíveis</h3>
                    <p>Montagem rápida de Galpões de 10 à 50 metros de largura, com pé direito de 5 à 10 metros e comprimento indeterminado.</p>
                </div>
                <div className={styles.featureItem}>
                    <FaShieldAlt className={styles.featureIcon} />
                    <h3>Qualidade e Segurança</h3>
                    <p>Soluções inovadoras para construir estruturas modulares com máxima qualidade e segurança para sua operação.</p>
                </div>
                <div className={styles.featureItem}>
                    <FaDollarSign className={styles.featureIcon} />
                    <h3>Custo-Benefício</h3>
                    <p>Oferecemos um custo inferior aos projetos de construção convencionais, com agilidade e sem perda de qualidade.</p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2>É um prazer receber você aqui.</h2>
                <p>Navegue pelo nosso site e veja todas as vantagens que a COBERLOG tem a oferecer ao seu negócio.</p>
            </section>

            <PreFooter></PreFooter>
        </div>
    );
};

export default HomePage;