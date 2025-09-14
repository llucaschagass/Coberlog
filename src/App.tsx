import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import ScrollUpButton from './components/shared/ScroollUp/ScrollUp';
import './App.css';
import WhatsAppButton from './components/shared/WhatsAppButton/WhatsAppButton';


export default function App() {
  return (
    <>
      <ScrollUpButton />

      <WhatsAppButton 
        phoneNumber="5511999998888"
        message="Olá! Vim pelo site da COBERLOG." 
      />
      
      <Header />

      <main>

      </main>

      <Footer />
    </>
  );
}