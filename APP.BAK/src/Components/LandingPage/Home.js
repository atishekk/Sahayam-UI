import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './home.scss';
import first from './one.png';
import jwt from 'jsonwebtoken';

const LOGIN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      localStorage.setItem('AUTH_TOKEN', data.signIn);
      history.push('/dashboard');
    },
    onError: (error) => {
      console.log(error.message);
    }
  });

  function onLogin(e) {
    e.preventDefault();
    login({ variables: { email, password } });
  }

  return (
    <main>
      <div className="landing-page">
        <nav></nav>
        <div className="hero-section">
          <div className="landing-left">
            <div className="hero-heading">
              <h1>Welcome to Sahayam</h1>
              <p>A platform to connect people with NGOs. </p>
            </div>
            <div className="login-container">
              <h1> Login</h1>
              <form>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={(e) => onLogin(e)}>
                  <p>Login</p>
                </button>
              </form>
            </div>
            <div className="register-buttons">
              <Link to="/auth/ngo" style={{ textDecoration: 'none' }}>
                <button>
                  <p>Register as NGO</p>
                </button>
              </Link>
              <Link to="/auth/user">
                <button>
                  <p>Register as User</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="landing-right">{/* <img src={first} alt="hero" /> */}</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
