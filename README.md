# 35 Handling POST Request    

1. show how to create post request  
>src/app/comments/data.ts  
```tsx 
// data.ts is not naming convention of nextjs   
export const comments = [
  {
    id:1,
    text: "This is the first comment"
  },
  {
    id:2,
    text: "This is the second comment"
  },
  {
    id:3,
    text: "This is the third comment"
  }
];
```

>src/app/comments/route.ts  
```tsx 
import { comments } from "./data";

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id:comments.length+1,
    text:comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status:201
  })  
}
```








