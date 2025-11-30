import React from 'react';

const Tutorial = () => {
    return (
        <section id="tutorial" className="section tutorial">
            <div className="container">
                <h2 className="section-title">Tutorial para Uso</h2>
                <li className="section-title">Utilize as imagens exemplo e faça sua configuração do sistema</li>
                <li className="section-title">Informe os dados de sua(s) empresa(s)</li>
                <div className="tutorial-content">
                    <div className="step-card">
                        <div className="step-icon">1</div>
                        <h3>Dados de Acesso</h3>
                        <p>Tela de Login !</p>
                        <li>Senha: 123</li>
                        <div className="product-image">
                           <img src={`${import.meta.env.BASE_URL}Tela_Login.png`} alt="Software Screenshot" className="product-screenshot" />
                        </div>                        
                    </div>
                    <div className="step-card">
                        <div className="step-icon">2</div>
                        <h3>Dados do Emitente</h3>
                        <p>Cadastro de Empresas:</p>
                        <li>Atualizar com os dados de sua empresa</li>
                        <li>* Tela de exemplo *</li>
                        <li></li>
                        <div className="product-image">
                           <img src={`${import.meta.env.BASE_URL}Tela_Empresas.jpg`} alt="Software Screenshot" className="product-screenshot" />
                        </div>                        
                    </div>
                    <div className="step-card">
                        <div className="step-icon">3</div>
                        <h3>Certificado digital</h3>
                        <p>Parâmetros: Certificado</p>
                        <li>Caminho arquivo.pfx ou Número de Série</li>
                        <li></li>
                        <div className="product-image">
                            <img src={`${import.meta.env.BASE_URL}Tela_Certificado.png`} alt="Software Screenshot" className="product-screenshot" />
                        </div>                        
                    </div>
                    <div className="step-card">
                        <div className="step-icon">4</div>
                        <h3>Documento Auxiar</h3>
                        <p>Parâmetros: DANFSe</p>
                        <li>Ajuste os dados/imagens, conforme exemplo</li>
                        <li></li>
                        <div className="product-image">
                            <img src={`${import.meta.env.BASE_URL}Tela_Danfse.jpg`} alt="Software Screenshot" className="product-screenshot" />
                        </div>                        
                    </div>
                    <div className="step-card">
                        <div className="step-icon">5</div>
                        <h3>Emissão: NFSe</h3>
                        <p></p>
                        <p>Vamos agora a emissão de Notas Fiscais: NFSe</p>
                        <p></p>
                        <li>Abaixo e a esquerda informe a Numeração já utilizada</li>
                        <li>Clicar: Importar XML</li>
                        <li></li>
                        <li>Todas as NFSe já emitidas serão importadas para a base de dados</li>
                        <li></li>
                        <li>[➕] Nova NFSe:</li>
                        <li>Preencha os campos vazios e clique em Enviar</li>
                        <li></li>
                        <p>[✅] Pronto para a próxima [✅]</p>
                        <div className="product-image">
                            <img src={`${import.meta.env.BASE_URL}Tela_NFSe.jpg`} alt="Software Screenshot" className="product-screenshot" />
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tutorial;
