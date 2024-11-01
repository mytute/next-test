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
