import logoWhite from '../../../assets/images/logo-png-branca.png';
import logoDark from '../../../assets/images/logo-png-original.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.logoContainer}>
          <img src={logoWhite} alt="Logo Coberlog" className={`${styles.logo} ${styles.white}`} />
          <img src={logoDark}  alt="Logo Coberlog" className={`${styles.logo} ${styles.dark}`} />
        </div>

        <p>&copy; {new Date().getFullYear()} - COBERLOG. Todos os direitos reservados.</p>
        
        <div className={styles.socialIcons}>
          <a href="#"> <FaInstagram size={24} /> </a>
          <a href="#"> <FaFacebook size={24} /> </a>
          <a href="#"> <FaLinkedin size={24} /> </a>
        </div>
      </div>
    </footer>
  );
}