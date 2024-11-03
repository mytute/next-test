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
