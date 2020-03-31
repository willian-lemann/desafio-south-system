import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-materialize';

import './styles.css';
import dragonLogo from '../../../assets/dragon-logo.jpg';

import ValidateUser from '../../../services/LoginService/ValidateUser';
  
function Login() { 
    const history = useHistory();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const isUserValid = ValidateUser({
            user: user,
            password: password
        })

        if (isUserValid) {
            
            history.push('list');
        }
        else {
            alert('Usuário inválido, tente novamente.')
        }

    };

    return (
        <div className="login-container">
            <section className="title-container">
                <img src={dragonLogo} alt="" />
            </section>
            <section className="form-container">
                <form onSubmit={handleLogin} className="form">
                    <input
                        className="user"
                        type="text"
                        placeholder="Usuário"
                        value={user}
                        onChange={event => setUser(event.target.value)}
                    />
                    <input
                        className="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button className="button">Entrar</Button>
                </form>
            </section>
        </div>
    );
}

export default Login;