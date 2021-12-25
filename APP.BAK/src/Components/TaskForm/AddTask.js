import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { gql, useMutation } from '@apollo/client';
import { parse } from 'graphql';

const POST_TASK = gql`
  mutation postTask($task: InputTask!) {
    post(task: $task) {
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

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [volRequired, setVolRequired] = useState(1);
  const [criteria, setCriteria] = useState('');
  const [tags, setTags] = useState([]);

  const [post, { loading, error }] = useMutation(POST_TASK, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message);
    }
  });

  function onTaskSubmit(e) {
    e.preventDefault();
    console.log(volRequired);
    setVolRequired(parseInt(volRequired));
    console.log(volRequired);
    const task = { title, description, location, volRequired, criteria, tags };
    Object.keys(task).map((key, index) => {
      if (task[key] == '') {
        console.log(`${key} field can't be empty`);
        // will use notification
        return;
      }
    });
    post({ variables: { task } });
    // console.log(task);
  }

  return (
    <div className="add-task">
      <div className="white-page">
        <Link to="/dashboard">
          <button className="back">Back to Dashboard</button>
        </Link>
        <div className="task-form">
          <h1>Add Post</h1>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Volunteers Required"
            value={volRequired}
            onChange={(e) => setVolRequired(e.target.value)}
          />
          <input
            type="text"
            placeholder="Criteria"
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button onClick={(e) => onTaskSubmit(e)}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
