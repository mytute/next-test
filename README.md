# 43 Caching in Route Handlers  

Route Handlers are cached by default when using the GET method with the Response object in Next.js   

How to opt out of caching ? because some time we don't need caching.  
 * dynamic mode in Segment Config Option.  

 1. create "src/app/time/route.ts" route handler and return current time using GET methos. And show for in "development" mode it show updated value but in "production" it not updatgin because of caching.   
 >src/app/time/route.ts  
```ts 
export async function GET() {
  return Response.json({
    time:new Date().toLocaleTimeString(),
  })
}
```

for build and run the Nextjs application.  
```bash 
$ npm run build  
$ npm run start
```

2. show how to update time even it on production.  
 >src/app/time/route.ts  
```ts 
export const dynamic = "force-dynamic"; // default = "auto"

export async function GET() {
  return Response.json({
    time:new Date().toLocaleTimeString(),
  })
}
``` 
