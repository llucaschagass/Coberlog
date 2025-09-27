import React, { useState, useEffect } from 'react';
import { IoChevronUpOutline } from 'react-icons/io5';
import styles from './ScrollUp.module.css';

const ScrollUpButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const SHOW_THRESHOLD = 550;

    const handleScroll = () => {
        if (window.scrollY > SHOW_THRESHOLD) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`${styles.scrollUpBtn} ${isVisible ? styles.show : ''}`}
            onClick={scrollToTop}
            title="Voltar ao topo"
        >
            <IoChevronUpOutline className={styles.scrollIcon} />
        </div>
    );
};

export default ScrollUpButton;