import React from 'react';
import Carousel from '../../shared/Carousel/Carousel';
import styles from './HomePage.module.css';
import { FaBolt, FaCogs, FaShieldAlt, FaDollarSign } from 'react-icons/fa';
import WarehouseDrawing from '../../shared/WarehouseDrawing/WarehouseDrawing';


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
                    <h2>QUEM SOMOS?</h2>
                    <p>
                        Somos a COBERLOG, uma empresa especializada na fabricação e montagem de Galpões Lonados e Metálicos, além de estruturas flexíveis ou definitivas para atender demandas industriais voltadas a áreas produtivas e de armazenagem.
                    </p>
                    <p>
                        Com 20 anos de experiência no mercado, nossos profissionais estão aptos a compreender as necessidades dos clientes e apresentar soluções ágeis e inovadoras em coberturas, que aumentam a capacidade de armazenamento e produção de forma rápida, segura e com custo inferior aos projetos convencionais.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className={styles.featureItem}>
                    <FaCogs className={styles.featureIcon} />
                    <h3>Tecnologia de Ponta</h3>
                    <p>Nossos galpões são treliçados, fabricados em aço carbono galvanizado e desenvolvidos por nosso time de engenharia.</p>
                </div>
                <div className={styles.featureItem}>
                    <FaBolt className={styles.featureIcon} />
                    <h3>Projetos Flexíveis</h3>
                    <p>Montagem rápida de galpões com larguras entre 10 e 50 metros, pé direito de 5 a 10 metros e comprimento variável, de acordo com a necessidade.</p>
                </div>
                <div className={styles.featureItem}>
                    <FaShieldAlt className={styles.featureIcon} />
                    <h3>Qualidade e Segurança</h3>
                    <p>Oferecemos soluções inovadoras para a construção de estruturas modulares, garantindo máxima qualidade e segurança para sua operação.</p>
                </div>
                <div className={styles.featureItem}>
                    <FaDollarSign className={styles.featureIcon} />
                    <h3>Custo-Benefício</h3>
                    <p>Oferecemos um custo inferior ao dos projetos de construção convencionais, com agilidade e sem comprometer a qualidade.</p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2>É um prazer receber você aqui.</h2>
                <p>Navegue pelo nosso site e descubra todas as vantagens que a COBERLOG pode oferecer ao seu negócio.</p>
            </section>
        </div>
    );
};

export default HomePage;