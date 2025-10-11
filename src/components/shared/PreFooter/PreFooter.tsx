import { Link } from 'react-router-dom';
import { FaBuilding, FaCubes, FaTools, FaEnvelope } from 'react-icons/fa';
import styles from './PreFooter.module.css'

const PreFooter = () => {
    const cardsData = [
        { title: 'Empresa', icon: <FaBuilding />, path: '/sobre' },
        { title: 'Produtos', icon: <FaCubes />, path: '/produtos' },
        { title: 'Serviços', icon: <FaTools />, path: '/servicos' },
        { title: 'Contato', icon: <FaEnvelope />, path: '/contato' },
    ];

    return (
        <footer className={styles.preFooterContainer}>
        <div className={styles.contentWrapper}>
            {cardsData.map((card, index) => (
            <Link key={index} to={card.path} className={styles.card}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.cardIcon}>{card.icon}</div>
            </Link>
            ))}
        </div>
        </footer>
    );
};

export default PreFooter;