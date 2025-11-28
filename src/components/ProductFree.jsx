import React from 'react';

const ProductFree = () => {
    return (
        <section id="product-free" className="section product-free">
            <div className="container">
                <h2 className="section-title">OpenErp NFSe</h2>
                <div className="product-content">
                    <div className="product-text">
                        <p>
                            NFSe de modo Simplificado
                            Solução ágil e sem custo
                        </p>
                        <ul className="feature-list">
                            <li>Sem restrições de uso</li>
                            <li>Armazenamento seguro</li>
                            <li>Interface intuitiva</li>
                        </ul>
                    </div>
                    <div className="product-image">
                        <img src={`${import.meta.env.BASE_URL}print_tela.jpg`} alt="Software Screenshot" className="product-screenshot" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductFree;
