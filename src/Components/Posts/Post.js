import React from 'react';
import './Post.scss';
import '../../Utils/buttons.scss';
function Post() {
  return (
    <div>
      <div className="main">
        <div className="card">
          <div className="post">
            <img
              className="post-image"
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />

            <div className="post-content">
              <p className="post-header">
                <a href="#">Title</a>{' '}
              </p>
              <p className="post-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores
                quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat
                doloremque commodi facere dolor. Velit pariatur, enim veniam! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque
                commodi facere dolor. Velit pariatur, enim veniam!
              </p>
              <div className="author">
                <img
                  src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80"
                  alt=""
                  className="author-image"
                />
                <div className="author-content">
                  <p className="author-name">Özgür Kurucan</p>
                  <p className="date">Jun 20, 2020</p>
                </div>
              </div>
              <div className="apply-btn">
                <button className="slide">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
