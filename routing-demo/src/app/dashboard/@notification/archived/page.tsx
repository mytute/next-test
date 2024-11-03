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
