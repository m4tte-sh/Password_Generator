import React, { useState } from 'react';
import "../App.css";

export function AdvancedSettings({ setPassword }) {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [length, setLength] = useState(8);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecial, setIncludeSpecial] = useState(false);

    const generateCustomPassword = () => {
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const special = "!@#$%^&*()_+";

        let allChars = "";
        if (includeLower) allChars += lower;
        if (includeUpper) allChars += upper;
        if (includeNumbers) allChars += numbers;
        if (includeSpecial) allChars += special;

        let randomPassword = "";
        for (let i = 0; i < length; i++) {
            randomPassword += allChars[Math.floor(Math.random() * allChars.length)];
        }

        setPassword(randomPassword);
    };

    return (
        <div className="advanced-settings">
            <button className="toggle-advanced" onClick={() => setShowAdvanced(!showAdvanced)}>
                {showAdvanced ? "Ocultar Panel Avanzado" : "Mostrar Panel Avanzado"}
            </button>

            {showAdvanced && (
                <div className="settings-form">
                    <label>
                        Largo de la contraseña:
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            min="8"
                            max="20"
                        />
                    </label>
                    <label>
                        Incluir letras minúsculas:
                        <input
                            type="checkbox"
                            checked={includeLower}
                            onChange={() => setIncludeLower(!includeLower)}
                        />
                    </label>
                    <label>
                        Incluir letras mayúsculas:
                        <input
                            type="checkbox"
                            checked={includeUpper}
                            onChange={() => setIncludeUpper(!includeUpper)}
                        />
                    </label>
                    <label>
                        Incluir números:
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                    </label>
                    <label>
                        Incluir caracteres especiales:
                        <input
                            type="checkbox"
                            checked={includeSpecial}
                            onChange={() => setIncludeSpecial(!includeSpecial)}
                        />
                    </label>
                    <button className="generate-button" onClick={generateCustomPassword}>Generar Contraseña Personalizada</button>
                </div>
            )}
        </div>
    );
}
