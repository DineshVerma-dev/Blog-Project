import React from 'react';
import { useLocation } from 'react-router-dom';

function BlogDetail() {
  const { state: blog } = useLocation();

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose lg:prose-xl" />
    </div>
  );
}

export default BlogDetail;
