import React, { useState } from 'react';
import styles from './ProdutosPage.module.css';
import placeholder from '../../../assets/images/placeholder.jpg';
import imgLonado1 from '../../../assets/images/galpao-lonado-1.jpeg';
import imgLonado2 from '../../../assets/images/galpao-lonado-2.jpeg';
import imgMetalico1 from '../../../assets/images/galpao-metalico-1.jpeg';
import imgTenda1 from '../../../assets/images/tenda-piramidal.jpeg';
//import imgMezanino from '../../../assets/images/mezanino-metalico.jpeg';
import imgSpda1 from '../../../assets/images/spda-iluminacao-1.jpg';
import imgSpda2 from '../../../assets/images/spda-iluminacao-2.jpg';

const productsData = {
    'galpoes-lonados': {
        title: 'Galpões Lonados',
        image: [imgLonado1, imgLonado2],
        content: (
            <>
                <p>Nossos Galpões são treliçados; fabricados em Aço Carbono Galvanizado e desenvolvidos com tecnologia de ponta por nosso time de Engenharia. Os projetos flexíveis possibilitam montagem rápida de Galpões de 10 à 50 metros de largura, com pé direito de 5 à 10 metros de altura e comprimento indeterminado, de acordo com sua necessidade.</p>
                <p>Os Galpões COBERLOG são projetados e fabricados com observância às todas as normas regulamentadoras que tangem a fabricação de edificações metálicas e lonadas, assegurando a estanqueidade dos galpões, segurança e resistência à ventos e intempéries.</p>
                <p>Os projetos desenvolvidos para atendimento ao seu negócio, podem ser equipados com acessórios de acordo com a necessidade de cada operação, como a instalação de Sistemas SPDA, Iluminação em LED, conforto térmico por exaustores Eólicos ou Cycloar, Calhas Metálicas, Sistemas de Coleta e Armazenamento de água pluvial e demais dispositivos de segurança e conforto operacional que temos à oferecer em nosso mix de produtos.</p>
                <p>A qualidade dos nossos produtos é garantida pela COBERLOG com a tranquilidade que só uma empresa sólida pode oferecer. Nossos processos de fabricação e montagem são executados por profissionais experientes, capacitados e acompanhados pelos nossos controles de qualidade e políticas internas.</p>
                <p>A matéria prima utilizada em nossos produtos é adquira de fornecedores conceituados no mercado nacional e internacional, também com a qualidade garantida de grandes marcas.</p>
            </>
        )
    },
    'galpoes-metalicos': {
        title: 'Galpões Metálicos',
        image: [imgMetalico1],
        content: (
            <>
                <p>Com o objetivo de atender às particularidades de cada negócio, a COBERLOG possui uma linha de Galpões com revestimento, cobertura e fechamentos laterais em telhas metálicas.</p>
                <p>A tecnologia que caracteriza a flexibilidade e agilidade na montagem dos nossos projetos, também é aplicada nos Galpões Metálicos COBERLOG, não descaracterizando a condição de alta produtividade nas montagens devido à robustez da das estruturas ou edificações 100% metálicas.</p>
            </>
        )
    },
    'tendas-piramidais': {
        title: 'Tendas Piramidais',
        image: [imgTenda1],
        content: (
            <>
                <p>As Tendas COBERLOG possuem uma vasta aplicabilidade quando a necessidade é por cobertura de pequenas áreas, seja na indústria, no agro negócio ou na montagem de eventos.</p>
                <p>Sua versatilidade, eficiência e simplicidade de montagem possibilitam a rápida cobertura de áreas para abrigo de pessoas, armazenamento de produtos e montagem de áreas de vivência em canteiro de obras industriais ou da Construção civil.</p>
                <p>Nossas Tendas Piramidais são fabricadas em aço carbono com perfil quadrado e lonas de alta qualidade e resistência para o dia a dia. Podem ser apenas teto ou com fechamentos laterais e frontais caso necessário.</p>
                <p>A identidade de marca da sua empresa também é valorizada nas Tendas COBERLOG. A cor das estruturas, lonas e logomarca da sua empresa ou evento podem ser consideradas no momento da aquisição.</p>
            </>
        )
    },
    'mezanino-metalico': {
        title: 'Mezanino Metálico',
        //image: imgMezanino,
        content: (
            <>
                <p>A indisponibilidade de áreas para expansão de produção, armazenamento ou mesmo de áreas administrativas é uma realidade no mercado, onde o metro quadrado é cada vez mais caro e escasso, fazendo com que as empresas precisem identificar formas de um melhor aproveitamento dos espaços disponíveis.</p>
                <p>Uma solução possível oferecida pela COBERLOG é a verticalização dessas áreas através de Mezaninos Metálicos, que são calculados e projetados de acordo com cada situação.</p>
            </>
        )
    },
    'spda-iluminacao': {
        title: 'Projetos de SPDA e Iluminação',
        image: [imgSpda1, imgSpda2],
        content: (
            <>
                <p>Alguns acessórios devem ser considerados em projetos e compreendidos muito além de suas atribuições de conforto e qualidade.</p>
                <p>Os Sistemas de SPDA e Iluminação em LED são exemplos importantes quando o assunto é segurança de pessoas e patrimônio mobilizado.</p>
                <p>A COBERLOG oferece aos seus clientes o desenvolvimento e execução de projetos de Proteção Contra Descargas Atmosféricas SPDA Gaiola de Faraday, em edificações próprias e em edificações de seus clientes.</p>
                <p>A iluminação adequada dos ambientes, além de uma condição de conforto para as pessoas que ali trabalham, gera resultados positivos para as empresas, como aumento de produtividade, qualidade e segurança nas operações, principalmente quando são utilizados equipamentos de movimentação de carga.</p>
                <p>Observando isso, a COBERLOG sugere e flexibiliza a instalação de Sistemas de Iluminação em LED em suas estruturas, sejam elas para locação ou aquisição pelos clientes.</p>
                <p>Não está condicionada à contratação de qualquer acessório em contratos de locação ou na aquisição dos Galpões COBERLOG.</p>
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