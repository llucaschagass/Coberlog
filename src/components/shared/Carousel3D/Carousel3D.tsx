import styles from './Carousel3D.module.css';
import logo from '../../../assets/images/logo-png-original-edited.png';

const facesContent = [
    { type: 'text', content: 'Segurança' },
    { type: 'image', content: logo },
    { type: 'text', content: 'Qualidade' },
    { type: 'image', content: logo },
    { type: 'text', content: 'Sustentabilidade' },
    { type: 'image', content: logo },
    { type: 'text', content: 'Responsabilidade' },
    { type: 'image', content: logo },
    { type: 'text', content: 'Inovação' },
    { type: 'image', content: logo },
];

export function Carousel3D() {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                {facesContent.map((face, index) => (
                    <div className={styles.carousel__face} key={index}>
                        {face.type === 'text' ? (
                            <span className={styles.faceContent}>{face.content}</span>
                        ) : (
                            <img 
                                src={face.content} 
                                alt="Logo da Empresa" 
                                className={styles.faceLogo} 
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel3D;