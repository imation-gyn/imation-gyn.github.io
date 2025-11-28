import React from 'react';

const Tutorial = () => {
    return (
        <section id="tutorial" className="section tutorial">
            <div className="container">
                <h2 className="section-title">Tutorial para utilização</h2>
                <div className="tutorial-content">
                    <div className="step-card">
                        <div className="step-icon">1</div>
                        <h3>Login</h3>
                        <p>Acesso:</p>
                        <div className="credentials-box">
                            <div className="credential-item">
                                <span className="label">Usuário:</span>
                                <span className="value">IMATION</span>
                            </div>
                            <div className="credential-item">
                                <span className="label">Senha:</span>
                                <span className="value">123</span>
                            </div>
                        </div>
                        <div className="note">
                            <label className="checkbox-label">
                                <input type="checkbox" checked readOnly />
                                <span>Lembrar</span>
                            </label>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">2</div>
                        <h3>Dados do Emitente</h3>
                        <p>Cadastro de Empresas:</p>
                       <div className="product-image">
                           <img src={`${import.meta.env.BASE_URL}print_tela.jpg`} alt="Software Screenshot" className="product-screenshot" />
                       </div>                        
                    </div>
                    <div className="step-card">
                        <div className="step-icon">3</div>
                        <h3>Certificado digital</h3>
                        <p>Parâmetros: Certificado</p>
                       <div className="product-image">
                           <img src={`${import.meta.env.BASE_URL}print_tela.jpg`} alt="Software Screenshot" className="product-screenshot" />
                       </div>                        
                    </div>
                    <div className="step-card">
                        <div className="step-icon">4</div>
                        <h3>Schemas NFSE</h3>
                        <p>Parâmetros: Geral</p>
                       <div className="product-image">
                           <img src={`${import.meta.env.BASE_URL}print_tela.jpg`} alt="Software Screenshot" className="product-screenshot" />
                       </div>                        
                    </div> 
                    <div className="step-card">
                        <div className="step-icon">5</div>
                        <h3>Arquivos XML: NFSe</h3>
                        <p>Parâmetros: Arquivos</p>
                       <div className="product-image">
                           <img src={`${import.meta.env.BASE_URL}print_tela.jpg`} alt="Software Screenshot" className="product-screenshot" />
                       </div>                        
                    </div>
                    <div className="step-card">
                        <div className="step-icon">6</div>
                        <h3>Emissão: NFSe</h3>
                        <p>NFSe</p>
                       <div className="product-image">
                           <img src={`${import.meta.env.BASE_URL}print_tela.jpg`} alt="Software Screenshot" className="product-screenshot" />
                       </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tutorial;
