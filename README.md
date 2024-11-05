# 40 Redirects in Route Handlers  

In following dynamic route handler file we wrote code for recevied comment object by it's "id". But here if we asked comment that comment 'id' is not existed then it will show error. To resolve this issue we need to use redirect.     
>src/app/comments/[id]/route.ts   
```tsx 
import { comments } from "../data";

export async function GET(_request:Request, {params}:{params:{id:string}}) {
  const comment = comments.find(comment=> comment.id === parseInt(params.id));
  return Response.json(comment);
}
```

1. improve above route handler by redirection to the comments listing page if the request "id" not found. (This is just for demonstration purposes, assuming that ids increment sequentially.) 
```tsx 
import { comments } from "../data";
import { redirect } from "next/navigation"; // add

export async function GET(_request:Request, {params}:{params:{id:string}}) {
  if(parseInt(params.id)>comments.length){ // add 
    redirect('/comments');
  }
  const comment = comments.find(comment=> comment.id === parseInt(params.id));
  return Response.json(comment);
}
``` 

2. to check just put following link on browser.   
```bash 
http://localhost:3000/comments/3
http://localhost:3000/comments/4  # redirect to /comments route.  
```
