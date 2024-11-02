# 28 Parallel Routes.  

1. show me how normal way to create "dashboard".   
1.1 create folder call "dashboard" and inside it create a "layout.tsx" file.  
```tsx 
import React from 'react'; 
imoprt Notifiaction from './components/notifications';
imoprt Revenue from './components/revenue';
imoprt User from './components/users';

interface DashBoardLayoutProps {
    children:React.ReactNode;
}

const DashBoardLayout:React.FC<DashBoardLayoutProps> = ({children}) =>{
    return (
      <>
        {children}
        <Notification/>
        <Revenue />
        <User/>
      </>
    )
}
```

In above way we have to create component folder and import it's component in to "layout.tsx" folder. Instead of can we automatiaclly pass components in to "layout.tsx" folder.? yes we can do it with Parallel routes in Nest.js.   
 
Parallel routes in Next.js are defined using a feature known as slots.   
Slots help structure our content in a modular fashion.  
To define a slot, we use the '@folder' naming convention.   
Each slot is then passed as a prop to its corresponding 'layout' file.   

### folder structure.   
>app 
  >dashboard 
   >@notifications 
     >page.tsx  
   >@revenue  
     >page.tsx  
   >@users   
     >page.tsx  
 

2. in the "dashboard" folder create "@notifications" folder and inside it create "page.tsx".   
>src/app/dashboard/@notifications/page.tsx   
```tsx 
import React from "react";

const Notification:React.FC = () => {
  return <h1>Notification Page</h1>
}

export default Notification;
``` 

2. do the same for "revenue" and "users".   
>src/app/dashboard/@revenue/page.tsx   
```tsx 
import React from "react";

const Revenue:React.FC = () => {
  return <h1>Revenue Page</h1>
}

export default Revenue;
``` 

>src/app/dashboard/@users/page.tsx   
```tsx 
import React from "react";

const User:React.FC = () => {
  return <h1>User Page</h1>
}

export default User;
``` 

Each slot is automatically pass to the "layout.tsx" file component as a prop which we can then use to structure the dashboard page.   

3. in the dashboard "layout.tsx" file import above component as props.    
>src/app/dashboard/layout.tsx  
```tsx 
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  notification: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}
const DashboardLayout:React.FC<DashboardLayoutProps> = ({
  children,
  notification,
  users,
  revenue
}) => {
  return (
    <>
      <div>{children}</div>
      <div>{notification}</div>
      <div>{revenue}</div>
      <div>{users}</div>
    </>
  )
}

export default DashboardLayout;
```
4. show when we use "@folder" naming convention we no longer to access following route as before.   
```bash 
localhost:3000/dashboard/@users
localhost:3000/dashboard/@notifications
localhost:3000/dashboard/@revenue
```

### Parallel Routes Benifits   

* A clear benifit of parallel route is their ability to split a single layout into various slots, making the code more manageable.  
* Independent route handling.  
* Sub-navigation. 

explanation : https://youtu.be/8I5-OTNOni0?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI

