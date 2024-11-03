# 30 Conditional Routes  

Parallel routes allows us to conditionally render pages based on certain conditions keeping our code well separated under sama url.  

1. in the "dashboad" folder create folder name "@login" for in the layout if user login flag is equal to "false" then show login page.   
>src/app/dashboard/@login/page.tsx   
```tsx 
import React from "react";

const Login:React.FC = () => {
  return <h1>Login Page</h1>
}

export default Login;
```

>src/app/dashboard/layout.tsx   
```tsx 
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  notification: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode; // add
}
const DashboardLayout:React.FC<DashboardLayoutProps> = ({
  children,
  notification,
  users,
  revenue,
  login // add
}) => {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? (
        <>
        <div>{children}</div>
        <div>{notification}</div>
        <div>{revenue}</div>
        <div>{users}</div>
        </>
      ) 
       : (login)
      } 
    </>
  )
}

export default DashboardLayout;
```

2. to avoid "404" error from the "login" route add "default.tsx" file as we discussed in the previous tute for "Sub Navifation".    
