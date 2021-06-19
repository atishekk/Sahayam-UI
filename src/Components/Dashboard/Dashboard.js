import React from 'react';
import './dashboard.scss';
import Post from '../Posts/Post';
import '../../Utils/buttons.scss';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="col3">
        <Link to="/addTask">
          <button className="fill">Add A Task</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
