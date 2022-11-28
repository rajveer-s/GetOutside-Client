import React from 'react';
import '../CommentForm/style.css';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3 style={{ margin: '2rem', color: 'black' }}>No Comments Yet</h3>;
  }

  return (
    <div className='commentListDiv'>
      <h3
        style={{ borderBottom: '1px solid #1a1a1a', color: 'black', fontSize: '1.5rem', marginTop: '3rem', marginLeft: '6rem', marginRight: '10rem' }}
      >
        {comments.length} Comments on this Post
      </h3>
      <div className="commentList">
        {comments &&
          comments.map((comment) => (
            <div className='commentListbox' key={comment._id}>
              <div >
                <h5 style={{
                  fontSize: '15px', paddingBottom: '2rem' }}>
                  { comment.commentOwner } commented{' '}
                  <span style={{ fontSize: '15px' }}>
                  on {comment.createdAt}
                </span>
              </h5>
              <p>{comment.commentText}</p>
            </div>
            </div>
          ))}
    </div>
    </div >
  );
};

export default CommentList;
