import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import './Auth.scss';

function AuthUI() {
  //  const SIGNUP_USER = gql``;

  const [container, setContainer] = useState();
  const [partOne, setPartOne] = useState();
  const [partTwo, setPartTwo] = useState();
  const [dateState, setDateState] = useState('text');

  // signIn
  const [identifier, setIdentifier] = useState();
  const [password, setPassword] = useState();

  // signUp
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [DOB, setDOB] = useState();
  const [city, setCity] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('');
  const [role, setRole] = useState('None');
  const [NGO, setNGO] = useState('');
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    setContainer(document.querySelector('.container'));
    setPartOne(document.getElementById('part_one'));
    setPartTwo(document.getElementById('part_two'));
  });

  const onSignUp = (e) => {
    e.preventDefault();
    console.log(name, newEmail, newPassword, city, mobile, country, Date(DOB));
  };

  const onSignIn = (e) => {
    e.preventDefault();
    console.log(identifier, password);
  };

  const gotoFirstPart = () => {
    partTwo.classList.remove('active-form-part');
    partTwo.classList.add('inactive-form-part');
    partOne.classList.add('active-form-part');
    partOne.classList.remove('inactive-form-part');
  };

  const gotoSecondPart = () => {
    partOne.classList.remove('active-form-part');
    partOne.classList.add('inactive-form-part');
    partTwo.classList.add('active-form-part');
    partTwo.classList.remove('inactive-form-part');
  };

  return (
    <div>
      <div className="container">
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => onSignUp(e)}>
            <h1>Create Account</h1>
            <div>
              {' '}
              {!progress ? <h3>Basic Information</h3> : <h3> Additional Information </h3>}{' '}
            </div>
            <div id="part_one" className="active-form-part">
              <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
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
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                value="next"
                onClick={() => {
                  setProgress(true);
                  gotoSecondPart();
                }}
              >
                Next
              </button>
            </div>
            <div id="part_two" className="inactive-form-part">
              <input
                placeholder="Date of Birth"
                type={dateState}
                onFocus={() => setDateState('date')}
                onBlur={() => setDateState('text')}
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                id="date"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="None" disabled hidden>
                  Select Role
                </option>
                <option value="Worker">NGO Worker</option>
                <option value="User">Volunteer</option>
              </select>
              {role == 'Worker' ? (
                <input
                  type="text"
                  placeholder="NGO Name"
                  value={NGO}
                  onChange={(e) => setNGO(e.target.value)}
                />
              ) : null}
              <button
                value="next"
                className="back-button"
                onClick={() => {
                  setProgress(false);
                  gotoFirstPart();
                }}
              >
                Go Back
              </button>
              <button value="save" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => onSignIn(e)}>
            <h1>Sign in</h1>
            <input
              type="text"
              placeholder="Email or Username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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
