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
