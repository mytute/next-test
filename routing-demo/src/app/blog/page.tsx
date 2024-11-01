import React from 'react';

function getRandomInt(count:number) {
  console.error(Math.random());
  return Math.floor(Math.random()*count);
}

const BlogPage: React.FC = () => {
  const random = getRandomInt(2);
  console.error(">>>>>", random);
  if(random ===1){
    throw new Error("Error loading reviews!"+random);
  }
  return (
    <>
      <h1>Blog Page {random}</h1> 
    </>
  )
}

export default BlogPage;
