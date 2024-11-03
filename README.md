# 29 Unmatched Routes   

Sub Navigation is one of the benefit using parallel routes.    

1. add navigation link in "@notification/page.tsx" file to navigate archive notification view.  
>src/app/dashboard/@notification/page.tsx  
```tsx
import Link from "next/link";
import React from "react";

const Notification:React.FC = () => {
  return (
    <>
      <h1>Notification Page</h1>
      <Link href={"dashboard/archived"}>Archived</Link>
    </>
  )}

export default Notification;
```

2. then create normal "archived/page.tsx" file in the "@notification" folder.   
>src/app/dashboard/@notification/archived/page.tsx   
```tsx 
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <>
      <div>Archived Notifications</div>
      <Link href={"/dashboard"}> Default</Link>
    </>
  )
}

export default ArchivedNotifications;
```

here when we click "Archived" link on the "notification" view it will change "default" notification view. when we click on "default" view it will change to "Archived" view. So sub navigation working as expected.      

but if you refresh the browser at url route "localhost:3000/dashboard/archived" it will show "404" error. To prevent that we need to add "default.tsx" files to the "dashboard" and "revenue" and "users" routes(folders).  

The "default.tsx" file in Next.js serves as a fallback to render content when the framwork cannot retrieve a slot's active state from the current URL.   

You have complate freedom to define the UI for unmatched routes: you can either mirror the content found in page.tsx or craft an entirely custom view.   

3. create "default.tsx" in "revenue" and "users" folder.   
>src/app/dashboard/@revenue/default.tsx  
```tsx 
import React from "react";

const DefaultRevenue:React.FC = () => {
  return <h1>Default Revenue Page</h1>
}

export default DefaultRevenue;
```
>src/app/dashboard/@users/default.tsx  
```tsx 
import React from "react";

const DefaultUser:React.FC = () => {
  return <h1>Default User Page</h1>
}

export default DefaultUser;
```

>src/app/dashboard/default.tsx   
```tsx 
import React from "react";

const DefaultDashBoard:React.FC = () =>{
  return <h1>Dashboard Page</h1>
}

export default DefaultDashBoard;
```
