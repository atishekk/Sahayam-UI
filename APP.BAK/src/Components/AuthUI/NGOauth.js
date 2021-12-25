import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './auth.scss';
import image from './auth.svg';
import { gql, useMutation } from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation signUp($ngo: InputNGO) {
    registerNGO(ngo: $ngo)
  }
`;

function NGOauth() {
  const history = useHistory();
  const [show, setShow] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [about, setAbout] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [field, setField] = useState([]);

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      console.log(data);
      localStorage.setItem('AUTH_TOKEN', data.registerNGO);
      history.push('/dashboard');
    },
    onError: (error) => {
      console.log(error.message);
    }
  });

  // signup NGO
  function onSubmit(e) {
    e.preventDefault();
    const ngo = { email, password, name, about, contact, location };
    Object.keys(ngo).map((key, index) => {
      if (ngo[key] == '') {
        console.log("Field can't be empty");
        // will use notification
        return;
      }
    });
    signup({ variables: { ngo } });
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
              <h1>Register your NGO</h1>
              <h1></h1>
            </div>
            <div className="line">
              <p>NGO Auth</p>
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
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="About"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
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
                <input
                  type="text"
                  placeholder="Field"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                />
              </>
              <div className="submit-btn" onClick={(e) => onSubmit(e)}>
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NGOauth;
