import React, { useEffect, useState } from 'react';
import './Auth.scss';

function AuthUI() {
  const [container, setContainer] = useState();

  // signIn
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // signUp
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  const [area, setArea] = useState();
  const [role, setRole] = useState();
  const [NGO, setNGO] = useState();

  useEffect(() => {
    setContainer(document.getElementById('container'));
  });

  const onSignUp = (e) => {
    e.preventDefault();
    console.log(name, newEmail, newPassword, address, number, area);
  };

  const onSignIn = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => onSignUp(e)}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="none" selected disabled hidden>
                Select Role
              </option>
              <option value="NGO Worker">NGO Worker</option>
              <option value="User">Volunteer</option>
            </select>
            {role == 'NGO Worker' ? (
              <input
                type="text"
                placeholder="NGO name"
                value={NGO}
                onChange={(e) => setNGO(e.target.value)}
              />
            ) : null}
            <button value="save" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => onSignIn(e)}>
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => {
                  container.classList.remove('right-panel-active');
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => {
                  container.classList.add('right-panel-active');
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthUI;
