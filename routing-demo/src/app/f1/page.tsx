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
