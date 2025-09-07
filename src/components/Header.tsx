import React from 'react'
import WarehouseDrawing from './WarehouseDrawing';
import logo from '../assets/images/logo-png-original.png';

const headerStyles: React.CSSProperties = {
  backgroundColor: '#000000',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 24px',
  width: '100%',
  borderBottom: '4px solid #EE7927', 
};

const drawingContainerStyles: React.CSSProperties = {
  height: '48px',
};

const navUlStyles: React.CSSProperties = {
  display: 'flex',
  gap: '32px',
  listStyle: 'none',
  margin: 0,
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
};

export default function Header() {
  return (
    <header style={headerStyles}>
      
      <div style={drawingContainerStyles}>
        <WarehouseDrawing height="100%" />
      </div>

      <nav>
        <ul style={navUlStyles}>
          <li><a href="#" style={navLinkStyles}>Home</a></li>
          <li><a href="#" style={navLinkStyles}>Institucional</a></li>
          <li><a href="#" style={navLinkStyles}>Produtos</a></li>
          <li><a href="#" style={navLinkStyles}>Segmentos</a></li>
          <li><a href="#" style={navLinkStyles}>Informações</a></li>
          <li><a href="#" style={navLinkStyles}>FAQ</a></li>
          <li><a href="#" style={navLinkStyles}>Portal</a></li>
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