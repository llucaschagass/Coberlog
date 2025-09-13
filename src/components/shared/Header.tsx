import logo from '../../assets/images/logo-png-branca.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.headerContent}>
        <nav>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Segmentos</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>

        <div className={styles.logo}>
          <img 
            src={logo} 
            alt="CoberLog Logo" 
          />
        </div>
      </div>
    </header>
  );
}