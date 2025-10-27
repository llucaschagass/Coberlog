import React, { useState } from 'react';
import styles from './ProdutosPage.module.css';
import placeholder from '../../../assets/images/placeholder.jpg';
import imgLonado1 from '../../../assets/images/galpao-lonado-1.jpeg';
import imgLonado2 from '../../../assets/images/galpao-lonado-2.png';
import imgMetalico1 from '../../../assets/images/galpao-metalico-1.jpeg';
import imgTenda1 from '../../../assets/images/tenda-piramidal.jpeg';
import imgMezanino1 from '../../../assets/images/mezanino-metalico-1.jpeg';
import imgSpda1 from '../../../assets/images/spda-iluminacao-1.jpg';
import imgSpda2 from '../../../assets/images/spda-iluminacao-2.jpg';

const productsData = {
    'galpoes-lonados': {
        title: 'Galpões Lonados',
        image: [imgLonado1, imgLonado2],
        content: (
            <>
                <p>Nossos Galpões são treliçados, fabricados em aço carbono galvanizado e desenvolvidos com tecnologia de ponta por nosso time de Engenharia. Os projetos flexíveis possibilitam montagem rápida de galpões com larguras entre 10 à 50 metros, pé direito de 5 à 10 metros e comprimento variável, conforme sua necessidade.</p>
                <p>Os galpões COBERLOG são projetados e fabricados em conformidade com todas as normas regulamentadoras relativas à fabricação de edificações metálicas e lonadas, assegurando estanqueidade, segurança e resistência contra ventos e intempéries.</p>
                <p>Os projetos desenvolvidos para atender ao seu negócio podem ser equipados com acessórios conforme a necessidade de cada operação, como instalação de sistemas SPDA, iluminação em LED, conforto térmico por exaustores eólicos ou Cycloar, calhas metálicas, sistemas de coleta e armazenamento de água pluvial, além de outros dispositivos de segurança e conforto operacional presentes em nosso mix de produtos.</p>
                <p>A qualidade dos nossos produtos é garantida pela COBERLOG, com a tranquilidade que só uma empresa sólida pode oferecer. Nossos processos de fabricação e montagem são executados por profissionais experientes, capacitados e acompanhados por rigorosos controles de qualidade e políticas internas.</p>
                <p>A matéria-prima utilizada em nossos produtos é adquirida de fornecedores conceituados no mercado nacional e internacional, todos com a qualidade assegurada por grandes marcas.</p>
            </>
        )
    },
    'galpoes-metalicos': {
        title: 'Galpões Metálicos',
        image: [imgMetalico1],
        content: (
            <>
                <p>Com o objetivo de atender às particularidades de cada negócio, a COBERLOG oferece uma linha de galpões com revestimento, cobertura e fechamentos laterais em telhas metálicas.</p>
                <p>A tecnologia que garante flexibilidade e agilidade na montagem dos nossos projetos também é aplicada nos Galpões Metálicos COBERLOG, sem comprometer a alta produtividade das montagens, graças à robustez das estruturas e ao fato de serem edificações 100% metálicas.</p>
            </>
        )
    },
    'tendas-piramidais': {
        title: 'Tendas Piramidais',
        image: [imgTenda1],
        content: (
            <>
                <p>As Tendas COBERLOG possuem ampla aplicabilidade quando a necessidade é a cobertura de pequenas áreas, seja na indústria, no agronegócio ou na realização de eventos.</p>
                <p>Sua versatilidade, eficiência e simplicidade de montagem permitem a rápida cobertura de áreas para abrigo de pessoas, armazenamento de produtos ou montagem de espaços de vivência em canteiros de obras industriais ou da construção civil.</p>
                <p>Nossas Tendas Piramidais são fabricadas em aço carbono com perfil quadrado e lonas de alta qualidade e resistência, adequadas para o uso diário. Podem ser fornecidas apenas como teto ou com fechamentos laterais e frontais, conforme a necessidade.</p>
                <p>A identidade visual da sua empresa também é valorizada nas Tendas COBERLOG. A cor das estruturas, das lonas e a aplicação da logomarca da sua empresa ou evento podem ser definidas no momento da aquisição.</p>
            </>
        )
    },
    'mezanino-metalico': {
        title: 'Mezanino Metálico',
        image: [imgMezanino1],
        content: (
            <>
                <p>A indisponibilidade de áreas para expansão de produção, armazenamento ou mesmo de espaços administrativos é uma realidade no mercado, onde o metro quadrado se torna cada vez mais caro e escasso. Isso faz com que as empresas precisem identificar maneiras de aproveitar melhor os espaços disponíveis.</p>
                <p>Uma solução eficiente oferecida pela COBERLOG é a verticalização dessas áreas por meio de Mezaninos Metálicos, calculados e projetados de acordo com cada situação.</p>
            </>
        )
    },
    'spda-iluminacao': {
        title: 'Projetos de SPDA e Iluminação',
        image: [imgSpda1, imgSpda2],
        content: (
            <>
                <p>Alguns acessórios devem ser considerados em projetos, indo muito além de suas funções de conforto e qualidade.</p>
                <p>Os sistemas de SPDA e iluminação em LED são exemplos essenciais quando o assunto é a segurança de pessoas e do patrimônio mobilizado.</p>
                <p>A COBERLOG oferece aos seus clientes o desenvolvimento e a execução de projetos de Proteção contra Descargas Atmosféricas (SPDA – Gaiola de Faraday), tanto em edificações próprias quanto em edificações de clientes.</p>
                <p>A iluminação adequada dos ambientes não apenas proporciona conforto às pessoas que ali trabalham, como também gera resultados positivos para as empresas, como aumento de produtividade, melhoria da qualidade e segurança nas operações, principalmente quando há utilização de equipamentos de movimentação de carga.</p>
                <p>Considerando isso, a COBERLOG sugere e flexibiliza a instalação de sistemas de iluminação em LED em suas estruturas, seja para locação ou aquisição pelos clientes.</p>
                <p>A contratação de qualquer acessório não é obrigatória em contratos de locação ou na aquisição de galpões COBERLOG.</p>
            </>
        )
    }
};

const productKeys = Object.keys(productsData);

const ProdutosPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(productKeys[0]);

    const activeProduct = productsData[activeTab as keyof typeof productsData];

    return (
        <div className={styles.productsPage}>
            <div className={styles.tabsNav}>
                {productKeys.map(key => (
                    <button 
                        key={key} 
                        onClick={() => setActiveTab(key)}
                        className={activeTab === key ? styles.active : ''}
                    >
                        {productsData[key as keyof typeof productsData].title}
                    </button>
                ))}
            </div>

            <div key={activeTab} className={styles.tabContent}>
                <div className={styles.productDetail}>
                    <div className={styles.productImages}>
                        {'image' in activeProduct && Array.isArray(activeProduct.image) && activeProduct.image.length > 0 ? (
                            activeProduct.image.map((imgSrc, index) => (
                            <img key={index} src={imgSrc} alt={`${activeProduct.title} - imagem ${index + 1}`} />
                            ))
                        ) : (
                            <img src={placeholder} alt="Imagem não disponível" />
                        )}
                    </div>
                    <div className={styles.productText}>
                        <h2>{activeProduct.title}</h2>
                        {activeProduct.content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdutosPage;