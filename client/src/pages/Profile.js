import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AddPost from '../components/Addpost';
import PostList from '../components/PostList';
import Loading from '../components/loadingIcon'

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <Loading />;
  }

  if (!user?.username) {
    return (
      <h4 style={{ margin: 100, fontSize: '2rem' }}>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>

      <div >
        <AddPost />
        <div>
          <PostList
            posts={user.posts}
            title={`${user.username}'s posts`}
            showTitle={true}
            showUsername={true}
          />
        </div>

        {!userParam && (
          <div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
