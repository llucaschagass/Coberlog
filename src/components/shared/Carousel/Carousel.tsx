import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imageHome1 from '../../../assets/images/image-home1.jpeg';
import imageHome2 from '../../../assets/images/image-home2.jpeg';
import imageHome3 from '../../../assets/images/image-home3.jpeg';
import imageHome4 from '../../../assets/images/image-home4.jpeg';
import styles from './Carousel.module.css';

const slides = [
    { src: imageHome1, caption: "Transformando desafios em soluções" },
    { src: imageHome2, caption: "Transformando desafios em soluções" },
    { src: imageHome3, caption: "Transformando desafios em soluções" },
    { src: imageHome4, caption: "Transformando desafios em soluções" }
];

export function CarouselHome() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const handleIndicatorClick = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(handleNext, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div id="carousel" className={styles.carousel}>
            
            <div className={styles.carouselIndicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => handleIndicatorClick(index)}
                    ></button>
                ))}
            </div>

            <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className={styles.cItem} key={index}>
                        <img src={slide.src} className={styles.cImg} alt={`Slide ${index + 1}`} />
                        {index === currentIndex && (
                            <div className={styles.carouselCaption}>
                                <p className={styles.customUnderline}>{slide.caption}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button onClick={handlePrev} className={styles.carouselControlPrev} type="button" aria-label="Anterior">
                <FaChevronLeft />
            </button>
            
            <button onClick={handleNext} className={styles.carouselControlNext} type="button" aria-label="Próximo">
                <FaChevronRight />
            </button>
        </div>
    );
}

export default CarouselHome;