import React, { useState } from 'react';

export function PassInput({ password, setPassword, isVisible, toggleVisibility, generatePassword }) {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
    };

    return (
        <div className="passinput">
            <div className="input-wrapper">
                <input
                    type={isVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                />
                <span className="eye-icon" onClick={toggleVisibility}>
                    {isVisible ? '👁️' : '👁️‍🗨️'}
                </span>
            </div>
            <button onClick={generatePassword}>Generar Contraseña Aleatoria</button>
            <button onClick={copyToClipboard}>Copiar Contraseña</button>
            {copySuccess && <p>Contraseña copiada al portapapeles!</p>}
        </div>
    );
}
