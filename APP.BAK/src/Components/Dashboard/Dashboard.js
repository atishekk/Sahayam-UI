import React, { useEffect, useState } from 'react';
import './dashboard.scss';
import Post from '../Posts/Post';
import { Link, useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import Layout from '../Layout/Layout';

import { gql, useQuery } from '@apollo/client';
import Loading from '../Extras/Loading';

const GET_POSTS = gql`
  query Feed($tags: [String]) {
    feed(tags: $tags) {
      id
      title
      description
      location
      volRequired
      criteria
      tags
      ngo {
        name
        email
        location
        contact
        fields
      }
    }
  }
`;

const GET_NGOS = gql`
  query getngo {
    getNGOs {
      name
    }
  }
`;
const GET_USER = gql`
  query getUser {
    me {
      tasks {
        id
      }
    }
  }
`;

function Dashboard() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(true);
  const history = useHistory();

  const res1 = useQuery(GET_POSTS, { variables: { tags: [] } });
  const res2 = useQuery(GET_NGOS);
  const res3 = useQuery(GET_USER);

  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('AUTH_TOKEN');
    const check = jwt.decode(token);
    setShow(check.ngo);

    window.addEventListener('popstate', () => {
      history.go(1);
    });
  }, []);

  if (res1.loading || res2.loading || res3.loading) return <Loading />;
  if (res1.error) return `Error! ${res1.error.message}`;

  return (
    <Layout>
      <div className="main-dash">
        <div className="col1">
          <div className="filter">
            <label className="label-container">
              Two
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="label-container">
              Three
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="label-container">
              Four
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="col2">
          {res1.data.feed.map((post, index) => (
            <Post
              context={{ ...post, index }}
              isNGO={show}
              tasks={show ? [] : res3.data.me.tasks}
            />
          ))}
        </div>
        <div className="col3">
          <div className="filter">
            <div className="col-white">
              {show && (
                <Link to="/addTask">
                  <button>Add Task</button>
                </Link>
              )}

              <div className="NGOlist">
                <p>NGOs registered with us :</p>
                <div className="ngos">
                  <ul>{!res1.loading && res2.data.getNGOs.map((ngo) => <li>{ngo.name}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
