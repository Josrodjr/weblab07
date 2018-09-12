import React from 'react';

import PostForm from '../postForm';
import AllPosts from '../postedPosts';

import '../../style.css';

const Posts = () => (
  <div className="post_unified">
    <PostForm />
    <AllPosts />
  </div>
);

export default Posts;
