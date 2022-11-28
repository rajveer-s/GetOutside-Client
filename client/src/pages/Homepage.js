import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import AddPost from '../components/Addpost';

import { QUERY_POSTS } from '../utils/queries';


const Homepage = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="addPost"
        >
          <AddPost />
        </div>
        <div className="postCards">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Blog Posts"
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Homepage;