# 37 Handlling PATCH Request   

patch reqeust applies partial midifications to a resource.   

1. show how to update comment that send comment id by frontend.   
>src/app/comments/[id]/route.ts  
```tsx 
import { comments } from "../data";

export async function PATCH(request:Request, {params}:{params:{id:string}}) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(comment=> comment.id === parseInt(params.id))
  comments[index] = text; 
  return Response.json(comments[index]);
}
``` 

2. test above code user "localhost:3000/comments/3". this will return updated comment with it's id. not to add body to the patch request.   
