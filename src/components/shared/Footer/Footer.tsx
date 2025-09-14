import logo from '../../../assets/images/logo-png-branca.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.logo2}>
          <img 
            src={logo} 
            alt="CoberLog Logo" 
          />
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