import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './HomePage.module.css';
import slide1Img from '../../../assets/images/image-home1.jpg';
import slide2Img from '../../../assets/images/image-home2.jpg';
import slide3Img from '../../../assets/images/image-home3.jpg';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.welcomeSection}>
         <h1>Bem-vindo à COBERLOG</h1>
      </div>
      
      {/* 4. Usar o Swiper no lugar do CCarousel */}
      <div className={styles.carouselContainer}>
        <Swiper
          // Registra os módulos que importamos
          modules={[Navigation, Autoplay, Pagination, EffectFade]}
          
          // Configurações
          effect="fade"     // Efeito "crossfade"
          slidesPerView={1} // Mostrar 1 slide por vez
          loop={true}       // Roda em loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation        // Habilita as setas (anterior/próximo)
          pagination={{ clickable: true }} // Habilita as "bolinhas"
        >
          {/* 5. Usar SwiperSlide no lugar de CCarouselItem */}
          <SwiperSlide>
            <img src={slide1Img} alt="slide 1" style={{ width: '100%' }} />
          </SwiperSlide>
          
          <SwiperSlide>
            <img src={slide2Img} alt="slide 2" style={{ width: '100%' }} />
          </SwiperSlide>
          
          <SwiperSlide>
            <img src={slide3Img} alt="slide 3" style={{ width: '100%' }} />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;