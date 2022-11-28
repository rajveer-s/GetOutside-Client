import React from 'react';
import './singlePost.css';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries';

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="wrapper">
        <div className="blog_post">
          <div className="img_pod">
            <img className='imagetag' src="https://bootcampspot.com/broker/studentAvatar?accountId=102745" alt="very nice icon" />
          </div>
          <div className="container_copy">
            <h3>{post.createdAt}</h3>
            <h1>{post.postOwner}</h1>
            <p>{post.postText}.</p>
          </div>
          <a className="btn_primary" href='/'>Go Back</a>
        </div>
      </div>
      <div className="m-3 p-4">
        <CommentForm postId={post._id} />
      </div>
      <div className="my-5">
        <CommentList comments={post.comments} />
      </div>


    </>
  );
};

export default SinglePost;
