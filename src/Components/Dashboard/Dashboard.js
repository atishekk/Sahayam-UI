import React, { useState } from 'react';
import './dashboard.scss';
import Post from '../Posts/Post';
import '../../Utils/buttons.scss';
import { Link } from 'react-router-dom';

import { Popover } from 'react-tiny-popover';
import Profile from '../Profile/Profile';
import Layout from '../Layout/Layout';

function Dashboard() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(true);
  // query all posts and set data in posts
  // const [posts, setPosts] = useState([])

  const posts = [
    {
      title: 'Title-1',
      description: 'desc',
      context: {}
    },
    {
      title: 'Title-2',
      description: 'desc-2',
      context: {}
    },
    {
      title: 'Title-3',
      description: 'desc-3',
      context: {}
    },
    {
      title: 'Title-4',
      description: 'desc-4',
      context: {}
    }
  ];

  return (
    <Layout>
      <div className="main-dash">
        <div className="col1">
          <div className="filter">
            <label className="label-container">
              One
              <input type="checkbox" checked="checked" />
              <span className="checkmark"></span>
            </label>

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
          {posts.map((post) => (
            <Post title={post.title} description={post.description} context={post.context} />
          ))}
        </div>
        <div className="col3">
          <Link to="/addTask">
            <button className="fill">Add A Task</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
