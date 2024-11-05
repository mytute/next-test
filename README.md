# 34 Handling GET Request  

1. create files name "src/app/comments/data.ts" and "src/app/comments/route.ts" and in "data.ts" file insert list of data that can return as json in the "route.ts" file.     
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

export async function GET() {
  return Response.json(comments);
}
```

2. check the results on "localhost:3000/comments" route.  







