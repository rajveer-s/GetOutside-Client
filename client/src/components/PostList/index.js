import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const postList = ({
  posts,
  title,
  showTitle = true
}) => {
  if (!posts.length) {
    return <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5em'}}>No posts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3 className='blogTitle'>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <><ul className="cards">
            <li>
              <Link
                className="card"
                to={`/posts/${post._id}`}
              >
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFja2dyb3VuZHx8fHx8fDE2NTE3MDc2MjU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" className="card__image" alt="nature background" />
                <div className="card__overlay">
                  <div className="card__header">
                    <img className="card__thumb" src="http://www.jeremymcquown.com/wp-content/uploads/2012/05/Go-Outside-Mark-02.png" alt="website logo" />
                    <div className="card__header-text">
                      <h3 className="card__title">{post.postOwner}</h3>
                      <span className="card__status">{post.createdAt}</span>
                    </div>
                  </div>
                  <p className="card__description">{post.postText}</p>
                </div>
              </Link>
            </li>
          </ul>
          </>
        ))}
    </div>
  );
};

export default postList;



