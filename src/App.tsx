import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import SobrePage from './components/pages/Sobre/SobrePage';
import ContatoPage from './components/pages/Contato/ContatoPage';
import ProdutosPage from './components/pages/Produtos/ProdutosPage';
import ServicosPage from './components/pages/Servicos/ServicosPage';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import ScrollUpButton from './components/shared/ScroollUp/ScrollUp';
import WhatsAppButton from './components/shared/WhatsAppButton/WhatsAppButton';
import PreFooter from './components/shared/PreFooter/PreFooter';
import ScrollToTop from './components/shared/ScrollToTop/ScrollToTop';
import { ScrollBlurWrapper } from './components/shared/scroll-blur-wrapper';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    
      <ScrollUpButton />
      
      <WhatsAppButton 
        phoneNumber="553131816200"
        message="Olá! Vim pelo site da COBERLOG." 
      />

      <ScrollToTop />
      
      <Header />

      <ScrollBlurWrapper>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="/servicos" element={<ServicosPage />} />
          </Routes>
        </main>
      </ScrollBlurWrapper>

      <PreFooter></PreFooter>

      <Footer />

    </BrowserRouter>
  );
}