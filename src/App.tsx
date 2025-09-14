import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import SobrePage from './components/pages/Sobre/SobrePage';
import ContatoPage from './components/pages/Contato/ContatoPage';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import ScrollUpButton from './components/shared/ScroollUp/ScrollUp';
import WhatsAppButton from './components/shared/WhatsAppButton/WhatsAppButton';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
    
      <ScrollUpButton />
      
      <WhatsAppButton 
        phoneNumber="5531999887766"
        message="Olá! Vim pelo site da COBERLOG." 
      />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}