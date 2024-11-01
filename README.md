# 25 Recovering from Errors  

Some errors may not be serious and could be fixed by simply tring again. Let's see how to recover such errors.   

In previous example in the "error.tsx" file props comes with "reset" function.  

1. in the blog "error.tsx" file call the "reset" function provided using props.  
>src/app/blog/error.tsx    
```tsx 
"use client"; // add
import React from "react";

interface ErrorBoundaryProps {
  error: Error;
  reset: ()=>void;
}
const ErrorBoundary:React.FC<ErrorBoundaryProps> = ({error, reset}) => {
  return (
    <>
     <div>{error.message}</div>
     <button onClick={()=> reset()}>reset</button> // add
    </>
  )
}

export default ErrorBoundary;
```
!important : this is not work from me. 
