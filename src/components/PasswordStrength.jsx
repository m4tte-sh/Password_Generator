import React from 'react';
import "../App.css";

export function PasswordStrength({ password }) {
    const calcStrength = (password) => {
        if (password.length < 8) {
            return "Poco segura";
        } else if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
            return "Segura";
        } else {
            return "Muy segura";
        }
    };

    return <p>Fortaleza: {calcStrength(password)}</p>;
}
