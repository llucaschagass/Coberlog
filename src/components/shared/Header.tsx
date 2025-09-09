import logo from '../../assets/images/logo-png-branca.png';

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">Produtos</a>
        <a href="#">Segmentos</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>

      <div className="logo">
        <img 
          src={logo} 
          alt="Cober Log Logo" 
        />
      </div>
    </header>
  );
}