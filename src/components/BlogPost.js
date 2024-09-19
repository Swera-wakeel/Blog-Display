import React from 'react';

const BlogPost = ({ title, author, date, content }) => {
  return (
    <div className="blog-post">
      <div className="post-header">
        <h2>{title}</h2>
        <p className="author-date"><strong>By:</strong> {author} | <em>{date}</em></p>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
