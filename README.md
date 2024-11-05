# 36 Dynamic Route Handlers   


next we need understand how to handle "patch" and "delete" requests. This is different than GET and POST because we need to comment whether updating or deleting in the comment. Because we need to pass some dynamic value like "id" that which one delete or update. 

let's see how to handle dynamic route handler first.   

1. create "src/app/comments/[id]/route.ts" to show how to received only one value passing it's "id" number.     
>src/app/comments/[id]/route.ts   
```tsx 
import { comments } from "../data";

export async function GET(_request:Request, {params}:{params:{id:string}}) {
  const comment = comments.find(comment=> comment.id === parseInt(params.id));
  return Response.json(comment);
}
```
note: here in the code we put "_" before "request" for identify it not use.  





