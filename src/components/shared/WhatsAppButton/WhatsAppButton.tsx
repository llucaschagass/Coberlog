import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

interface Props {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<Props> = ({ phoneNumber, message }) => {
  
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={url}
      className={styles.whatsappFab}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;