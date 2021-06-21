import React, { useEffect, useState } from 'react';
import './profile.scss';
import { useHistory } from 'react-router-dom';

function Profile({ setIsPopoverOpen }) {
  const [form, setForm] = useState(false);
  // doesnt work for components
  // let history = useHistory();
  // inititalize with original user details
  const [email, setEmail] = useState('ujjwalkadam68@gmail.com');

  useEffect(() => {
    setIsPopoverOpen(true);
  }, [form]);

  function handleSave(e) {
    e.preventDefault();
    setForm(!form);

    //save user data
    console.log(email);
  }

  // function for editing profile
  function handleSubmit(e) {
    e.preventDefault();
    setForm(!form);
  }

  function onSignOut() {
    // sign out user
    localStorage.removeItem("token");
    window.location = "/auth";
  }
  return (
    <main>
      <div id="container-pop">
        {!form ? (
          <form action="">
            <img src="https://bit.ly/2tlJLoz" />
            <br />
            <h1 className="username">John Doe</h1>
            <h1>{email}</h1>
            <h1>johnpasswordrandom</h1>
            <h1>998812367</h1>
            <h1>New Delhi</h1>
            <button onClick={(e) => handleSubmit(e)} className="edit-btn">
              Edit Profile
            </button>
          </form>
        ) : (
          <form action="">
            <img src="https://bit.ly/2tlJLoz" />
            <br />
            <div className-="change-div">
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="number" />
              <input type="text" placeholder="Area" />
            </div>
            <button onClick={(e) => handleSave(e)} className="save-btn">
              Save Profile
            </button>
          </form>
        )}
        <button className="signout-btn" onClick={() => onSignOut()}>
          Sign Out
        </button>
      </div>
    </main>
  );
}

export default Profile;
