import React from 'react';

const Download = () => {
    return (
        <section id="download" className="section download">
            <div className="container download-content">
                <h2>OpenErp NFSe - Grátis</h2>
                <p>Rápido e Fácil de usar</p>
                <div className="download-options">
                    <a href="https://github.com/imation-gyn/imation-gyn.github.io/releases/download/OpenErp/OpenErp-1.1.1.17-x86-Instalador.exe" className="btn-download-large">
                        <span className="icon">⬇️</span>
                        <span className="text">
                            <span className="label">Download para Windows</span>
                            <span className="version">Versão 1.1.1.17 (x32/x64-bit)</span>
                        </span>
                    </a>
                </div>
                <p className="requirements">Requisitos: Windows 7 ou superior.</p>
            </div>
        </section>
    );
};

export default Download;
