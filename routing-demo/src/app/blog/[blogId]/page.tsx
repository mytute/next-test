import React from 'react';

function getRandomInt(count:number) {
  console.error(Math.random());
  return Math.floor(Math.random()*count);
}

interface BlogPageProps {
  params:{
    blogId: string;
  }
}

const BlogPage: React.FC<BlogPageProps> = ({params}) => {
  const random = getRandomInt(2);
  console.error(">>>>>", random);
  if(random ===1){
    throw new Error("Error loading reviews!"+random);
  }
  return (
    <>
      <h1>Blog Page {params.blogId}</h1> 
    </>
  )
}

export default BlogPage;
