# 38 Handling DELETE Request   
patch reqeust applies partial midifications to a resource.   

1. show how to delete comment that send comment id by frontend.   
>src/app/comments/[id]/route.ts  
```tsx 
import { comments } from "../data";

export async function DELETE(_request:Request, {params}:{params:{id:string}}) {
  const index = comments.findIndex(comment=> comment.id === parseInt(params.id))
  const deletedComment = comments[index];
  comments.splice(index,1);
  return Response.json(deletedComment);
}
``` 

2. test above code user "localhost:3000/comments/3". this will return deleted comment with it's id. Here we no need to add request body to postman.    
