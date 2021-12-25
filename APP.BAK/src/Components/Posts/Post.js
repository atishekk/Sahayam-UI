import React, { useEffect, useState } from 'react';
import './Post.scss';
import icon from './placeholder.png';
import ngoicon from './ngo (1).png';
import { useMutation, gql, useQuery } from '@apollo/client';
import Loading from '../Extras/Loading';

const CHECK_VOLUNTEER = gql`
  mutation checkVolunteer($id: ID!) {
    volunteer(id: $id)
  }
`;

const USER = gql`
  query getUser {
    me {
      tasks {
        id
      }
    }
  }
`;

function Post({ tasks, context, isNGO }) {
  const details = context;
  const [vol, setVol] = useState();

  const [check] = useMutation(CHECK_VOLUNTEER, {
    onCompleted: (data) => {
      console.log(context.id);
      setVol(data.volunteer);
    },
    onError: (error) => console.log(error.message)
  });

  useEffect(() => {
    tasks.map((task) => {
      if (task.id === context.id) setVol(true);
    });
  }, []);

  function handleApply(e) {
    e.preventDefault();
    check({ variables: { id: context.id } });
  }

  return (
    <div>
      <div className="main">
        <div className="card">
          <div className="post">
            <div className="card-media">
              <img
                className="post-image"
                src={`https://source.unsplash.com/collection/1319040/?sig=${context.index}`}
              />
            </div>

            <div className="post-content">
              <p className="post-header">
                <h1>{details.title}</h1>
              </p>
              <p className="post-text">
                {details.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores
                quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat
                doloremque commodi facere dolor. Velit pariatur, enim veniam! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque
                commodi facere dolor. Velit pariatur, enim veniam!
              </p>
              <p style={{ marginTop: '10px' }}>Criteria : {details.criteria}</p>
              <p style={{ marginTop: '10px' }}>Volunteers required : {details.volRequired}</p>
              <div className="bottom-div">
                <div className="author">
                  <div className="author-content">
                    <p className="author-name">{details.publisher}</p>
                    <p className="box">
                      <img src={ngoicon} alt="ngo-icon" />
                      <p style={{ marginTop: '10px' }}>{details.ngo.name}</p>
                    </p>
                    <p className="box">
                      <img src={icon} alt="location-icon" />
                      <p style={{ marginTop: '10px' }}>{details.location}</p>
                    </p>
                  </div>
                </div>
                <div className="apply-btn">
                  {!isNGO && (
                    <button className="slide" onClick={(e) => handleApply(e)}>
                      {!vol ? 'Volunteer' : 'Unvolunteer'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
