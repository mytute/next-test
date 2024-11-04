# 31 Intercepting Routes   

Intercepting routes allow you to intercept or stop the default routing behaviour to present an alternate view or component when navigation through the UI, while still preserving the intended route for scenarios like page reloads.  

Imagine a social media platform where users see a feed of posts. When they click on a post to view details, instead of navigating to a new page that reloads entirely, an intercepted route could open a modal overlay showing the post details. This way, the user stays on the feed, and only the modal updates. This design is convenient because 

Enhanced User Experience: Users can view post details without losing their place in the feed.  
Preserved Back Navigation: The route reflects the modal view (e.g., /feed/post/[postId]), so if the user refreshes, they still see the post details  

This can be useful if tou want to show a route while keeping the context of the current page.   

exmaple senario:
* user click the "login" button. (localhost:3000)  
* open the login modal. (localhost:3000/login)    
* reload the login madal page and it open login madal automatically again after reload.  (localhost:3000/login)  


1. in the "app" folder create new two route "src/app/f1/page.tsx" and "src/app/f1/f2/page.tsx" and create anchor tag in "f1" route to navigate "f2" route.    
>src/app/f1/page.tsx   
```tsx 
import Link from 'next/link'
import React from 'react'

const F1Page:React.FC = () => {
  return (
    <>
      <div>F1Page</div>
      <Link href={'/f1/f2'}>F2 Page</Link>
    </>
  )
}

export default F1Page;
```

>src/app/f1/f2/page.tsx   
```tsx 
import React from 'react'

const F2Page:React.FC = () => {
  return (
    <div>F2Page</div>
  )
}

export default F2Page
```

2. in the "f1" folder create now route name "src/app/f1/(.)f2/page.tsx" and after navigating "f1" to "f2" show it navigate to "(.)f2" route and after reload page it appearing "f2" route.     
>src/app/f1/(.)f2/page.tsx  
```tsx 
import React from 'react';

const F2InterceptingPage:React.FC = () => {
  return (
    <div>F2 Intercepting Page</div>
  )
}

export default F2InterceptingPage;
```

Intercepting route allow you to load a route from another part of your application with current layout.   
This routeging paradigm can be usefull when you what to display content of the route without the user switching to a different context.  

### Intercepting routes conventions.   
* (.) to match segments on the same level.  
* (..) to match segments one level above.   
* (..)(..) to match segments two levels above.  
* (...) to match segments from the root app directory.  

3. inside "f1" folder create "f3" and "f4" folders with "page.tsx" file.   
>src/app/f1/f3/page.tsx  
```tsx 
import React from 'react'

const F3Page:React.FC = () => {
  return (
    <div>F3Page</div>
  )
}

export default F4Page
```
>src/app/f1/f4/page.tsx  
```tsx 
import React from 'react'

const F4Page:React.FC = () => {
  return (
    <div> 
    <div>F4Page</div>
    <Link href="/f1/f3">F3</Link>
    </div>
  )
}

export default F4Page
```

4. inside "f4" folder create create "(..)f3" folder with "page.tsx". And show when click "F3" url and it navigate to following intercepting route.     
>src/app/f1/f4/(..)f3/page.tsx  
```tsx 
import React from 'react'

const F4Page:React.FC = () => {
  return (
    <div> 
    <div>(..) Intercepting F3Page</div>
    </div>
  )
}

export default F4Page
```

5. show how to intercept route that have root level.    
5.1 first create root level route named "about".   

>src/app/about/page.tsx  
```tsx 
import React from 'react'

const About:React.FC = () => {
  return (
    <>
      <div>About page.</div>
    </>
  )
}

export default About;
```
5.2 the create f4 route to make archor link to the about page.   
>src/app/f1/f4/page.tsx   
```tsx 
import Link from 'next/link';
import React from 'react'

const F4Page:React.FC = () => {
  return (
    <>
      <div>F4 Page.</div>
      <Link href={'/about'}>About</Link>
    </>
  )
}

export default F4Page;
```
5.3 create route with "(...)foldername" for intercept route for abouta page. And show when user click the "f4/page.tsx" "about" link navigate to the "(...)about/page.tsx" page and after normal refresh the browser it load the root "about/page.tsx"    
>src/app/f1/f4/(...)about/page.tsx   
```tsx 
import Link from 'next/link';
import React from 'react'

const F4Page:React.FC = () => {
  return (
    <>
      <div>F4 Page.</div>
      <Link href={'/about'}>About</Link>
    </>
  )
}

export default F4Page;
```
