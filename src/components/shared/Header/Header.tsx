import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-png-branca.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.headerContent}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
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