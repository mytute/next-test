# 24 Error Handling  

Now we are going to learn another specail file call "error.tsx" in nextjs folder structure.   

1. for "blog" add function for return random value of 1 and 0 and if it is equal to 1 then throw a error and keep refresh "localhost:3000/blog" route until it get error page.      

>src/app/blog/page.tsx   
```tsx 
import React from 'react';

function getRandomInt(count:number) {
  console.log(Math.random());
  return Math.floor(Math.random()*count);
}

const BlogPage: React.FC = () => {
  const random = getRandomInt(2);
  if(random ===1){
    throw new Error("Error loading reviews!");
  }
  return (
    <>
      <h1>Blog Page</h1> 
    </>
  )
}

export default BlogPage;
``` 

2. to above error of the main page make error handling using "error.tsx" file. Create "error.tsx" file inside "blog" folder.   
>src/app/blog/error.tsx  
```tsx 
"use client"
import React from "react";

interface ErrorBoundaryProps {
  error:{
    message:string;
  };
}
const ErrorBoundary:React.FC<ErrorBoundaryProps> = ({error}) =>{
  return <div>{error.message}</div>
}

export default ErrorBoundary;
``` 

### error.tsx   
* Automatically wrap a route segment and its nested children in a React Error Boundary.   
* Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity.   
* Isolate errors to affected segments while keeping the rest of the appliccation functional.   
* Add functionality to attempt to recover from an error without a full page reload.  

