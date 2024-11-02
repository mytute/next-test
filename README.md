# 26 Handing Errors in Nested Routes  

Errors bubble up to the closest parent error boundary.  

An error.tsx file file will cater to errors for all its nested child segments.  

By positioning error.tsx files at the different levels in the nested forlders of a route, you can achieve a more granular level of error handling.   

1. understand following code.  
>src/app/blog/layout.tsx  
```tsx 
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
``` 

>src/app/blog/[blogId]/error.tsx    
```tsx
"use client";
import React from "react";

interface ErrorBoundaryProps {
  error: Error;
  reset: ()=>void;
}
const ErrorBoundary:React.FC<ErrorBoundaryProps> = ({error, reset}) => {
  return (
    <>
     <div>{error.message}</div>
     <button onClick={()=> reset()}>reset</button>
    </>
  )
}

export default ErrorBoundary;
```

>src/app/blog/[blogId]/page.tsx  
```tsx 
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
```

2. change the 'src/app/blog/[blogId]/error.ts' file location to 'src/app/error.ts' and show following part got missed because when error occured "error.tsx" file replace for the it's current location file such as "layout.tsx" and "page.tsx" files or it's wrapped folder(child).  
following part will remove form the ui   
```tsx 
<div>Blog header</div>
```
