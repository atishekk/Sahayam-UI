import React, { useEffect, useState } from 'react';
import { gql, useMutation  } from '@apollo/client';
import './Auth.scss';

function AuthUI(props) {
  const SIGNUP_USER = gql`
    mutation(
      $username: String!
      $email: String!
      $password: String!
      $confirm_password: String!
    ) {
      signUp(
        username: $username
        email: $email
        password: $password
        confirm_password: $confirm_password
      )
    }
  `;

  const SIGNIN_USER = gql`
  mutation($username: String, $email: String, $password: String!) {
    signIn(username: $username, email: $email, password: $password)
  }`;

  const SIGNUP_WORKER = ``;

  const SIGNIN_WORKER = ``;

  const [container, setContainer] = useState();
  const [partOne, setPartOne] = useState();
  const [partTwo, setPartTwo] = useState();
  const [dateState, setDateState] = useState('text');

  //reusing the password, email and user name state for sign up and sign in
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');
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
    document.title = "Sahayam - Authentication";
  });

  const onSignUp = (e) => {
    e.preventDefault();
    console.log(name, email, password, city, mobile, country, Date(DOB));
    let queryString = (role === 'Worker') ? SIGNUP_WORKER : SIGNUP_USER;

    //loading and error
    //yaha hook ko call nhi kar sakte
    ////Separate query strings ke bare mein dekhna padega
    //const [signUp, {loading, error}] = useMutation(queryString, {
    //  onCompleted: data => {
    //    localStorage.setItem('token', data.signUp);
    //    props.history.push("/");
    //  }
    //})
  };

  const onSignIn = (e) => {
    e.preventDefault();
    console.log(email, username, password);
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

  const [signUp, {loading, error}] = useMutation(SIGNUP_USER, 
    {
      onCompleted: data => {
        localStorage.setItem('token', data.signUp);
        props.history.push("/");
      }
    }
  );

  const [signIn, {_loading, _error}] = useMutation(SIGNIN_USER,
    {
      onCompleted: data => {
        localStorage.setItem('token', data.signUp);
        props.history.push("/");
      }
    }
  );

  return (
    <div>
      <div className="container">
        <div className="form-container sign-up-container">
          <form onSubmit={e => {
            e.preventDefault();
            signUp({variables: {
              username: username,
              email: email,
              password: password,
              confirm_password: confirmPassword
            }});
          }}>
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
                type="email"
                placeholder="Email Address"
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
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <a
                href="#"
                value="next"
                onClick={() => {
                  setProgress(true);
                  gotoSecondPart();
                }}
              >
                Next
              </a>
            </div>
            <div id="part_two" className="inactive-form-part">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              <a
                style={{display: 'block'}}
                href="#"
                value="back"
                className="back-button"
                onClick={() => {
                  setProgress(false);
                  gotoFirstPart();
                }}
              >
                Go Back
              </a>
              <button value="save" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => {
            e.preventDefault();
            const vars = (email === "") ? 
              {username: username, password: password} : 
              {email: email, password: password};
            signIn({
              variables: vars
            });
            }}>
            <h1>Sign in</h1>
            <input
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            {"Or"}
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
