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
