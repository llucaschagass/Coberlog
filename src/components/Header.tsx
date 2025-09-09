import React from 'react'
import logo from '../assets/images/LOGO PNG_BRANCA.png';

const headerStyles: React.CSSProperties = {
  backgroundColor: '#000000',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 50px',
  width: '100%',
  borderBottom: '4px solid #EE7927', 
};

const navUlStyles: React.CSSProperties = {
  display: 'flex',
  gap: '28px',
  listStyle: 'none',
  margin: '0 0 0 5px',
  padding: 0,
};

const navLinkStyles: React.CSSProperties = {
  color: '#EE7927',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 500,
};

const logoStyles: React.CSSProperties = {
  height: '56px',
  margin: '0 0 0 32px',
};

export default function Header() {
  return (
    <header style={headerStyles}>
      <nav>
        <ul style={navUlStyles}>
          <li><a href="#" style={navLinkStyles}>Home</a></li>
          <li><a href="#" style={navLinkStyles}>Produtos</a></li>
          <li><a href="#" style={navLinkStyles}>Segmentos</a></li>
          <li><a href="#" style={navLinkStyles}>Informações</a></li>
          <li><a href="#" style={navLinkStyles}>Contato</a></li>
        </ul>
      </nav>

      <div>
        <img 
          src={logo} 
          alt="Cober Log Logo" 
          style={logoStyles}
        />
      </div>
    </header>
  )
}