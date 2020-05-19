import React, { Children } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { title: 'uno' },
    { title: 'dos' },
    { title: 'tres' }
  ]

  return (
    <BlogContext.Provider value={blogPosts}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;