import styles from './PreFooter.module.css';

const PreFooter = () => {
    const columnsData = [
        { title: 'Empresa', links: ['Sobre Nós', 'Carreiras', 'Imprensa'] },
        { title: 'Produtos', links: ['Produto A', 'Produto B', 'Produto C'] },
        { title: 'Recursos', links: ['Blog', 'Documentação', 'Suporte'] },
        { title: 'Legal', links: ['Privacidade', 'Termos', 'Licenças'] },
        { title: 'Contato', links: ['Fale Conosco', 'Endereços', 'Parcerias'] },
    ];

    return (
        <footer className={styles.preFooterContainer}>
        <div className={styles.contentWrapper}>
            {columnsData.map((column, index) => (
            <div key={index} className={styles.column}>
                <h3 className={styles.columnTitle}>{column.title}</h3>
                <ul className={styles.linkList}>
                {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                    <a href="#">{link}</a>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </footer>
    );
};

export default PreFooter;