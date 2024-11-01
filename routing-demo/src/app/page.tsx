import Link from "next/link";

export default function Home () {
  return (
    <>
      <h1>Home page</h1>
      <h2><Link href={'/blog'}>Blogs</Link></h2>
    </>
  )
}
