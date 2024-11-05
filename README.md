# 41 Headers in Route Handlers  

### Headers in Route Handlers   

HTTP headers respresent the metadata associated with an API request and response.    

### Request Headers   
These are sent by the client, such as a web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly.   

"User-Agent" which identifies the browser and operating system to the server.  
"Accept" which indicates the content types like text, video, or image formats that the client can process.  
"Authorization" header used by the client to authenticate it self to the server.   

### Response Headers   
These are sent back from the server to the client. They provide information about the server and the data being sent in the response.   
"Content-Type" header which indicates the media type of the response. It tells the client waht the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc.  


1. in the "profile/api/route.ts" file show how to read "Authorization" request header when you add that header key to postman.   
>src/app/profile/api/route.ts  
```tsx 
import { NextRequest } from "next/server"; // add

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers); // add
  console.log(requestHeaders.get("Authorization")); // add
  return new Response("Profile API data");
}
```

> Headers   
```bash 
Authorization : Bearer 1234
Accept : /*/ 
User-Agent : linux windows computer
```

2. do the same above header reading with "next/headers" module.   
```tsx 
import { NextRequest } from "next/server";
import { headers } from "next/headers"; // add

export async function GET(request: NextRequest) {
  //const requestHeaders = new Headers(request.headers);
  const headerList = headers(); // add
  //console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization")); // add
  return new Response("Profile API data");
}
```

Returned headers are readonly. To set headers you need to return a new response with the new headers.  

3. convert above route handler request type in to html.   
```tsx 
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const headerList = headers();
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    }
  })
}
```


