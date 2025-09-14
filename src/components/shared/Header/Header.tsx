// components/shared/Header/Header.tsx

import { Link } from 'react-router-dom'; // 1. IMPORTE O LINK
import logo from '../../../assets/images/logo-png-branca.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.headerContent}>
        <nav>
          {/* 2. SUBSTITUA 'a href' POR 'Link to' */}
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/segmentos">Segmentos</Link>
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