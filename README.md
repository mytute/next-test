# 42 Cookies in Route Handlers  

Cookies are small pieces of data that a server sends to a user's web browser.  

The browser may store the cookies and send it back to the same server with later requests.  

Cookies are mainly used for three purposes.  
* Sessin management like login and shopping carts.  
* Personalization like user preferences and themes.  
* Tracking like recording and analyzing user behavior.  

1. show how to set/get cookies to the "profile" route handler.   
>src/app/profile/api/route.ts   
```tsx 
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const headerList = headers();
  const theme = request.cookies.get("theme"); // add read cookie 
  console.log(theme);
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark" // add set cookie
    }
  })

}
``` 
you can test set cookie from "postman" in "Cookies" tab and set cookie using above code console log.   this in  

2. show set and get cookies using the cookies function provided by nextjs   

```tsx 
import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers"; // update here

export async function GET(request: NextRequest) {
  const headerList = headers();

  cookies().set("resultPerPage", "20"); // add
  console.log(cookies().get("resultPerPage")); // add

  const theme = request.cookies.get("theme");
  console.log(theme);
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  })

}
```

