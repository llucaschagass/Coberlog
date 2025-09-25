import Carousel from '../../shared/Carousel/Carousel';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
    return (
        <div className={styles.homePage}>

            <Carousel></Carousel>

            <div className={styles.welcomeSection}>
                <h1>Bem-vindo à COBERLOG</h1>
            </div>

        </div>
    );
};

export default HomePage;