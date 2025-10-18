import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/images/logo-png-branca.png';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={logo} alt="CoberLog Logo" />
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

        <nav className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/produtos" onClick={closeMenu}>Produtos</Link>
          <Link to="/servicos" onClick={closeMenu}>Serviços</Link>
          <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
          <Link to="/contato" onClick={closeMenu}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}