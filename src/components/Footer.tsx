import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/images/LOGO PNG_BRANCA.png';

const logoStyles: React.CSSProperties = {
  height: '56px',
  margin: '0 0 0 0px',
};

export default function Footer() {
  return (
    <footer className="bg-black mt-auto border-t-4" style={{ borderColor: '#EE7927' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <img 
            src={logo} 
            alt="Cober Log Logo" 
            style={logoStyles}
          />
        </div>
        
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} COBERLOG - Todos os direitos reservados
        </p>

        <div className="flex gap-6">
          <a 
            href="#" 
            aria-label="Facebook" 
            className="hover:opacity-80 transition-opacity duration-300"
            style={{ color: '#EE7927' }}
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="#" 
            aria-label="Instagram" 
            className="hover:opacity-80 transition-opacity duration-300"
            style={{ color: '#EE7927' }}
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="#" 
            aria-label="LinkedIn" 
            className="hover:opacity-80 transition-opacity duration-300"
            style={{ color: '#EE7927' }}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}