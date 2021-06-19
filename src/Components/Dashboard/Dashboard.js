import React from 'react';
import './dashboard.scss';
import Post from '../Posts/Post';
import '../../Utils/buttons.scss';

function Dashboard() {
  return (
    <div className="main-dash">
      <div className="col1">
        <div className="filter">
          <label class="label-container">
            One
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>

          <label class="label-container">
            Two
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>

          <label class="label-container">
            Three
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>

          <label class="label-container">
            Four
            <input type="checkbox" />
            <span class="checkmark"></span>
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
        <button className="fill">Add A Task</button>
      </div>
    </div>
  );
}

export default Dashboard;
