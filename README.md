# 44 Middleware  

Middleware in Next.js is a powerful feature that offers a robust way to intercept and control the flow of request and responses within your applications.  

It does this is a global level significantly enhancing features like redirection, URL rewrites, authentication, headers and cookies management and more.  

Middleware allows us to specify paths where it will be active  
 * Custom matcher config.    
 * Conditional statements.   


### Custom matcher config.      

1. create "middleware.ts" file in the root directory and show "matcher" approch with when user route to "/profile" the redurect to the "/" home page.    
>src/middleware.ts  
```ts 
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/profile",
}
```


### Conditional statements.   

2. do same "/profile" to "/" home page redirecting using Conditional statements.   

>src/middleware.ts  
```ts 
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
```

3. using conditional statement show me how to rewrite "/profile" route to "/" home page. And show even we load "/profile" page but showing home page.  
>src/middleware.ts  
```ts 
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}
```

Let's see how to deal with cookies and headers using middlewares.  

4. modify above middleware to handle user preferences for themes and add custom header for all responses.  
>src/middleware.ts  
```ts 
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    if(!themePreference) {
      response.cookies.set("theme", "dark");
    }

    return response;
}
```

check before load the route on browser cookies and after load edit the cookies value to "light" and reload and show it not changing.  

5. show me how to add custom route to above code inside middleware.  
>src/middleware.ts  
```ts 
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    if(!themePreference) {
      response.cookies.set("theme", "dark");
    }
    response.headers.set("custom-header", "custom-value");
    return response;
}
```
