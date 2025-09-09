import logo from '../../assets/images/logo-png-branca.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="logo2">
        <img 
          src={logo} 
          alt="Cober Log Logo" 
        />
      </div>

      <p>&copy; {new Date().getFullYear()} - COBERLOG. Todos os direitos reservados.</p>
      
      <div className="container">
        <a href="#"> <FaInstagram size={24} /> </a>
        <a href="#"> <FaFacebook size={24} /> </a>
        <a href="#"> <FaLinkedin size={24} /> </a>
      </div>
    </footer>
  );
}