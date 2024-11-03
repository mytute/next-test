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
