import React, { useState } from 'react';
import './App.css';
import { PassInput } from './components/PassInput';
import { PasswordStrength } from './components/PasswordStrength';
import { AdvancedSettings } from './components/AdvancedSettings';

function App() {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let randomPassword = "";
    for (let i = 0; i < 12; i++) {
      randomPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(randomPassword);
  };

  return (
    <div className="App">
      <h1>Generador de Contraseñas</h1>
      <PassInput 
        password={password} 
        setPassword={setPassword} 
        isVisible={isVisible} 
        toggleVisibility={toggleVisibility} 
        generatePassword={generatePassword}
      />
      <PasswordStrength password={password} />
      <AdvancedSettings setPassword={setPassword} />
    </div>
  );
}

export default App;
