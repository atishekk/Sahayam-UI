import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './auth.scss';
import image from './auth.svg';

import { gql, useMutation } from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($user: UserInput!) {
    signUp(user: $user)
  }
`;

function Auth() {
  const [show, setShow] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const history = useHistory();

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      localStorage.setItem('AUTH_TOKEN', data.signUp);
      history.push('/dashboard');
    },
    onError: (error) => {
      console.log(error.message);
    }
  });

  function onSubmit(e) {
    e.preventDefault();
    const user = { email, password, name, contact, location };
    Object.keys(user).map((key, index) => {
      if (user[key] == '') {
        console.log("Field can't be empty");
        return;
      }
    });

    signup({ variables: { user } })
      .then((result) => console.log('User Registered'))
      .catch((error) => console.log(error.message));
  }

  return (
    <>
      <div className="auth-container">
        <div className="auth-left">
          <h1 className="website-head">Sahayam</h1>
          <div className="img-holder">
            <img src={image} alt="auth-svg" />
          </div>
        </div>
        <div className="auth-right">
          <div className="form-content">
            <div className="form-heading">
              <h1>Register yourself as a Volunteer</h1>
              <h1></h1>
            </div>
            <div className="line">
              <p>User Auth</p>
            </div>

            <div className="form-inputs">
              <>
                <input
                  type="text"
                  placeholder="E-mail Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </>
            </div>

            <div className="submit-btn">
              <button onClick={(e) => onSubmit(e)}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
