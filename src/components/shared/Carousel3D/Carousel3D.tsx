import styles from './Carousel3D.module.css';

const facesContent = [
    { type: 'text', content: '' },
    { type: 'text', content: 'Segurança' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Qualidade' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Sustentabilidade' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Responsabilidade' },
    { type: 'text', content: '' },
    { type: 'text', content: 'Inovação' },
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