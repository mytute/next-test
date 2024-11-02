import React from "react";

interface BlogLayoutProps {
  children:React.ReactNode;
}
const BlogLayout:React.FC<BlogLayoutProps> = ({children}) => {
  return (
    <>
      <div>Blog header</div>
      {children}
    </>
  ) 
}

export default BlogLayout;
