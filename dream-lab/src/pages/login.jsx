import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faKey, faKitMedical } from '@fortawesome/free-solid-svg-icons';
import admins from '../data/admin.png';
import doctors from '../data/doctors.png';
import '../App.css';

function LoginPage({ onLogin, onSpecialLogin }) {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSpecialLogin = (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('accessId', token);

    fetch('https://kofy-back.onrender.com/dashboard/getSummary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Matricula invalida o error en la solicitud');
        }
        return response.json();
      })
      .then(() => {
        localStorage.setItem('userToken', token);
        onSpecialLogin();
      })
      .catch((fetchError) => {
        // eslint-disable-next-line
        console.error('Error:', fetchError);
        setError('Matricula invalida o error en la solicitud');
      });
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Hola 👋 ingenier@</h2>
            <p className="social-text">Por favor ingresa tu matricula</p>
            {error && <div className="error-message">{error}</div>}
            <div className="input-field">
              <FontAwesomeIcon icon={faKitMedical} className="my-auto_mx-auto" />
              <input
                type="text"
                placeholder="Matricula"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>
            <button type="button" className="btn" onClick={handleSpecialLogin}>
              Iniciar Reservacion
            </button>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Administrador</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto_mx-auto" />
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto_mx-auto" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn transparente" onClick={handleAdminLogin}>
              Iniciar Sesion
            </button>
            <p className="social-text">Inicia sesion con llave fisica</p>
            <div className="social-media">
              <button type="button" className="social-icon" aria-label="Physical Key Login">
                <FontAwesomeIcon icon={faKey} className="my-auto_mx-auto" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Eres Administrador?</h3>
            <p>
              Actualmente estas en el inicio de sesion para una reservacion
            </p>
            <button type="button" className="btn transparent" onClick={handleSignUpClick}>
              Iniciar Sesion como Administrador
            </button>
          </div>
          <img src={doctors} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Quieres hacer una reservacion?</h3>
            <p>
              Por favor regresa al inicio de sesion por matricula
            </p>
            <button type="button" onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
              Regresar
            </button>
          </div>
          <img src={admins} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
