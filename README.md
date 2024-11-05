# 39 URL Query Parameters   

If we want to filter comments array based on a specific query. For example we need to query that return item that "text" string includes "first" word.   
```bash 
localhost:3000/comments?query=first
```

since we can grap query parameter from the request using nextjs function we no need to put filter "GET" function inside "[id]" folder. just we can add it to "src/app/comments/route.ts"  

1. update following "GET" route handle function for filter query.    
>src/app/comments/route.ts  
```tsx 
import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}
```
```tsx 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterComments = query && comments.filter(comment=> comment.text.includes(query));
  return Response.json(filterComments);
}
```
2. to test above filter   
```bash 
localhost:3000/comments?query=ir
```

