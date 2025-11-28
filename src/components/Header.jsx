import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <h1>Imation Tecnologia & Info</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#product-free">Produtos</a></li>
                        <li><a href="#product-enterprise">Avançado</a></li>
                        <li><a href="#tutorial">Tutorial</a></li>
                        <li><a href="#download" className="btn-download-nav">Download</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
